# StandingSignBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SignBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<StandingSignBlock>` |  |
| `ROTATION` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<StandingSignBlock> codec()
```

**Returns:** `MapCodec<StandingSignBlock>`

### StandingSignBlock

```java
public StandingSignBlock(WoodType p_56991_, BlockBehaviour.Properties p_56990_)
```

**Parameters:**

- `p_56991_` (`WoodType`)
- `p_56990_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### canSurvive

```java
protected boolean canSurvive(BlockState p_56995_, LevelReader p_56996_, BlockPos p_56997_)
```

**Parameters:**

- `p_56995_` (`BlockState`)
- `p_56996_` (`LevelReader`)
- `p_56997_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56993_)
```

**Parameters:**

- `p_56993_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_57005_, Direction p_57006_, BlockState p_57007_, LevelAccessor p_57008_, BlockPos p_57009_, BlockPos p_57010_)
```

**Parameters:**

- `p_57005_` (`BlockState`)
- `p_57006_` (`Direction`)
- `p_57007_` (`BlockState`)
- `p_57008_` (`LevelAccessor`)
- `p_57009_` (`BlockPos`)
- `p_57010_` (`BlockPos`)

**Returns:** `BlockState`

### getYRotationDegrees

```java
public float getYRotationDegrees(BlockState p_277795_)
```

**Parameters:**

- `p_277795_` (`BlockState`)

**Returns:** `float`

### rotate

```java
protected BlockState rotate(BlockState p_57002_, Rotation p_57003_)
```

**Parameters:**

- `p_57002_` (`BlockState`)
- `p_57003_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_56999_, Mirror p_57000_)
```

**Parameters:**

- `p_56999_` (`BlockState`)
- `p_57000_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57012_)
```

**Parameters:**

- `p_57012_` (`StateDefinition.Builder<Block, BlockState>`)
