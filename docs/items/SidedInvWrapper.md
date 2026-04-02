# SidedInvWrapper

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `inv` | `WorldlyContainer` |  |

## Methods

### limitInsert

```java
int limitInsert(int wrapperSlot, int invSlot, ItemStack stack)
```

**Parameters:**

- `wrapperSlot` (`int`)
- `invSlot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `int`

### SidedInvWrapper

```java
public SidedInvWrapper(WorldlyContainer inv, Direction side)
```

**Parameters:**

- `inv` (`WorldlyContainer`)
- `side` (`Direction`)

**Returns:** `public`

### getSlot

```java
public static int getSlot(WorldlyContainer inv, int slot, Direction side)
```

**Parameters:**

- `inv` (`WorldlyContainer`)
- `slot` (`int`)
- `side` (`Direction`)

**Returns:** `public static int`

### equals

```java
public boolean equals(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

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

### setInventorySlotContents

```java
 setInventorySlotContents()
```

**Returns:** ``

### setInventorySlotContents

```java
 setInventorySlotContents()
```

**Returns:** ``

### setInventorySlotContents

```java
 setInventorySlotContents()
```

**Returns:** ``

### setStackInSlot

```java
public void setStackInSlot(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

### setInventorySlotContents

```java
 setInventorySlotContents()
```

**Returns:** ``

### setInventorySlotContents

```java
private void setInventorySlotContents(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `private void`

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
