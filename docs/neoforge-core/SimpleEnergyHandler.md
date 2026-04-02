# SimpleEnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** class
**Implements:** `EnergyHandler`, `ValueIOSerializable`

## Description

A simple implementation of `EnergyHandler`, that can store any level of energy up to a given capacity,
with per-operation insertion and extraction limits.


While new instances of `SimpleEnergyHandler` can be created and used directly,
overriding `#onEnergyChanged` to react to changes in the energy level is recommended,
for example to trigger `setChanged()`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `energy` | `int` |  |
| `capacity` | `int` |  |
| `maxInsert` | `int` |  |
| `maxExtract` | `int` |  |

## Methods

### SimpleEnergyHandler

```java
public public SimpleEnergyHandler(int capacity)
```

**Parameters:**

- `capacity` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SimpleEnergyHandler

```java
public public SimpleEnergyHandler(int capacity, int maxTransfer)
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

### SimpleEnergyHandler

```java
public public SimpleEnergyHandler(int capacity, int maxInsert, int maxExtract)
```

**Parameters:**

- `capacity` (`int`)
- `maxInsert` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SimpleEnergyHandler

```java
public public SimpleEnergyHandler(int capacity, int maxInsert, int maxExtract, int energy)
```

**Parameters:**

- `capacity` (`int`)
- `maxInsert` (`int`)
- `maxExtract` (`int`)
- `energy` (`int`)

**Returns:** `public`

### serialize

```java
public void serialize(ValueOutput output)
```

**Parameters:**

- `output` (`ValueOutput`)

### deserialize

```java
public void deserialize(ValueInput input)
```

**Parameters:**

- `input` (`ValueInput`)

### set

```java
public void set(int amount)
```

**Parameters:**

- `amount` (`int`)

### onEnergyChanged

```java
 onEnergyChanged()
```

**Returns:** ``

### onEnergyChanged

```java
protected void onEnergyChanged(int previousAmount)
```

**Parameters:**

- `previousAmount` (`int`)

### getAmountAsLong

```java
public long getAmountAsLong()
```

**Returns:** `long`

### getCapacityAsLong

```java
public long getCapacityAsLong()
```

**Returns:** `long`

### insert

```java
public int insert(int amount, TransactionContext transaction)
```

**Parameters:**

- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
public int extract(int amount, TransactionContext transaction)
```

**Parameters:**

- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### createSnapshot

```java
protected Integer createSnapshot()
```

**Returns:** `Integer`

### revertToSnapshot

```java
protected void revertToSnapshot(Integer snapshot)
```

**Parameters:**

- `snapshot` (`Integer`)

### onRootCommit

```java
protected void onRootCommit(Integer originalState)
```

**Parameters:**

- `originalState` (`Integer`)

### onEnergyChanged

```java
 onEnergyChanged()
```

**Returns:** ``
