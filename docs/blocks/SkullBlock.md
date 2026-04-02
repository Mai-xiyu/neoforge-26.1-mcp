# SkullBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractSkullBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SkullBlock>` |  |
| `MAX` | `int` |  |
| `ROTATION` | `IntegerProperty` |  |
| `SHAPE` | `VoxelShape` |  |
| `PIGLIN_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends SkullBlock> codec()
```

**Returns:** `MapCodec<? extends SkullBlock>`

### SkullBlock

```java
public SkullBlock(SkullBlock.Type p_56318_, BlockBehaviour.Properties p_56319_)
```

**Parameters:**

- `p_56318_` (`SkullBlock.Type`)
- `p_56319_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_56331_, BlockGetter p_56332_, BlockPos p_56333_, CollisionContext p_56334_)
```

**Parameters:**

- `p_56331_` (`BlockState`)
- `p_56332_` (`BlockGetter`)
- `p_56333_` (`BlockPos`)
- `p_56334_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_56336_, BlockGetter p_56337_, BlockPos p_56338_)
```

**Parameters:**

- `p_56336_` (`BlockState`)
- `p_56337_` (`BlockGetter`)
- `p_56338_` (`BlockPos`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56321_)
```

**Parameters:**

- `p_56321_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_56326_, Rotation p_56327_)
```

**Parameters:**

- `p_56326_` (`BlockState`)
- `p_56327_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_56323_, Mirror p_56324_)
```

**Parameters:**

- `p_56323_` (`BlockState`)
- `p_56324_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56329_)
```

**Parameters:**

- `p_56329_` (`StateDefinition.Builder<Block, BlockState>`)

### DRAGON

```java
, DRAGON()
```

**Returns:** `,`

### Types

```java
private Types(String p_304496_)
```

**Parameters:**

- `p_304496_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | interface |  |
| `Types` | enum |  |
