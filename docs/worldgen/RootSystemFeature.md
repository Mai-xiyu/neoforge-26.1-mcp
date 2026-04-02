# RootSystemFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<RootSystemConfiguration>`

## Methods

### RootSystemFeature

```java
public RootSystemFeature(Codec<RootSystemConfiguration> p_160218_)
```

**Parameters:**

- `p_160218_` (`Codec<RootSystemConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<RootSystemConfiguration> p_160257_)
```

**Parameters:**

- `p_160257_` (`FeaturePlaceContext<RootSystemConfiguration>`)

**Returns:** `boolean`

### placeRoots

```java
 placeRoots()
```

**Returns:** ``

### spaceForTree

```java
private static boolean spaceForTree(WorldGenLevel p_160236_, RootSystemConfiguration p_160237_, BlockPos p_160238_)
```

**Parameters:**

- `p_160236_` (`WorldGenLevel`)
- `p_160237_` (`RootSystemConfiguration`)
- `p_160238_` (`BlockPos`)

**Returns:** `private static boolean`

### isAllowedTreeSpace

```java
private static boolean isAllowedTreeSpace(BlockState p_160253_, int p_160254_, int p_160255_)
```

**Parameters:**

- `p_160253_` (`BlockState`)
- `p_160254_` (`int`)
- `p_160255_` (`int`)

**Returns:** `private static boolean`

### placeDirtAndTree

```java
private static boolean placeDirtAndTree(WorldGenLevel p_225203_, ChunkGenerator p_225204_, RootSystemConfiguration p_225205_, RandomSource p_225206_, BlockPos.MutableBlockPos p_225207_, BlockPos p_225208_)
```

**Parameters:**

- `p_225203_` (`WorldGenLevel`)
- `p_225204_` (`ChunkGenerator`)
- `p_225205_` (`RootSystemConfiguration`)
- `p_225206_` (`RandomSource`)
- `p_225207_` (`BlockPos.MutableBlockPos`)
- `p_225208_` (`BlockPos`)

**Returns:** `private static boolean`

### placeDirt

```java
private static void placeDirt(BlockPos p_225223_, int p_225224_, WorldGenLevel p_225225_, RootSystemConfiguration p_225226_, RandomSource p_225227_)
```

**Parameters:**

- `p_225223_` (`BlockPos`)
- `p_225224_` (`int`)
- `p_225225_` (`WorldGenLevel`)
- `p_225226_` (`RootSystemConfiguration`)
- `p_225227_` (`RandomSource`)

**Returns:** `private static void`

### placeRootedDirt

```java
private static void placeRootedDirt(WorldGenLevel p_225210_, RootSystemConfiguration p_225211_, RandomSource p_225212_, int p_225213_, int p_225214_, BlockPos.MutableBlockPos p_225215_)
```

**Parameters:**

- `p_225210_` (`WorldGenLevel`)
- `p_225211_` (`RootSystemConfiguration`)
- `p_225212_` (`RandomSource`)
- `p_225213_` (`int`)
- `p_225214_` (`int`)
- `p_225215_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static void`

### placeRoots

```java
private static void placeRoots(WorldGenLevel p_225217_, RootSystemConfiguration p_225218_, RandomSource p_225219_, BlockPos p_225220_, BlockPos.MutableBlockPos p_225221_)
```

**Parameters:**

- `p_225217_` (`WorldGenLevel`)
- `p_225218_` (`RootSystemConfiguration`)
- `p_225219_` (`RandomSource`)
- `p_225220_` (`BlockPos`)
- `p_225221_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static void`
