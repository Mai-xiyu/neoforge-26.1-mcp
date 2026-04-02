# InfiniteEnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** class
**Implements:** `EnergyHandler`

## Description

An `EnergyHandler` that allows extraction of an unlimited amount of energy.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `InfiniteEnergyHandler` |  |

## Methods

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
