# DoubleBlockCombiner

**Package:** `net.minecraft.world.level.block`
**Type:** class

## Methods

### combineWithNeigbour

```java
<S extends BlockEntity> public static <S extends BlockEntity> DoubleBlockCombiner.NeighborCombineResult<S> combineWithNeigbour(BlockEntityType<S> p_52823_, Function<BlockState, DoubleBlockCombiner.BlockType> p_52824_, Function<BlockState, Direction> p_52825_, DirectionProperty p_52826_, BlockState p_52827_, LevelAccessor p_52828_, BlockPos p_52829_, BiPredicate<LevelAccessor, BlockPos> p_52830_)
```

**Parameters:**

- `p_52823_` (`BlockEntityType<S>`)
- `p_52824_` (`Function<BlockState, DoubleBlockCombiner.BlockType>`)
- `p_52825_` (`Function<BlockState, Direction>`)
- `p_52826_` (`DirectionProperty`)
- `p_52827_` (`BlockState`)
- `p_52828_` (`LevelAccessor`)
- `p_52829_` (`BlockPos`)
- `p_52830_` (`BiPredicate<LevelAccessor, BlockPos>`)

**Returns:** `public static <S extends BlockEntity> DoubleBlockCombiner.NeighborCombineResult<S>`

### acceptDouble

```java
T acceptDouble(S p_52843_, S p_52844_)
```

**Parameters:**

- `p_52843_` (`S`)
- `p_52844_` (`S`)

**Returns:** `T`

### acceptSingle

```java
T acceptSingle(S p_52842_)
```

**Parameters:**

- `p_52842_` (`S`)

**Returns:** `T`

### acceptNone

```java
T acceptNone()
```

**Returns:** `T`

### apply

```java
<T> <T> T apply(DoubleBlockCombiner.Combiner<? super S, T> p_52845_)
```

**Parameters:**

- `p_52845_` (`DoubleBlockCombiner.Combiner<? super S, T>`)

**Returns:** `<T> T`

### Double

```java
public Double(S p_52849_, S p_52850_)
```

**Parameters:**

- `p_52849_` (`S`)
- `p_52850_` (`S`)

**Returns:** `public`

### apply

```java
public <T> T apply(DoubleBlockCombiner.Combiner<? super S, T> p_52852_)
```

**Parameters:**

- `p_52852_` (`DoubleBlockCombiner.Combiner<? super S, T>`)

**Returns:** `T`

### Single

```java
public Single(S p_52855_)
```

**Parameters:**

- `p_52855_` (`S`)

**Returns:** `public`

### apply

```java
public <T> T apply(DoubleBlockCombiner.Combiner<? super S, T> p_52857_)
```

**Parameters:**

- `p_52857_` (`DoubleBlockCombiner.Combiner<? super S, T>`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockType` | enum |  |
| `Combiner` | interface |  |
| `NeighborCombineResult` | interface |  |
| `Double` | class |  |
| `Single` | class |  |
