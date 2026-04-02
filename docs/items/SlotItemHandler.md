# SlotItemHandler

**Package:** `net.neoforged.neoforge.items`
**Type:** class
**Extends:** `Slot`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `index` | `int` |  |

## Methods

### SlotItemHandler

```java
public SlotItemHandler(IItemHandler itemHandler, int index, int xPosition, int yPosition)
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

### mayPlace

```java
public boolean mayPlace(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `ItemStack`

### set

```java
public void set(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

### initialize

```java
public void initialize(ItemStack stack)
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

### remove

```java
public ItemStack remove(int amount)
```

**Parameters:**

- `amount` (`int`)

**Returns:** `ItemStack`

### getItemHandler

```java
public IItemHandler getItemHandler()
```

**Returns:** `public IItemHandler`

### isSameInventory

```java
public boolean isSameInventory(Slot other)
```

**Parameters:**

- `other` (`Slot`)

**Returns:** `boolean`
