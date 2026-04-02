# SeaPickleBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SeaPickleBlock>` |  |
| `MAX_PICKLES` | `int` |  |
| `PICKLES` | `IntegerProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `ONE_AABB` | `VoxelShape` |  |
| `TWO_AABB` | `VoxelShape` |  |
| `THREE_AABB` | `VoxelShape` |  |
| `FOUR_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<SeaPickleBlock> codec()
```

**Returns:** `MapCodec<SeaPickleBlock>`

### SeaPickleBlock

```java
public SeaPickleBlock(BlockBehaviour.Properties p_56082_)
```

**Parameters:**

- `p_56082_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56089_)
```

**Parameters:**

- `p_56089_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### isDead

```java
public static boolean isDead(BlockState p_56133_)
```

**Parameters:**

- `p_56133_` (`BlockState`)

**Returns:** `public static boolean`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_56127_, BlockGetter p_56128_, BlockPos p_56129_)
```

**Parameters:**

- `p_56127_` (`BlockState`)
- `p_56128_` (`BlockGetter`)
- `p_56129_` (`BlockPos`)

**Returns:** `boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_56109_, LevelReader p_56110_, BlockPos p_56111_)
```

**Parameters:**

- `p_56109_` (`BlockState`)
- `p_56110_` (`LevelReader`)
- `p_56111_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_56113_, Direction p_56114_, BlockState p_56115_, LevelAccessor p_56116_, BlockPos p_56117_, BlockPos p_56118_)
```

**Parameters:**

- `p_56113_` (`BlockState`)
- `p_56114_` (`Direction`)
- `p_56115_` (`BlockState`)
- `p_56116_` (`LevelAccessor`)
- `p_56117_` (`BlockPos`)
- `p_56118_` (`BlockPos`)

**Returns:** `BlockState`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_56101_, BlockPlaceContext p_56102_)
```

**Parameters:**

- `p_56101_` (`BlockState`)
- `p_56102_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_56122_, BlockGetter p_56123_, BlockPos p_56124_, CollisionContext p_56125_)
```

**Parameters:**

- `p_56122_` (`BlockState`)
- `p_56123_` (`BlockGetter`)
- `p_56124_` (`BlockPos`)
- `p_56125_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_56131_)
```

**Parameters:**

- `p_56131_` (`BlockState`)

**Returns:** `FluidState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56120_)
```

**Parameters:**

- `p_56120_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255984_, BlockPos p_56092_, BlockState p_56093_)
```

**Parameters:**

- `p_255984_` (`LevelReader`)
- `p_56092_` (`BlockPos`)
- `p_56093_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222418_, RandomSource p_222419_, BlockPos p_222420_, BlockState p_222421_)
```

**Parameters:**

- `p_222418_` (`Level`)
- `p_222419_` (`RandomSource`)
- `p_222420_` (`BlockPos`)
- `p_222421_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222413_, RandomSource p_222414_, BlockPos p_222415_, BlockState p_222416_)
```

**Parameters:**

- `p_222413_` (`ServerLevel`)
- `p_222414_` (`RandomSource`)
- `p_222415_` (`BlockPos`)
- `p_222416_` (`BlockState`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_56104_, PathComputationType p_56107_)
```

**Parameters:**

- `p_56104_` (`BlockState`)
- `p_56107_` (`PathComputationType`)

**Returns:** `boolean`
