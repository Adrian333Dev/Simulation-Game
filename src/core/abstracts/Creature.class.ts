import { Entity } from './Entity.class';

export abstract class Creature extends Entity {
	private _hp: number = 0;
	private _hunger: number = 100;
	private _thirst: number = 100;
	private _speed: number = 0;

	public abstract move(): void;
	public abstract die(): void;
	public abstract eat(): void;

	public get hp(): number {
		return this._hp;
	}

	public set hp(value: number) {
		this._hp = value;
	}

	public get isAlive(): boolean {
		return this._hp > 0;
	}

	public get hunger(): number {
		return this._hunger;
	}

	public set hunger(value: number) {
		this._hunger = value;
	}

	public get isHungry(): boolean {
		return this._hunger < 50;
	}

	public get thirst(): number {
		return this._thirst;
	}

	public set thirst(value: number) {
		this._thirst = value;
	}

	public get isThirsty(): boolean {
		return this._thirst < 50;
	}

	public get isStarving(): boolean {
		return this._hunger < 10;
	}

	public get isDehydrated(): boolean {
		return this._thirst < 10;
	}

	public get speed(): number {
		return this._speed;
	}

	public set speed(value: number) {
		this._speed = value;
	}
}
