# HugeMushroomBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HugeMushroomBlock>` |  |
| `NORTH` | `BooleanProperty` |  |
| `EAST` | `BooleanProperty` |  |
| `SOUTH` | `BooleanProperty` |  |
| `WEST` | `BooleanProperty` |  |
| `UP` | `BooleanProperty` |  |
| `DOWN` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<HugeMushroomBlock> codec()
```

**Returns:** `MapCodec<HugeMushroomBlock>`

### HugeMushroomBlock

```java
public HugeMushroomBlock(BlockBehaviour.Properties p_54136_)
```

**Parameters:**

- `p_54136_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54138_)
```

**Parameters:**

- `p_54138_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_54146_, Direction p_54147_, BlockState p_54148_, LevelAccessor p_54149_, BlockPos p_54150_, BlockPos p_54151_)
```

**Parameters:**

- `p_54146_` (`BlockState`)
- `p_54147_` (`Direction`)
- `p_54148_` (`BlockState`)
- `p_54149_` (`LevelAccessor`)
- `p_54150_` (`BlockPos`)
- `p_54151_` (`BlockPos`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_54143_, Rotation p_54144_)
```

**Parameters:**

- `p_54143_` (`BlockState`)
- `p_54144_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_54140_, Mirror p_54141_)
```

**Parameters:**

- `p_54140_` (`BlockState`)
- `p_54141_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54153_)
```

**Parameters:**

- `p_54153_` (`StateDefinition.Builder<Block, BlockState>`)
