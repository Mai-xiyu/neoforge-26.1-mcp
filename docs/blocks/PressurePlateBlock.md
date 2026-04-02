# PressurePlateBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BasePressurePlateBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PressurePlateBlock>` |  |
| `POWERED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<PressurePlateBlock> codec()
```

**Returns:** `MapCodec<PressurePlateBlock>`

### PressurePlateBlock

```java
public PressurePlateBlock(BlockSetType p_273284_, BlockBehaviour.Properties p_273571_)
```

**Parameters:**

- `p_273284_` (`BlockSetType`)
- `p_273571_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSignalForState

```java
protected int getSignalForState(BlockState p_55270_)
```

**Parameters:**

- `p_55270_` (`BlockState`)

**Returns:** `int`

### setSignalForState

```java
protected BlockState setSignalForState(BlockState p_55259_, int p_55260_)
```

**Parameters:**

- `p_55259_` (`BlockState`)
- `p_55260_` (`int`)

**Returns:** `BlockState`

### getSignalStrength

```java
protected int getSignalStrength(Level p_55264_, BlockPos p_55265_)
```

**Parameters:**

- `p_55264_` (`Level`)
- `p_55265_` (`BlockPos`)

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55262_)
```

**Parameters:**

- `p_55262_` (`StateDefinition.Builder<Block, BlockState>`)
