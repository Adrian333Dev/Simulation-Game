import { Coordinates } from '../Coordinates.class';
import { Settings } from '../Settings.class';

export abstract class Entity {
	private _id!: string;
	private _coordinates!: Coordinates;
	private _symbol!: string;

	public get coordinates(): Coordinates {
		return this._coordinates;
	}

	set coordinates(coordinates: Coordinates) {
		if (Settings.isCoordinatesValid(coordinates.x, coordinates.y))
			this._coordinates = coordinates;
		else throw new Error('Coordinates are not valid');
	}

	public get id(): string {
		return this._id;
	}

	public set id(entity: string) {
		this._id = `${entity}-${Math.random() * 100000}`;
	}

	public get symbol(): string {
		return this._symbol;
	}

	public set symbol(symbol: string) {
		this._symbol = symbol;
	}
}
