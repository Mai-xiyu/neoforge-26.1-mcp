# RailBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseRailBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RailBlock>` |  |
| `SHAPE` | `EnumProperty<RailShape>` |  |

## Methods

### codec

```java
public MapCodec<RailBlock> codec()
```

**Returns:** `MapCodec<RailBlock>`

### RailBlock

```java
public RailBlock(BlockBehaviour.Properties p_55395_)
```

**Parameters:**

- `p_55395_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateState

```java
protected void updateState(BlockState p_55397_, Level p_55398_, BlockPos p_55399_, Block p_55400_)
```

**Parameters:**

- `p_55397_` (`BlockState`)
- `p_55398_` (`Level`)
- `p_55399_` (`BlockPos`)
- `p_55400_` (`Block`)

### getShapeProperty

```java
public Property<RailShape> getShapeProperty()
```

**Returns:** `Property<RailShape>`

### rotate

```java
protected BlockState rotate(BlockState p_55405_, Rotation p_55406_)
```

**Parameters:**

- `p_55405_` (`BlockState`)
- `p_55406_` (`Rotation`)

**Returns:** `BlockState`

### MatchException

```java
throw new MatchException()
```

**Returns:** `throw new`

### MatchException

```java
throw new MatchException()
```

**Returns:** `throw new`

### MatchException

```java
throw new MatchException()
```

**Returns:** `throw new`

### mirror

```java
protected BlockState mirror(BlockState p_55402_, Mirror p_55403_)
```

**Parameters:**

- `p_55402_` (`BlockState`)
- `p_55403_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55408_)
```

**Parameters:**

- `p_55408_` (`StateDefinition.Builder<Block, BlockState>`)
