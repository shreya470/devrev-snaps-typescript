import fetch from "node-fetch";

import {
    getSlackUserEmailfromID,
    createSlackMessage
} from "./slack-utils"

import {
    fetchDigestDataBlockkit
} from "./block-kit/blocks"

const DISPLAY_LIMIT = 10;
const DEVREV_DOMAIN_NAME = 'https://app.dev.devrev-eng.ai';


export async function DevrevAPIRequest(endpoint: string, options: any, DEVREV_PAT: string, isInternal = false) {
    // Append the endpoint on base API URL
    const url = `https://api.dev.devrev-eng.ai/${isInternal ? 'internal/' : ''}${endpoint}`;
    // Stringify payloads
    if (options.body) options.body = JSON.stringify(options.body);
    // Use node-fetch to make requests
    const res = await fetch(url, {
        headers: {
            Authorization: DEVREV_PAT,
            'Content-Type': 'application/json; charset=UTF-8',
        },
        ...options
    })
    // Throw API errors
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(JSON.stringify(errorData));
    }
    return await res.json();
}

async function getDevrevWorkList(nextCursor: any, workIemType: string, DEVREV_PAT: string) {
    let workListObject: any, endpoint;
    endpoint = `works.list?type=${workIemType}`
    endpoint += (!nextCursor) ? '' : `&cursor=${nextCursor}`;
    try {
        workListObject = await DevrevAPIRequest(endpoint, {
            method: "GET",
        }, DEVREV_PAT);
    } catch (err) {
        console.error(err);
    }
    return [workListObject.works, workListObject.next_cursor];
}

async function getDevrevWorkItemList(workIemType: string, DEVREV_PAT: string) {
    let workItemArray: any[] = []
    let [worksArray, nextCursor] = await getDevrevWorkList(undefined, workIemType, DEVREV_PAT);
    for (let work of worksArray) workItemArray.push(work);
    while (nextCursor != undefined) {
        [worksArray, nextCursor] = await getDevrevWorkList(nextCursor, workIemType, DEVREV_PAT);
        for (let work of worksArray) workItemArray.push(work);
    }
    return workItemArray;
}

export async function getDevrevUserUsingEmail(userEmail: string, DEVREV_PAT: string) {
    let userObject: any;
    try {
        userObject = await DevrevAPIRequest(`dev-users.list`, {
            method: "POST",
            body: { email: [userEmail] },
        }, DEVREV_PAT);
    } catch (err) {
        console.error(err);
    }
    return userObject.dev_users;
}

export async function checkIfDevU(userEmail: string, DEVREV_PAT: string) {
    const userDevrevProfile = await getDevrevUserUsingEmail(userEmail, DEVREV_PAT);
    return (userDevrevProfile.length == 0) ? false : true;
}

export async function getDevOrg(DEVREV_PAT: string) {
    let devOrgObject;
    try {
        devOrgObject = await DevrevAPIRequest(`dev-orgs.get`, {
            method: "GET",
        }, DEVREV_PAT, true);
    } catch (err) {
        console.error(err);
    }
    return devOrgObject;
}

export async function getDevrevWorkItemLink(workItem: any, DEVREV_PAT: string) {
    return [DEVREV_DOMAIN_NAME, (await getDevOrg(DEVREV_PAT) as any).dev_org.dev_slug, "works", workItem.display_id].join("/");
}

export async function fetchTicketDigest(channelID: string, userID: string, DEVREV_PAT: string, SLACK_TOKEN: string) {
    // Check if the user is a DevU
    if (!checkIfDevU(await getSlackUserEmailfromID(userID, SLACK_TOKEN), DEVREV_PAT)) return;
    const allDevrevTickets = await getDevrevWorkItemList('ticket', DEVREV_PAT);
    const missingTCD_Queued: any[] = [];
    const missingTCD_WorkInProgress: any[] = [];
    const missingTCD_AwaitingProdAssist: any[] = [];
    const missingTCD_AwaitingDevelopment: any[] = [];
    const missingTCD_InDevelopment: any[] = [];
    const missingTCD_AwaitingCustomerResponse: any[] = [];
    for (let ticket of allDevrevTickets) {
        if (!ticket.target_close_date) {
            if (ticket.stage?.name == 'queued') {
                missingTCD_Queued.push(ticket);
            }
            if (ticket.stage?.name == 'work_in_progress') {
                missingTCD_WorkInProgress.push(ticket);
            }
            if (ticket.stage?.name == 'awaiting_product_assist') {
                missingTCD_AwaitingProdAssist.push(ticket);
            }
            if (ticket.stage?.name == 'awaiting_development') {
                missingTCD_AwaitingDevelopment.push(ticket);
            }
            if (ticket.stage?.name == 'in_development') {
                missingTCD_InDevelopment.push(ticket);
            }
            if (ticket.stage?.name == 'awaiting_customer_response') {
                missingTCD_AwaitingCustomerResponse.push(ticket);
            }
        }
    }
    missingTCD_Queued.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    missingTCD_WorkInProgress.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    missingTCD_AwaitingProdAssist.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    missingTCD_AwaitingDevelopment.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    missingTCD_InDevelopment.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    missingTCD_AwaitingCustomerResponse.sort((a, b) => new Date(b.modified_date).getTime() - new Date(a.modified_date).getTime());
    const digestDataBlockkit = await fetchDigestDataBlockkit(DISPLAY_LIMIT, missingTCD_Queued, missingTCD_WorkInProgress, missingTCD_AwaitingProdAssist, missingTCD_AwaitingDevelopment, missingTCD_InDevelopment, missingTCD_AwaitingCustomerResponse, DEVREV_PAT, SLACK_TOKEN);
    return await createSlackMessage({
        text: "Here comes the DevRev ticket digest...",
        channel: channelID,
        blocks: digestDataBlockkit,
    }, SLACK_TOKEN);
}