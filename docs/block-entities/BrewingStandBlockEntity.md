# BrewingStandBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BaseContainerBlockEntity`
**Implements:** `WorldlyContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FUEL_USES` | `int` |  |
| `DATA_BREW_TIME` | `int` |  |
| `DATA_FUEL_USES` | `int` |  |
| `NUM_DATA_VALUES` | `int` |  |
| `dataAccess` | `ContainerData` |  |

## Methods

### get

```java
public int get(int p_59038_)
```

**Parameters:**

- `p_59038_` (`int`)

**Returns:** `int`

### set

```java
public void set(int p_59040_, int p_59041_)
```

**Parameters:**

- `p_59040_` (`int`)
- `p_59041_` (`int`)

### getCount

```java
public int getCount()
```

**Returns:** `int`

### BrewingStandBlockEntity

```java
public BrewingStandBlockEntity(BlockPos p_155283_, BlockState p_155284_)
```

**Parameters:**

- `p_155283_` (`BlockPos`)
- `p_155284_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_332710_)
```

**Parameters:**

- `p_332710_` (`NonNullList<ItemStack>`)

### serverTick

```java
public static void serverTick(Level p_155286_, BlockPos p_155287_, BlockState p_155288_, BrewingStandBlockEntity p_155289_)
```

**Parameters:**

- `p_155286_` (`Level`)
- `p_155287_` (`BlockPos`)
- `p_155288_` (`BlockState`)
- `p_155289_` (`BrewingStandBlockEntity`)

**Returns:** `public static void`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### doBrew

```java
 doBrew()
```

**Returns:** ``

### setChanged

```java
 setChanged()
```

**Returns:** ``

### setChanged

```java
 setChanged()
```

**Returns:** ``

### getPotionBits

```java
private boolean[] getPotionBits()
```

**Returns:** `private boolean[]`

### isBrewable

```java
private static boolean isBrewable(PotionBrewing p_341061_, NonNullList<ItemStack> p_155295_)
```

**Parameters:**

- `p_341061_` (`PotionBrewing`)
- `p_155295_` (`NonNullList<ItemStack>`)

**Returns:** `private static boolean`

### doBrew

```java
private static void doBrew(Level p_155291_, BlockPos p_155292_, NonNullList<ItemStack> p_155293_)
```

**Parameters:**

- `p_155291_` (`Level`)
- `p_155292_` (`BlockPos`)
- `p_155293_` (`NonNullList<ItemStack>`)

**Returns:** `private static void`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338530_, HolderLookup.Provider p_338200_)
```

**Parameters:**

- `p_338530_` (`CompoundTag`)
- `p_338200_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187484_, HolderLookup.Provider p_324461_)
```

**Parameters:**

- `p_187484_` (`CompoundTag`)
- `p_324461_` (`HolderLookup.Provider`)

### canPlaceItem

```java
public boolean canPlaceItem(int p_59017_, ItemStack p_59018_)
```

**Parameters:**

- `p_59017_` (`int`)
- `p_59018_` (`ItemStack`)

**Returns:** `boolean`

### getSlotsForFace

```java
public int[] getSlotsForFace(Direction p_59010_)
```

**Parameters:**

- `p_59010_` (`Direction`)

**Returns:** `int[]`

### canPlaceItemThroughFace

```java
public boolean canPlaceItemThroughFace(int p_58996_, ItemStack p_58997_, Direction p_58998_)
```

**Parameters:**

- `p_58996_` (`int`)
- `p_58997_` (`ItemStack`)
- `p_58998_` (`Direction`)

**Returns:** `boolean`

### canTakeItemThroughFace

```java
public boolean canTakeItemThroughFace(int p_59020_, ItemStack p_59021_, Direction p_59022_)
```

**Parameters:**

- `p_59020_` (`int`)
- `p_59021_` (`ItemStack`)
- `p_59022_` (`Direction`)

**Returns:** `boolean`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_58990_, Inventory p_58991_)
```

**Parameters:**

- `p_58990_` (`int`)
- `p_58991_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### BrewingStandMenu

```java
return new BrewingStandMenu()
```

**Returns:** `return new`
