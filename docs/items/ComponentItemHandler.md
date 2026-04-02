# ComponentItemHandler

**Package:** `net.neoforged.neoforge.items`
**Type:** class
**Implements:** `IItemHandlerModifiable`

## Description

Variant of `ItemStackHandler` for use with data components.



The actual data storage is managed by a data component, and all changes will write back to that component.



To use this class, register a new `DataComponentType` which holds an `ItemContainerContents` for your item.
Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.



Since data components are immutable, this will not work nicely with vanilla's container methods which expect the stack to be mutable.
Use `ItemHandlerCopySlot` to get around this issue.
@implNote All functions in this class should attempt to minimize component read/writes to avoid unnecessary churn, noting that the component can never be cached.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `parent` | `MutableDataComponentHolder` |  |
| `component` | `DataComponentType<ItemContainerContents>` |  |
| `size` | `int` |  |

## Methods

### ComponentItemHandler

```java
public public ComponentItemHandler(MutableDataComponentHolder parent, DataComponentType<ItemContainerContents> component, int size)
```

**Parameters:**

- `parent` (`MutableDataComponentHolder`)
- `component` (`DataComponentType<ItemContainerContents>`)
- `size` (`int`)

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

### setStackInSlot

```java
public void setStackInSlot(int slot, ItemStack stack)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)

### insertItem

```java
public ItemStack insertItem(int slot, ItemStack toInsert, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `toInsert` (`ItemStack`)
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

### onContentsChanged

```java
protected void onContentsChanged(int slot, ItemStack oldStack, ItemStack newStack)
```

**Parameters:**

- `slot` (`int`)
- `oldStack` (`ItemStack`)
- `newStack` (`ItemStack`)

### getContents

```java
protected ItemContainerContents getContents()
```

**Returns:** `ItemContainerContents`

### getStackFromContents

```java
protected ItemStack getStackFromContents(ItemContainerContents contents, int slot)
```

**Parameters:**

- `contents` (`ItemContainerContents`)
- `slot` (`int`)

**Returns:** `ItemStack`

### updateContents

```java
protected void updateContents(ItemContainerContents contents, ItemStack stack, int slot)
```

**Parameters:**

- `contents` (`ItemContainerContents`)
- `stack` (`ItemStack`)
- `slot` (`int`)

### validateSlotIndex

```java
protected final void validateSlotIndex(int slot)
```

**Parameters:**

- `slot` (`int`)
