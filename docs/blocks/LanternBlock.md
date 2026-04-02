# LanternBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LanternBlock>` |  |
| `HANGING` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `AABB` | `VoxelShape` |  |
| `HANGING_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<LanternBlock> codec()
```

**Returns:** `MapCodec<LanternBlock>`

### LanternBlock

```java
public LanternBlock(BlockBehaviour.Properties p_153465_)
```

**Parameters:**

- `p_153465_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_153467_)
```

**Parameters:**

- `p_153467_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_153474_, BlockGetter p_153475_, BlockPos p_153476_, CollisionContext p_153477_)
```

**Parameters:**

- `p_153474_` (`BlockState`)
- `p_153475_` (`BlockGetter`)
- `p_153476_` (`BlockPos`)
- `p_153477_` (`CollisionContext`)

**Returns:** `VoxelShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153490_)
```

**Parameters:**

- `p_153490_` (`StateDefinition.Builder<Block, BlockState>`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_153479_, LevelReader p_153480_, BlockPos p_153481_)
```

**Parameters:**

- `p_153479_` (`BlockState`)
- `p_153480_` (`LevelReader`)
- `p_153481_` (`BlockPos`)

**Returns:** `boolean`

### getConnectedDirection

```java
protected static Direction getConnectedDirection(BlockState p_153496_)
```

**Parameters:**

- `p_153496_` (`BlockState`)

**Returns:** `protected static Direction`

### updateShape

```java
protected BlockState updateShape(BlockState p_153483_, Direction p_153484_, BlockState p_153485_, LevelAccessor p_153486_, BlockPos p_153487_, BlockPos p_153488_)
```

**Parameters:**

- `p_153483_` (`BlockState`)
- `p_153484_` (`Direction`)
- `p_153485_` (`BlockState`)
- `p_153486_` (`LevelAccessor`)
- `p_153487_` (`BlockPos`)
- `p_153488_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_153492_)
```

**Parameters:**

- `p_153492_` (`BlockState`)

**Returns:** `FluidState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_153469_, PathComputationType p_153472_)
```

**Parameters:**

- `p_153469_` (`BlockState`)
- `p_153472_` (`PathComputationType`)

**Returns:** `boolean`
