# DelegatingEnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** class
**Implements:** `EnergyHandler`

## Description

An energy handler that delegates all calls to another handler.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `delegate` | `Supplier<EnergyHandler>` |  |

## Methods

### DelegatingEnergyHandler

```java
public DelegatingEnergyHandler(EnergyHandler delegate)
```

**Parameters:**

- `delegate` (`EnergyHandler`)

**Returns:** `public`

### DelegatingEnergyHandler

```java
public DelegatingEnergyHandler(Supplier<EnergyHandler> delegate)
```

**Parameters:**

- `delegate` (`Supplier<EnergyHandler>`)

**Returns:** `public`

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

### getDelegate

```java
public EnergyHandler getDelegate()
```

**Returns:** `public EnergyHandler`
