# ScaffoldingBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ScaffoldingBlock>` |  |
| `STABILITY_MAX_DISTANCE` | `int` |  |
| `DISTANCE` | `IntegerProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `BOTTOM` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<ScaffoldingBlock> codec()
```

**Returns:** `MapCodec<ScaffoldingBlock>`

### ScaffoldingBlock

```java
public ScaffoldingBlock(BlockBehaviour.Properties p_56021_)
```

**Parameters:**

- `p_56021_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56051_)
```

**Parameters:**

- `p_56051_` (`StateDefinition.Builder<Block, BlockState>`)

### getShape

```java
protected VoxelShape getShape(BlockState p_56057_, BlockGetter p_56058_, BlockPos p_56059_, CollisionContext p_56060_)
```

**Parameters:**

- `p_56057_` (`BlockState`)
- `p_56058_` (`BlockGetter`)
- `p_56059_` (`BlockPos`)
- `p_56060_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getInteractionShape

```java
protected VoxelShape getInteractionShape(BlockState p_56053_, BlockGetter p_56054_, BlockPos p_56055_)
```

**Parameters:**

- `p_56053_` (`BlockState`)
- `p_56054_` (`BlockGetter`)
- `p_56055_` (`BlockPos`)

**Returns:** `VoxelShape`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_56037_, BlockPlaceContext p_56038_)
```

**Parameters:**

- `p_56037_` (`BlockState`)
- `p_56038_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56023_)
```

**Parameters:**

- `p_56023_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### onPlace

```java
protected void onPlace(BlockState p_56062_, Level p_56063_, BlockPos p_56064_, BlockState p_56065_, boolean p_56066_)
```

**Parameters:**

- `p_56062_` (`BlockState`)
- `p_56063_` (`Level`)
- `p_56064_` (`BlockPos`)
- `p_56065_` (`BlockState`)
- `p_56066_` (`boolean`)

### updateShape

```java
protected BlockState updateShape(BlockState p_56044_, Direction p_56045_, BlockState p_56046_, LevelAccessor p_56047_, BlockPos p_56048_, BlockPos p_56049_)
```

**Parameters:**

- `p_56044_` (`BlockState`)
- `p_56045_` (`Direction`)
- `p_56046_` (`BlockState`)
- `p_56047_` (`LevelAccessor`)
- `p_56048_` (`BlockPos`)
- `p_56049_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_222019_, ServerLevel p_222020_, BlockPos p_222021_, RandomSource p_222022_)
```

**Parameters:**

- `p_222019_` (`BlockState`)
- `p_222020_` (`ServerLevel`)
- `p_222021_` (`BlockPos`)
- `p_222022_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_56040_, LevelReader p_56041_, BlockPos p_56042_)
```

**Parameters:**

- `p_56040_` (`BlockState`)
- `p_56041_` (`LevelReader`)
- `p_56042_` (`BlockPos`)

**Returns:** `boolean`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_56068_, BlockGetter p_56069_, BlockPos p_56070_, CollisionContext p_56071_)
```

**Parameters:**

- `p_56068_` (`BlockState`)
- `p_56069_` (`BlockGetter`)
- `p_56070_` (`BlockPos`)
- `p_56071_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_56073_)
```

**Parameters:**

- `p_56073_` (`BlockState`)

**Returns:** `FluidState`

### isBottom

```java
private boolean isBottom(BlockGetter p_56028_, BlockPos p_56029_, int p_56030_)
```

**Parameters:**

- `p_56028_` (`BlockGetter`)
- `p_56029_` (`BlockPos`)
- `p_56030_` (`int`)

**Returns:** `private boolean`

### getDistance

```java
public static int getDistance(BlockGetter p_56025_, BlockPos p_56026_)
```

**Parameters:**

- `p_56025_` (`BlockGetter`)
- `p_56026_` (`BlockPos`)

**Returns:** `public static int`
