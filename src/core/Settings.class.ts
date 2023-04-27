import { Creature } from './abstracts/Creature.class';
import { NaturalElement } from './abstracts/NaturalElement.class';
import { IDefaultEntity } from '../shared/interfaces/default_entity.interface';

export abstract class Settings {
	private static _rows: number = 25;
	private static _cols: number = 25;

	private static _defaultEntities: (NaturalElement | Creature)[][] = [];

	public static get rows(): number {
		return this._rows;
	}

	public static get cols(): number {
		return this._cols;
	}

	public static set rows(rows: number) {
		if (rows > 0) this._rows = rows;
		else
			throw new Error(
				'Invalid number of rows. Rows must be a positive integer.'
			);
	}

	public static set cols(cols: number) {
		if (cols > 0) this._cols = cols;
		else
			throw new Error(
				'Invalid number of cols. Cols must be a positive integer.'
			);
	}

	public static isCoordinatesValid(x: number, y: number): boolean {
		return x >= 0 && x < this._cols && y >= 0 && y < this._rows;
	}

	public static get defaultEntities(): (NaturalElement | Creature)[][] {
		return this._defaultEntities;
	}

	public static set defaultEntities(
		defaultEntities: (NaturalElement | Creature)[][]
	) {
		this._defaultEntities = defaultEntities;
	}

	public static set defaultEntity({ row, col, entity }: IDefaultEntity) {
		if (this.isCoordinatesValid(row, col))
			this._defaultEntities[row][col] = entity;
		else throw new Error('Coordinates are not valid');
	}

	public static getDefaultEntity(
		row: number,
		col: number
	): NaturalElement | Creature | null {
		return this._defaultEntities[row][col];
	}
}
