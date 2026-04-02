# IItemHandler

**Package:** `net.neoforged.neoforge.items`
**Type:** interface

## Methods

### getSlots

```java
int getSlots()
```

**Returns:** `int`

### getStackInSlot

```java
ItemStack getStackInSlot(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `ItemStack`

### insertItem

```java
ItemStack insertItem(int slot, ItemStack stack, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### extractItem

```java
ItemStack extractItem(int slot, int amount, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `amount` (`int`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### getSlotLimit

```java
int getSlotLimit(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `int`

### isItemValid

```java
boolean isItemValid(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `boolean`
