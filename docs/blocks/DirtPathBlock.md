# DirtPathBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DirtPathBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<DirtPathBlock> codec()
```

**Returns:** `MapCodec<DirtPathBlock>`

### DirtPathBlock

```java
public DirtPathBlock(BlockBehaviour.Properties p_153129_)
```

**Parameters:**

- `p_153129_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_153159_)
```

**Parameters:**

- `p_153159_` (`BlockState`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_153131_)
```

**Parameters:**

- `p_153131_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_153152_, Direction p_153153_, BlockState p_153154_, LevelAccessor p_153155_, BlockPos p_153156_, BlockPos p_153157_)
```

**Parameters:**

- `p_153152_` (`BlockState`)
- `p_153153_` (`Direction`)
- `p_153154_` (`BlockState`)
- `p_153155_` (`LevelAccessor`)
- `p_153156_` (`BlockPos`)
- `p_153157_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_221070_, ServerLevel p_221071_, BlockPos p_221072_, RandomSource p_221073_)
```

**Parameters:**

- `p_221070_` (`BlockState`)
- `p_221071_` (`ServerLevel`)
- `p_221072_` (`BlockPos`)
- `p_221073_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_153148_, LevelReader p_153149_, BlockPos p_153150_)
```

**Parameters:**

- `p_153148_` (`BlockState`)
- `p_153149_` (`LevelReader`)
- `p_153150_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_153143_, BlockGetter p_153144_, BlockPos p_153145_, CollisionContext p_153146_)
```

**Parameters:**

- `p_153143_` (`BlockState`)
- `p_153144_` (`BlockGetter`)
- `p_153145_` (`BlockPos`)
- `p_153146_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_153138_, PathComputationType p_153141_)
```

**Parameters:**

- `p_153138_` (`BlockState`)
- `p_153141_` (`PathComputationType`)

**Returns:** `boolean`
