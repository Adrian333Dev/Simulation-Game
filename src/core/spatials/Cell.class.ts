import { Entity } from '../abstracts/Entity.class';

export class Cell extends Entity {
	constructor(x: number, y: number) {
		super(x, y);
	}
}
