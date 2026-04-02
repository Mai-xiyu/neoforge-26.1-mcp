# BarrierBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BarrierBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<BarrierBlock> codec()
```

**Returns:** `MapCodec<BarrierBlock>`

### BarrierBlock

```java
public BarrierBlock(BlockBehaviour.Properties p_49092_)
```

**Parameters:**

- `p_49092_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_49100_, BlockGetter p_49101_, BlockPos p_49102_)
```

**Parameters:**

- `p_49100_` (`BlockState`)
- `p_49101_` (`BlockGetter`)
- `p_49102_` (`BlockPos`)

**Returns:** `boolean`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49098_)
```

**Parameters:**

- `p_49098_` (`BlockState`)

**Returns:** `RenderShape`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_49094_, BlockGetter p_49095_, BlockPos p_49096_)
```

**Parameters:**

- `p_49094_` (`BlockState`)
- `p_49095_` (`BlockGetter`)
- `p_49096_` (`BlockPos`)

**Returns:** `float`

### updateShape

```java
protected BlockState updateShape(BlockState p_296123_, Direction p_294509_, BlockState p_296367_, LevelAccessor p_294373_, BlockPos p_294499_, BlockPos p_295044_)
```

**Parameters:**

- `p_296123_` (`BlockState`)
- `p_294509_` (`Direction`)
- `p_296367_` (`BlockState`)
- `p_294373_` (`LevelAccessor`)
- `p_294499_` (`BlockPos`)
- `p_295044_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_296372_)
```

**Parameters:**

- `p_296372_` (`BlockState`)

**Returns:** `FluidState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_295385_)
```

**Parameters:**

- `p_295385_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_296107_)
```

**Parameters:**

- `p_296107_` (`StateDefinition.Builder<Block, BlockState>`)

### pickupBlock

```java
public ItemStack pickupBlock(Player p_295338_, LevelAccessor p_295817_, BlockPos p_295857_, BlockState p_294189_)
```

**Parameters:**

- `p_295338_` (`Player`)
- `p_295817_` (`LevelAccessor`)
- `p_295857_` (`BlockPos`)
- `p_294189_` (`BlockState`)

**Returns:** `ItemStack`

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_296463_, BlockGetter p_295048_, BlockPos p_295143_, BlockState p_294224_, Fluid p_294851_)
```

**Parameters:**

- `p_296463_` (`Player`)
- `p_295048_` (`BlockGetter`)
- `p_295143_` (`BlockPos`)
- `p_294224_` (`BlockState`)
- `p_294851_` (`Fluid`)

**Returns:** `boolean`
