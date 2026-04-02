# WaterloggedTransparentBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `TransparentBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WaterloggedTransparentBlock>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |

## Methods

### codec

```java
protected MapCodec<? extends WaterloggedTransparentBlock> codec()
```

**Returns:** `MapCodec<? extends WaterloggedTransparentBlock>`

### WaterloggedTransparentBlock

```java
public WaterloggedTransparentBlock(BlockBehaviour.Properties p_313902_)
```

**Parameters:**

- `p_313902_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_313836_)
```

**Parameters:**

- `p_313836_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_313906_, Direction p_313739_, BlockState p_313829_, LevelAccessor p_313692_, BlockPos p_313842_, BlockPos p_313843_)
```

**Parameters:**

- `p_313906_` (`BlockState`)
- `p_313739_` (`Direction`)
- `p_313829_` (`BlockState`)
- `p_313692_` (`LevelAccessor`)
- `p_313842_` (`BlockPos`)
- `p_313843_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_313789_)
```

**Parameters:**

- `p_313789_` (`BlockState`)

**Returns:** `FluidState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_313896_)
```

**Parameters:**

- `p_313896_` (`StateDefinition.Builder<Block, BlockState>`)
