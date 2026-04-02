# HeavyCoreBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HeavyCoreBlock>` |  |

## Methods

### HeavyCoreBlock

```java
public HeavyCoreBlock(BlockBehaviour.Properties p_333904_)
```

**Parameters:**

- `p_333904_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### codec

```java
public MapCodec<HeavyCoreBlock> codec()
```

**Returns:** `MapCodec<HeavyCoreBlock>`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_333925_)
```

**Parameters:**

- `p_333925_` (`StateDefinition.Builder<Block, BlockState>`)

### updateShape

```java
protected BlockState updateShape(BlockState p_338756_, Direction p_338189_, BlockState p_338723_, LevelAccessor p_338514_, BlockPos p_338346_, BlockPos p_338401_)
```

**Parameters:**

- `p_338756_` (`BlockState`)
- `p_338189_` (`Direction`)
- `p_338723_` (`BlockState`)
- `p_338514_` (`LevelAccessor`)
- `p_338346_` (`BlockPos`)
- `p_338401_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_335518_)
```

**Parameters:**

- `p_335518_` (`BlockState`)

**Returns:** `FluidState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_338691_)
```

**Parameters:**

- `p_338691_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_334026_, BlockGetter p_334049_, BlockPos p_334056_, CollisionContext p_333870_)
```

**Parameters:**

- `p_334026_` (`BlockState`)
- `p_334049_` (`BlockGetter`)
- `p_334056_` (`BlockPos`)
- `p_333870_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_333758_, PathComputationType p_333728_)
```

**Parameters:**

- `p_333758_` (`BlockState`)
- `p_333728_` (`PathComputationType`)

**Returns:** `boolean`
