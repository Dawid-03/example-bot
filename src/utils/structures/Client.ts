import { Client as DiscordClient, ClientOptions, Collection } from 'discord.js';
import CommandHandler from '../handlers/CommandHandler';
import EventHandler from '../handlers/EventHandler';
import { config } from 'dotenv';
import { Command } from '../../types';

config();

export default class extends DiscordClient {

	commands: Collection<string, Command>;

	constructor (options: ClientOptions) {

		super(options);

		this.commands = new Collection();

		new CommandHandler(this).init();
		new EventHandler(this).init();

		this.login(process.env.TOKEN).then(() => console.log(`[${new Date().toLocaleString()}]: Attempt to connect to Discord API Gateway.`));

	}

}