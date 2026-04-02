# RedstoneWallTorchBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `RedstoneTorchBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RedstoneWallTorchBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `LIT` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<RedstoneWallTorchBlock> codec()
```

**Returns:** `MapCodec<RedstoneWallTorchBlock>`

### RedstoneWallTorchBlock

```java
public RedstoneWallTorchBlock(BlockBehaviour.Properties p_55744_)
```

**Parameters:**

- `p_55744_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getShape

```java
protected VoxelShape getShape(BlockState p_55781_, BlockGetter p_55782_, BlockPos p_55783_, CollisionContext p_55784_)
```

**Parameters:**

- `p_55781_` (`BlockState`)
- `p_55782_` (`BlockGetter`)
- `p_55783_` (`BlockPos`)
- `p_55784_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_55762_, LevelReader p_55763_, BlockPos p_55764_)
```

**Parameters:**

- `p_55762_` (`BlockState`)
- `p_55763_` (`LevelReader`)
- `p_55764_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_55772_, Direction p_55773_, BlockState p_55774_, LevelAccessor p_55775_, BlockPos p_55776_, BlockPos p_55777_)
```

**Parameters:**

- `p_55772_` (`BlockState`)
- `p_55773_` (`Direction`)
- `p_55774_` (`BlockState`)
- `p_55775_` (`LevelAccessor`)
- `p_55776_` (`BlockPos`)
- `p_55777_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55746_)
```

**Parameters:**

- `p_55746_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### animateTick

```java
public void animateTick(BlockState p_221959_, Level p_221960_, BlockPos p_221961_, RandomSource p_221962_)
```

**Parameters:**

- `p_221959_` (`BlockState`)
- `p_221960_` (`Level`)
- `p_221961_` (`BlockPos`)
- `p_221962_` (`RandomSource`)

### hasNeighborSignal

```java
protected boolean hasNeighborSignal(Level p_55748_, BlockPos p_55749_, BlockState p_55750_)
```

**Parameters:**

- `p_55748_` (`Level`)
- `p_55749_` (`BlockPos`)
- `p_55750_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
protected int getSignal(BlockState p_55752_, BlockGetter p_55753_, BlockPos p_55754_, Direction p_55755_)
```

**Parameters:**

- `p_55752_` (`BlockState`)
- `p_55753_` (`BlockGetter`)
- `p_55754_` (`BlockPos`)
- `p_55755_` (`Direction`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_55769_, Rotation p_55770_)
```

**Parameters:**

- `p_55769_` (`BlockState`)
- `p_55770_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_55766_, Mirror p_55767_)
```

**Parameters:**

- `p_55766_` (`BlockState`)
- `p_55767_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55779_)
```

**Parameters:**

- `p_55779_` (`StateDefinition.Builder<Block, BlockState>`)
