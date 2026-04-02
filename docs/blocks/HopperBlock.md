# HopperBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HopperBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `ENABLED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<HopperBlock> codec()
```

**Returns:** `MapCodec<HopperBlock>`

### HopperBlock

```java
public HopperBlock(BlockBehaviour.Properties p_54039_)
```

**Parameters:**

- `p_54039_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54105_, BlockGetter p_54106_, BlockPos p_54107_, CollisionContext p_54108_)
```

**Parameters:**

- `p_54105_` (`BlockState`)
- `p_54106_` (`BlockGetter`)
- `p_54107_` (`BlockPos`)
- `p_54108_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getInteractionShape

```java
protected VoxelShape getInteractionShape(BlockState p_54099_, BlockGetter p_54100_, BlockPos p_54101_)
```

**Parameters:**

- `p_54099_` (`BlockState`)
- `p_54100_` (`BlockGetter`)
- `p_54101_` (`BlockPos`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54041_)
```

**Parameters:**

- `p_54041_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153382_, BlockState p_153383_)
```

**Parameters:**

- `p_153382_` (`BlockPos`)
- `p_153383_` (`BlockState`)

**Returns:** `BlockEntity`

### HopperBlockEntity

```java
return new HopperBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153378_, BlockState p_153379_, BlockEntityType<T> p_153380_)
```

**Parameters:**

- `p_153378_` (`Level`)
- `p_153379_` (`BlockState`)
- `p_153380_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### onPlace

```java
protected void onPlace(BlockState p_54110_, Level p_54111_, BlockPos p_54112_, BlockState p_54113_, boolean p_54114_)
```

**Parameters:**

- `p_54110_` (`BlockState`)
- `p_54111_` (`Level`)
- `p_54112_` (`BlockPos`)
- `p_54113_` (`BlockState`)
- `p_54114_` (`boolean`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_54071_, Level p_54072_, BlockPos p_54073_, Player p_54074_, BlockHitResult p_54076_)
```

**Parameters:**

- `p_54071_` (`BlockState`)
- `p_54072_` (`Level`)
- `p_54073_` (`BlockPos`)
- `p_54074_` (`Player`)
- `p_54076_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### neighborChanged

```java
protected void neighborChanged(BlockState p_54078_, Level p_54079_, BlockPos p_54080_, Block p_54081_, BlockPos p_54082_, boolean p_54083_)
```

**Parameters:**

- `p_54078_` (`BlockState`)
- `p_54079_` (`Level`)
- `p_54080_` (`BlockPos`)
- `p_54081_` (`Block`)
- `p_54082_` (`BlockPos`)
- `p_54083_` (`boolean`)

### checkPoweredState

```java
private void checkPoweredState(Level p_275499_, BlockPos p_275298_, BlockState p_275611_)
```

**Parameters:**

- `p_275499_` (`Level`)
- `p_275298_` (`BlockPos`)
- `p_275611_` (`BlockState`)

**Returns:** `private void`

### onRemove

```java
protected void onRemove(BlockState p_54085_, Level p_54086_, BlockPos p_54087_, BlockState p_54088_, boolean p_54089_)
```

**Parameters:**

- `p_54085_` (`BlockState`)
- `p_54086_` (`Level`)
- `p_54087_` (`BlockPos`)
- `p_54088_` (`BlockState`)
- `p_54089_` (`boolean`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_54103_)
```

**Parameters:**

- `p_54103_` (`BlockState`)

**Returns:** `RenderShape`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_54055_)
```

**Parameters:**

- `p_54055_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_54062_, Level p_54063_, BlockPos p_54064_)
```

**Parameters:**

- `p_54062_` (`BlockState`)
- `p_54063_` (`Level`)
- `p_54064_` (`BlockPos`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_54094_, Rotation p_54095_)
```

**Parameters:**

- `p_54094_` (`BlockState`)
- `p_54095_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_54091_, Mirror p_54092_)
```

**Parameters:**

- `p_54091_` (`BlockState`)
- `p_54092_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54097_)
```

**Parameters:**

- `p_54097_` (`StateDefinition.Builder<Block, BlockState>`)

### entityInside

```java
protected void entityInside(BlockState p_54066_, Level p_54067_, BlockPos p_54068_, Entity p_54069_)
```

**Parameters:**

- `p_54066_` (`BlockState`)
- `p_54067_` (`Level`)
- `p_54068_` (`BlockPos`)
- `p_54069_` (`Entity`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_54057_, PathComputationType p_54060_)
```

**Parameters:**

- `p_54057_` (`BlockState`)
- `p_54060_` (`PathComputationType`)

**Returns:** `boolean`
