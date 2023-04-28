import { ConsoleRenderer } from '../renderers/ConsoleRenderer.class';
import { Map } from './holders/Map.class';

export class Simulation {
	public nextTurn() {}

	public startSimulation() {}

	public stopSimulation() {}

	public test() {
		const map = new Map();
		console.log(map.cells);
		ConsoleRenderer.render(map.cells);
	}
}
