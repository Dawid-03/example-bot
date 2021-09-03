import Client from './utils/structures/Client';

import { IntentsString, Intents } from 'discord.js';

const intents: IntentsString[] = [];
Object.keys(Intents.FLAGS).forEach(key => intents.push(Intents.FLAGS[key]));

export const client: Client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents,
	allowedMentions: {
		repliedUser: false
	}
})