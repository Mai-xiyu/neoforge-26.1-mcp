# SmallDripleafBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DoublePlantBlock`
**Implements:** `BonemealableBlock`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SmallDripleafBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<SmallDripleafBlock> codec()
```

**Returns:** `MapCodec<SmallDripleafBlock>`

### SmallDripleafBlock

```java
public SmallDripleafBlock(BlockBehaviour.Properties p_154583_)
```

**Parameters:**

- `p_154583_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_154610_, BlockGetter p_154611_, BlockPos p_154612_, CollisionContext p_154613_)
```

**Parameters:**

- `p_154610_` (`BlockState`)
- `p_154611_` (`BlockGetter`)
- `p_154612_` (`BlockPos`)
- `p_154613_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_154636_, BlockGetter p_154637_, BlockPos p_154638_)
```

**Parameters:**

- `p_154636_` (`BlockState`)
- `p_154637_` (`BlockGetter`)
- `p_154638_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_154592_)
```

**Parameters:**

- `p_154592_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### setPlacedBy

```java
public void setPlacedBy(Level p_154599_, BlockPos p_154600_, BlockState p_154601_, LivingEntity p_154602_, ItemStack p_154603_)
```

**Parameters:**

- `p_154599_` (`Level`)
- `p_154600_` (`BlockPos`)
- `p_154601_` (`BlockState`)
- `p_154602_` (`LivingEntity`)
- `p_154603_` (`ItemStack`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_154634_)
```

**Parameters:**

- `p_154634_` (`BlockState`)

**Returns:** `FluidState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_154615_, LevelReader p_154616_, BlockPos p_154617_)
```

**Parameters:**

- `p_154615_` (`BlockState`)
- `p_154616_` (`LevelReader`)
- `p_154617_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_154625_, Direction p_154626_, BlockState p_154627_, LevelAccessor p_154628_, BlockPos p_154629_, BlockPos p_154630_)
```

**Parameters:**

- `p_154625_` (`BlockState`)
- `p_154626_` (`Direction`)
- `p_154627_` (`BlockState`)
- `p_154628_` (`LevelAccessor`)
- `p_154629_` (`BlockPos`)
- `p_154630_` (`BlockPos`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_154632_)
```

**Parameters:**

- `p_154632_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255772_, BlockPos p_154595_, BlockState p_154596_)
```

**Parameters:**

- `p_255772_` (`LevelReader`)
- `p_154595_` (`BlockPos`)
- `p_154596_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222438_, RandomSource p_222439_, BlockPos p_222440_, BlockState p_222441_)
```

**Parameters:**

- `p_222438_` (`Level`)
- `p_222439_` (`RandomSource`)
- `p_222440_` (`BlockPos`)
- `p_222441_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222433_, RandomSource p_222434_, BlockPos p_222435_, BlockState p_222436_)
```

**Parameters:**

- `p_222433_` (`ServerLevel`)
- `p_222434_` (`RandomSource`)
- `p_222435_` (`BlockPos`)
- `p_222436_` (`BlockState`)

### rotate

```java
protected BlockState rotate(BlockState p_154622_, Rotation p_154623_)
```

**Parameters:**

- `p_154622_` (`BlockState`)
- `p_154623_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_154619_, Mirror p_154620_)
```

**Parameters:**

- `p_154619_` (`BlockState`)
- `p_154620_` (`Mirror`)

**Returns:** `BlockState`

### getMaxVerticalOffset

```java
protected float getMaxVerticalOffset()
```

**Returns:** `float`
