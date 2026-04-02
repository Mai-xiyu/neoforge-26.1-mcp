# AmethystClusterBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AmethystBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AmethystClusterBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `FACING` | `DirectionProperty` |  |
| `northAabb` | `VoxelShape` |  |
| `southAabb` | `VoxelShape` |  |
| `eastAabb` | `VoxelShape` |  |
| `westAabb` | `VoxelShape` |  |
| `upAabb` | `VoxelShape` |  |
| `downAabb` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<AmethystClusterBlock> codec()
```

**Returns:** `MapCodec<AmethystClusterBlock>`

### AmethystClusterBlock

```java
public AmethystClusterBlock(float p_304949_, float p_304728_, BlockBehaviour.Properties p_152017_)
```

**Parameters:**

- `p_304949_` (`float`)
- `p_304728_` (`float`)
- `p_152017_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_152021_, BlockGetter p_152022_, BlockPos p_152023_, CollisionContext p_152024_)
```

**Parameters:**

- `p_152021_` (`BlockState`)
- `p_152022_` (`BlockGetter`)
- `p_152023_` (`BlockPos`)
- `p_152024_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152026_, LevelReader p_152027_, BlockPos p_152028_)
```

**Parameters:**

- `p_152026_` (`BlockState`)
- `p_152027_` (`LevelReader`)
- `p_152028_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_152036_, Direction p_152037_, BlockState p_152038_, LevelAccessor p_152039_, BlockPos p_152040_, BlockPos p_152041_)
```

**Parameters:**

- `p_152036_` (`BlockState`)
- `p_152037_` (`Direction`)
- `p_152038_` (`BlockState`)
- `p_152039_` (`LevelAccessor`)
- `p_152040_` (`BlockPos`)
- `p_152041_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_152019_)
```

**Parameters:**

- `p_152019_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_152033_, Rotation p_152034_)
```

**Parameters:**

- `p_152033_` (`BlockState`)
- `p_152034_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_152030_, Mirror p_152031_)
```

**Parameters:**

- `p_152030_` (`BlockState`)
- `p_152031_` (`Mirror`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_152045_)
```

**Parameters:**

- `p_152045_` (`BlockState`)

**Returns:** `FluidState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152043_)
```

**Parameters:**

- `p_152043_` (`StateDefinition.Builder<Block, BlockState>`)
