# ResourceHandlerSlot

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Extends:** `StackCopySlot`

## Description

Base implementation for a `Slot` backed by a `ResourceHandler<ItemResource>`.
Requires the handler to expose a IndexModifier direct mutation function,
such as `StacksResourceHandler#set`.

## Methods

### ResourceHandlerSlot

```java
public ResourceHandlerSlot(ResourceHandler<ItemResource> handler, IndexModifier<ItemResource> slotModifier, int index, int xPosition, int yPosition)
```

**Parameters:**

- `handler` (`ResourceHandler<ItemResource>`)
- `slotModifier` (`IndexModifier<ItemResource>`)
- `index` (`int`)
- `xPosition` (`int`)
- `yPosition` (`int`)

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
public boolean mayPickup(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `boolean`

### getResourceHandler

```java
public ResourceHandler<ItemResource> getResourceHandler()
```

**Returns:** `public ResourceHandler<ItemResource>`

### isSameInventory

```java
public boolean isSameInventory(Slot other)
```

**Parameters:**

- `other` (`Slot`)

**Returns:** `boolean`
