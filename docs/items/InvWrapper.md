# InvWrapper

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Methods

### InvWrapper

```java
public InvWrapper(Container inv)
```

**Parameters:**

- `inv` (`Container`)

**Returns:** `public`

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

### getInv

```java
public Container getInv()
```

**Returns:** `public Container`
