import { Event } from '../../utils/types/Event';
import { client } from '../../index';

export default class extends Event {

		constructor () {

			super();

			this.name = 'ready'

		}

		public async run () {

			console.log(`[${new Date().toLocaleString()}]: ${client.user?.tag} is ready!`);

		}

}