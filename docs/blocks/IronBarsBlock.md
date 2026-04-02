# IronBarsBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `CrossCollisionBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<IronBarsBlock>` |  |

## Methods

### codec

```java
public MapCodec<? extends IronBarsBlock> codec()
```

**Returns:** `MapCodec<? extends IronBarsBlock>`

### IronBarsBlock

```java
public IronBarsBlock(BlockBehaviour.Properties p_54198_)
```

**Parameters:**

- `p_54198_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54200_)
```

**Parameters:**

- `p_54200_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_54211_, Direction p_54212_, BlockState p_54213_, LevelAccessor p_54214_, BlockPos p_54215_, BlockPos p_54216_)
```

**Parameters:**

- `p_54211_` (`BlockState`)
- `p_54212_` (`Direction`)
- `p_54213_` (`BlockState`)
- `p_54214_` (`LevelAccessor`)
- `p_54215_` (`BlockPos`)
- `p_54216_` (`BlockPos`)

**Returns:** `BlockState`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_54202_, BlockGetter p_54203_, BlockPos p_54204_, CollisionContext p_54205_)
```

**Parameters:**

- `p_54202_` (`BlockState`)
- `p_54203_` (`BlockGetter`)
- `p_54204_` (`BlockPos`)
- `p_54205_` (`CollisionContext`)

**Returns:** `VoxelShape`

### skipRendering

```java
protected boolean skipRendering(BlockState p_54207_, BlockState p_54208_, Direction p_54209_)
```

**Parameters:**

- `p_54207_` (`BlockState`)
- `p_54208_` (`BlockState`)
- `p_54209_` (`Direction`)

**Returns:** `boolean`

### attachsTo

```java
public final boolean attachsTo(BlockState p_54218_, boolean p_54219_)
```

**Parameters:**

- `p_54218_` (`BlockState`)
- `p_54219_` (`boolean`)

**Returns:** `public final boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54221_)
```

**Parameters:**

- `p_54221_` (`StateDefinition.Builder<Block, BlockState>`)
