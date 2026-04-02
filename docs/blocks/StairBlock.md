# StairBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<StairBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `HALF` | `EnumProperty<Half>` |  |
| `SHAPE` | `EnumProperty<StairsShape>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `TOP_AABB` | `VoxelShape` |  |
| `BOTTOM_AABB` | `VoxelShape` |  |
| `OCTET_NNN` | `VoxelShape` |  |
| `OCTET_NNP` | `VoxelShape` |  |
| `OCTET_NPN` | `VoxelShape` |  |
| `OCTET_NPP` | `VoxelShape` |  |
| `OCTET_PNN` | `VoxelShape` |  |
| `OCTET_PNP` | `VoxelShape` |  |
| `OCTET_PPN` | `VoxelShape` |  |
| `OCTET_PPP` | `VoxelShape` |  |
| `TOP_SHAPES` | `VoxelShape[]` |  |
| `BOTTOM_SHAPES` | `VoxelShape[]` |  |
| `baseState` | `BlockState` |  |

## Methods

### codec

```java
public MapCodec<? extends StairBlock> codec()
```

**Returns:** `MapCodec<? extends StairBlock>`

### makeShapes

```java
private static VoxelShape[] makeShapes(VoxelShape p_56934_, VoxelShape p_56935_, VoxelShape p_56936_, VoxelShape p_56937_, VoxelShape p_56938_)
```

**Parameters:**

- `p_56934_` (`VoxelShape`)
- `p_56935_` (`VoxelShape`)
- `p_56936_` (`VoxelShape`)
- `p_56937_` (`VoxelShape`)
- `p_56938_` (`VoxelShape`)

**Returns:** `private static VoxelShape[]`

### makeStairShape

```java
private static VoxelShape makeStairShape(int p_56865_, VoxelShape p_56866_, VoxelShape p_56867_, VoxelShape p_56868_, VoxelShape p_56869_, VoxelShape p_56870_)
```

**Parameters:**

- `p_56865_` (`int`)
- `p_56866_` (`VoxelShape`)
- `p_56867_` (`VoxelShape`)
- `p_56868_` (`VoxelShape`)
- `p_56869_` (`VoxelShape`)
- `p_56870_` (`VoxelShape`)

**Returns:** `private static VoxelShape`

### StairBlock

```java
public StairBlock(BlockState p_56862_, BlockBehaviour.Properties p_56863_)
```

**Parameters:**

- `p_56862_` (`BlockState`)
- `p_56863_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_56967_)
```

**Parameters:**

- `p_56967_` (`BlockState`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_56956_, BlockGetter p_56957_, BlockPos p_56958_, CollisionContext p_56959_)
```

**Parameters:**

- `p_56956_` (`BlockState`)
- `p_56957_` (`BlockGetter`)
- `p_56958_` (`BlockPos`)
- `p_56959_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShapeIndex

```java
private int getShapeIndex(BlockState p_56983_)
```

**Parameters:**

- `p_56983_` (`BlockState`)

**Returns:** `private int`

### getExplosionResistance

```java
public float getExplosionResistance()
```

**Returns:** `float`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56872_)
```

**Parameters:**

- `p_56872_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_56925_, Direction p_56926_, BlockState p_56927_, LevelAccessor p_56928_, BlockPos p_56929_, BlockPos p_56930_)
```

**Parameters:**

- `p_56925_` (`BlockState`)
- `p_56926_` (`Direction`)
- `p_56927_` (`BlockState`)
- `p_56928_` (`LevelAccessor`)
- `p_56929_` (`BlockPos`)
- `p_56930_` (`BlockPos`)

**Returns:** `BlockState`

### getStairsShape

```java
private static StairsShape getStairsShape(BlockState p_56977_, BlockGetter p_56978_, BlockPos p_56979_)
```

**Parameters:**

- `p_56977_` (`BlockState`)
- `p_56978_` (`BlockGetter`)
- `p_56979_` (`BlockPos`)

**Returns:** `private static StairsShape`

### canTakeShape

```java
private static boolean canTakeShape(BlockState p_56971_, BlockGetter p_56972_, BlockPos p_56973_, Direction p_56974_)
```

**Parameters:**

- `p_56971_` (`BlockState`)
- `p_56972_` (`BlockGetter`)
- `p_56973_` (`BlockPos`)
- `p_56974_` (`Direction`)

**Returns:** `private static boolean`

### isStairs

```java
public static boolean isStairs(BlockState p_56981_)
```

**Parameters:**

- `p_56981_` (`BlockState`)

**Returns:** `public static boolean`

### rotate

```java
protected BlockState rotate(BlockState p_56922_, Rotation p_56923_)
```

**Parameters:**

- `p_56922_` (`BlockState`)
- `p_56923_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_56919_, Mirror p_56920_)
```

**Parameters:**

- `p_56919_` (`BlockState`)
- `p_56920_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56932_)
```

**Parameters:**

- `p_56932_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_56969_)
```

**Parameters:**

- `p_56969_` (`BlockState`)

**Returns:** `FluidState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_56891_, PathComputationType p_56894_)
```

**Parameters:**

- `p_56891_` (`BlockState`)
- `p_56894_` (`PathComputationType`)

**Returns:** `boolean`
