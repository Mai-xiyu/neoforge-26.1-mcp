# WallTorchBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `TorchBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallTorchBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `AABB_OFFSET` | `float` |  |

## Methods

### codec

```java
public MapCodec<WallTorchBlock> codec()
```

**Returns:** `MapCodec<WallTorchBlock>`

### WallTorchBlock

```java
public WallTorchBlock(SimpleParticleType p_304467_, BlockBehaviour.Properties p_58123_)
```

**Parameters:**

- `p_304467_` (`SimpleParticleType`)
- `p_58123_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getShape

```java
protected VoxelShape getShape(BlockState p_58152_, BlockGetter p_58153_, BlockPos p_58154_, CollisionContext p_58155_)
```

**Parameters:**

- `p_58152_` (`BlockState`)
- `p_58153_` (`BlockGetter`)
- `p_58154_` (`BlockPos`)
- `p_58155_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
return getShape()
```

**Returns:** `return`

### getShape

```java
public static VoxelShape getShape(BlockState p_58157_)
```

**Parameters:**

- `p_58157_` (`BlockState`)

**Returns:** `public static VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_58133_, LevelReader p_58134_, BlockPos p_58135_)
```

**Parameters:**

- `p_58133_` (`BlockState`)
- `p_58134_` (`LevelReader`)
- `p_58135_` (`BlockPos`)

**Returns:** `boolean`

### canSurvive

```java
public static boolean canSurvive(LevelReader p_320074_, BlockPos p_320860_, Direction p_320326_)
```

**Parameters:**

- `p_320074_` (`LevelReader`)
- `p_320860_` (`BlockPos`)
- `p_320326_` (`Direction`)

**Returns:** `public static boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_58126_)
```

**Parameters:**

- `p_58126_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_58143_, Direction p_58144_, BlockState p_58145_, LevelAccessor p_58146_, BlockPos p_58147_, BlockPos p_58148_)
```

**Parameters:**

- `p_58143_` (`BlockState`)
- `p_58144_` (`Direction`)
- `p_58145_` (`BlockState`)
- `p_58146_` (`LevelAccessor`)
- `p_58147_` (`BlockPos`)
- `p_58148_` (`BlockPos`)

**Returns:** `BlockState`

### animateTick

```java
public void animateTick(BlockState p_222660_, Level p_222661_, BlockPos p_222662_, RandomSource p_222663_)
```

**Parameters:**

- `p_222660_` (`BlockState`)
- `p_222661_` (`Level`)
- `p_222662_` (`BlockPos`)
- `p_222663_` (`RandomSource`)

### rotate

```java
protected BlockState rotate(BlockState p_58140_, Rotation p_58141_)
```

**Parameters:**

- `p_58140_` (`BlockState`)
- `p_58141_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_58137_, Mirror p_58138_)
```

**Parameters:**

- `p_58137_` (`BlockState`)
- `p_58138_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_58150_)
```

**Parameters:**

- `p_58150_` (`StateDefinition.Builder<Block, BlockState>`)
