import { Event } from '../../utils/types/Event';
import { client } from '../../index';

const prefix = '!';

export default class extends Event {

	constructor () {

		super();

		this.name = 'messageCreate';

	}

	public async run (msg) {

		if (msg.author.bot || msg.channel.type === 'DM' || !msg.member || !msg.guild) return;


		const mention = new RegExp(`^<@!?${client.user?.id}>( |)$`, 'g');

		if (msg.content.match(mention)) {

			return msg.reply({ content: 'Hi there!' });

		}

		if (!msg.content.startsWith(prefix)) return;

		const args: string[] = msg.content.slice(prefix.length).trim().split(/ +/g);

		const cmd: string | undefined = args.shift();

		if (!cmd?.length) return;

		const command = client.commands.find(c => c.name === cmd || c.aliases && c.aliases.includes(cmd));

		if (!command) return;

		const res: Error | void = await command.run({ client, msg, args }).catch(e => e);

		if (res instanceof Error) console.log(res);


	}

}