import Client from './utils/structures/Client';

import { Intents } from 'discord.js';

export const client: Client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	intents: Object.values(Intents.FLAGS),
	allowedMentions: {
		repliedUser: false
	}
});