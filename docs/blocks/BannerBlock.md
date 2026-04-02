# BannerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractBannerBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BannerBlock>` |  |
| `ROTATION` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<BannerBlock> codec()
```

**Returns:** `MapCodec<BannerBlock>`

### BannerBlock

```java
public BannerBlock(DyeColor p_49012_, BlockBehaviour.Properties p_49013_)
```

**Parameters:**

- `p_49012_` (`DyeColor`)
- `p_49013_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canSurvive

```java
protected boolean canSurvive(BlockState p_49019_, LevelReader p_49020_, BlockPos p_49021_)
```

**Parameters:**

- `p_49019_` (`BlockState`)
- `p_49020_` (`LevelReader`)
- `p_49021_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_49038_, BlockGetter p_49039_, BlockPos p_49040_, CollisionContext p_49041_)
```

**Parameters:**

- `p_49038_` (`BlockState`)
- `p_49039_` (`BlockGetter`)
- `p_49040_` (`BlockPos`)
- `p_49041_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49017_)
```

**Parameters:**

- `p_49017_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_49029_, Direction p_49030_, BlockState p_49031_, LevelAccessor p_49032_, BlockPos p_49033_, BlockPos p_49034_)
```

**Parameters:**

- `p_49029_` (`BlockState`)
- `p_49030_` (`Direction`)
- `p_49031_` (`BlockState`)
- `p_49032_` (`LevelAccessor`)
- `p_49033_` (`BlockPos`)
- `p_49034_` (`BlockPos`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_49026_, Rotation p_49027_)
```

**Parameters:**

- `p_49026_` (`BlockState`)
- `p_49027_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_49023_, Mirror p_49024_)
```

**Parameters:**

- `p_49023_` (`BlockState`)
- `p_49024_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49036_)
```

**Parameters:**

- `p_49036_` (`StateDefinition.Builder<Block, BlockState>`)

### byColor

```java
public static Block byColor(DyeColor p_49015_)
```

**Parameters:**

- `p_49015_` (`DyeColor`)

**Returns:** `public static Block`
