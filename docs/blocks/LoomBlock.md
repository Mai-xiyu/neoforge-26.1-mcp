# LoomBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LoomBlock>` |  |

## Methods

### codec

```java
public MapCodec<LoomBlock> codec()
```

**Returns:** `MapCodec<LoomBlock>`

### LoomBlock

```java
public LoomBlock(BlockBehaviour.Properties p_54777_)
```

**Parameters:**

- `p_54777_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_54787_, Level p_54788_, BlockPos p_54789_, Player p_54790_, BlockHitResult p_54792_)
```

**Parameters:**

- `p_54787_` (`BlockState`)
- `p_54788_` (`Level`)
- `p_54789_` (`BlockPos`)
- `p_54790_` (`Player`)
- `p_54792_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_54796_, Level p_54797_, BlockPos p_54798_)
```

**Parameters:**

- `p_54796_` (`BlockState`)
- `p_54797_` (`Level`)
- `p_54798_` (`BlockPos`)

**Returns:** `MenuProvider`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54779_)
```

**Parameters:**

- `p_54779_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54794_)
```

**Parameters:**

- `p_54794_` (`StateDefinition.Builder<Block, BlockState>`)
