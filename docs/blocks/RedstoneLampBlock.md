# RedstoneLampBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RedstoneLampBlock>` |  |
| `LIT` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<RedstoneLampBlock> codec()
```

**Returns:** `MapCodec<RedstoneLampBlock>`

### RedstoneLampBlock

```java
public RedstoneLampBlock(BlockBehaviour.Properties p_55657_)
```

**Parameters:**

- `p_55657_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55659_)
```

**Parameters:**

- `p_55659_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### neighborChanged

```java
protected void neighborChanged(BlockState p_55666_, Level p_55667_, BlockPos p_55668_, Block p_55669_, BlockPos p_55670_, boolean p_55671_)
```

**Parameters:**

- `p_55666_` (`BlockState`)
- `p_55667_` (`Level`)
- `p_55668_` (`BlockPos`)
- `p_55669_` (`Block`)
- `p_55670_` (`BlockPos`)
- `p_55671_` (`boolean`)

### tick

```java
protected void tick(BlockState p_221937_, ServerLevel p_221938_, BlockPos p_221939_, RandomSource p_221940_)
```

**Parameters:**

- `p_221937_` (`BlockState`)
- `p_221938_` (`ServerLevel`)
- `p_221939_` (`BlockPos`)
- `p_221940_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55673_)
```

**Parameters:**

- `p_55673_` (`StateDefinition.Builder<Block, BlockState>`)
