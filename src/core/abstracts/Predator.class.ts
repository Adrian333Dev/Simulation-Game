import { Creature } from "./Creature.class";

export abstract class Predator extends Creature { 
  constructor(x: number, y: number) {
    super(x, y);
  }
}