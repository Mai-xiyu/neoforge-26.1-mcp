# ChainBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `RotatedPillarBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ChainBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `AABB_MIN` | `float` |  |
| `AABB_MAX` | `float` |  |
| `Y_AXIS_AABB` | `VoxelShape` |  |
| `Z_AXIS_AABB` | `VoxelShape` |  |
| `X_AXIS_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<ChainBlock> codec()
```

**Returns:** `MapCodec<ChainBlock>`

### ChainBlock

```java
public ChainBlock(BlockBehaviour.Properties p_51452_)
```

**Parameters:**

- `p_51452_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_51470_, BlockGetter p_51471_, BlockPos p_51472_, CollisionContext p_51473_)
```

**Parameters:**

- `p_51470_` (`BlockState`)
- `p_51471_` (`BlockGetter`)
- `p_51472_` (`BlockPos`)
- `p_51473_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51454_)
```

**Parameters:**

- `p_51454_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_51461_, Direction p_51462_, BlockState p_51463_, LevelAccessor p_51464_, BlockPos p_51465_, BlockPos p_51466_)
```

**Parameters:**

- `p_51461_` (`BlockState`)
- `p_51462_` (`Direction`)
- `p_51463_` (`BlockState`)
- `p_51464_` (`LevelAccessor`)
- `p_51465_` (`BlockPos`)
- `p_51466_` (`BlockPos`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51468_)
```

**Parameters:**

- `p_51468_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_51475_)
```

**Parameters:**

- `p_51475_` (`BlockState`)

**Returns:** `FluidState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51456_, PathComputationType p_51459_)
```

**Parameters:**

- `p_51456_` (`BlockState`)
- `p_51459_` (`PathComputationType`)

**Returns:** `boolean`
