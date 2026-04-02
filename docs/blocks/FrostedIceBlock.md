# FrostedIceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `IceBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FrostedIceBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<FrostedIceBlock> codec()
```

**Returns:** `MapCodec<FrostedIceBlock>`

### FrostedIceBlock

```java
public FrostedIceBlock(BlockBehaviour.Properties p_53564_)
```

**Parameters:**

- `p_53564_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
public void onPlace(BlockState p_345576_, Level p_346049_, BlockPos p_346299_, BlockState p_346367_, boolean p_344840_)
```

**Parameters:**

- `p_345576_` (`BlockState`)
- `p_346049_` (`Level`)
- `p_346299_` (`BlockPos`)
- `p_346367_` (`BlockState`)
- `p_344840_` (`boolean`)

### tick

```java
protected void tick(BlockState p_221233_, ServerLevel p_221234_, BlockPos p_221235_, RandomSource p_221236_)
```

**Parameters:**

- `p_221233_` (`BlockState`)
- `p_221234_` (`ServerLevel`)
- `p_221235_` (`BlockPos`)
- `p_221236_` (`RandomSource`)

### slightlyMelt

```java
private boolean slightlyMelt(BlockState p_53593_, Level p_53594_, BlockPos p_53595_)
```

**Parameters:**

- `p_53593_` (`BlockState`)
- `p_53594_` (`Level`)
- `p_53595_` (`BlockPos`)

**Returns:** `private boolean`

### neighborChanged

```java
protected void neighborChanged(BlockState p_53579_, Level p_53580_, BlockPos p_53581_, Block p_53582_, BlockPos p_53583_, boolean p_53584_)
```

**Parameters:**

- `p_53579_` (`BlockState`)
- `p_53580_` (`Level`)
- `p_53581_` (`BlockPos`)
- `p_53582_` (`Block`)
- `p_53583_` (`BlockPos`)
- `p_53584_` (`boolean`)

### fewerNeigboursThan

```java
private boolean fewerNeigboursThan(BlockGetter p_53566_, BlockPos p_53567_, int p_53568_)
```

**Parameters:**

- `p_53566_` (`BlockGetter`)
- `p_53567_` (`BlockPos`)
- `p_53568_` (`int`)

**Returns:** `private boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53586_)
```

**Parameters:**

- `p_53586_` (`StateDefinition.Builder<Block, BlockState>`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304729_, BlockPos p_53571_, BlockState p_53572_)
```

**Parameters:**

- `p_304729_` (`LevelReader`)
- `p_53571_` (`BlockPos`)
- `p_53572_` (`BlockState`)

**Returns:** `ItemStack`
