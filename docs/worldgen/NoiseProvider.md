# NoiseProvider

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class
**Extends:** `NoiseBasedStateProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NoiseProvider>` |  |
| `states` | `List<BlockState>` |  |

## Methods

### noiseProviderCodec

```java
<P extends NoiseProvider> protected static <P extends NoiseProvider> P4<Mu<P>, Long, NormalNoise.NoiseParameters, Float, List<BlockState>> noiseProviderCodec(Instance<P> p_191460_)
```

**Parameters:**

- `p_191460_` (`Instance<P>`)

**Returns:** `protected static <P extends NoiseProvider> P4<Mu<P>, Long, NormalNoise.NoiseParameters, Float, List<BlockState>>`

### NoiseProvider

```java
public NoiseProvider(long p_191442_, NormalNoise.NoiseParameters p_191443_, float p_191444_, List<BlockState> p_191445_)
```

**Parameters:**

- `p_191442_` (`long`)
- `p_191443_` (`NormalNoise.NoiseParameters`)
- `p_191444_` (`float`)
- `p_191445_` (`List<BlockState>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### type

```java
protected BlockStateProviderType<?> type()
```

**Returns:** `BlockStateProviderType<?>`

### getState

```java
public BlockState getState(RandomSource p_225913_, BlockPos p_225914_)
```

**Parameters:**

- `p_225913_` (`RandomSource`)
- `p_225914_` (`BlockPos`)

**Returns:** `BlockState`

### getRandomState

```java
protected BlockState getRandomState(List<BlockState> p_191453_, BlockPos p_191454_, double p_191455_)
```

**Parameters:**

- `p_191453_` (`List<BlockState>`)
- `p_191454_` (`BlockPos`)
- `p_191455_` (`double`)

**Returns:** `protected BlockState`

### getRandomState

```java
protected BlockState getRandomState(List<BlockState> p_191450_, double p_191451_)
```

**Parameters:**

- `p_191450_` (`List<BlockState>`)
- `p_191451_` (`double`)

**Returns:** `protected BlockState`
