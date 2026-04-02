# RangedWrapper

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Description

A wrapper that composes another IItemHandlerModifiable, exposing only a range of the composed slots.
Shifting of slot indices is handled automatically for you.

## Methods

### RangedWrapper

```java
public RangedWrapper(IItemHandlerModifiable compose, int minSlot, int maxSlotExclusive)
```

**Parameters:**

- `compose` (`IItemHandlerModifiable`)
- `minSlot` (`int`)
- `maxSlotExclusive` (`int`)

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

### checkSlot

```java
private boolean checkSlot(int localSlot)
```

**Parameters:**

- `localSlot` (`int`)

**Returns:** `private boolean`
