import { iDfromCoordinates } from '../helpers/helpers';
import { Settings } from './Settings.class';

export class Coordinate {
	private _x: number;
	private _y: number;
	private _id: number;

	constructor(x: number, y: number) {
		if (x > 0 && Settings.map_width > x && y > 0 && Settings.map_height > y) {
			this._x = x;
			this._y = y;
			this._id = iDfromCoordinates(x, y);
		} else {
			throw new Error(`Invalid coordinate: (${x}, ${y})`);
		}
	}

	public get id(): number {
		return this._id;
	}

	public get x(): number {
		return this._x;
	}

	public get y(): number {
		return this._y;
	}

	public set x(value: number) {
		if (value < 0 || Settings.map_width < value)
			throw new Error(`Invalid x coordinate: ${value}`);
		this._x = value;
		this._id = iDfromCoordinates(this._x, this._y);
	}

	public set y(value: number) {
		if (value < 0 || Settings.map_height < value)
			throw new Error(`Invalid y coordinate: ${value}`);
		this._y = value;
		this._id = iDfromCoordinates(this._x, this._y);
	}
}
