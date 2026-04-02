# CactusBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CactusBlock>` |  |
| `AGE` | `IntegerProperty` |  |
| `MAX_AGE` | `int` |  |
| `AABB_OFFSET` | `int` |  |
| `COLLISION_SHAPE` | `VoxelShape` |  |
| `OUTLINE_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<CactusBlock> codec()
```

**Returns:** `MapCodec<CactusBlock>`

### CactusBlock

```java
public CactusBlock(BlockBehaviour.Properties p_51136_)
```

**Parameters:**

- `p_51136_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
protected void tick(BlockState p_220908_, ServerLevel p_220909_, BlockPos p_220910_, RandomSource p_220911_)
```

**Parameters:**

- `p_220908_` (`BlockState`)
- `p_220909_` (`ServerLevel`)
- `p_220910_` (`BlockPos`)
- `p_220911_` (`RandomSource`)

### randomTick

```java
protected void randomTick(BlockState p_220913_, ServerLevel p_220914_, BlockPos p_220915_, RandomSource p_220916_)
```

**Parameters:**

- `p_220913_` (`BlockState`)
- `p_220914_` (`ServerLevel`)
- `p_220915_` (`BlockPos`)
- `p_220916_` (`RandomSource`)

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_51176_, BlockGetter p_51177_, BlockPos p_51178_, CollisionContext p_51179_)
```

**Parameters:**

- `p_51176_` (`BlockState`)
- `p_51177_` (`BlockGetter`)
- `p_51178_` (`BlockPos`)
- `p_51179_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_51171_, BlockGetter p_51172_, BlockPos p_51173_, CollisionContext p_51174_)
```

**Parameters:**

- `p_51171_` (`BlockState`)
- `p_51172_` (`BlockGetter`)
- `p_51173_` (`BlockPos`)
- `p_51174_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_51157_, Direction p_51158_, BlockState p_51159_, LevelAccessor p_51160_, BlockPos p_51161_, BlockPos p_51162_)
```

**Parameters:**

- `p_51157_` (`BlockState`)
- `p_51158_` (`Direction`)
- `p_51159_` (`BlockState`)
- `p_51160_` (`LevelAccessor`)
- `p_51161_` (`BlockPos`)
- `p_51162_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_51153_, LevelReader p_51154_, BlockPos p_51155_)
```

**Parameters:**

- `p_51153_` (`BlockState`)
- `p_51154_` (`LevelReader`)
- `p_51155_` (`BlockPos`)

**Returns:** `boolean`

### entityInside

```java
protected void entityInside(BlockState p_51148_, Level p_51149_, BlockPos p_51150_, Entity p_51151_)
```

**Parameters:**

- `p_51148_` (`BlockState`)
- `p_51149_` (`Level`)
- `p_51150_` (`BlockPos`)
- `p_51151_` (`Entity`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51164_)
```

**Parameters:**

- `p_51164_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51143_, PathComputationType p_51146_)
```

**Parameters:**

- `p_51143_` (`BlockState`)
- `p_51146_` (`PathComputationType`)

**Returns:** `boolean`
