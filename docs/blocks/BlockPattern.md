# BlockPattern

**Package:** `net.minecraft.world.level.block.state.pattern`
**Type:** class

## Methods

### BlockPattern

```java
public BlockPattern(Predicate<BlockInWorld>[][][] p_61182_)
```

**Parameters:**

- `p_61182_` (`Predicate<BlockInWorld>[][][]`)

**Returns:** `public`

### getDepth

```java
public int getDepth()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### getPattern

```java
public Predicate<BlockInWorld>[][][] getPattern()
```

**Returns:** `Predicate<BlockInWorld>[][][]`

### matches

```java
public BlockPattern.BlockPatternMatch matches(LevelReader p_155965_, BlockPos p_155966_, Direction p_155967_, Direction p_155968_)
```

**Parameters:**

- `p_155965_` (`LevelReader`)
- `p_155966_` (`BlockPos`)
- `p_155967_` (`Direction`)
- `p_155968_` (`Direction`)

**Returns:** `BlockPattern.BlockPatternMatch`

### find

```java
public BlockPattern.BlockPatternMatch find(LevelReader p_61185_, BlockPos p_61186_)
```

**Parameters:**

- `p_61185_` (`LevelReader`)
- `p_61186_` (`BlockPos`)

**Returns:** `BlockPattern.BlockPatternMatch`

### createLevelCache

```java
public static LoadingCache<BlockPos, BlockInWorld> createLevelCache(LevelReader p_61188_, boolean p_61189_)
```

**Parameters:**

- `p_61188_` (`LevelReader`)
- `p_61189_` (`boolean`)

**Returns:** `public static LoadingCache<BlockPos, BlockInWorld>`

### translateAndRotate

```java
protected static BlockPos translateAndRotate(BlockPos p_61191_, Direction p_61192_, Direction p_61193_, int p_61194_, int p_61195_, int p_61196_)
```

**Parameters:**

- `p_61191_` (`BlockPos`)
- `p_61192_` (`Direction`)
- `p_61193_` (`Direction`)
- `p_61194_` (`int`)
- `p_61195_` (`int`)
- `p_61196_` (`int`)

**Returns:** `protected static BlockPos`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid forwards & up combination")
```

**Parameters:**

- `combination"` (`"Invalid forwards & up`)

**Returns:** `throw new`

### BlockCacheLoader

```java
public BlockCacheLoader(LevelReader p_61207_, boolean p_61208_)
```

**Parameters:**

- `p_61207_` (`LevelReader`)
- `p_61208_` (`boolean`)

**Returns:** `public`

### load

```java
public BlockInWorld load(BlockPos p_61210_)
```

**Parameters:**

- `p_61210_` (`BlockPos`)

**Returns:** `public BlockInWorld`

### BlockInWorld

```java
return new BlockInWorld()
```

**Returns:** `return new`

### BlockPatternMatch

```java
public BlockPatternMatch(BlockPos p_61221_, Direction p_61222_, Direction p_61223_, LoadingCache<BlockPos, BlockInWorld> p_61224_, int p_61225_, int p_61226_, int p_61227_)
```

**Parameters:**

- `p_61221_` (`BlockPos`)
- `p_61222_` (`Direction`)
- `p_61223_` (`Direction`)
- `p_61224_` (`LoadingCache<BlockPos, BlockInWorld>`)
- `p_61225_` (`int`)
- `p_61226_` (`int`)
- `p_61227_` (`int`)

**Returns:** `public`

### getFrontTopLeft

```java
public BlockPos getFrontTopLeft()
```

**Returns:** `public BlockPos`

### getForwards

```java
public Direction getForwards()
```

**Returns:** `public Direction`

### getUp

```java
public Direction getUp()
```

**Returns:** `public Direction`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### getDepth

```java
public int getDepth()
```

**Returns:** `public int`

### getBlock

```java
public BlockInWorld getBlock(int p_61230_, int p_61231_, int p_61232_)
```

**Parameters:**

- `p_61230_` (`int`)
- `p_61231_` (`int`)
- `p_61232_` (`int`)

**Returns:** `public BlockInWorld`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockPatternMatch` | class |  |
