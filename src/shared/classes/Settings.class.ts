import { DEFAULT_GAME_SETTINGS } from '../constants/default-game-settings';

const { grid_width, grid_height, grid_size } = DEFAULT_GAME_SETTINGS;

export class Settings {
	private _grid_width: number = grid_width;
	private _grid_height: number = grid_height;
	private _grid_size: number = grid_size;

	public get grid_width(): number {
		return this._grid_width;
	}

	public get grid_height(): number {
		return this._grid_height;
	}

	public get grid_size(): number {
		return this._grid_size;
	}

	public setGridSize(width: number, height: number): void {
		this._grid_width = width;
		this._grid_height = height;
		this._grid_size = width * height;
	}
}
