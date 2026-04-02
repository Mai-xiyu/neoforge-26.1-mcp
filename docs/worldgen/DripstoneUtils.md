# DripstoneUtils

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class

## Methods

### getDripstoneHeight

```java
protected static double getDripstoneHeight(double p_159624_, double p_159625_, double p_159626_, double p_159627_)
```

**Parameters:**

- `p_159624_` (`double`)
- `p_159625_` (`double`)
- `p_159626_` (`double`)
- `p_159627_` (`double`)

**Returns:** `protected static double`

### isCircleMostlyEmbeddedInStone

```java
protected static boolean isCircleMostlyEmbeddedInStone(WorldGenLevel p_159640_, BlockPos p_159641_, int p_159642_)
```

**Parameters:**

- `p_159640_` (`WorldGenLevel`)
- `p_159641_` (`BlockPos`)
- `p_159642_` (`int`)

**Returns:** `protected static boolean`

### isEmptyOrWater

```java
protected static boolean isEmptyOrWater(LevelAccessor p_159629_, BlockPos p_159630_)
```

**Parameters:**

- `p_159629_` (`LevelAccessor`)
- `p_159630_` (`BlockPos`)

**Returns:** `protected static boolean`

### isEmptyOrWaterOrLava

```java
protected static boolean isEmptyOrWaterOrLava(LevelAccessor p_159660_, BlockPos p_159661_)
```

**Parameters:**

- `p_159660_` (`LevelAccessor`)
- `p_159661_` (`BlockPos`)

**Returns:** `protected static boolean`

### buildBaseToTipColumn

```java
protected static void buildBaseToTipColumn(Direction p_159652_, int p_159653_, boolean p_159654_, Consumer<BlockState> p_159655_)
```

**Parameters:**

- `p_159652_` (`Direction`)
- `p_159653_` (`int`)
- `p_159654_` (`boolean`)
- `p_159655_` (`Consumer<BlockState>`)

**Returns:** `protected static void`

### growPointedDripstone

```java
protected static void growPointedDripstone(LevelAccessor p_190848_, BlockPos p_190849_, Direction p_190850_, int p_190851_, boolean p_190852_)
```

**Parameters:**

- `p_190848_` (`LevelAccessor`)
- `p_190849_` (`BlockPos`)
- `p_190850_` (`Direction`)
- `p_190851_` (`int`)
- `p_190852_` (`boolean`)

**Returns:** `protected static void`

### placeDripstoneBlockIfPossible

```java
protected static boolean placeDripstoneBlockIfPossible(LevelAccessor p_190854_, BlockPos p_190855_)
```

**Parameters:**

- `p_190854_` (`LevelAccessor`)
- `p_190855_` (`BlockPos`)

**Returns:** `protected static boolean`

### createPointedDripstone

```java
private static BlockState createPointedDripstone(Direction p_159657_, DripstoneThickness p_159658_)
```

**Parameters:**

- `p_159657_` (`Direction`)
- `p_159658_` (`DripstoneThickness`)

**Returns:** `private static BlockState`

### isDripstoneBaseOrLava

```java
public static boolean isDripstoneBaseOrLava(BlockState p_159650_)
```

**Parameters:**

- `p_159650_` (`BlockState`)

**Returns:** `public static boolean`

### isDripstoneBase

```java
public static boolean isDripstoneBase(BlockState p_159663_)
```

**Parameters:**

- `p_159663_` (`BlockState`)

**Returns:** `public static boolean`

### isEmptyOrWater

```java
public static boolean isEmptyOrWater(BlockState p_159665_)
```

**Parameters:**

- `p_159665_` (`BlockState`)

**Returns:** `public static boolean`

### isNeitherEmptyNorWater

```java
public static boolean isNeitherEmptyNorWater(BlockState p_203131_)
```

**Parameters:**

- `p_203131_` (`BlockState`)

**Returns:** `public static boolean`

### isEmptyOrWaterOrLava

```java
public static boolean isEmptyOrWaterOrLava(BlockState p_159667_)
```

**Parameters:**

- `p_159667_` (`BlockState`)

**Returns:** `public static boolean`
