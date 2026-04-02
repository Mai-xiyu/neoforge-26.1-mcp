# EnderChestBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractChestBlock<EnderChestBlockEntity>`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EnderChestBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<EnderChestBlock> codec()
```

**Returns:** `MapCodec<EnderChestBlock>`

### EnderChestBlock

```java
public EnderChestBlock(BlockBehaviour.Properties p_53121_)
```

**Parameters:**

- `p_53121_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### combine

```java
public DoubleBlockCombiner.NeighborCombineResult<? extends ChestBlockEntity> combine(BlockState p_53149_, Level p_53150_, BlockPos p_53151_, boolean p_53152_)
```

**Parameters:**

- `p_53149_` (`BlockState`)
- `p_53150_` (`Level`)
- `p_53151_` (`BlockPos`)
- `p_53152_` (`boolean`)

**Returns:** `DoubleBlockCombiner.NeighborCombineResult<? extends ChestBlockEntity>`

### getShape

```java
protected VoxelShape getShape(BlockState p_53171_, BlockGetter p_53172_, BlockPos p_53173_, CollisionContext p_53174_)
```

**Parameters:**

- `p_53171_` (`BlockState`)
- `p_53172_` (`BlockGetter`)
- `p_53173_` (`BlockPos`)
- `p_53174_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_53169_)
```

**Parameters:**

- `p_53169_` (`BlockState`)

**Returns:** `RenderShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53128_)
```

**Parameters:**

- `p_53128_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_53137_, Level p_53138_, BlockPos p_53139_, Player p_53140_, BlockHitResult p_53142_)
```

**Parameters:**

- `p_53137_` (`BlockState`)
- `p_53138_` (`Level`)
- `p_53139_` (`BlockPos`)
- `p_53140_` (`Player`)
- `p_53142_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153208_, BlockState p_153209_)
```

**Parameters:**

- `p_153208_` (`BlockPos`)
- `p_153209_` (`BlockState`)

**Returns:** `BlockEntity`

### EnderChestBlockEntity

```java
return new EnderChestBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153199_, BlockState p_153200_, BlockEntityType<T> p_153201_)
```

**Parameters:**

- `p_153199_` (`Level`)
- `p_153200_` (`BlockState`)
- `p_153201_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### animateTick

```java
public void animateTick(BlockState p_221117_, Level p_221118_, BlockPos p_221119_, RandomSource p_221120_)
```

**Parameters:**

- `p_221117_` (`BlockState`)
- `p_221118_` (`Level`)
- `p_221119_` (`BlockPos`)
- `p_221120_` (`RandomSource`)

### rotate

```java
protected BlockState rotate(BlockState p_53157_, Rotation p_53158_)
```

**Parameters:**

- `p_53157_` (`BlockState`)
- `p_53158_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_53154_, Mirror p_53155_)
```

**Parameters:**

- `p_53154_` (`BlockState`)
- `p_53155_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53167_)
```

**Parameters:**

- `p_53167_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_53177_)
```

**Parameters:**

- `p_53177_` (`BlockState`)

**Returns:** `FluidState`

### updateShape

```java
protected BlockState updateShape(BlockState p_53160_, Direction p_53161_, BlockState p_53162_, LevelAccessor p_53163_, BlockPos p_53164_, BlockPos p_53165_)
```

**Parameters:**

- `p_53160_` (`BlockState`)
- `p_53161_` (`Direction`)
- `p_53162_` (`BlockState`)
- `p_53163_` (`LevelAccessor`)
- `p_53164_` (`BlockPos`)
- `p_53165_` (`BlockPos`)

**Returns:** `BlockState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53132_, PathComputationType p_53135_)
```

**Parameters:**

- `p_53132_` (`BlockState`)
- `p_53135_` (`PathComputationType`)

**Returns:** `boolean`

### tick

```java
protected void tick(BlockState p_221112_, ServerLevel p_221113_, BlockPos p_221114_, RandomSource p_221115_)
```

**Parameters:**

- `p_221112_` (`BlockState`)
- `p_221113_` (`ServerLevel`)
- `p_221114_` (`BlockPos`)
- `p_221115_` (`RandomSource`)
