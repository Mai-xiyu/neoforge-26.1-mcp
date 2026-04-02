# PinkPetalsBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PinkPetalsBlock>` |  |
| `MIN_FLOWERS` | `int` |  |
| `MAX_FLOWERS` | `int` |  |
| `FACING` | `DirectionProperty` |  |
| `AMOUNT` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<PinkPetalsBlock> codec()
```

**Returns:** `MapCodec<PinkPetalsBlock>`

### PinkPetalsBlock

```java
public PinkPetalsBlock(BlockBehaviour.Properties p_273335_)
```

**Parameters:**

- `p_273335_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### rotate

```java
public BlockState rotate(BlockState p_273485_, Rotation p_273021_)
```

**Parameters:**

- `p_273485_` (`BlockState`)
- `p_273021_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_272961_, Mirror p_273278_)
```

**Parameters:**

- `p_272961_` (`BlockState`)
- `p_273278_` (`Mirror`)

**Returns:** `BlockState`

### canBeReplaced

```java
public boolean canBeReplaced(BlockState p_272922_, BlockPlaceContext p_273534_)
```

**Parameters:**

- `p_272922_` (`BlockState`)
- `p_273534_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getShape

```java
public VoxelShape getShape(BlockState p_273399_, BlockGetter p_273568_, BlockPos p_273314_, CollisionContext p_273274_)
```

**Parameters:**

- `p_273399_` (`BlockState`)
- `p_273568_` (`BlockGetter`)
- `p_273314_` (`BlockPos`)
- `p_273274_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_273158_)
```

**Parameters:**

- `p_273158_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_272634_)
```

**Parameters:**

- `p_272634_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_272968_, BlockPos p_273762_, BlockState p_273662_)
```

**Parameters:**

- `p_272968_` (`LevelReader`)
- `p_273762_` (`BlockPos`)
- `p_273662_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_272604_, RandomSource p_273609_, BlockPos p_272988_, BlockState p_273231_)
```

**Parameters:**

- `p_272604_` (`Level`)
- `p_273609_` (`RandomSource`)
- `p_272988_` (`BlockPos`)
- `p_273231_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_273476_, RandomSource p_273093_, BlockPos p_272601_, BlockState p_272683_)
```

**Parameters:**

- `p_273476_` (`ServerLevel`)
- `p_273093_` (`RandomSource`)
- `p_272601_` (`BlockPos`)
- `p_272683_` (`BlockState`)
