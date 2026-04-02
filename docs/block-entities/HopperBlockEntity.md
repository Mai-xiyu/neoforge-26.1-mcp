# HopperBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`
**Implements:** `Hopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MOVE_ITEM_SPEED` | `int` |  |
| `HOPPER_CONTAINER_SIZE` | `int` |  |

## Methods

### HopperBlockEntity

```java
public HopperBlockEntity(BlockPos p_155550_, BlockState p_155551_)
```

**Parameters:**

- `p_155550_` (`BlockPos`)
- `p_155551_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155588_, HolderLookup.Provider p_324320_)
```

**Parameters:**

- `p_155588_` (`CompoundTag`)
- `p_324320_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187502_, HolderLookup.Provider p_324174_)
```

**Parameters:**

- `p_187502_` (`CompoundTag`)
- `p_324174_` (`HolderLookup.Provider`)

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### removeItem

```java
public ItemStack removeItem(int p_59309_, int p_59310_)
```

**Parameters:**

- `p_59309_` (`int`)
- `p_59310_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_59315_, ItemStack p_59316_)
```

**Parameters:**

- `p_59315_` (`int`)
- `p_59316_` (`ItemStack`)

### setBlockState

```java
public void setBlockState(BlockState p_326468_)
```

**Parameters:**

- `p_326468_` (`BlockState`)

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### pushItemsTick

```java
public static void pushItemsTick(Level p_155574_, BlockPos p_155575_, BlockState p_155576_, HopperBlockEntity p_155577_)
```

**Parameters:**

- `p_155574_` (`Level`)
- `p_155575_` (`BlockPos`)
- `p_155576_` (`BlockState`)
- `p_155577_` (`HopperBlockEntity`)

**Returns:** `public static void`

### tryMoveItems

```java
private static boolean tryMoveItems(Level p_155579_, BlockPos p_155580_, BlockState p_155581_, HopperBlockEntity p_155582_, BooleanSupplier p_155583_)
```

**Parameters:**

- `p_155579_` (`Level`)
- `p_155580_` (`BlockPos`)
- `p_155581_` (`BlockState`)
- `p_155582_` (`HopperBlockEntity`)
- `p_155583_` (`BooleanSupplier`)

**Returns:** `private static boolean`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### inventoryFull

```java
private boolean inventoryFull()
```

**Returns:** `private boolean`

### ejectItems

```java
private static boolean ejectItems(Level p_155563_, BlockPos p_155564_, HopperBlockEntity p_326256_)
```

**Parameters:**

- `p_155563_` (`Level`)
- `p_155564_` (`BlockPos`)
- `p_326256_` (`HopperBlockEntity`)

**Returns:** `private static boolean`

### getSlots

```java
private static int[] getSlots(Container p_59340_, Direction p_59341_)
```

**Parameters:**

- `p_59340_` (`Container`)
- `p_59341_` (`Direction`)

**Returns:** `private static int[]`

### createFlatSlots

```java
return createFlatSlots()
```

**Returns:** `return`

### createFlatSlots

```java
private static int[] createFlatSlots(int p_326328_)
```

**Parameters:**

- `p_326328_` (`int`)

**Returns:** `private static int[]`

### isFullContainer

```java
private static boolean isFullContainer(Container p_59386_, Direction p_59387_)
```

**Parameters:**

- `p_59386_` (`Container`)
- `p_59387_` (`Direction`)

**Returns:** `private static boolean`

### suckInItems

```java
public static boolean suckInItems(Level p_155553_, Hopper p_155554_)
```

**Parameters:**

- `p_155553_` (`Level`)
- `p_155554_` (`Hopper`)

**Returns:** `public static boolean`

### tryTakeInItemFromSlot

```java
private static boolean tryTakeInItemFromSlot(Hopper p_59355_, Container p_59356_, int p_59357_, Direction p_59358_)
```

**Parameters:**

- `p_59355_` (`Hopper`)
- `p_59356_` (`Container`)
- `p_59357_` (`int`)
- `p_59358_` (`Direction`)

**Returns:** `private static boolean`

### addItem

```java
public static boolean addItem(Container p_59332_, ItemEntity p_59333_)
```

