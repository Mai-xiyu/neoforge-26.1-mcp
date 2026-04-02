# BaseCoralWallFanBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseCoralFanBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BaseCoralWallFanBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<? extends BaseCoralWallFanBlock> codec()
```

**Returns:** `MapCodec<? extends BaseCoralWallFanBlock>`

### BaseCoralWallFanBlock

```java
public BaseCoralWallFanBlock(BlockBehaviour.Properties p_49196_)
```

**Parameters:**

- `p_49196_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_49219_, BlockGetter p_49220_, BlockPos p_49221_, CollisionContext p_49222_)
```

**Parameters:**

- `p_49219_` (`BlockState`)
- `p_49220_` (`BlockGetter`)
- `p_49221_` (`BlockPos`)
- `p_49222_` (`CollisionContext`)

**Returns:** `VoxelShape`

### rotate

```java
protected BlockState rotate(BlockState p_49207_, Rotation p_49208_)
```

**Parameters:**

- `p_49207_` (`BlockState`)
- `p_49208_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_49204_, Mirror p_49205_)
```

**Parameters:**

- `p_49204_` (`BlockState`)
- `p_49205_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49217_)
```

**Parameters:**

- `p_49217_` (`StateDefinition.Builder<Block, BlockState>`)

### updateShape

```java
protected BlockState updateShape(BlockState p_49210_, Direction p_49211_, BlockState p_49212_, LevelAccessor p_49213_, BlockPos p_49214_, BlockPos p_49215_)
```

**Parameters:**

- `p_49210_` (`BlockState`)
- `p_49211_` (`Direction`)
- `p_49212_` (`BlockState`)
- `p_49213_` (`LevelAccessor`)
- `p_49214_` (`BlockPos`)
- `p_49215_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_49200_, LevelReader p_49201_, BlockPos p_49202_)
```

**Parameters:**

- `p_49200_` (`BlockState`)
- `p_49201_` (`LevelReader`)
- `p_49202_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49198_)
```

**Parameters:**

- `p_49198_` (`BlockPlaceContext`)

**Returns:** `BlockState`
