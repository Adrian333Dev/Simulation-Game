import { Coordinates } from '../Coordinates.class';
import { Settings } from '../Settings.class';
import { Creature } from '../abstracts/Creature.class';
import { Entity } from '../abstracts/Entity.class';
import { NaturalElement } from '../abstracts/NaturalElement.class';

export class Cell extends Entity {
	private _coordinates: Coordinates;
	private _item: NaturalElement | Creature | null;

	constructor(x: number, y: number) {
		super();
		this._coordinates = new Coordinates(x, y);
		this._item = null;
	}

	get coordinates(): Coordinates {
		return this._coordinates;
	}

	set coordinates(coordinates: Coordinates) {
		if (Settings.isCoordinatesValid(coordinates.x, coordinates.y))
			this._coordinates = coordinates;
		else throw new Error('Coordinates are not valid');
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
