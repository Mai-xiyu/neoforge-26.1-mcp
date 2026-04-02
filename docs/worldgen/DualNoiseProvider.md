# DualNoiseProvider

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class
**Extends:** `NoiseProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DualNoiseProvider>` |  |

## Methods

### DualNoiseProvider

```java
public DualNoiseProvider(InclusiveRange<Integer> p_191396_, NormalNoise.NoiseParameters p_191397_, float p_191398_, long p_191399_, NormalNoise.NoiseParameters p_191400_, float p_191401_, List<BlockState> p_191402_)
```

**Parameters:**

- `p_191396_` (`InclusiveRange<Integer>`)
- `p_191397_` (`NormalNoise.NoiseParameters`)
- `p_191398_` (`float`)
- `p_191399_` (`long`)
- `p_191400_` (`NormalNoise.NoiseParameters`)
- `p_191401_` (`float`)
- `p_191402_` (`List<BlockState>`)

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
public BlockState getState(RandomSource p_225910_, BlockPos p_225911_)
```

**Parameters:**

- `p_225910_` (`RandomSource`)
- `p_225911_` (`BlockPos`)

**Returns:** `BlockState`

### getSlowNoiseValue

```java
protected double getSlowNoiseValue(BlockPos p_191407_)
```

**Parameters:**

- `p_191407_` (`BlockPos`)

**Returns:** `protected double`
