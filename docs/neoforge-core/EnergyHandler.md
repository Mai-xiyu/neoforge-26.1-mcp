# EnergyHandler

**Package:** `net.neoforged.neoforge.transfer.energy`
**Type:** interface

## Description

A handler for the transfer and storage of energy.


This capability interface is used for NeoForge's energy system,
see the exposed capabilities in Capabilities.EnergyHandler.


This interface can be also be used for other energy systems,
provided that they register a capability under a different name.

## Methods

### getAmountAsLong

```java
long getAmountAsLong()
```

**Returns:** `long`

### getAmountAsInt

```java
.NonExtendable
    default int getAmountAsInt()
```

**Returns:** `.NonExtendable
    default int`

### getCapacityAsLong

```java
long getCapacityAsLong()
```

**Returns:** `long`

### getCapacityAsInt

```java
.NonExtendable
    default int getCapacityAsInt()
```

**Returns:** `.NonExtendable
    default int`

### insert

```java
int insert(int amount, TransactionContext transaction)
```

**Parameters:**

- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
int extract(int amount, TransactionContext transaction)
```

**Parameters:**

- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`
