# VineBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `net.neoforged.neoforge.common.IShearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<VineBlock>` |  |
| `UP` | `BooleanProperty` |  |
| `NORTH` | `BooleanProperty` |  |
| `EAST` | `BooleanProperty` |  |
| `SOUTH` | `BooleanProperty` |  |
| `WEST` | `BooleanProperty` |  |
| `PROPERTY_BY_DIRECTION` | `Map<Direction, BooleanProperty>` |  |
| `AABB_OFFSET` | `float` |  |

## Methods

### codec

```java
public MapCodec<VineBlock> codec()
```

**Returns:** `MapCodec<VineBlock>`

### VineBlock

```java
public VineBlock(BlockBehaviour.Properties p_57847_)
```

**Parameters:**

- `p_57847_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateShape

```java
private static VoxelShape calculateShape(BlockState p_57906_)
```

**Parameters:**

- `p_57906_` (`BlockState`)

**Returns:** `private static VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_57897_, BlockGetter p_57898_, BlockPos p_57899_, CollisionContext p_57900_)
```

**Parameters:**

- `p_57897_` (`BlockState`)
- `p_57898_` (`BlockGetter`)
- `p_57899_` (`BlockPos`)
- `p_57900_` (`CollisionContext`)

**Returns:** `VoxelShape`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_181239_, BlockGetter p_181240_, BlockPos p_181241_)
```

**Parameters:**

- `p_181239_` (`BlockState`)
- `p_181240_` (`BlockGetter`)
- `p_181241_` (`BlockPos`)

**Returns:** `boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_57861_, LevelReader p_57862_, BlockPos p_57863_)
```

**Parameters:**

- `p_57861_` (`BlockState`)
- `p_57862_` (`LevelReader`)
- `p_57863_` (`BlockPos`)

**Returns:** `boolean`

### hasFaces

```java
private boolean hasFaces(BlockState p_57908_)
```

**Parameters:**

- `p_57908_` (`BlockState`)

**Returns:** `private boolean`

### countFaces

```java
private int countFaces(BlockState p_57910_)
```

**Parameters:**

- `p_57910_` (`BlockState`)

**Returns:** `private int`

### canSupportAtFace

```java
private boolean canSupportAtFace(BlockGetter p_57888_, BlockPos p_57889_, Direction p_57890_)
```

**Parameters:**

- `p_57888_` (`BlockGetter`)
- `p_57889_` (`BlockPos`)
- `p_57890_` (`Direction`)

**Returns:** `private boolean`

### isAcceptableNeighbour

```java
public static boolean isAcceptableNeighbour(BlockGetter p_57854_, BlockPos p_57855_, Direction p_57856_)
```

**Parameters:**

- `p_57854_` (`BlockGetter`)
- `p_57855_` (`BlockPos`)
- `p_57856_` (`Direction`)

**Returns:** `public static boolean`

### getUpdatedState

```java
private BlockState getUpdatedState(BlockState p_57902_, BlockGetter p_57903_, BlockPos p_57904_)
```

**Parameters:**

- `p_57902_` (`BlockState`)
- `p_57903_` (`BlockGetter`)
- `p_57904_` (`BlockPos`)

**Returns:** `private BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_57875_, Direction p_57876_, BlockState p_57877_, LevelAccessor p_57878_, BlockPos p_57879_, BlockPos p_57880_)
```

**Parameters:**

- `p_57875_` (`BlockState`)
- `p_57876_` (`Direction`)
- `p_57877_` (`BlockState`)
- `p_57878_` (`LevelAccessor`)
- `p_57879_` (`BlockPos`)
- `p_57880_` (`BlockPos`)

**Returns:** `BlockState`

### randomTick

```java
protected void randomTick(BlockState p_222655_, ServerLevel p_222656_, BlockPos p_222657_, RandomSource p_222658_)
```

**Parameters:**

- `p_222655_` (`BlockState`)
- `p_222656_` (`ServerLevel`)
- `p_222657_` (`BlockPos`)
- `p_222658_` (`RandomSource`)

### copyRandomFaces

```java
private BlockState copyRandomFaces(BlockState p_222651_, BlockState p_222652_, RandomSource p_222653_)
```

**Parameters:**

- `p_222651_` (`BlockState`)
- `p_222652_` (`BlockState`)
- `p_222653_` (`RandomSource`)

**Returns:** `private BlockState`

### hasHorizontalConnection

```java
private boolean hasHorizontalConnection(BlockState p_57912_)
```

**Parameters:**

- `p_57912_` (`BlockState`)

**Returns:** `private boolean`

### canSpread

```java
private boolean canSpread(BlockGetter p_57851_, BlockPos p_57852_)
```

**Parameters:**

- `p_57851_` (`BlockGetter`)
- `p_57852_` (`BlockPos`)

**Returns:** `private boolean`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_57858_, BlockPlaceContext p_57859_)
```

**Parameters:**

- `p_57858_` (`BlockState`)
- `p_57859_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57849_)
```

**Parameters:**

- `p_57849_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57882_)
```

**Parameters:**

- `p_57882_` (`StateDefinition.Builder<Block, BlockState>`)

### rotate

```java
protected BlockState rotate(BlockState p_57868_, Rotation p_57869_)
```

**Parameters:**

- `p_57868_` (`BlockState`)
- `p_57869_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_57865_, Mirror p_57866_)
```

**Parameters:**

- `p_57865_` (`BlockState`)
- `p_57866_` (`Mirror`)

**Returns:** `BlockState`

### getPropertyForFace

```java
public static BooleanProperty getPropertyForFace(Direction p_57884_)
```

**Parameters:**

- `p_57884_` (`Direction`)

**Returns:** `public static BooleanProperty`
