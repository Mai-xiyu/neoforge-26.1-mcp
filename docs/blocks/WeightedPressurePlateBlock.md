# WeightedPressurePlateBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BasePressurePlateBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeightedPressurePlateBlock>` |  |
| `POWER` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<WeightedPressurePlateBlock> codec()
```

**Returns:** `MapCodec<WeightedPressurePlateBlock>`

### WeightedPressurePlateBlock

```java
public WeightedPressurePlateBlock(int p_273669_, BlockSetType p_272868_, BlockBehaviour.Properties p_273512_)
```

**Parameters:**

- `p_273669_` (`int`)
- `p_272868_` (`BlockSetType`)
- `p_273512_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSignalStrength

```java
protected int getSignalStrength(Level p_58213_, BlockPos p_58214_)
```

**Parameters:**

- `p_58213_` (`Level`)
- `p_58214_` (`BlockPos`)

**Returns:** `int`

### getSignalForState

```java
protected int getSignalForState(BlockState p_58220_)
```

**Parameters:**

- `p_58220_` (`BlockState`)

**Returns:** `int`

### setSignalForState

```java
protected BlockState setSignalForState(BlockState p_58208_, int p_58209_)
```

**Parameters:**

- `p_58208_` (`BlockState`)
- `p_58209_` (`int`)

**Returns:** `BlockState`

### getPressedTime

```java
protected int getPressedTime()
```

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_58211_)
```

**Parameters:**

- `p_58211_` (`StateDefinition.Builder<Block, BlockState>`)
