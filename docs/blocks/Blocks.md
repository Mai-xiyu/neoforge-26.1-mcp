# Blocks

**Package:** `net.minecraft.world.level.block`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `AIR` | `Block` |  |
| `STONE` | `Block` |  |
| `GRANITE` | `Block` |  |
| `POLISHED_GRANITE` | `Block` |  |
| `DIORITE` | `Block` |  |
| `POLISHED_DIORITE` | `Block` |  |
| `ANDESITE` | `Block` |  |
| `POLISHED_ANDESITE` | `Block` |  |
| `GRASS_BLOCK` | `Block` |  |
| `DIRT` | `Block` |  |
| `COARSE_DIRT` | `Block` |  |
| `PODZOL` | `Block` |  |
| `COBBLESTONE` | `Block` |  |
| `OAK_PLANKS` | `Block` |  |
| `SPRUCE_PLANKS` | `Block` |  |
| `BIRCH_PLANKS` | `Block` |  |
| `JUNGLE_PLANKS` | `Block` |  |

## Methods

### litBlockEmission

```java
private static ToIntFunction<BlockState> litBlockEmission(int p_50760_)
```

**Parameters:**

- `p_50760_` (`int`)

**Returns:** `private static ToIntFunction<BlockState>`

### waterloggedMapColor

```java
private static Function<BlockState, MapColor> waterloggedMapColor(MapColor p_341621_)
```

**Parameters:**

- `p_341621_` (`MapColor`)

**Returns:** `private static Function<BlockState, MapColor>`

### never

```java
public static Boolean never(BlockState p_50779_, BlockGetter p_50780_, BlockPos p_50781_, EntityType<?> p_50782_)
```

**Parameters:**

- `p_50779_` (`BlockState`)
- `p_50780_` (`BlockGetter`)
- `p_50781_` (`BlockPos`)
- `p_50782_` (`EntityType<?>`)

**Returns:** `public static Boolean`

### always

```java
public static Boolean always(BlockState p_50810_, BlockGetter p_50811_, BlockPos p_50812_, EntityType<?> p_50813_)
```

**Parameters:**

- `p_50810_` (`BlockState`)
- `p_50811_` (`BlockGetter`)
- `p_50812_` (`BlockPos`)
- `p_50813_` (`EntityType<?>`)

**Returns:** `public static Boolean`

### ocelotOrParrot

```java
public static Boolean ocelotOrParrot(BlockState p_50822_, BlockGetter p_50823_, BlockPos p_50824_, EntityType<?> p_50825_)
```

**Parameters:**

- `p_50822_` (`BlockState`)
- `p_50823_` (`BlockGetter`)
- `p_50824_` (`BlockPos`)
- `p_50825_` (`EntityType<?>`)

**Returns:** `public static Boolean`

### bed

```java
private static Block bed(DyeColor p_50765_)
```

**Parameters:**

- `p_50765_` (`DyeColor`)

**Returns:** `private static Block`

### log

```java
private static Block log(MapColor p_285370_, MapColor p_285126_)
```

**Parameters:**

- `p_285370_` (`MapColor`)
- `p_285126_` (`MapColor`)

**Returns:** `private static Block`

### log

```java
private static Block log(MapColor p_285425_, MapColor p_285292_, SoundType p_285418_)
```

**Parameters:**

- `p_285425_` (`MapColor`)
- `p_285292_` (`MapColor`)
- `p_285418_` (`SoundType`)

**Returns:** `private static Block`

### netherStem

```java
private static Block netherStem(MapColor p_285125_)
```

**Parameters:**

- `p_285125_` (`MapColor`)

**Returns:** `private static Block`

### always

```java
private static boolean always(BlockState p_50775_, BlockGetter p_50776_, BlockPos p_50777_)
```

**Parameters:**

- `p_50775_` (`BlockState`)
- `p_50776_` (`BlockGetter`)
- `p_50777_` (`BlockPos`)

**Returns:** `private static boolean`

### never

```java
private static boolean never(BlockState p_50806_, BlockGetter p_50807_, BlockPos p_50808_)
```

**Parameters:**

- `p_50806_` (`BlockState`)
- `p_50807_` (`BlockGetter`)
- `p_50808_` (`BlockPos`)

**Returns:** `private static boolean`

### stainedGlass

```java
private static Block stainedGlass(DyeColor p_50802_)
```

**Parameters:**

- `p_50802_` (`DyeColor`)

**Returns:** `private static Block`

### leaves

```java
private static Block leaves(SoundType p_152615_)
```

**Parameters:**

- `p_152615_` (`SoundType`)

**Returns:** `private static Block`

### shulkerBox

```java
private static Block shulkerBox(DyeColor p_50767_, MapColor p_304422_)
```

**Parameters:**

- `p_50767_` (`DyeColor`)
- `p_304422_` (`MapColor`)

**Returns:** `private static Block`

### pistonBase

```java
private static Block pistonBase(boolean p_50799_)
```

**Parameters:**

- `p_50799_` (`boolean`)

**Returns:** `private static Block`

### woodenButton

```java
private static Block woodenButton(BlockSetType p_278239_)
```

**Parameters:**

- `p_278239_` (`BlockSetType`)

**Returns:** `private static Block`

### stoneButton

```java
private static Block stoneButton()
```

**Returns:** `private static Block`

### flowerPot

```java
private static Block flowerPot(Block p_278261_)
```

**Parameters:**

- `p_278261_` (`Block`)

**Returns:** `private static Block`

### candle

```java
private static Block candle(MapColor p_285034_)
```

**Parameters:**

- `p_285034_` (`MapColor`)

**Returns:** `private static Block`

### stair

```java
private static Block stair(Block p_304516_)
```

**Parameters:**

- `p_304516_` (`Block`)

**Returns:** `private static Block`

### register

```java
public static Block register(String p_50796_, Block p_50797_)
```

**Parameters:**

- `p_50796_` (`String`)
- `p_50797_` (`Block`)

**Returns:** `public static Block`

### register

```java
public static Block register(ResourceKey<Block> p_304740_, Block p_294615_)
```

**Parameters:**

- `p_304740_` (`ResourceKey<Block>`)
- `p_294615_` (`Block`)

**Returns:** `public static Block`

### rebuildCache

```java
public static void rebuildCache()
```

**Returns:** `public static void`
