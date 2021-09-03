import Client from '../structures/Client';
import { readdirSync } from 'fs';

export default class EventHandler {

	private readonly client: Client;

	constructor (client: Client) {

		this.client = client;

	}

	public init () {

		readdirSync(`${__dirname}/../../events/`).filter(f => !f.startsWith('#')).forEach(category => {

			readdirSync(`${__dirname}/../../events/${category}`).filter(f => !f.startsWith('#') && f.endsWith('.event.ts') || f.endsWith('.event.js')).forEach(async evtFile => {

				const EventClass = (await import(`${__dirname}/../../events/${category}/${evtFile}`)).default;

				const event = new EventClass();

				this.client.on(event.config.name, event.run);

				console.log(`[${new Date().toLocaleString()}]: Event ${event.config.name} loaded.`);

			});

		});

	}

}