# ItemHandlerCopySlot

**Package:** `net.neoforged.neoforge.items`
**Type:** class
**Extends:** `StackCopySlot`

## Description

Slot class that can be used with immutable `IItemHandler`s
like `ComponentItemHandler`.

## Methods

### ItemHandlerCopySlot

```java
public ItemHandlerCopySlot(IItemHandler itemHandler, int index, int xPosition, int yPosition)
```

**Parameters:**

- `itemHandler` (`IItemHandler`)
- `index` (`int`)
- `xPosition` (`int`)
- `yPosition` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ItemHandlerCopySlot

```java
public ItemHandlerCopySlot(SlotItemHandler slotItemHandler)
```

**Parameters:**

- `slotItemHandler` (`SlotItemHandler`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getStackCopy

```java
protected ItemStack getStackCopy()
```

**Returns:** `ItemStack`

### setStackCopy

```java
protected void setStackCopy(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

### onQuickCraft

```java
public void onQuickCraft(ItemStack oldStackIn, ItemStack newStackIn)
```

**Parameters:**

- `oldStackIn` (`ItemStack`)
- `newStackIn` (`ItemStack`)

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### getMaxStackSize

```java
public int getMaxStackSize(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### mayPickup

```java
public boolean mayPickup(Player playerIn)
```

**Parameters:**

- `playerIn` (`Player`)

**Returns:** `boolean`

### isSameInventory

```java
public boolean isSameInventory(Slot other)
```

**Parameters:**

- `other` (`Slot`)

**Returns:** `boolean`

### getItemHandler

```java
public IItemHandler getItemHandler()
```

**Returns:** `public IItemHandler`
