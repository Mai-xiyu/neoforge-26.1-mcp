# BigDripleafStemBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`
**Implements:** `BonemealableBlock`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BigDripleafStemBlock>` |  |
| `NORTH_SHAPE` | `VoxelShape` |  |
| `SOUTH_SHAPE` | `VoxelShape` |  |
| `EAST_SHAPE` | `VoxelShape` |  |
| `WEST_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<BigDripleafStemBlock> codec()
```

**Returns:** `MapCodec<BigDripleafStemBlock>`

### BigDripleafStemBlock

```java
public BigDripleafStemBlock(BlockBehaviour.Properties p_152329_)
```

**Parameters:**

- `p_152329_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_152360_, BlockGetter p_152361_, BlockPos p_152362_, CollisionContext p_152363_)
```

**Parameters:**

- `p_152360_` (`BlockState`)
- `p_152361_` (`BlockGetter`)
- `p_152362_` (`BlockPos`)
- `p_152363_` (`CollisionContext`)

**Returns:** `VoxelShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152376_)
```

**Parameters:**

- `p_152376_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_152378_)
```

**Parameters:**

- `p_152378_` (`BlockState`)

**Returns:** `FluidState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152365_, LevelReader p_152366_, BlockPos p_152367_)
```

**Parameters:**

- `p_152365_` (`BlockState`)
- `p_152366_` (`LevelReader`)
- `p_152367_` (`BlockPos`)

**Returns:** `boolean`

### place

```java
protected static boolean place(LevelAccessor p_152350_, BlockPos p_152351_, FluidState p_152352_, Direction p_152353_)
```

**Parameters:**

- `p_152350_` (`LevelAccessor`)
- `p_152351_` (`BlockPos`)
- `p_152352_` (`FluidState`)
- `p_152353_` (`Direction`)

**Returns:** `protected static boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_152369_, Direction p_152370_, BlockState p_152371_, LevelAccessor p_152372_, BlockPos p_152373_, BlockPos p_152374_)
```

**Parameters:**

- `p_152369_` (`BlockState`)
- `p_152370_` (`Direction`)
- `p_152371_` (`BlockState`)
- `p_152372_` (`LevelAccessor`)
- `p_152373_` (`BlockPos`)
- `p_152374_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_220813_, ServerLevel p_220814_, BlockPos p_220815_, RandomSource p_220816_)
```

**Parameters:**

- `p_220813_` (`BlockState`)
- `p_220814_` (`ServerLevel`)
- `p_220815_` (`BlockPos`)
- `p_220816_` (`RandomSource`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255683_, BlockPos p_256358_, BlockState p_256408_)
```

**Parameters:**

- `p_255683_` (`LevelReader`)
- `p_256358_` (`BlockPos`)
- `p_256408_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220808_, RandomSource p_220809_, BlockPos p_220810_, BlockState p_220811_)
```

**Parameters:**

- `p_220808_` (`Level`)
- `p_220809_` (`RandomSource`)
- `p_220810_` (`BlockPos`)
- `p_220811_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220803_, RandomSource p_220804_, BlockPos p_220805_, BlockState p_220806_)
```

**Parameters:**

- `p_220803_` (`ServerLevel`)
- `p_220804_` (`RandomSource`)
- `p_220805_` (`BlockPos`)
- `p_220806_` (`BlockState`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304938_, BlockPos p_152337_, BlockState p_152338_)
```

**Parameters:**

- `p_304938_` (`LevelReader`)
- `p_152337_` (`BlockPos`)
- `p_152338_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`
