# MangrovePropaguleBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SaplingBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MangrovePropaguleBlock>` |  |
| `AGE` | `IntegerProperty` |  |
| `MAX_AGE` | `int` |  |
| `HANGING` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<MangrovePropaguleBlock> codec()
```

**Returns:** `MapCodec<MangrovePropaguleBlock>`

### MangrovePropaguleBlock

```java
public MangrovePropaguleBlock(TreeGrower p_304562_, BlockBehaviour.Properties p_221449_)
```

**Parameters:**

- `p_304562_` (`TreeGrower`)
- `p_221449_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_221484_)
```

**Parameters:**

- `p_221484_` (`StateDefinition.Builder<Block, BlockState>`)

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_221496_, BlockGetter p_221497_, BlockPos p_221498_)
```

**Parameters:**

- `p_221496_` (`BlockState`)
- `p_221497_` (`BlockGetter`)
- `p_221498_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_221456_)
```

**Parameters:**

- `p_221456_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_221468_, BlockGetter p_221469_, BlockPos p_221470_, CollisionContext p_221471_)
```

**Parameters:**

- `p_221468_` (`BlockState`)
- `p_221469_` (`BlockGetter`)
- `p_221470_` (`BlockPos`)
- `p_221471_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_221473_, LevelReader p_221474_, BlockPos p_221475_)
```

**Parameters:**

- `p_221473_` (`BlockState`)
- `p_221474_` (`LevelReader`)
- `p_221475_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_221477_, Direction p_221478_, BlockState p_221479_, LevelAccessor p_221480_, BlockPos p_221481_, BlockPos p_221482_)
```

**Parameters:**

- `p_221477_` (`BlockState`)
- `p_221478_` (`Direction`)
- `p_221479_` (`BlockState`)
- `p_221480_` (`LevelAccessor`)
- `p_221481_` (`BlockPos`)
- `p_221482_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_221494_)
```

**Parameters:**

- `p_221494_` (`BlockState`)

**Returns:** `FluidState`

### randomTick

```java
protected void randomTick(BlockState p_221488_, ServerLevel p_221489_, BlockPos p_221490_, RandomSource p_221491_)
```

**Parameters:**

- `p_221488_` (`BlockState`)
- `p_221489_` (`ServerLevel`)
- `p_221490_` (`BlockPos`)
- `p_221491_` (`RandomSource`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256541_, BlockPos p_221459_, BlockState p_221460_)
```

**Parameters:**

- `p_256541_` (`LevelReader`)
- `p_221459_` (`BlockPos`)
- `p_221460_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221463_, RandomSource p_221464_, BlockPos p_221465_, BlockState p_221466_)
```

**Parameters:**

- `p_221463_` (`Level`)
- `p_221464_` (`RandomSource`)
- `p_221465_` (`BlockPos`)
- `p_221466_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221451_, RandomSource p_221452_, BlockPos p_221453_, BlockState p_221454_)
```

**Parameters:**

- `p_221451_` (`ServerLevel`)
- `p_221452_` (`RandomSource`)
- `p_221453_` (`BlockPos`)
- `p_221454_` (`BlockState`)

### isHanging

```java
private static boolean isHanging(BlockState p_221500_)
```

**Parameters:**

- `p_221500_` (`BlockState`)

**Returns:** `private static boolean`

### isFullyGrown

```java
private static boolean isFullyGrown(BlockState p_221502_)
```

**Parameters:**

- `p_221502_` (`BlockState`)

**Returns:** `private static boolean`

### createNewHangingPropagule

```java
public static BlockState createNewHangingPropagule()
```

**Returns:** `public static BlockState`

### createNewHangingPropagule

```java
return createNewHangingPropagule()
```

**Returns:** `return`

### createNewHangingPropagule

```java
public static BlockState createNewHangingPropagule(int p_221486_)
```

**Parameters:**

- `p_221486_` (`int`)

**Returns:** `public static BlockState`
