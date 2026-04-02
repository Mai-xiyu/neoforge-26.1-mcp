# TallSeagrassBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DoublePlantBlock`
**Implements:** `LiquidBlockContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TallSeagrassBlock>` |  |
| `HALF` | `EnumProperty<DoubleBlockHalf>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<TallSeagrassBlock> codec()
```

**Returns:** `MapCodec<TallSeagrassBlock>`

### TallSeagrassBlock

```java
public TallSeagrassBlock(BlockBehaviour.Properties p_154745_)
```

**Parameters:**

- `p_154745_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_154763_, BlockGetter p_154764_, BlockPos p_154765_, CollisionContext p_154766_)
```

**Parameters:**

- `p_154763_` (`BlockState`)
- `p_154764_` (`BlockGetter`)
- `p_154765_` (`BlockPos`)
- `p_154766_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_154774_, BlockGetter p_154775_, BlockPos p_154776_)
```

**Parameters:**

- `p_154774_` (`BlockState`)
- `p_154775_` (`BlockGetter`)
- `p_154776_` (`BlockPos`)

**Returns:** `boolean`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304988_, BlockPos p_154750_, BlockState p_154751_)
```

**Parameters:**

- `p_304988_` (`LevelReader`)
- `p_154750_` (`BlockPos`)
- `p_154751_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_154747_)
```

**Parameters:**

- `p_154747_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_154768_, LevelReader p_154769_, BlockPos p_154770_)
```

**Parameters:**

- `p_154768_` (`BlockState`)
- `p_154769_` (`LevelReader`)
- `p_154770_` (`BlockPos`)

**Returns:** `boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_154772_)
```

**Parameters:**

- `p_154772_` (`BlockState`)

**Returns:** `FluidState`

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_296027_, BlockGetter p_154753_, BlockPos p_154754_, BlockState p_154755_, Fluid p_154756_)
```

**Parameters:**

- `p_296027_` (`Player`)
- `p_154753_` (`BlockGetter`)
- `p_154754_` (`BlockPos`)
- `p_154755_` (`BlockState`)
- `p_154756_` (`Fluid`)

**Returns:** `boolean`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_154758_, BlockPos p_154759_, BlockState p_154760_, FluidState p_154761_)
```

**Parameters:**

- `p_154758_` (`LevelAccessor`)
- `p_154759_` (`BlockPos`)
- `p_154760_` (`BlockState`)
- `p_154761_` (`FluidState`)

**Returns:** `boolean`
