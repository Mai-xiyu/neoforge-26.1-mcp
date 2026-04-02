# LightningRodBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `RodBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LightningRodBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `POWERED` | `BooleanProperty` |  |
| `RANGE` | `int` |  |

## Methods

### codec

```java
public MapCodec<LightningRodBlock> codec()
```

**Returns:** `MapCodec<LightningRodBlock>`

### LightningRodBlock

```java
public LightningRodBlock(BlockBehaviour.Properties p_153709_)
```

**Parameters:**

- `p_153709_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_153711_)
```

**Parameters:**

- `p_153711_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_153739_, Direction p_153740_, BlockState p_153741_, LevelAccessor p_153742_, BlockPos p_153743_, BlockPos p_153744_)
```

**Parameters:**

- `p_153739_` (`BlockState`)
- `p_153740_` (`Direction`)
- `p_153741_` (`BlockState`)
- `p_153742_` (`LevelAccessor`)
- `p_153743_` (`BlockPos`)
- `p_153744_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_153759_)
```

**Parameters:**

- `p_153759_` (`BlockState`)

**Returns:** `FluidState`

### getSignal

```java
protected int getSignal(BlockState p_153723_, BlockGetter p_153724_, BlockPos p_153725_, Direction p_153726_)
```

**Parameters:**

- `p_153723_` (`BlockState`)
- `p_153724_` (`BlockGetter`)
- `p_153725_` (`BlockPos`)
- `p_153726_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_153748_, BlockGetter p_153749_, BlockPos p_153750_, Direction p_153751_)
```

**Parameters:**

- `p_153748_` (`BlockState`)
- `p_153749_` (`BlockGetter`)
- `p_153750_` (`BlockPos`)
- `p_153751_` (`Direction`)

**Returns:** `int`

### onLightningStrike

```java
public void onLightningStrike(BlockState p_153761_, Level p_153762_, BlockPos p_153763_)
```

**Parameters:**

- `p_153761_` (`BlockState`)
- `p_153762_` (`Level`)
- `p_153763_` (`BlockPos`)

**Returns:** `public void`

### updateNeighbours

```java
private void updateNeighbours(BlockState p_153765_, Level p_153766_, BlockPos p_153767_)
```

**Parameters:**

- `p_153765_` (`BlockState`)
- `p_153766_` (`Level`)
- `p_153767_` (`BlockPos`)

**Returns:** `private void`

### tick

```java
protected void tick(BlockState p_221400_, ServerLevel p_221401_, BlockPos p_221402_, RandomSource p_221403_)
```

**Parameters:**

- `p_221400_` (`BlockState`)
- `p_221401_` (`ServerLevel`)
- `p_221402_` (`BlockPos`)
- `p_221403_` (`RandomSource`)

### animateTick

```java
public void animateTick(BlockState p_221405_, Level p_221406_, BlockPos p_221407_, RandomSource p_221408_)
```

**Parameters:**

- `p_221405_` (`BlockState`)
- `p_221406_` (`Level`)
- `p_221407_` (`BlockPos`)
- `p_221408_` (`RandomSource`)

### onRemove

```java
protected void onRemove(BlockState p_153728_, Level p_153729_, BlockPos p_153730_, BlockState p_153731_, boolean p_153732_)
```

**Parameters:**

- `p_153728_` (`BlockState`)
- `p_153729_` (`Level`)
- `p_153730_` (`BlockPos`)
- `p_153731_` (`BlockState`)
- `p_153732_` (`boolean`)

### onPlace

```java
protected void onPlace(BlockState p_153753_, Level p_153754_, BlockPos p_153755_, BlockState p_153756_, boolean p_153757_)
```

**Parameters:**

- `p_153753_` (`BlockState`)
- `p_153754_` (`Level`)
- `p_153755_` (`BlockPos`)
- `p_153756_` (`BlockState`)
- `p_153757_` (`boolean`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153746_)
```

**Parameters:**

- `p_153746_` (`StateDefinition.Builder<Block, BlockState>`)

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_153769_)
```

**Parameters:**

- `p_153769_` (`BlockState`)

**Returns:** `boolean`
