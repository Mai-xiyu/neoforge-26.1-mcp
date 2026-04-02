# EmptyEnergyStorage

**Package:** `net.neoforged.neoforge.energy`
**Type:** class
**Implements:** `IEnergyStorage`

## Description

Implementation of `IEnergyStorage` that cannot store, receive, or provide energy.
Use the `#INSTANCE`, don't instantiate. Example:
`ItemStack stack = ...;
IEnergyStorage storage = stack.getCapability(ForgeCapabilities.ENERGY).orElse(EmptyEnergyStorage.INSTANCE);
// Use storage without checking whether it's present.
`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `EmptyEnergyStorage` |  |

## Methods

### EmptyEnergyStorage

```java
protected EmptyEnergyStorage()
```

**Returns:** `protected`

### receiveEnergy

```java
public int receiveEnergy(int maxReceive, boolean simulate)
```

**Parameters:**

- `maxReceive` (`int`)
- `simulate` (`boolean`)

**Returns:** `int`

### extractEnergy

```java
public int extractEnergy(int maxExtract, boolean simulate)
```

**Parameters:**

- `maxExtract` (`int`)
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
