import { Entity } from './Entity.class';

export abstract class Element extends Entity {
	constructor(x: number, y: number) {
		super(x, y);
	}
}
