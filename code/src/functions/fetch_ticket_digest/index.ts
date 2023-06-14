import {
	fetchTicketDigest,
} from "./utils/devrev-utils"

async function EventListener(event: any) {
	// console.log("Incoming Event: ", event);
	const {
		payload: {
			channel_id,
			command,
			text,
			user_id,
		},
		input_data: {
			keyrings: {
				"slack_app_connection": SLACK_TOKEN,
				"devrev": DEVREV_PAT
			}
		},
	} = event;
	if (command == "/devrev-dev" && text == "ticket-digest")
		await fetchTicketDigest(channel_id, user_id, DEVREV_PAT, SLACK_TOKEN);
}

export const run = async (events: any[]) => {
	// await EventListener(events);
	for (let i = 0; i < events.length; i++) {
		await EventListener(events[i]);
	}
};
export default run;
