# CocoaBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CocoaBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |
| `AGE_0_WIDTH` | `int` |  |
| `AGE_0_HEIGHT` | `int` |  |
| `AGE_0_HALFWIDTH` | `int` |  |
| `AGE_1_WIDTH` | `int` |  |
| `AGE_1_HEIGHT` | `int` |  |
| `AGE_1_HALFWIDTH` | `int` |  |
| `AGE_2_WIDTH` | `int` |  |
| `AGE_2_HEIGHT` | `int` |  |
| `AGE_2_HALFWIDTH` | `int` |  |
| `EAST_AABB` | `VoxelShape[]` |  |
| `WEST_AABB` | `VoxelShape[]` |  |
| `NORTH_AABB` | `VoxelShape[]` |  |
| `SOUTH_AABB` | `VoxelShape[]` |  |

## Methods

### codec

```java
public MapCodec<CocoaBlock> codec()
```

**Returns:** `MapCodec<CocoaBlock>`

### CocoaBlock

```java
public CocoaBlock(BlockBehaviour.Properties p_51743_)
```

**Parameters:**

- `p_51743_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_51780_)
```

**Parameters:**

- `p_51780_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221000_, ServerLevel p_221001_, BlockPos p_221002_, RandomSource p_221003_)
```

**Parameters:**

- `p_221000_` (`BlockState`)
- `p_221001_` (`ServerLevel`)
- `p_221002_` (`BlockPos`)
- `p_221003_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_51767_, LevelReader p_51768_, BlockPos p_51769_)
```

**Parameters:**

- `p_51767_` (`BlockState`)
- `p_51768_` (`LevelReader`)
- `p_51769_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_51787_, BlockGetter p_51788_, BlockPos p_51789_, CollisionContext p_51790_)
```

**Parameters:**

- `p_51787_` (`BlockState`)
- `p_51788_` (`BlockGetter`)
- `p_51789_` (`BlockPos`)
- `p_51790_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51750_)
```

**Parameters:**

- `p_51750_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_51771_, Direction p_51772_, BlockState p_51773_, LevelAccessor p_51774_, BlockPos p_51775_, BlockPos p_51776_)
```

**Parameters:**

- `p_51771_` (`BlockState`)
- `p_51772_` (`Direction`)
- `p_51773_` (`BlockState`)
- `p_51774_` (`LevelAccessor`)
- `p_51775_` (`BlockPos`)
- `p_51776_` (`BlockPos`)

**Returns:** `BlockState`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256189_, BlockPos p_51753_, BlockState p_51754_)
```

**Parameters:**

- `p_256189_` (`LevelReader`)
- `p_51753_` (`BlockPos`)
- `p_51754_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220995_, RandomSource p_220996_, BlockPos p_220997_, BlockState p_220998_)
```

**Parameters:**

- `p_220995_` (`Level`)
- `p_220996_` (`RandomSource`)
- `p_220997_` (`BlockPos`)
- `p_220998_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220990_, RandomSource p_220991_, BlockPos p_220992_, BlockState p_220993_)
```

**Parameters:**

- `p_220990_` (`ServerLevel`)
- `p_220991_` (`RandomSource`)
- `p_220992_` (`BlockPos`)
- `p_220993_` (`BlockState`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51778_)
```

**Parameters:**

- `p_51778_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51762_, PathComputationType p_51765_)
```

**Parameters:**

- `p_51762_` (`BlockState`)
- `p_51765_` (`PathComputationType`)

**Returns:** `boolean`
