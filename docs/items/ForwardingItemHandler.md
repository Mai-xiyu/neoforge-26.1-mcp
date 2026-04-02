# ForwardingItemHandler

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandler`

## Description

An `IItemHandler` that delegates each method to another `IItemHandler`.
The `Supplier` is re-evaluated each time a method is called.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `delegate` | `Supplier<IItemHandler>` |  |

## Methods

### ForwardingItemHandler

```java
public ForwardingItemHandler(IItemHandler delegate)
```

**Parameters:**

- `delegate` (`IItemHandler`)

**Returns:** `public`

### ForwardingItemHandler

```java
public ForwardingItemHandler(Supplier<IItemHandler> delegate)
```

**Parameters:**

- `delegate` (`Supplier<IItemHandler>`)

**Returns:** `public`

### getSlots

```java
public int getSlots()
```

**Returns:** `int`

### getStackInSlot

```java
public ItemStack getStackInSlot(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `ItemStack`

### insertItem

```java
public ItemStack insertItem(int slot, ItemStack stack, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### extractItem

```java
public ItemStack extractItem(int slot, int amount, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `amount` (`int`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### getSlotLimit

```java
public int getSlotLimit(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `int`

### isItemValid

```java
public boolean isItemValid(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `boolean`
