# BlockStateProviderType

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class<P extends BlockStateProvider>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SIMPLE_STATE_PROVIDER` | `BlockStateProviderType<SimpleStateProvider>` |  |
| `WEIGHTED_STATE_PROVIDER` | `BlockStateProviderType<WeightedStateProvider>` |  |
| `NOISE_THRESHOLD_PROVIDER` | `BlockStateProviderType<NoiseThresholdProvider>` |  |
| `NOISE_PROVIDER` | `BlockStateProviderType<NoiseProvider>` |  |
| `DUAL_NOISE_PROVIDER` | `BlockStateProviderType<DualNoiseProvider>` |  |
| `ROTATED_BLOCK_PROVIDER` | `BlockStateProviderType<RotatedBlockProvider>` |  |
| `RANDOMIZED_INT_STATE_PROVIDER` | `BlockStateProviderType<RandomizedIntStateProvider>` |  |

## Methods

### register

```java
<P extends BlockStateProvider> private static <P extends BlockStateProvider> BlockStateProviderType<P> register(String p_68763_, MapCodec<P> p_338587_)
```

**Parameters:**

- `p_68763_` (`String`)
- `p_338587_` (`MapCodec<P>`)

**Returns:** `private static <P extends BlockStateProvider> BlockStateProviderType<P>`

### BlockStateProviderType

```java
public BlockStateProviderType(MapCodec<P> p_338337_)
```

**Parameters:**

- `p_338337_` (`MapCodec<P>`)

**Returns:** `public`

### codec

```java
public MapCodec<P> codec()
```

**Returns:** `public MapCodec<P>`
