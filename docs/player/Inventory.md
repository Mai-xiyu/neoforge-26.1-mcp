# Inventory

**Package:** `net.minecraft.world.entity.player`
**Type:** class
**Implements:** `Container`, `Nameable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `POP_TIME_DURATION` | `int` |  |
| `INVENTORY_SIZE` | `int` |  |
| `SLOT_OFFHAND` | `int` |  |
| `NOT_FOUND_INDEX` | `int` |  |
| `ALL_ARMOR_SLOTS` | `int[]` |  |
| `HELMET_SLOT_ONLY` | `int[]` |  |
| `items` | `NonNullList<ItemStack>` |  |
| `armor` | `NonNullList<ItemStack>` |  |
| `offhand` | `NonNullList<ItemStack>` |  |
| `selected` | `int` |  |
| `player` | `Player` |  |

## Methods

### Inventory

```java
public Inventory(Player p_35983_)
```

**Parameters:**

- `p_35983_` (`Player`)

**Returns:** `public`

### getSelected

```java
public ItemStack getSelected()
```

**Returns:** `public ItemStack`

### getSelectionSize

```java
public static int getSelectionSize()
```

**Returns:** `public static int`

### hasRemainingSpaceForItem

```java
private boolean hasRemainingSpaceForItem(ItemStack p_36015_, ItemStack p_36016_)
```

**Parameters:**

- `p_36015_` (`ItemStack`)
- `p_36016_` (`ItemStack`)

**Returns:** `private boolean`

### getFreeSlot

```java
public int getFreeSlot()
```

**Returns:** `public int`

### setPickedItem

```java
public void setPickedItem(ItemStack p_36013_)
```

**Parameters:**

- `p_36013_` (`ItemStack`)

**Returns:** `public void`

### pickSlot

```java
public void pickSlot(int p_36039_)
```

**Parameters:**

- `p_36039_` (`int`)

**Returns:** `public void`

### isHotbarSlot

```java
public static boolean isHotbarSlot(int p_36046_)
```

**Parameters:**

- `p_36046_` (`int`)

**Returns:** `public static boolean`

### findSlotMatchingItem

```java
public int findSlotMatchingItem(ItemStack p_36031_)
```

**Parameters:**

- `p_36031_` (`ItemStack`)

**Returns:** `public int`

### findSlotMatchingUnusedItem

```java
public int findSlotMatchingUnusedItem(ItemStack p_36044_)
```

**Parameters:**

- `p_36044_` (`ItemStack`)

**Returns:** `public int`

### getSuitableHotbarSlot

```java
public int getSuitableHotbarSlot()
```

**Returns:** `public int`

### swapPaint

```java
public void swapPaint(double p_35989_)
```

**Parameters:**

- `p_35989_` (`double`)

**Returns:** `public void`

### clearOrCountMatchingItems

```java
public int clearOrCountMatchingItems(Predicate<ItemStack> p_36023_, int p_36024_, Container p_36025_)
```

**Parameters:**

- `p_36023_` (`Predicate<ItemStack>`)
- `p_36024_` (`int`)
- `p_36025_` (`Container`)

**Returns:** `public int`

### addResource

```java
private int addResource(ItemStack p_36067_)
```

**Parameters:**

- `p_36067_` (`ItemStack`)

**Returns:** `private int`

### addResource

```java
private int addResource(int p_36048_, ItemStack p_36049_)
```

**Parameters:**

- `p_36048_` (`int`)
- `p_36049_` (`ItemStack`)

**Returns:** `private int`

### getSlotWithRemainingSpace

```java
public int getSlotWithRemainingSpace(ItemStack p_36051_)
```

**Parameters:**

- `p_36051_` (`ItemStack`)

**Returns:** `public int`

### tick

```java
public void tick()
```

**Returns:** `public void`

### add

```java
public boolean add(ItemStack p_36055_)
```

**Parameters:**

- `p_36055_` (`ItemStack`)

**Returns:** `public boolean`

### add

```java
public boolean add(int p_36041_, ItemStack p_36042_)
```

**Parameters:**

- `p_36041_` (`int`)
- `p_36042_` (`ItemStack`)

**Returns:** `public boolean`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### placeItemBackInInventory

```java
public void placeItemBackInInventory(ItemStack p_150080_)
```

**Parameters:**

- `p_150080_` (`ItemStack`)

**Returns:** `public void`

### placeItemBackInInventory

```java
public void placeItemBackInInventory(ItemStack p_150077_, boolean p_150078_)
```

**Parameters:**

- `p_150077_` (`ItemStack`)
- `p_150078_` (`boolean`)

**Returns:** `public void`

### removeItem

```java
public ItemStack removeItem(int p_35993_, int p_35994_)
```

**Parameters:**

- `p_35993_` (`int`)
- `p_35994_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public void removeItem(ItemStack p_36058_)
```

**Parameters:**

- `p_36058_` (`ItemStack`)

**Returns:** `public void`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_36029_)
```

**Parameters:**

- `p_36029_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_35999_, ItemStack p_36000_)
```

**Parameters:**

- `p_35999_` (`int`)
- `p_36000_` (`ItemStack`)

### getDestroySpeed

```java
public float getDestroySpeed(BlockState p_36021_)
```

**Parameters:**

- `p_36021_` (`BlockState`)

**Returns:** `public float`

### save

```java
public ListTag save(ListTag p_36027_)
```

**Parameters:**

- `p_36027_` (`ListTag`)

**Returns:** `public ListTag`

### load

```java
public void load(ListTag p_36036_)
```

**Parameters:**

- `p_36036_` (`ListTag`)

**Returns:** `public void`

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getItem

```java
public ItemStack getItem(int p_35991_)
```

**Parameters:**

- `p_35991_` (`int`)

**Returns:** `ItemStack`

### getName

```java
public Component getName()
```

**Returns:** `Component`

### getArmor

```java
public ItemStack getArmor(int p_36053_)
```

**Parameters:**

- `p_36053_` (`int`)

**Returns:** `public ItemStack`

### dropAll

```java
public void dropAll()
```

**Returns:** `public void`

### setChanged

```java
public void setChanged()
```

### getTimesChanged

```java
public int getTimesChanged()
```

**Returns:** `public int`

### stillValid

```java
public boolean stillValid(Player p_36009_)
```

**Parameters:**

- `p_36009_` (`Player`)

**Returns:** `boolean`

### contains

```java
public boolean contains(ItemStack p_36064_)
```

**Parameters:**

- `p_36064_` (`ItemStack`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(TagKey<Item> p_204076_)
```

**Parameters:**

- `p_204076_` (`TagKey<Item>`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(Predicate<ItemStack> p_316260_)
```

**Parameters:**

- `p_316260_` (`Predicate<ItemStack>`)

**Returns:** `public boolean`

### replaceWith

```java
public void replaceWith(Inventory p_36007_)
```

**Parameters:**

- `p_36007_` (`Inventory`)

**Returns:** `public void`

### clearContent

```java
public void clearContent()
```

### fillStackedContents

```java
public void fillStackedContents(StackedContents p_36011_)
```

**Parameters:**

- `p_36011_` (`StackedContents`)

**Returns:** `public void`

### removeFromSelected

```java
public ItemStack removeFromSelected(boolean p_182404_)
```

**Parameters:**

- `p_182404_` (`boolean`)

**Returns:** `public ItemStack`
