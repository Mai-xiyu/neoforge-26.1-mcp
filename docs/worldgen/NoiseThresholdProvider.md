# NoiseThresholdProvider

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class
**Extends:** `NoiseBasedStateProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NoiseThresholdProvider>` |  |

## Methods

### NoiseThresholdProvider

```java
public NoiseThresholdProvider(long p_191471_, NormalNoise.NoiseParameters p_191472_, float p_191473_, float p_191474_, float p_191475_, BlockState p_191476_, List<BlockState> p_191477_, List<BlockState> p_191478_)
```

**Parameters:**

- `p_191471_` (`long`)
- `p_191472_` (`NormalNoise.NoiseParameters`)
- `p_191473_` (`float`)
- `p_191474_` (`float`)
- `p_191475_` (`float`)
- `p_191476_` (`BlockState`)
- `p_191477_` (`List<BlockState>`)
- `p_191478_` (`List<BlockState>`)

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
public BlockState getState(RandomSource p_225916_, BlockPos p_225917_)
```

**Parameters:**

- `p_225916_` (`RandomSource`)
- `p_225917_` (`BlockPos`)

**Returns:** `BlockState`
