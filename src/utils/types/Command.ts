import Client from '../structures/Client';
import { Message } from 'discord.js';

type runOptions = { client: Client, msg: Message, args: string[] };

export class Command {


	//     CONFIG     //

	public name: string = '';
	public category: string = '';
	public aliases: string[] = [];
	public disabled: boolean = false;

	//     HELP     //

	public description: string = 'No description.';
	public usage: string = `${this.name}`;

	constructor () {


	}

	public async run ({ client, msg, args }: runOptions): Promise<void> {


	}

	public get config () {

		return {

			name: this.name,
			aliases: this.aliases,
			category: this.category,
			disabled: this.disabled

		}

	}

	public get help () {

		return {

			description: this.description,
			usage: this.usage

		}

	}

}