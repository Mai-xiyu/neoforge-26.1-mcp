# TripWireBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TripWireBlock>` |  |
| `POWERED` | `BooleanProperty` |  |
| `ATTACHED` | `BooleanProperty` |  |
| `DISARMED` | `BooleanProperty` |  |
| `NORTH` | `BooleanProperty` |  |
| `EAST` | `BooleanProperty` |  |
| `SOUTH` | `BooleanProperty` |  |
| `WEST` | `BooleanProperty` |  |
| `AABB` | `VoxelShape` |  |
| `NOT_ATTACHED_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<TripWireBlock> codec()
```

**Returns:** `MapCodec<TripWireBlock>`

### TripWireBlock

```java
public TripWireBlock(Block p_304873_, BlockBehaviour.Properties p_57604_)
```

**Parameters:**

- `p_304873_` (`Block`)
- `p_57604_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_57654_, BlockGetter p_57655_, BlockPos p_57656_, CollisionContext p_57657_)
```

**Parameters:**

- `p_57654_` (`BlockState`)
- `p_57655_` (`BlockGetter`)
- `p_57656_` (`BlockPos`)
- `p_57657_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57606_)
```

**Parameters:**

- `p_57606_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_57645_, Direction p_57646_, BlockState p_57647_, LevelAccessor p_57648_, BlockPos p_57649_, BlockPos p_57650_)
```

**Parameters:**

- `p_57645_` (`BlockState`)
- `p_57646_` (`Direction`)
- `p_57647_` (`BlockState`)
- `p_57648_` (`LevelAccessor`)
- `p_57649_` (`BlockPos`)
- `p_57650_` (`BlockPos`)

**Returns:** `BlockState`

### onPlace

```java
protected void onPlace(BlockState p_57659_, Level p_57660_, BlockPos p_57661_, BlockState p_57662_, boolean p_57663_)
```

**Parameters:**

- `p_57659_` (`BlockState`)
- `p_57660_` (`Level`)
- `p_57661_` (`BlockPos`)
- `p_57662_` (`BlockState`)
- `p_57663_` (`boolean`)

### onRemove

```java
protected void onRemove(BlockState p_57630_, Level p_57631_, BlockPos p_57632_, BlockState p_57633_, boolean p_57634_)
```

**Parameters:**

- `p_57630_` (`BlockState`)
- `p_57631_` (`Level`)
- `p_57632_` (`BlockPos`)
- `p_57633_` (`BlockState`)
- `p_57634_` (`boolean`)

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_57615_, BlockPos p_57616_, BlockState p_57617_, Player p_57618_)
```

**Parameters:**

- `p_57615_` (`Level`)
- `p_57616_` (`BlockPos`)
- `p_57617_` (`BlockState`)
- `p_57618_` (`Player`)

**Returns:** `BlockState`

### updateSource

```java
private void updateSource(Level p_57611_, BlockPos p_57612_, BlockState p_57613_)
```

**Parameters:**

- `p_57611_` (`Level`)
- `p_57612_` (`BlockPos`)
- `p_57613_` (`BlockState`)

**Returns:** `private void`

### entityInside

```java
protected void entityInside(BlockState p_57625_, Level p_57626_, BlockPos p_57627_, Entity p_57628_)
```

**Parameters:**

- `p_57625_` (`BlockState`)
- `p_57626_` (`Level`)
- `p_57627_` (`BlockPos`)
- `p_57628_` (`Entity`)

### tick

```java
protected void tick(BlockState p_222598_, ServerLevel p_222599_, BlockPos p_222600_, RandomSource p_222601_)
```

**Parameters:**

- `p_222598_` (`BlockState`)
- `p_222599_` (`ServerLevel`)
- `p_222600_` (`BlockPos`)
- `p_222601_` (`RandomSource`)

### checkPressed

```java
private void checkPressed(Level p_57608_, BlockPos p_57609_)
```

**Parameters:**

- `p_57608_` (`Level`)
- `p_57609_` (`BlockPos`)

**Returns:** `private void`

### shouldConnectTo

```java
public boolean shouldConnectTo(BlockState p_57642_, Direction p_57643_)
```

**Parameters:**

- `p_57642_` (`BlockState`)
- `p_57643_` (`Direction`)

**Returns:** `public boolean`

### rotate

```java
protected BlockState rotate(BlockState p_57639_, Rotation p_57640_)
```

**Parameters:**

- `p_57639_` (`BlockState`)
- `p_57640_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_57636_, Mirror p_57637_)
```

**Parameters:**

- `p_57636_` (`BlockState`)
- `p_57637_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57652_)
```

**Parameters:**

- `p_57652_` (`StateDefinition.Builder<Block, BlockState>`)
