# IEnergyStorage

**Package:** `net.neoforged.neoforge.energy`
**Type:** interface

## Description

An energy storage is the unit of interaction with Energy inventories.



A reference implementation can be found at `EnergyStorage`.
Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.

## Methods

### receiveEnergy

```java
int receiveEnergy(int toReceive, boolean simulate)
```

**Parameters:**

- `toReceive` (`int`)
- `simulate` (`boolean`)

**Returns:** `int`

### extractEnergy

```java
int extractEnergy(int toExtract, boolean simulate)
```

**Parameters:**

- `toExtract` (`int`)
- `simulate` (`boolean`)

**Returns:** `int`

### getEnergyStored

```java
int getEnergyStored()
```

**Returns:** `int`

### getMaxEnergyStored

```java
int getMaxEnergyStored()
```

**Returns:** `int`

### canExtract

```java
boolean canExtract()
```

**Returns:** `boolean`

### canReceive

```java
boolean canReceive()
```

**Returns:** `boolean`
