# LeavesBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`, `net.neoforged.neoforge.common.IShearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LeavesBlock>` |  |
| `DECAY_DISTANCE` | `int` |  |
| `DISTANCE` | `IntegerProperty` |  |
| `PERSISTENT` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<? extends LeavesBlock> codec()
```

**Returns:** `MapCodec<? extends LeavesBlock>`

### LeavesBlock

```java
public LeavesBlock(BlockBehaviour.Properties p_54422_)
```

**Parameters:**

- `p_54422_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_54456_, BlockGetter p_54457_, BlockPos p_54458_)
```

**Parameters:**

- `p_54456_` (`BlockState`)
- `p_54457_` (`BlockGetter`)
- `p_54458_` (`BlockPos`)

**Returns:** `VoxelShape`

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_54449_)
```

**Parameters:**

- `p_54449_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221379_, ServerLevel p_221380_, BlockPos p_221381_, RandomSource p_221382_)
```

**Parameters:**

- `p_221379_` (`BlockState`)
- `p_221380_` (`ServerLevel`)
- `p_221381_` (`BlockPos`)
- `p_221382_` (`RandomSource`)

### dropResources

```java
 dropResources()
```

**Returns:** ``

### decaying

```java
protected boolean decaying(BlockState p_221386_)
```

**Parameters:**

- `p_221386_` (`BlockState`)

**Returns:** `protected boolean`

### tick

```java
protected void tick(BlockState p_221369_, ServerLevel p_221370_, BlockPos p_221371_, RandomSource p_221372_)
```

**Parameters:**

- `p_221369_` (`BlockState`)
- `p_221370_` (`ServerLevel`)
- `p_221371_` (`BlockPos`)
- `p_221372_` (`RandomSource`)

### getLightBlock

```java
protected int getLightBlock(BlockState p_54460_, BlockGetter p_54461_, BlockPos p_54462_)
```

**Parameters:**

- `p_54460_` (`BlockState`)
- `p_54461_` (`BlockGetter`)
- `p_54462_` (`BlockPos`)

**Returns:** `int`

### updateShape

```java
protected BlockState updateShape(BlockState p_54440_, Direction p_54441_, BlockState p_54442_, LevelAccessor p_54443_, BlockPos p_54444_, BlockPos p_54445_)
```

**Parameters:**

- `p_54440_` (`BlockState`)
- `p_54441_` (`Direction`)
- `p_54442_` (`BlockState`)
- `p_54443_` (`LevelAccessor`)
- `p_54444_` (`BlockPos`)
- `p_54445_` (`BlockPos`)

**Returns:** `BlockState`

### updateDistance

```java
private static BlockState updateDistance(BlockState p_54436_, LevelAccessor p_54437_, BlockPos p_54438_)
```

**Parameters:**

- `p_54436_` (`BlockState`)
- `p_54437_` (`LevelAccessor`)
- `p_54438_` (`BlockPos`)

**Returns:** `private static BlockState`

### getDistanceAt

```java
private static int getDistanceAt(BlockState p_54464_)
```

**Parameters:**

- `p_54464_` (`BlockState`)

**Returns:** `private static int`

### getOptionalDistanceAt

```java
public static OptionalInt getOptionalDistanceAt(BlockState p_277868_)
```

**Parameters:**

- `p_277868_` (`BlockState`)

**Returns:** `public static OptionalInt`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_221384_)
```

**Parameters:**

- `p_221384_` (`BlockState`)

**Returns:** `FluidState`

### animateTick

```java
public void animateTick(BlockState p_221374_, Level p_221375_, BlockPos p_221376_, RandomSource p_221377_)
```

**Parameters:**

- `p_221374_` (`BlockState`)
- `p_221375_` (`Level`)
- `p_221376_` (`BlockPos`)
- `p_221377_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54447_)
```

**Parameters:**

- `p_54447_` (`StateDefinition.Builder<Block, BlockState>`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54424_)
```

**Parameters:**

- `p_54424_` (`BlockPlaceContext`)

**Returns:** `BlockState`
