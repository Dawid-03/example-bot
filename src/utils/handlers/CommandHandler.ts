import Client from '../structures/Client';
import { readdirSync } from 'fs';

export default class CommandHandler {

	private readonly client: Client;

	constructor (client: Client) {

		this.client = client;

	}

	public init () {

		readdirSync(`${__dirname}/../../commands/`).filter(c => !c.startsWith('#')).forEach(category => {

			readdirSync(`${__dirname}/../../commands/${category}/`).filter(f => !f.startsWith('#') && f.endsWith('.command.ts') || f.endsWith('.command.js')).forEach(async cmdFile => {

				const CommandClass = (await import(`${__dirname}/../../commands/${category}/${cmdFile}`)).default;

				const command = new CommandClass();

				command.category = category;

				this.client.commands.set(command.config.name, command);
				console.log(`[${new Date().toLocaleString()}]: ${command.config.name} loaded`);

			});

		});

	}


}