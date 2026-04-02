# LadderBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LadderBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `NORTH_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<LadderBlock> codec()
```

**Returns:** `MapCodec<LadderBlock>`

### LadderBlock

```java
public LadderBlock(BlockBehaviour.Properties p_54345_)
```

**Parameters:**

- `p_54345_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54372_, BlockGetter p_54373_, BlockPos p_54374_, CollisionContext p_54375_)
```

**Parameters:**

- `p_54372_` (`BlockState`)
- `p_54373_` (`BlockGetter`)
- `p_54374_` (`BlockPos`)
- `p_54375_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canAttachTo

```java
private boolean canAttachTo(BlockGetter p_54349_, BlockPos p_54350_, Direction p_54351_)
```

**Parameters:**

- `p_54349_` (`BlockGetter`)
- `p_54350_` (`BlockPos`)
- `p_54351_` (`Direction`)

**Returns:** `private boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_54353_, LevelReader p_54354_, BlockPos p_54355_)
```

**Parameters:**

- `p_54353_` (`BlockState`)
- `p_54354_` (`LevelReader`)
- `p_54355_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_54363_, Direction p_54364_, BlockState p_54365_, LevelAccessor p_54366_, BlockPos p_54367_, BlockPos p_54368_)
```

**Parameters:**

- `p_54363_` (`BlockState`)
- `p_54364_` (`Direction`)
- `p_54365_` (`BlockState`)
- `p_54366_` (`LevelAccessor`)
- `p_54367_` (`BlockPos`)
- `p_54368_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54347_)
```

**Parameters:**

- `p_54347_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_54360_, Rotation p_54361_)
```

**Parameters:**

- `p_54360_` (`BlockState`)
- `p_54361_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_54357_, Mirror p_54358_)
```

**Parameters:**

- `p_54357_` (`BlockState`)
- `p_54358_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54370_)
```

**Parameters:**

- `p_54370_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_54377_)
```

**Parameters:**

- `p_54377_` (`BlockState`)

**Returns:** `FluidState`
