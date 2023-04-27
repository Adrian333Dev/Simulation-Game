# Simulation Game

## Description

The essence of the project is a step-by-step simulation of a 2D world populated by herbivores and predators. In addition to the creatures, the world contains resources (grass) that herbivores feed on, and static objects that cannot be interacted with - they simply take up space.

The 2D world is represented by an NxM matrix, with each creature or object occupying a single cell. Having multiple objects/creatures in the same cell is not allowed.

The idea is taken from [here](https://www.youtube.com/watch?v=SfEZSyvbj2w).<br><hr><br>

## Design of Classes

### Entity

Root abstract class for all creatures and objects existing in the simulation.<br>

### Grass, Rock, Tree

`Rock` and `Tree` are static objects, while `Grass` is a resource for herbivores.<br>

### Creature

An abstract class that inherits from `Entity`. `Creature` has a speed (how many cells it can move in 1 turn) and an amount of HP. It has an abstract method called `makeMove()` that makes a move. Each subclass will implement this method in its own way.<br>

### Herbivore

`Herbivore`, which inherits from `Creature`. It seeks to find a resource (grass) and can spend its turn moving towards the grass or consuming it.<br>

### Predator

`Predator`, which inherits from `Creature`. In addition to the fields in the `Creature` class, it has an attack strength. A predator can spend its turn doing the following:

- Move (to get closer to the prey - herbivore).
- Attack a herbivore, reducing its HP by the predator's attack strength. If the herbivore's HP drops to 0, the herbivore disappears.
<br>

### Map

Map, which contains a collection to store creatures and their locations. I recommend not to rush into using a two-dimensional array or a list of lists, but to think about what other collections might be suitable.<br>

### Simulation

- `Map`
- `Turn counter`
- `Field renderer`
- `Actions` - a list of actions executed before the simulation starts or on each turn (details below)

#### Methods

- `nextTurn()` - Simulate and render one turn.
- `startSimulation()` - Start an infinite loop of simulation and rendering.
- `pauseSimulation()` - Pause the infinite loop of simulation and rendering.
<br>

### Actions

`Action` - an action performed on the world. For example, move all creatures. This action would iterate over the creatures and call `makeMove()` on each one. Each action is described by a separate class and performs operations on the map. The simulation contains 2 arrays of actions:

- `initActions` - actions performed before starting the simulation. For example, placing objects and creatures on the map.
- `turnActions` - aactions performed on every turn. Examples include moving creatures and adding grass or herbivores if there are too few of them left.
<br>

### Path Search

I recommend writing a pathfinding algorithm from scratch using the algorithm description on Wikipedia as a source. The easiest way to start is with the [breadth-first](https://en.wikipedia.org/wiki/Breadth-first_search) search algorithm. It is relatively simple to implement, but it may run slowly on large fields, for which the [A*](https://en.wikipedia.org/wiki/A*_search_algorithm) algorithm would be better suited.<br>

### Renderer

The `Renderer` is responsible for visualizing the state of the field, its rendering. Depending on the student's preferences, the application interface can be either console-based or graphical.<br><hr><br>

## Final Goal

Implement a simulation and adjust different values to make the interactions within the world as interesting as possible:

- Field size
- Range of HP and speed for creatures
- Range of attack for predators

Optional ideas to make the project more challenging:

- Reproduction mechanics for creatures
- Hunger mechanics where HP decreases when food is scarce
