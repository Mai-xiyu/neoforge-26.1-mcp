# MangroveRootsBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MangroveRootsBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<MangroveRootsBlock> codec()
```

**Returns:** `MapCodec<MangroveRootsBlock>`

### MangroveRootsBlock

```java
public MangroveRootsBlock(BlockBehaviour.Properties p_221506_)
```

**Parameters:**

- `p_221506_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### skipRendering

```java
protected boolean skipRendering(BlockState p_221510_, BlockState p_221511_, Direction p_221512_)
```

**Parameters:**

- `p_221510_` (`BlockState`)
- `p_221511_` (`BlockState`)
- `p_221512_` (`Direction`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_221508_)
```

**Parameters:**

- `p_221508_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_221514_, Direction p_221515_, BlockState p_221516_, LevelAccessor p_221517_, BlockPos p_221518_, BlockPos p_221519_)
```

**Parameters:**

- `p_221514_` (`BlockState`)
- `p_221515_` (`Direction`)
- `p_221516_` (`BlockState`)
- `p_221517_` (`LevelAccessor`)
- `p_221518_` (`BlockPos`)
- `p_221519_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_221523_)
```

**Parameters:**

- `p_221523_` (`BlockState`)

**Returns:** `FluidState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_221521_)
```

**Parameters:**

- `p_221521_` (`StateDefinition.Builder<Block, BlockState>`)
