# BlockUtil

**Package:** `net.minecraft`
**Type:** class

## Methods

### getLargestRectangleAround

```java
public static BlockUtil.FoundRectangle getLargestRectangleAround(BlockPos p_124335_, Direction.Axis p_124336_, int p_124337_, Direction.Axis p_124338_, int p_124339_, Predicate<BlockPos> p_124340_)
```

**Parameters:**

- `p_124335_` (`BlockPos`)
- `p_124336_` (`Direction.Axis`)
- `p_124337_` (`int`)
- `p_124338_` (`Direction.Axis`)
- `p_124339_` (`int`)
- `p_124340_` (`Predicate<BlockPos>`)

**Returns:** `public static BlockUtil.FoundRectangle`

### getLimit

```java
private static int getLimit(Predicate<BlockPos> p_124342_, BlockPos.MutableBlockPos p_124343_, Direction p_124344_, int p_124345_)
```

**Parameters:**

- `p_124342_` (`Predicate<BlockPos>`)
- `p_124343_` (`BlockPos.MutableBlockPos`)
- `p_124344_` (`Direction`)
- `p_124345_` (`int`)

**Returns:** `private static int`

### getMaxRectangleLocation

```java
static Pair<BlockUtil.IntBounds, Integer> getMaxRectangleLocation(int[] p_124347_)
```

**Parameters:**

- `p_124347_` (`int[]`)

**Returns:** `Pair<BlockUtil.IntBounds, Integer>`

### getTopConnectedBlock

```java
public static Optional<BlockPos> getTopConnectedBlock(BlockGetter p_177846_, BlockPos p_177847_, Block p_177848_, Direction p_177849_, Block p_177850_)
```

**Parameters:**

- `p_177846_` (`BlockGetter`)
- `p_177847_` (`BlockPos`)
- `p_177848_` (`Block`)
- `p_177849_` (`Direction`)
- `p_177850_` (`Block`)

**Returns:** `public static Optional<BlockPos>`

### FoundRectangle

```java
public FoundRectangle(BlockPos p_124352_, int p_124353_, int p_124354_)
```

**Parameters:**

- `p_124352_` (`BlockPos`)
- `p_124353_` (`int`)
- `p_124354_` (`int`)

**Returns:** `public`

### IntBounds

```java
public IntBounds(int p_124358_, int p_124359_)
```

**Parameters:**

- `p_124358_` (`int`)
- `p_124359_` (`int`)

**Returns:** `public`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FoundRectangle` | class |  |
| `IntBounds` | class |  |
