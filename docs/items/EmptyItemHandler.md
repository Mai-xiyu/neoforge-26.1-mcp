# EmptyItemHandler

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `IItemHandler` |  |

## Methods

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

### setStackInSlot

```java
public void setStackInSlot(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

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
