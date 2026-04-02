# LimitingEnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** class
**Extends:** `DelegatingEnergyHandler`

## Description

An energy handler that will apply additional per-insert and per-extract limits to another handler.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `maxExtract` | `int maxInsert,` |  |

## Methods

### LimitingEnergyHandler

```java
public public LimitingEnergyHandler(EnergyHandler delegate, int maxInsert, int maxExtract)
```

**Parameters:**

- `delegate` (`EnergyHandler`)
- `maxInsert` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### LimitingEnergyHandler

```java
public public LimitingEnergyHandler(Supplier<EnergyHandler> delegate, int maxInsert, int maxExtract)
```

**Parameters:**

- `delegate` (`Supplier<EnergyHandler>`)
- `maxInsert` (`int`)
- `maxExtract` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

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
