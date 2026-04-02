# ContainerExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension methods for `Container`. These methods are used by `VanillaContainerWrapper`,
to allow containers to be integrated in a transaction.

## Methods

### self

```java
private Container self()
```

**Returns:** `private Container`

### setItem

```java
.OverrideOnly
    default void setItem(int slot, ItemStack stack, boolean insideTransaction)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)
- `insideTransaction` (`boolean`)

**Returns:** `.OverrideOnly
    default void`

### onTransfer

```java
.OverrideOnly
    default void onTransfer(int slot, int amountChange, TransactionContext transaction)
```

**Parameters:**

- `slot` (`int`)
- `amountChange` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `.OverrideOnly
    default void`
