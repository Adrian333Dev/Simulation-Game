import { Cell } from "./Cell.class";
import { Settings } from "../../shared/classes/Settings.class";

export class Grid {
	private _width: number;
	private _height: number;

  private _cells_by_id: Map<number, Cell>;
  private _entities_by_id: Map<number, Cell>;

	constructor(x: number = Settings.map_width, y: number = Settings.map_height) {
		this._width = x;
		this._height = y;

    this._cells_by_id = new Map<number, Cell>();
    this._entities_by_id = new Map<number, Cell>();
  }
  
  public generateCells(): void { 
    for (let i = 0; i < this._size; i++) {
      const cell = new Cell(i % this._width, Math.floor(i / this._width));
      this._cells_by_id.set(cell.id, cell);
    }
  }
}
