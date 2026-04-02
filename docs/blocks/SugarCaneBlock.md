# SugarCaneBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SugarCaneBlock>` |  |
| `AGE` | `IntegerProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<SugarCaneBlock> codec()
```

**Returns:** `MapCodec<SugarCaneBlock>`

### SugarCaneBlock

```java
public SugarCaneBlock(BlockBehaviour.Properties p_57168_)
```

**Parameters:**

- `p_57168_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_57193_, BlockGetter p_57194_, BlockPos p_57195_, CollisionContext p_57196_)
```

**Parameters:**

- `p_57193_` (`BlockState`)
- `p_57194_` (`BlockGetter`)
- `p_57195_` (`BlockPos`)
- `p_57196_` (`CollisionContext`)

**Returns:** `VoxelShape`

### tick

```java
protected void tick(BlockState p_222543_, ServerLevel p_222544_, BlockPos p_222545_, RandomSource p_222546_)
```

**Parameters:**

- `p_222543_` (`BlockState`)
- `p_222544_` (`ServerLevel`)
- `p_222545_` (`BlockPos`)
- `p_222546_` (`RandomSource`)

### randomTick

```java
protected void randomTick(BlockState p_222548_, ServerLevel p_222549_, BlockPos p_222550_, RandomSource p_222551_)
```

**Parameters:**

- `p_222548_` (`BlockState`)
- `p_222549_` (`ServerLevel`)
- `p_222550_` (`BlockPos`)
- `p_222551_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_57179_, Direction p_57180_, BlockState p_57181_, LevelAccessor p_57182_, BlockPos p_57183_, BlockPos p_57184_)
```

**Parameters:**

- `p_57179_` (`BlockState`)
- `p_57180_` (`Direction`)
- `p_57181_` (`BlockState`)
- `p_57182_` (`LevelAccessor`)
- `p_57183_` (`BlockPos`)
- `p_57184_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_57175_, LevelReader p_57176_, BlockPos p_57177_)
```

**Parameters:**

- `p_57175_` (`BlockState`)
- `p_57176_` (`LevelReader`)
- `p_57177_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57186_)
```

**Parameters:**

- `p_57186_` (`StateDefinition.Builder<Block, BlockState>`)
