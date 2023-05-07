import { Entity } from './Entity.class';

export abstract class Creature extends Entity {
	constructor(x: number, y: number) {
		super(x, y);
	}
}
