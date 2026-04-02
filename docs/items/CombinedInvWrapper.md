# CombinedInvWrapper

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `itemHandler` | `IItemHandlerModifiable[]` |  |
| `baseIndex` | `int[]` |  |
| `slotCount` | `int` |  |

## Methods

### CombinedInvWrapper

```java
number of total slots

    public CombinedInvWrapper(IItemHandlerModifiable[]... itemHandler)
```

**Parameters:**

- `itemHandler` (`IItemHandlerModifiable[]...`)

**Returns:** `number of total slots

    public`

### getIndexForSlot

```java
returns the handler index for the slot
    protected int getIndexForSlot(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `returns the handler index for the slot
    protected int`

### getHandlerFromIndex

```java
protected IItemHandlerModifiable getHandlerFromIndex(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `protected IItemHandlerModifiable`

### getSlotFromIndex

```java
protected int getSlotFromIndex(int slot, int index)
```

**Parameters:**

- `slot` (`int`)
- `index` (`int`)

**Returns:** `protected int`

### setStackInSlot

```java
public void setStackInSlot(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

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
