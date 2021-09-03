import { Command } from '../../utils/types/Command';

export default class extends Command {

	constructor () {
		super();

		this.name = 'ping';
		this.aliases = ['pong', 'latency'];
		this.category = 'bot';
		this.usage = '<p>ping';
		this.description = 'Gives pong!';

	}

	public async run ({ client, msg, args }) {

		msg.reply({ content: `:ping_pong: Pong! ${~~client.ws.ping}ms` }).catch(e => e);

	}

}