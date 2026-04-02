# EnergyStorage

**Package:** `net.neoforged.neoforge.energy`
**Type:** class
**Implements:** `IEnergyStorage`, `INBTSerializable<Tag>`

## Description

Reference implementation of `IEnergyStorage`. Use/extend this or implement your own.
Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `energy` | `int` |  |
| `capacity` | `int` |  |
| `maxReceive` | `int` |  |
| `maxExtract` | `int` |  |

## Methods

### EnergyStorage

```java
public EnergyStorage(int capacity)
```

**Parameters:**

- `capacity` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EnergyStorage

```java
public EnergyStorage(int capacity, int maxTransfer)
```

**Parameters:**

- `capacity` (`int`)
- `maxTransfer` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EnergyStorage

```java
public EnergyStorage(int capacity, int maxReceive, int maxExtract)
```

**Parameters:**

- `capacity` (`int`)
- `maxReceive` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EnergyStorage

```java
public EnergyStorage(int capacity, int maxReceive, int maxExtract, int energy)
```

**Parameters:**

- `capacity` (`int`)
- `maxReceive` (`int`)
- `maxExtract` (`int`)
- `energy` (`int`)

**Returns:** `public`

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

### serializeNBT

```java
public Tag serializeNBT(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

**Returns:** `Tag`

### deserializeNBT

```java
public void deserializeNBT(HolderLookup.Provider provider, Tag nbt)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)
- `nbt` (`Tag`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Can not deserialize to an instance that isn't the default implementation")
```

**Parameters:**

- `implementation"` (`"Can not deserialize to an instance that isn't the default`)

**Returns:** `throw new`
