# ShulkerBoxBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`
**Implements:** `WorldlyContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `COLUMNS` | `int` |  |
| `ROWS` | `int` |  |
| `CONTAINER_SIZE` | `int` |  |
| `EVENT_SET_OPEN_COUNT` | `int` |  |
| `OPENING_TICK_LENGTH` | `int` |  |
| `MAX_LID_HEIGHT` | `float` |  |
| `MAX_LID_ROTATION` | `float` |  |

## Methods

### ShulkerBoxBlockEntity

```java
public ShulkerBoxBlockEntity(DyeColor p_155666_, BlockPos p_155667_, BlockState p_155668_)
```

**Parameters:**

- `p_155666_` (`DyeColor`)
- `p_155667_` (`BlockPos`)
- `p_155668_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ShulkerBoxBlockEntity

```java
public ShulkerBoxBlockEntity(BlockPos p_155670_, BlockState p_155671_)
```

**Parameters:**

- `p_155670_` (`BlockPos`)
- `p_155671_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public static void tick(Level p_155673_, BlockPos p_155674_, BlockState p_155675_, ShulkerBoxBlockEntity p_155676_)
```

**Parameters:**

- `p_155673_` (`Level`)
- `p_155674_` (`BlockPos`)
- `p_155675_` (`BlockState`)
- `p_155676_` (`ShulkerBoxBlockEntity`)

**Returns:** `public static void`

### updateAnimation

```java
private void updateAnimation(Level p_155680_, BlockPos p_155681_, BlockState p_155682_)
```

**Parameters:**

- `p_155680_` (`Level`)
- `p_155681_` (`BlockPos`)
- `p_155682_` (`BlockState`)

**Returns:** `private void`

### doNeighborUpdates

```java
 doNeighborUpdates()
```

**Returns:** ``

### doNeighborUpdates

```java
 doNeighborUpdates()
```

**Returns:** ``

### doNeighborUpdates

```java
 doNeighborUpdates()
```

**Returns:** ``

### doNeighborUpdates

```java
 doNeighborUpdates()
```

**Returns:** ``

### getAnimationStatus

```java
public ShulkerBoxBlockEntity.AnimationStatus getAnimationStatus()
```

**Returns:** `public ShulkerBoxBlockEntity.AnimationStatus`

### getBoundingBox

```java
public AABB getBoundingBox(BlockState p_59667_)
```

**Parameters:**

- `p_59667_` (`BlockState`)

**Returns:** `public AABB`

### moveCollidedEntities

```java
private void moveCollidedEntities(Level p_155684_, BlockPos p_155685_, BlockState p_155686_)
```

**Parameters:**

- `p_155684_` (`Level`)
- `p_155685_` (`BlockPos`)
- `p_155686_` (`BlockState`)

**Returns:** `private void`

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### triggerEvent

```java
public boolean triggerEvent(int p_59678_, int p_59679_)
```

**Parameters:**

- `p_59678_` (`int`)
- `p_59679_` (`int`)

**Returns:** `boolean`

### doNeighborUpdates

```java
private static void doNeighborUpdates(Level p_155688_, BlockPos p_155689_, BlockState p_155690_)
```

**Parameters:**

- `p_155688_` (`Level`)
- `p_155689_` (`BlockPos`)
- `p_155690_` (`BlockState`)

**Returns:** `private static void`

### startOpen

```java
public void startOpen(Player p_59692_)
```

**Parameters:**

- `p_59692_` (`Player`)

### stopOpen

```java
public void stopOpen(Player p_59688_)
```

**Parameters:**

- `p_59688_` (`Player`)

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155678_, HolderLookup.Provider p_324114_)
```

**Parameters:**

- `p_155678_` (`CompoundTag`)
- `p_324114_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187513_, HolderLookup.Provider p_324152_)
```

**Parameters:**

- `p_187513_` (`CompoundTag`)
- `p_324152_` (`HolderLookup.Provider`)

### loadFromTag

```java
public void loadFromTag(CompoundTag p_59694_, HolderLookup.Provider p_331802_)
```

**Parameters:**

- `p_59694_` (`CompoundTag`)
- `p_331802_` (`HolderLookup.Provider`)

**Returns:** `public void`

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_59674_)
```

**Parameters:**

- `p_59674_` (`NonNullList<ItemStack>`)

### getSlotsForFace

```java
public int[] getSlotsForFace(Direction p_59672_)
```

**Parameters:**

- `p_59672_` (`Direction`)

**Returns:** `int[]`

### canPlaceItemThroughFace

```java
public boolean canPlaceItemThroughFace(int p_59663_, ItemStack p_59664_, Direction p_59665_)
```

**Parameters:**

- `p_59663_` (`int`)
- `p_59664_` (`ItemStack`)
- `p_59665_` (`Direction`)

**Returns:** `boolean`

### canTakeItemThroughFace

```java
public boolean canTakeItemThroughFace(int p_59682_, ItemStack p_59683_, Direction p_59684_)
```

**Parameters:**

- `p_59682_` (`int`)
- `p_59683_` (`ItemStack`)
- `p_59684_` (`Direction`)

**Returns:** `boolean`

### getProgress

```java
public float getProgress(float p_59658_)
```

**Parameters:**

- `p_59658_` (`float`)

**Returns:** `public float`

### getColor

```java
public DyeColor getColor()
```

**Returns:** `DyeColor`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_59660_, Inventory p_59661_)
```

**Parameters:**

- `p_59660_` (`int`)
- `p_59661_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### ShulkerBoxMenu

```java
return new ShulkerBoxMenu()
```

**Returns:** `return new`

### isClosed

```java
public boolean isClosed()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AnimationStatus` | enum |  |
