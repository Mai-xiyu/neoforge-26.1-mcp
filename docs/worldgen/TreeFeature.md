# TreeFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<TreeConfiguration>`

## Methods

### TreeFeature

```java
public TreeFeature(Codec<TreeConfiguration> p_67201_)
```

**Parameters:**

- `p_67201_` (`Codec<TreeConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isVine

```java
private static boolean isVine(LevelSimulatedReader p_67278_, BlockPos p_67279_)
```

**Parameters:**

- `p_67278_` (`LevelSimulatedReader`)
- `p_67279_` (`BlockPos`)

**Returns:** `private static boolean`

### isAirOrLeaves

```java
public static boolean isAirOrLeaves(LevelSimulatedReader p_67268_, BlockPos p_67269_)
```

**Parameters:**

- `p_67268_` (`LevelSimulatedReader`)
- `p_67269_` (`BlockPos`)

**Returns:** `public static boolean`

### setBlockKnownShape

```java
private static void setBlockKnownShape(LevelWriter p_67257_, BlockPos p_67258_, BlockState p_67259_)
```

**Parameters:**

- `p_67257_` (`LevelWriter`)
- `p_67258_` (`BlockPos`)
- `p_67259_` (`BlockState`)

**Returns:** `private static void`

### validTreePos

```java
public static boolean validTreePos(LevelSimulatedReader p_67273_, BlockPos p_67274_)
```

**Parameters:**

- `p_67273_` (`LevelSimulatedReader`)
- `p_67274_` (`BlockPos`)

**Returns:** `public static boolean`

### doPlace

```java
private boolean doPlace(WorldGenLevel p_225258_, RandomSource p_225259_, BlockPos p_225260_, BiConsumer<BlockPos, BlockState> p_225261_, BiConsumer<BlockPos, BlockState> p_225262_, FoliagePlacer.FoliageSetter p_273670_, TreeConfiguration p_225264_)
```

**Parameters:**

- `p_225258_` (`WorldGenLevel`)
- `p_225259_` (`RandomSource`)
- `p_225260_` (`BlockPos`)
- `p_225261_` (`BiConsumer<BlockPos, BlockState>`)
- `p_225262_` (`BiConsumer<BlockPos, BlockState>`)
- `p_273670_` (`FoliagePlacer.FoliageSetter`)
- `p_225264_` (`TreeConfiguration`)

**Returns:** `private boolean`

### getMaxFreeTreeHeight

```java
private int getMaxFreeTreeHeight(LevelSimulatedReader p_67216_, int p_67217_, BlockPos p_67218_, TreeConfiguration p_67219_)
```

**Parameters:**

- `p_67216_` (`LevelSimulatedReader`)
- `p_67217_` (`int`)
- `p_67218_` (`BlockPos`)
- `p_67219_` (`TreeConfiguration`)

**Returns:** `private int`

### setBlock

```java
protected void setBlock(LevelWriter p_67221_, BlockPos p_67222_, BlockState p_67223_)
```

**Parameters:**

- `p_67221_` (`LevelWriter`)
- `p_67222_` (`BlockPos`)
- `p_67223_` (`BlockState`)

### setBlockKnownShape

```java
 setBlockKnownShape()
```

**Returns:** ``

### place

```java
public final boolean place(FeaturePlaceContext<TreeConfiguration> p_160530_)
```

**Parameters:**

- `p_160530_` (`FeaturePlaceContext<TreeConfiguration>`)

**Returns:** `boolean`

### set

```java
public void set(BlockPos p_272825_, BlockState p_273311_)
```

**Parameters:**

- `p_272825_` (`BlockPos`)
- `p_273311_` (`BlockState`)

### isSet

```java
public boolean isSet(BlockPos p_272999_)
```

**Parameters:**

- `p_272999_` (`BlockPos`)

**Returns:** `boolean`

### updateLeaves

```java
private static DiscreteVoxelShape updateLeaves(LevelAccessor p_225252_, BoundingBox p_225253_, Set<BlockPos> p_225254_, Set<BlockPos> p_225255_, Set<BlockPos> p_225256_)
```

**Parameters:**

- `p_225252_` (`LevelAccessor`)
- `p_225253_` (`BoundingBox`)
- `p_225254_` (`Set<BlockPos>`)
- `p_225255_` (`Set<BlockPos>`)
- `p_225256_` (`Set<BlockPos>`)

**Returns:** `private static DiscreteVoxelShape`
