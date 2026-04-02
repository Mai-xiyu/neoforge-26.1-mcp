# GrindstoneBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FaceAttachedHorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<GrindstoneBlock>` |  |
| `FLOOR_NORTH_SOUTH_LEFT_POST` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_RIGHT_POST` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_LEFT_PIVOT` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_RIGHT_PIVOT` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_LEFT_LEG` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_RIGHT_LEG` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_ALL_LEGS` | `VoxelShape` |  |
| `FLOOR_NORTH_SOUTH_GRINDSTONE` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_LEFT_POST` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_RIGHT_POST` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_LEFT_PIVOT` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_RIGHT_PIVOT` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_LEFT_LEG` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_RIGHT_LEG` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_ALL_LEGS` | `VoxelShape` |  |
| `FLOOR_EAST_WEST_GRINDSTONE` | `VoxelShape` |  |
| `WALL_SOUTH_LEFT_POST` | `VoxelShape` |  |
| `WALL_SOUTH_RIGHT_POST` | `VoxelShape` |  |
| `WALL_SOUTH_LEFT_PIVOT` | `VoxelShape` |  |
| `WALL_SOUTH_RIGHT_PIVOT` | `VoxelShape` |  |
| `WALL_SOUTH_LEFT_LEG` | `VoxelShape` |  |
| `WALL_SOUTH_RIGHT_LEG` | `VoxelShape` |  |
| `WALL_SOUTH_ALL_LEGS` | `VoxelShape` |  |
| `WALL_SOUTH_GRINDSTONE` | `VoxelShape` |  |
| `WALL_NORTH_LEFT_POST` | `VoxelShape` |  |
| `WALL_NORTH_RIGHT_POST` | `VoxelShape` |  |
| `WALL_NORTH_LEFT_PIVOT` | `VoxelShape` |  |
| `WALL_NORTH_RIGHT_PIVOT` | `VoxelShape` |  |
| `WALL_NORTH_LEFT_LEG` | `VoxelShape` |  |
| `WALL_NORTH_RIGHT_LEG` | `VoxelShape` |  |
| `WALL_NORTH_ALL_LEGS` | `VoxelShape` |  |
| `WALL_NORTH_GRINDSTONE` | `VoxelShape` |  |
| `WALL_WEST_LEFT_POST` | `VoxelShape` |  |
| `WALL_WEST_RIGHT_POST` | `VoxelShape` |  |
| `WALL_WEST_LEFT_PIVOT` | `VoxelShape` |  |
| `WALL_WEST_RIGHT_PIVOT` | `VoxelShape` |  |
| `WALL_WEST_LEFT_LEG` | `VoxelShape` |  |
| `WALL_WEST_RIGHT_LEG` | `VoxelShape` |  |
| `WALL_WEST_ALL_LEGS` | `VoxelShape` |  |
| `WALL_WEST_GRINDSTONE` | `VoxelShape` |  |
| `WALL_EAST_LEFT_POST` | `VoxelShape` |  |
| `WALL_EAST_RIGHT_POST` | `VoxelShape` |  |
| `WALL_EAST_LEFT_PIVOT` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<GrindstoneBlock> codec()
```

**Returns:** `MapCodec<GrindstoneBlock>`

### GrindstoneBlock

```java
public GrindstoneBlock(BlockBehaviour.Properties p_53808_)
```

**Parameters:**

- `p_53808_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_53840_)
```

**Parameters:**

- `p_53840_` (`BlockState`)

**Returns:** `RenderShape`

### getVoxelShape

```java
private VoxelShape getVoxelShape(BlockState p_53856_)
```

**Parameters:**

- `p_53856_` (`BlockState`)

**Returns:** `private VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_53851_, BlockGetter p_53852_, BlockPos p_53853_, CollisionContext p_53854_)
```

**Parameters:**

- `p_53851_` (`BlockState`)
- `p_53852_` (`BlockGetter`)
- `p_53853_` (`BlockPos`)
- `p_53854_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_53842_, BlockGetter p_53843_, BlockPos p_53844_, CollisionContext p_53845_)
```

**Parameters:**

- `p_53842_` (`BlockState`)
- `p_53843_` (`BlockGetter`)
- `p_53844_` (`BlockPos`)
- `p_53845_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_53828_, LevelReader p_53829_, BlockPos p_53830_)
```

**Parameters:**

- `p_53828_` (`BlockState`)
- `p_53829_` (`LevelReader`)
- `p_53830_` (`BlockPos`)

**Returns:** `boolean`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_53821_, Level p_53822_, BlockPos p_53823_, Player p_53824_, BlockHitResult p_53826_)
```

**Parameters:**

- `p_53821_` (`BlockState`)
- `p_53822_` (`Level`)
- `p_53823_` (`BlockPos`)
- `p_53824_` (`Player`)
- `p_53826_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_53847_, Level p_53848_, BlockPos p_53849_)
```

**Parameters:**

- `p_53847_` (`BlockState`)
- `p_53848_` (`Level`)
- `p_53849_` (`BlockPos`)

**Returns:** `MenuProvider`

### rotate

```java
protected BlockState rotate(BlockState p_53835_, Rotation p_53836_)
```

**Parameters:**

- `p_53835_` (`BlockState`)
- `p_53836_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_53832_, Mirror p_53833_)
```

**Parameters:**

- `p_53832_` (`BlockState`)
- `p_53833_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53838_)
```

**Parameters:**

- `p_53838_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53816_, PathComputationType p_53819_)
```

**Parameters:**

- `p_53816_` (`BlockState`)
- `p_53819_` (`PathComputationType`)

**Returns:** `boolean`
