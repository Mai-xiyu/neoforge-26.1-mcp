# GlowLichenBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `MultifaceBlock`
**Implements:** `BonemealableBlock`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<GlowLichenBlock>` |  |

## Methods

### codec

```java
public MapCodec<GlowLichenBlock> codec()
```

**Returns:** `MapCodec<GlowLichenBlock>`

### GlowLichenBlock

```java
public GlowLichenBlock(BlockBehaviour.Properties p_153282_)
```

**Parameters:**

- `p_153282_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### emission

```java
public static ToIntFunction<BlockState> emission(int p_181223_)
```

**Parameters:**

- `p_181223_` (`int`)

**Returns:** `public static ToIntFunction<BlockState>`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153309_)
```

**Parameters:**

- `p_153309_` (`StateDefinition.Builder<Block, BlockState>`)

### updateShape

```java
protected BlockState updateShape(BlockState p_153302_, Direction p_153303_, BlockState p_153304_, LevelAccessor p_153305_, BlockPos p_153306_, BlockPos p_153307_)
```

**Parameters:**

- `p_153302_` (`BlockState`)
- `p_153303_` (`Direction`)
- `p_153304_` (`BlockState`)
- `p_153305_` (`LevelAccessor`)
- `p_153306_` (`BlockPos`)
- `p_153307_` (`BlockPos`)

**Returns:** `BlockState`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_153299_, BlockPlaceContext p_153300_)
```

**Parameters:**

- `p_153299_` (`BlockState`)
- `p_153300_` (`BlockPlaceContext`)

**Returns:** `boolean`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256569_, BlockPos p_153290_, BlockState p_153291_)
```

**Parameters:**

- `p_256569_` (`LevelReader`)
- `p_153290_` (`BlockPos`)
- `p_153291_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221264_, RandomSource p_221265_, BlockPos p_221266_, BlockState p_221267_)
```

**Parameters:**

- `p_221264_` (`Level`)
- `p_221265_` (`RandomSource`)
- `p_221266_` (`BlockPos`)
- `p_221267_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221259_, RandomSource p_221260_, BlockPos p_221261_, BlockState p_221262_)
```

**Parameters:**

- `p_221259_` (`ServerLevel`)
- `p_221260_` (`RandomSource`)
- `p_221261_` (`BlockPos`)
- `p_221262_` (`BlockState`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_153311_)
```

**Parameters:**

- `p_153311_` (`BlockState`)

**Returns:** `FluidState`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_181225_, BlockGetter p_181226_, BlockPos p_181227_)
```

**Parameters:**

- `p_181225_` (`BlockState`)
- `p_181226_` (`BlockGetter`)
- `p_181227_` (`BlockPos`)

**Returns:** `boolean`

### getSpreader

```java
public MultifaceSpreader getSpreader()
```

**Returns:** `MultifaceSpreader`
