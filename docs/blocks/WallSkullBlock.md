# WallSkullBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractSkullBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallSkullBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<? extends WallSkullBlock> codec()
```

**Returns:** `MapCodec<? extends WallSkullBlock>`

### WallSkullBlock

```java
public WallSkullBlock(SkullBlock.Type p_58101_, BlockBehaviour.Properties p_58102_)
```

**Parameters:**

- `p_58101_` (`SkullBlock.Type`)
- `p_58102_` (`BlockBehaviour.Properties`)

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
protected VoxelShape getShape(BlockState p_58114_, BlockGetter p_58115_, BlockPos p_58116_, CollisionContext p_58117_)
```

**Parameters:**

- `p_58114_` (`BlockState`)
- `p_58115_` (`BlockGetter`)
- `p_58116_` (`BlockPos`)
- `p_58117_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_58104_)
```

**Parameters:**

- `p_58104_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_58109_, Rotation p_58110_)
```

**Parameters:**

- `p_58109_` (`BlockState`)
- `p_58110_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_58106_, Mirror p_58107_)
```

**Parameters:**

- `p_58106_` (`BlockState`)
- `p_58107_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_58112_)
```

**Parameters:**

- `p_58112_` (`StateDefinition.Builder<Block, BlockState>`)
