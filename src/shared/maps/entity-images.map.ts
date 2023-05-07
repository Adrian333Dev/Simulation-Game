export enum EntityImages {
	EMPTY = ' ',
	GRASS = '🌱',
	TREE = '🌳',
	WATER = '🌊',
	ROCK = '🪨',
	WOLF = '🐺',
}

export const EntityImagesMap = Object.entries(EntityImages).reduce(
	(map, [key, value]) => {
		map.set(value, key);
		return map;
	},
	new Map<string, string>()
);
