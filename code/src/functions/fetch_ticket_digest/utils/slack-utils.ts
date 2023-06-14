import fetch from "node-fetch";

async function SlackAPIRequest(url: string, options: any, SLACK_TOKEN: string) {
	// Stringify payloads
	if (options.body) options.body = JSON.stringify(options.body);
	// Use node-fetch to make requests
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${SLACK_TOKEN}`,
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

export async function getSlackUser(userID: string, SLACK_TOKEN: string) {
	let userObject;
	try {
		userObject = (await SlackAPIRequest(`https://slack.com/api/users.info?user=${userID}`, {
			method: "GET",
		}, SLACK_TOKEN) as any).user;
	} catch (err) {
		console.error(err);
	}
	return userObject;
}

export async function getSlackUserEmailfromID(userID: string, SLACK_TOKEN: string) {
	const data = await getSlackUser(userID, SLACK_TOKEN);
	return data.profile.email;
}

export async function getSlackUserFromEmailID(email: string, SLACK_TOKEN: string) {
	let userObject;
	try {
		userObject = (await SlackAPIRequest(`https://slack.com/api/users.lookupByEmail?email=${email}`, {
			method: "GET",
		}, SLACK_TOKEN)).user;
	} catch (err) {
		console.error(err);
	}
	return userObject;
}

export async function getMentionableUserIDFromEmail(devrevItem: any, SLACK_TOKEN: any) {
	let slackUserIDForOwner = (await getSlackUserFromEmailID(devrevItem.email, SLACK_TOKEN))?.id;
	if (!slackUserIDForOwner) slackUserIDForOwner = devrevItem.display_name;
	return slackUserIDForOwner;
}

export async function createSlackMessage(requestData: any, SLACK_TOKEN: string) {
	let messageData;
	try {
		messageData = await SlackAPIRequest(`https://slack.com/api/chat.postMessage`, {
			method: "POST",
			body: requestData,
		}, SLACK_TOKEN);
	} catch (err) {
		console.error(err);
	}
	return messageData;
}
