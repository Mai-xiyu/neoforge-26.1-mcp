# WallBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallBlock>` |  |
| `UP` | `BooleanProperty` |  |
| `EAST_WALL` | `EnumProperty<WallSide>` |  |
| `NORTH_WALL` | `EnumProperty<WallSide>` |  |
| `SOUTH_WALL` | `EnumProperty<WallSide>` |  |
| `WEST_WALL` | `EnumProperty<WallSide>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<WallBlock> codec()
```

**Returns:** `MapCodec<WallBlock>`

### WallBlock

```java
public WallBlock(BlockBehaviour.Properties p_57964_)
```

**Parameters:**

- `p_57964_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### applyWallShape

```java
private static VoxelShape applyWallShape(VoxelShape p_58034_, WallSide p_58035_, VoxelShape p_58036_, VoxelShape p_58037_)
```

**Parameters:**

- `p_58034_` (`VoxelShape`)
- `p_58035_` (`WallSide`)
- `p_58036_` (`VoxelShape`)
- `p_58037_` (`VoxelShape`)

**Returns:** `private static VoxelShape`

### makeShapes

```java
private Map<BlockState, VoxelShape> makeShapes(float p_57966_, float p_57967_, float p_57968_, float p_57969_, float p_57970_, float p_57971_)
```

**Parameters:**

- `p_57966_` (`float`)
- `p_57967_` (`float`)
- `p_57968_` (`float`)
- `p_57969_` (`float`)
- `p_57970_` (`float`)
- `p_57971_` (`float`)

**Returns:** `private Map<BlockState, VoxelShape>`

### getShape

```java
protected VoxelShape getShape(BlockState p_58050_, BlockGetter p_58051_, BlockPos p_58052_, CollisionContext p_58053_)
```

**Parameters:**

- `p_58050_` (`BlockState`)
- `p_58051_` (`BlockGetter`)
- `p_58052_` (`BlockPos`)
- `p_58053_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_58055_, BlockGetter p_58056_, BlockPos p_58057_, CollisionContext p_58058_)
```

**Parameters:**

- `p_58055_` (`BlockState`)
- `p_58056_` (`BlockGetter`)
- `p_58057_` (`BlockPos`)
- `p_58058_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_57996_, PathComputationType p_57999_)
```

**Parameters:**

- `p_57996_` (`BlockState`)
- `p_57999_` (`PathComputationType`)

**Returns:** `boolean`

### connectsTo

```java
private boolean connectsTo(BlockState p_58021_, boolean p_58022_, Direction p_58023_)
```

**Parameters:**

- `p_58021_` (`BlockState`)
- `p_58022_` (`boolean`)
- `p_58023_` (`Direction`)

**Returns:** `private boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57973_)
```

**Parameters:**

- `p_57973_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_58014_, Direction p_58015_, BlockState p_58016_, LevelAccessor p_58017_, BlockPos p_58018_, BlockPos p_58019_)
```

**Parameters:**

- `p_58014_` (`BlockState`)
- `p_58015_` (`Direction`)
- `p_58016_` (`BlockState`)
- `p_58017_` (`LevelAccessor`)
- `p_58018_` (`BlockPos`)
- `p_58019_` (`BlockPos`)

**Returns:** `BlockState`

### isConnected

```java
private static boolean isConnected(BlockState p_58011_, Property<WallSide> p_58012_)
```

**Parameters:**

- `p_58011_` (`BlockState`)
- `p_58012_` (`Property<WallSide>`)

**Returns:** `private static boolean`

### isCovered

```java
private static boolean isCovered(VoxelShape p_58039_, VoxelShape p_58040_)
```

**Parameters:**

- `p_58039_` (`VoxelShape`)
- `p_58040_` (`VoxelShape`)

**Returns:** `private static boolean`

### topUpdate

```java
private BlockState topUpdate(LevelReader p_57975_, BlockState p_57976_, BlockPos p_57977_, BlockState p_57978_)
```

**Parameters:**

- `p_57975_` (`LevelReader`)
- `p_57976_` (`BlockState`)
- `p_57977_` (`BlockPos`)
- `p_57978_` (`BlockState`)

**Returns:** `private BlockState`

### sideUpdate

```java
private BlockState sideUpdate(LevelReader p_57989_, BlockPos p_57990_, BlockState p_57991_, BlockPos p_57992_, BlockState p_57993_, Direction p_57994_)
```

**Parameters:**

- `p_57989_` (`LevelReader`)
- `p_57990_` (`BlockPos`)
- `p_57991_` (`BlockState`)
- `p_57992_` (`BlockPos`)
- `p_57993_` (`BlockState`)
- `p_57994_` (`Direction`)

**Returns:** `private BlockState`

### updateShape

```java
private BlockState updateShape(LevelReader p_57980_, BlockState p_57981_, BlockPos p_57982_, BlockState p_57983_, boolean p_57984_, boolean p_57985_, boolean p_57986_, boolean p_57987_)
```

**Parameters:**

- `p_57980_` (`LevelReader`)
- `p_57981_` (`BlockState`)
- `p_57982_` (`BlockPos`)
- `p_57983_` (`BlockState`)
- `p_57984_` (`boolean`)
- `p_57985_` (`boolean`)
- `p_57986_` (`boolean`)
- `p_57987_` (`boolean`)

**Returns:** `private BlockState`

### shouldRaisePost

```java
private boolean shouldRaisePost(BlockState p_58007_, BlockState p_58008_, VoxelShape p_58009_)
```

**Parameters:**

- `p_58007_` (`BlockState`)
- `p_58008_` (`BlockState`)
- `p_58009_` (`VoxelShape`)

**Returns:** `private boolean`

### updateSides

```java
private BlockState updateSides(BlockState p_58025_, boolean p_58026_, boolean p_58027_, boolean p_58028_, boolean p_58029_, VoxelShape p_58030_)
```

**Parameters:**

- `p_58025_` (`BlockState`)
- `p_58026_` (`boolean`)
- `p_58027_` (`boolean`)
- `p_58028_` (`boolean`)
- `p_58029_` (`boolean`)
- `p_58030_` (`VoxelShape`)

**Returns:** `private BlockState`

### makeWallState

```java
private WallSide makeWallState(boolean p_58042_, VoxelShape p_58043_, VoxelShape p_58044_)
```

**Parameters:**

- `p_58042_` (`boolean`)
- `p_58043_` (`VoxelShape`)
- `p_58044_` (`VoxelShape`)

**Returns:** `private WallSide`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_58060_)
```

**Parameters:**

- `p_58060_` (`BlockState`)

**Returns:** `FluidState`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_58046_, BlockGetter p_58047_, BlockPos p_58048_)
```

**Parameters:**

- `p_58046_` (`BlockState`)
- `p_58047_` (`BlockGetter`)
- `p_58048_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_58032_)
```

**Parameters:**

- `p_58032_` (`StateDefinition.Builder<Block, BlockState>`)

### rotate

```java
protected BlockState rotate(BlockState p_58004_, Rotation p_58005_)
```

**Parameters:**

- `p_58004_` (`BlockState`)
- `p_58005_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_58001_, Mirror p_58002_)
```

**Parameters:**

- `p_58001_` (`BlockState`)
- `p_58002_` (`Mirror`)

**Returns:** `BlockState`
