# ComponentEnergyStorage

**Package:** `net.neoforged.neoforge.energy`
**Type:** class
**Implements:** `IEnergyStorage`

## Description

Variant of `EnergyStorage` for use with data components.



The actual data storage is managed by a data component, and all changes will write back to that component.



To use this class, register a new `DataComponentType` which holds an `Integer` for your item.
Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `parent` | `MutableDataComponentHolder` |  |
| `energyComponent` | `DataComponentType<Integer>` |  |
| `capacity` | `int` |  |
| `maxReceive` | `int` |  |
| `maxExtract` | `int` |  |

## Methods

### ComponentEnergyStorage

```java
public public ComponentEnergyStorage(MutableDataComponentHolder parent, DataComponentType<Integer> energyComponent, int capacity, int maxReceive, int maxExtract)
```

**Parameters:**

- `parent` (`MutableDataComponentHolder`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)
- `maxReceive` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### ComponentEnergyStorage

```java
public public ComponentEnergyStorage(MutableDataComponentHolder parent, DataComponentType<Integer> energyComponent, int capacity, int maxTransfer)
```

**Parameters:**

- `parent` (`MutableDataComponentHolder`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)
- `maxTransfer` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ComponentEnergyStorage

```java
public public ComponentEnergyStorage(MutableDataComponentHolder parent, DataComponentType<Integer> energyComponent, int capacity)
```

**Parameters:**

- `parent` (`MutableDataComponentHolder`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### receiveEnergy

```java
public int receiveEnergy(int toReceive, boolean simulate)
```

**Parameters:**

- `toReceive` (`int`)
- `simulate` (`boolean`)

**Returns:** `int`

### extractEnergy

```java
public int extractEnergy(int toExtract, boolean simulate)
```

**Parameters:**

- `toExtract` (`int`)
- `simulate` (`boolean`)

**Returns:** `int`

### getEnergyStored

```java
public int getEnergyStored()
```

**Returns:** `int`

### getMaxEnergyStored

```java
public int getMaxEnergyStored()
```

**Returns:** `int`

### canExtract

```java
public boolean canExtract()
```

**Returns:** `boolean`

### canReceive

```java
public boolean canReceive()
```

**Returns:** `boolean`

### setEnergy

```java
protected void setEnergy(int energy)
```

**Parameters:**

- `energy` (`int`)
