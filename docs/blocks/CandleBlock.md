# CandleBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractCandleBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CandleBlock>` |  |
| `MIN_CANDLES` | `int` |  |
| `MAX_CANDLES` | `int` |  |
| `CANDLES` | `IntegerProperty` |  |
| `LIT` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `LIGHT_EMISSION` | `ToIntFunction<BlockState>` |  |

## Methods

### codec

```java
public MapCodec<CandleBlock> codec()
```

**Returns:** `MapCodec<CandleBlock>`

### CandleBlock

```java
public CandleBlock(BlockBehaviour.Properties p_152801_)
```

**Parameters:**

- `p_152801_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316279_, BlockState p_316163_, Level p_316881_, BlockPos p_316480_, Player p_316191_, InteractionHand p_316669_, BlockHitResult p_316641_)
```

**Parameters:**

- `p_316279_` (`ItemStack`)
- `p_316163_` (`BlockState`)
- `p_316881_` (`Level`)
- `p_316480_` (`BlockPos`)
- `p_316191_` (`Player`)
- `p_316669_` (`InteractionHand`)
- `p_316641_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### extinguish

```java
 extinguish()
```

**Returns:** ``

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_152814_, BlockPlaceContext p_152815_)
```

**Parameters:**

- `p_152814_` (`BlockState`)
- `p_152815_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_152803_)
```

**Parameters:**

- `p_152803_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_152833_, Direction p_152834_, BlockState p_152835_, LevelAccessor p_152836_, BlockPos p_152837_, BlockPos p_152838_)
```

**Parameters:**

- `p_152833_` (`BlockState`)
- `p_152834_` (`Direction`)
- `p_152835_` (`BlockState`)
- `p_152836_` (`LevelAccessor`)
- `p_152837_` (`BlockPos`)
- `p_152838_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_152844_)
```

**Parameters:**

- `p_152844_` (`BlockState`)

**Returns:** `FluidState`

### getShape

```java
protected VoxelShape getShape(BlockState p_152817_, BlockGetter p_152818_, BlockPos p_152819_, CollisionContext p_152820_)
```

**Parameters:**

- `p_152817_` (`BlockState`)
- `p_152818_` (`BlockGetter`)
- `p_152819_` (`BlockPos`)
- `p_152820_` (`CollisionContext`)

**Returns:** `VoxelShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152840_)
```

**Parameters:**

- `p_152840_` (`StateDefinition.Builder<Block, BlockState>`)

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_152805_, BlockPos p_152806_, BlockState p_152807_, FluidState p_152808_)
```

**Parameters:**

- `p_152805_` (`LevelAccessor`)
- `p_152806_` (`BlockPos`)
- `p_152807_` (`BlockState`)
- `p_152808_` (`FluidState`)

**Returns:** `boolean`

### extinguish

```java
 extinguish()
```

**Returns:** ``

### canLight

```java
public static boolean canLight(BlockState p_152846_)
```

**Parameters:**

- `p_152846_` (`BlockState`)

**Returns:** `public static boolean`

### getParticleOffsets

```java
protected Iterable<Vec3> getParticleOffsets(BlockState p_152812_)
```

**Parameters:**

- `p_152812_` (`BlockState`)

**Returns:** `Iterable<Vec3>`

### canBeLit

```java
protected boolean canBeLit(BlockState p_152842_)
```

**Parameters:**

- `p_152842_` (`BlockState`)

**Returns:** `boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152829_, LevelReader p_152830_, BlockPos p_152831_)
```

**Parameters:**

- `p_152829_` (`BlockState`)
- `p_152830_` (`LevelReader`)
- `p_152831_` (`BlockPos`)

**Returns:** `boolean`
