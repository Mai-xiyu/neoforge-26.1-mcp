# ItemAccessEnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** class
**Implements:** `EnergyHandler`

## Description

A simple implementation of an `EnergyHandler` backed by an `ItemAccess`.
It can store any level of energy up to a given capacity, and has per-operation insertion and extraction limits.
The energy level is stored in an `Integer` data component.


To use this class, register a new `DataComponentType` which holds an `Integer` for your item.
Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `itemAccess` | `ItemAccess` |  |
| `validItem` | `Item` |  |
| `energyComponent` | `DataComponentType<Integer>` |  |
| `capacity` | `int` |  |
| `maxInsert` | `int` |  |
| `maxExtract` | `int` |  |

## Methods

### ItemAccessEnergyHandler

```java
public public ItemAccessEnergyHandler(ItemAccess itemAccess, DataComponentType<Integer> energyComponent, int capacity)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ItemAccessEnergyHandler

```java
public public ItemAccessEnergyHandler(ItemAccess itemAccess, DataComponentType<Integer> energyComponent, int capacity, int maxTransfer)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)
- `maxTransfer` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ItemAccessEnergyHandler

```java
public public ItemAccessEnergyHandler(ItemAccess itemAccess, DataComponentType<Integer> energyComponent, int capacity, int maxInsert, int maxExtract)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `energyComponent` (`DataComponentType<Integer>`)
- `capacity` (`int`)
- `maxInsert` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### getAmountFrom

```java
protected int getAmountFrom(ItemResource accessResource)
```

**Parameters:**

- `accessResource` (`ItemResource`)

**Returns:** `int`

### update

```java
protected ItemResource update(ItemResource accessResource, int newAmount)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `newAmount` (`int`)

**Returns:** `ItemResource`

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
