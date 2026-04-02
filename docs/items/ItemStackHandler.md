# ItemStackHandler

**Package:** `net.neoforged.neoforge.items`
**Type:** class
**Implements:** `IItemHandler`, `IItemHandlerModifiable`, `INBTSerializable<CompoundTag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `stacks` | `NonNullList<ItemStack>` |  |

## Methods

### ItemStackHandler

```java
public ItemStackHandler()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ItemStackHandler

```java
public ItemStackHandler(int size)
```

**Parameters:**

- `size` (`int`)

**Returns:** `public`

### ItemStackHandler

```java
public ItemStackHandler(NonNullList<ItemStack> stacks)
```

**Parameters:**

- `stacks` (`NonNullList<ItemStack>`)

**Returns:** `public`

### setSize

```java
public void setSize(int size)
```

**Parameters:**

- `size` (`int`)

**Returns:** `public void`

### setStackInSlot

```java
public void setStackInSlot(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

### validateSlotIndex

```java
 validateSlotIndex()
```

**Returns:** ``

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

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

### validateSlotIndex

```java
 validateSlotIndex()
```

**Returns:** ``

### insertItem

```java
public ItemStack insertItem(int slot, ItemStack stack, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### validateSlotIndex

```java
 validateSlotIndex()
```

**Returns:** ``

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

### extractItem

```java
public ItemStack extractItem(int slot, int amount, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `amount` (`int`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### validateSlotIndex

```java
 validateSlotIndex()
```

**Returns:** ``

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

### getSlotLimit

```java
public int getSlotLimit(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `int`

### getStackLimit

```java
protected int getStackLimit(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `protected int`

### isItemValid

```java
public boolean isItemValid(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `boolean`

### serializeNBT

```java
public CompoundTag serializeNBT(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### deserializeNBT

```java
public void deserializeNBT(HolderLookup.Provider provider, CompoundTag nbt)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)
- `nbt` (`CompoundTag`)

### onLoad

```java
 onLoad()
```

**Returns:** ``

### validateSlotIndex

```java
protected void validateSlotIndex(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `protected void`

### onLoad

```java
protected void onLoad()
```

**Returns:** `protected void`

### onContentsChanged

```java
protected void onContentsChanged(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `protected void`