**Parameters:**

- `p_59332_` (`Container`)
- `p_59333_` (`ItemEntity`)

**Returns:** `public static boolean`

### addItem

```java
public static ItemStack addItem(Container p_59327_, Container p_59328_, ItemStack p_59329_, Direction p_59330_)
```

**Parameters:**

- `p_59327_` (`Container`)
- `p_59328_` (`Container`)
- `p_59329_` (`ItemStack`)
- `p_59330_` (`Direction`)

**Returns:** `public static ItemStack`

### canPlaceItemInContainer

```java
private static boolean canPlaceItemInContainer(Container p_59335_, ItemStack p_59336_, int p_59337_, Direction p_59338_)
```

**Parameters:**

- `p_59335_` (`Container`)
- `p_59336_` (`ItemStack`)
- `p_59337_` (`int`)
- `p_59338_` (`Direction`)

**Returns:** `private static boolean`

### canTakeItemFromContainer

```java
private static boolean canTakeItemFromContainer(Container p_273433_, Container p_273542_, ItemStack p_273400_, int p_273519_, Direction p_273088_)
```

**Parameters:**

- `p_273433_` (`Container`)
- `p_273542_` (`Container`)
- `p_273400_` (`ItemStack`)
- `p_273519_` (`int`)
- `p_273088_` (`Direction`)

**Returns:** `private static boolean`

### tryMoveInItem

```java
private static ItemStack tryMoveInItem(Container p_59321_, Container p_59322_, ItemStack p_59323_, int p_59324_, Direction p_59325_)
```

**Parameters:**

- `p_59321_` (`Container`)
- `p_59322_` (`Container`)
- `p_59323_` (`ItemStack`)
- `p_59324_` (`int`)
- `p_59325_` (`Direction`)

**Returns:** `private static ItemStack`

### getItemsAtAndAbove

```java
public static List<ItemEntity> getItemsAtAndAbove(Level p_155590_, Hopper p_155591_)
```

**Parameters:**

- `p_155590_` (`Level`)
- `p_155591_` (`Hopper`)

**Returns:** `public static List<ItemEntity>`

### getContainerAt

```java
public static Container getContainerAt(Level p_59391_, BlockPos p_59392_)
```

**Parameters:**

- `p_59391_` (`Level`)
- `p_59392_` (`BlockPos`)

**Returns:** `Container`

### canMergeItems

```java
private static boolean canMergeItems(ItemStack p_59345_, ItemStack p_59346_)
```

**Parameters:**

- `p_59345_` (`ItemStack`)
- `p_59346_` (`ItemStack`)

**Returns:** `private static boolean`

### getLevelX

```java
public double getLevelX()
```

**Returns:** `double`

### getLevelY

```java
public double getLevelY()
```

**Returns:** `double`

### getLevelZ

```java
public double getLevelZ()
```

**Returns:** `double`

### isGridAligned

```java
public boolean isGridAligned()
```

**Returns:** `boolean`

### setCooldown

```java
public void setCooldown(int p_59396_)
```

**Parameters:**

- `p_59396_` (`int`)

**Returns:** `public void`

### isOnCooldown

```java
private boolean isOnCooldown()
```

**Returns:** `private boolean`

### isOnCustomCooldown

```java
public boolean isOnCustomCooldown()
```

**Returns:** `public boolean`

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_59371_)
```

**Parameters:**

- `p_59371_` (`NonNullList<ItemStack>`)

### entityInside

```java
public static void entityInside(Level p_155568_, BlockPos p_155569_, BlockState p_155570_, Entity p_155571_, HopperBlockEntity p_155572_)
```

**Parameters:**

- `p_155568_` (`Level`)
- `p_155569_` (`BlockPos`)
- `p_155570_` (`BlockState`)
- `p_155571_` (`Entity`)
- `p_155572_` (`HopperBlockEntity`)

**Returns:** `public static void`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_59312_, Inventory p_59313_)
```

**Parameters:**

- `p_59312_` (`int`)
- `p_59313_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### HopperMenu

```java
return new HopperMenu()
```

**Returns:** `return new`

### getLastUpdateTime

```java
public long getLastUpdateTime()
```

**Returns:** `public long`
