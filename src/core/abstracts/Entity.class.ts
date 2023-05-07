import { Coordinate } from '../../shared/classes/Coordinate.class';
import { EntityImages } from '../../shared/maps/entity-images.map';

export abstract class Entity {
	private _coordinate: Coordinate;
	private _image: EntityImages = EntityImages.EMPTY;

	constructor(x: number, y: number) {
		this._coordinate = new Coordinate(x, y);
	}

	public get id(): number {
		return this._coordinate.id;
	}

	public get image(): EntityImages {
		return this._image;
	}

	public set image(value: EntityImages) {
		this._image = value;
	}
}
