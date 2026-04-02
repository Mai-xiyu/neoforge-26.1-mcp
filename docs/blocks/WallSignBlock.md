# WallSignBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SignBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallSignBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `AABB_THICKNESS` | `float` |  |
| `AABB_BOTTOM` | `float` |  |
| `AABB_TOP` | `float` |  |

## Methods

### codec

```java
public MapCodec<WallSignBlock> codec()
```

**Returns:** `MapCodec<WallSignBlock>`

### WallSignBlock

```java
public WallSignBlock(WoodType p_58069_, BlockBehaviour.Properties p_58068_)
```

**Parameters:**

- `p_58069_` (`WoodType`)
- `p_58068_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getShape

```java
protected VoxelShape getShape(BlockState p_58092_, BlockGetter p_58093_, BlockPos p_58094_, CollisionContext p_58095_)
```

**Parameters:**

- `p_58092_` (`BlockState`)
- `p_58093_` (`BlockGetter`)
- `p_58094_` (`BlockPos`)
- `p_58095_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_58073_, LevelReader p_58074_, BlockPos p_58075_)
```

**Parameters:**

- `p_58073_` (`BlockState`)
- `p_58074_` (`LevelReader`)
- `p_58075_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_58071_)
```

**Parameters:**

- `p_58071_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_58083_, Direction p_58084_, BlockState p_58085_, LevelAccessor p_58086_, BlockPos p_58087_, BlockPos p_58088_)
```

**Parameters:**

- `p_58083_` (`BlockState`)
- `p_58084_` (`Direction`)
- `p_58085_` (`BlockState`)
- `p_58086_` (`LevelAccessor`)
- `p_58087_` (`BlockPos`)
- `p_58088_` (`BlockPos`)

**Returns:** `BlockState`

### getYRotationDegrees

```java
public float getYRotationDegrees(BlockState p_278024_)
```

**Parameters:**

- `p_278024_` (`BlockState`)

**Returns:** `float`

### getSignHitboxCenterPosition

```java
public Vec3 getSignHitboxCenterPosition(BlockState p_278316_)
```

**Parameters:**

- `p_278316_` (`BlockState`)

**Returns:** `Vec3`

### rotate

```java
protected BlockState rotate(BlockState p_58080_, Rotation p_58081_)
```

**Parameters:**

- `p_58080_` (`BlockState`)
- `p_58081_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_58077_, Mirror p_58078_)
```

**Parameters:**

- `p_58077_` (`BlockState`)
- `p_58078_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_58090_)
```

**Parameters:**

- `p_58090_` (`StateDefinition.Builder<Block, BlockState>`)
