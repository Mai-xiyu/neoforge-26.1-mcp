# HangingRootsBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HangingRootsBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<HangingRootsBlock> codec()
```

**Returns:** `MapCodec<HangingRootsBlock>`

### HangingRootsBlock

```java
public HangingRootsBlock(BlockBehaviour.Properties p_153337_)
```

**Parameters:**

- `p_153337_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153358_)
```

**Parameters:**

- `p_153358_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_153360_)
```

**Parameters:**

- `p_153360_` (`BlockState`)

**Returns:** `FluidState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_153340_)
```

**Parameters:**

- `p_153340_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_153347_, LevelReader p_153348_, BlockPos p_153349_)
```

**Parameters:**

- `p_153347_` (`BlockState`)
- `p_153348_` (`LevelReader`)
- `p_153349_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_153342_, BlockGetter p_153343_, BlockPos p_153344_, CollisionContext p_153345_)
```

**Parameters:**

- `p_153342_` (`BlockState`)
- `p_153343_` (`BlockGetter`)
- `p_153344_` (`BlockPos`)
- `p_153345_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_153351_, Direction p_153352_, BlockState p_153353_, LevelAccessor p_153354_, BlockPos p_153355_, BlockPos p_153356_)
```

**Parameters:**

- `p_153351_` (`BlockState`)
- `p_153352_` (`Direction`)
- `p_153353_` (`BlockState`)
- `p_153354_` (`LevelAccessor`)
- `p_153355_` (`BlockPos`)
- `p_153356_` (`BlockPos`)

**Returns:** `BlockState`
