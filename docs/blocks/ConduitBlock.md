# ConduitBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ConduitBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<ConduitBlock> codec()
```

**Returns:** `MapCodec<ConduitBlock>`

### ConduitBlock

```java
public ConduitBlock(BlockBehaviour.Properties p_52094_)
```

**Parameters:**

- `p_52094_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52118_)
```

**Parameters:**

- `p_52118_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153098_, BlockState p_153099_)
```

**Parameters:**

- `p_153098_` (`BlockPos`)
- `p_153099_` (`BlockState`)

**Returns:** `BlockEntity`

### ConduitBlockEntity

```java
return new ConduitBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153094_, BlockState p_153095_, BlockEntityType<T> p_153096_)
```

**Parameters:**

- `p_153094_` (`Level`)
- `p_153095_` (`BlockState`)
- `p_153096_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper(p_153094_.isClientSide ? ConduitBlockEntity::clientTick : ConduitBlockEntity::serverTick)
```

**Parameters:**

- `ConduitBlockEntity::serverTick` (`p_153094_.isClientSide ? ConduitBlockEntity::clientTick :`)

**Returns:** `return`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_52120_)
```

**Parameters:**

- `p_52120_` (`BlockState`)

**Returns:** `RenderShape`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_52127_)
```

**Parameters:**

- `p_52127_` (`BlockState`)

**Returns:** `FluidState`

### updateShape

```java
protected BlockState updateShape(BlockState p_52111_, Direction p_52112_, BlockState p_52113_, LevelAccessor p_52114_, BlockPos p_52115_, BlockPos p_52116_)
```

**Parameters:**

- `p_52111_` (`BlockState`)
- `p_52112_` (`Direction`)
- `p_52113_` (`BlockState`)
- `p_52114_` (`LevelAccessor`)
- `p_52115_` (`BlockPos`)
- `p_52116_` (`BlockPos`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_52122_, BlockGetter p_52123_, BlockPos p_52124_, CollisionContext p_52125_)
```

**Parameters:**

- `p_52122_` (`BlockState`)
- `p_52123_` (`BlockGetter`)
- `p_52124_` (`BlockPos`)
- `p_52125_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52096_)
```

**Parameters:**

- `p_52096_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_52106_, PathComputationType p_52109_)
```

**Parameters:**

- `p_52106_` (`BlockState`)
- `p_52109_` (`PathComputationType`)

**Returns:** `boolean`
