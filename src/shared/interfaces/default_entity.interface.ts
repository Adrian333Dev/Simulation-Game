import { Creature } from '../../core/abstracts/Creature.class';
import { NaturalElement } from '../../core/abstracts/NaturalElement.class';

export interface IDefaultEntity {
	row: number;
	col: number;
	entity: NaturalElement | Creature;
}
