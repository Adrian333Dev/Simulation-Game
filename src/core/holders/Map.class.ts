import { Cell } from './Cell.class';
import { Settings } from '../Settings.class';

export class Map {
	private _cells: Cell[][];

	constructor() {
		this._cells = [];
		const symbols = Settings.symbols;
		for (let i = 0; i < Settings.rows; i++) {
			this._cells[i] = [];
			for (let j = 0; j < Settings.cols; j++) {
				this._cells[i][j] = new Cell(i, j);
				const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
				this._cells[i][j].symbol = symbols[randomSymbolIndex];
				// const defaultEntity = Settings.getDefaultEntity(i, j);
				// if (defaultEntity) this._cells[i][j].item = defaultEntity;
			}
		}
	}

	public get cells(): Cell[][] {
		return this._cells;
	}
}
