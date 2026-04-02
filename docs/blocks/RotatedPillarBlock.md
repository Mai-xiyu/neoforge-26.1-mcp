# RotatedPillarBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RotatedPillarBlock>` |  |
| `AXIS` | `EnumProperty<Direction.Axis>` |  |

## Methods

### codec

```java
public MapCodec<? extends RotatedPillarBlock> codec()
```

**Returns:** `MapCodec<? extends RotatedPillarBlock>`

### RotatedPillarBlock

```java
public RotatedPillarBlock(BlockBehaviour.Properties p_55926_)
```

**Parameters:**

- `p_55926_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### rotate

```java
protected BlockState rotate(BlockState p_55930_, Rotation p_55931_)
```

**Parameters:**

- `p_55930_` (`BlockState`)
- `p_55931_` (`Rotation`)

**Returns:** `BlockState`

### rotatePillar

```java
return rotatePillar()
```

**Returns:** `return`

### rotatePillar

```java
public static BlockState rotatePillar(BlockState p_154377_, Rotation p_154378_)
```

**Parameters:**

- `p_154377_` (`BlockState`)
- `p_154378_` (`Rotation`)

**Returns:** `public static BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55933_)
```

**Parameters:**

- `p_55933_` (`StateDefinition.Builder<Block, BlockState>`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55928_)
```

**Parameters:**

- `p_55928_` (`BlockPlaceContext`)

**Returns:** `BlockState`
