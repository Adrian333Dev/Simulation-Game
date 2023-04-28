import { Coordinates } from '../Coordinates.class';
import { Creature } from '../abstracts/Creature.class';
import { Entity } from '../abstracts/Entity.class';
import { NaturalElement } from '../abstracts/NaturalElement.class';

export class Cell extends Entity {
	private _item: NaturalElement | Creature | null = null;

	constructor(x: number, y: number) {
		super();
		this.coordinates = new Coordinates(x, y);
	}

	get item(): NaturalElement | Creature | null {
		return this._item;
	}

	set item(item: NaturalElement | Creature | null) {
		this._item = item;
	}

	public isOccupied(): boolean {
		return this._item !== null;
	}

	public isOccupiedByCreature(): boolean {
		return this._item instanceof Creature;
	}

	public isOccupiedByNaturalElement(): boolean {
		return this._item instanceof NaturalElement;
	}
}
