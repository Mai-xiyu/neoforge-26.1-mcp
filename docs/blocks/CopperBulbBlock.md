# CopperBulbBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CopperBulbBlock>` |  |
| `POWERED` | `BooleanProperty` |  |
| `LIT` | `BooleanProperty` |  |

## Methods

### codec

```java
protected MapCodec<? extends CopperBulbBlock> codec()
```

**Returns:** `MapCodec<? extends CopperBulbBlock>`

### CopperBulbBlock

```java
public CopperBulbBlock(BlockBehaviour.Properties p_308970_)
```

**Parameters:**

- `p_308970_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_309207_, Level p_309068_, BlockPos p_309087_, BlockState p_308908_, boolean p_308906_)
```

**Parameters:**

- `p_309207_` (`BlockState`)
- `p_309068_` (`Level`)
- `p_309087_` (`BlockPos`)
- `p_308908_` (`BlockState`)
- `p_308906_` (`boolean`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_309025_, Level p_308955_, BlockPos p_309153_, Block p_308949_, BlockPos p_308887_, boolean p_309085_)
```

**Parameters:**

- `p_309025_` (`BlockState`)
- `p_308955_` (`Level`)
- `p_309153_` (`BlockPos`)
- `p_308949_` (`Block`)
- `p_308887_` (`BlockPos`)
- `p_309085_` (`boolean`)

### checkAndFlip

```java
public void checkAndFlip(BlockState p_313720_, ServerLevel p_313753_, BlockPos p_313735_)
```

**Parameters:**

- `p_313720_` (`BlockState`)
- `p_313753_` (`ServerLevel`)
- `p_313735_` (`BlockPos`)

**Returns:** `public void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_308903_)
```

**Parameters:**

- `p_308903_` (`StateDefinition.Builder<Block, BlockState>`)

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_308965_)
```

**Parameters:**

- `p_308965_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_308938_, Level p_309149_, BlockPos p_309114_)
```

**Parameters:**

- `p_308938_` (`BlockState`)
- `p_309149_` (`Level`)
- `p_309114_` (`BlockPos`)

**Returns:** `int`
