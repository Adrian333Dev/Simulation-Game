import { Settings } from '../classes/Settings.class';
import { ICoordinate } from '../interfaces/coordinate.interface';

export const coordinatesFromId = (id: number): ICoordinate => {
	const x: number = id % Settings.map_width;
	const y: number = Math.floor(id / Settings.map_width) + 1;
	return { x, y };
};

export const iDfromCoordinates = (x: number, y: number): number => {
	return (y - 1) * Settings.map_width + x;
};
