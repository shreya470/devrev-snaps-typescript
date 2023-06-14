import {
    getDevrevWorkItemLink,
} from "../devrev-utils"

import {
    getMentionableUserIDFromEmail,
} from "../slack-utils"

function getGenericBlock(text : string) {
    return [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": text,
        }
    }];
}

async function getStringOfWorkLinks(workArray: any[], limit: number, DEVREV_PAT: string, SLACK_TOKEN: string) {
    let str = "";
    for (let i = 0; i < Math.min(workArray.length, limit); i++) {
        let workLink = await getDevrevWorkItemLink(workArray[i], DEVREV_PAT);
        const workOwnerID = await getMentionableUserIDFromEmail(workArray[i].owned_by[0], SLACK_TOKEN);
        str += `• <${workLink}|[${workArray[i].display_id}]> ${workArray[i].title}  <@${workOwnerID}>\n`;
    }
    return str;
}

export async function fetchDigestDataBlockkit(limit: number, missingTCD_Queued: any[], missingTCD_WorkInProgress: any[], missingTCD_AwaitingProdAssist: any[], missingTCD_AwaitingDevelopment: any[], missingTCD_InDevelopment: any[], missingTCD_AwaitingCustomerResponse: any[], DEVREV_PAT: string, SLACK_TOKEN: string) {
    const digestData: any[] = [];
    const divider_block = [{
        "type": "divider"
    }];
    const title_block = getGenericBlock("Here is a digest of all DevRev tickets for which target close dates are not specified");

    digestData.push(...divider_block);
    digestData.push(...title_block);

    let queued_title, queued_tickets;
    let work_in_progress_title, work_in_progress_tickets;
    let awaiting_product_assist_title, awaiting_product_assist_tickets;
    let awaiting_development_title, awaiting_development_tickets;
    let in_development_title, in_development_tickets;
    let awaiting_customer_response_title, awaiting_customer_response_tickets;

    if (missingTCD_Queued.length > 0) {
        queued_title = getGenericBlock("*Queued*");
        queued_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_Queued, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...queued_title);
        digestData.push(...queued_tickets);
        digestData.push(...divider_block);
    }
    if (missingTCD_WorkInProgress.length > 0) {
        work_in_progress_title = getGenericBlock("*Work In Progress*");
        work_in_progress_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_WorkInProgress, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...work_in_progress_title);
        digestData.push(...work_in_progress_tickets);
        digestData.push(...divider_block);
    }
    if (missingTCD_AwaitingProdAssist.length > 0) {
        awaiting_product_assist_title = getGenericBlock("*Awaiting Product Assist*");
        awaiting_product_assist_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_AwaitingProdAssist, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...awaiting_product_assist_title);
        digestData.push(...awaiting_product_assist_tickets);
        digestData.push(...divider_block);
    }
    if (missingTCD_AwaitingDevelopment.length > 0) {
        awaiting_development_title = getGenericBlock("*Awaiting Development*");
        awaiting_development_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_AwaitingDevelopment, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...awaiting_development_title);
        digestData.push(...awaiting_development_tickets);
        digestData.push(...divider_block);
    }
    if (missingTCD_InDevelopment.length > 0) {
        in_development_title = getGenericBlock("*In Development*");
        in_development_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_InDevelopment, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...in_development_title);
        digestData.push(...in_development_tickets);
        digestData.push(...divider_block);
    }
    if (missingTCD_AwaitingCustomerResponse.length > 0) {
        awaiting_customer_response_title = getGenericBlock("*Awaiting Customer Response*");
        awaiting_customer_response_tickets = getGenericBlock(await getStringOfWorkLinks(missingTCD_InDevelopment, limit, DEVREV_PAT, SLACK_TOKEN));
        digestData.push(...awaiting_customer_response_title);
        digestData.push(...awaiting_customer_response_tickets);
        digestData.push(...divider_block);
    }
    return digestData;
}