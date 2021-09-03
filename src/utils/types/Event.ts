export class Event {

	name: string = '';
	disabled: boolean = false;

	constructor () {}

	public async run (...args): Promise<void> {}

	public get config () {

		return {

			name: this.name,
			disabled: this.disabled

		}

	}

}