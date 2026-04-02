# RandomizedIntStateProvider

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class
**Extends:** `BlockStateProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RandomizedIntStateProvider>` |  |

## Methods

### RandomizedIntStateProvider

```java
public RandomizedIntStateProvider(BlockStateProvider p_161562_, IntegerProperty p_161563_, IntProvider p_161564_)
```

**Parameters:**

- `p_161562_` (`BlockStateProvider`)
- `p_161563_` (`IntegerProperty`)
- `p_161564_` (`IntProvider`)

**Returns:** `public`

### RandomizedIntStateProvider

```java
public RandomizedIntStateProvider(BlockStateProvider p_161566_, String p_161567_, IntProvider p_161568_)
```

**Parameters:**

- `p_161566_` (`BlockStateProvider`)
- `p_161567_` (`String`)
- `p_161568_` (`IntProvider`)

**Returns:** `public`

### type

```java
protected BlockStateProviderType<?> type()
```

**Returns:** `BlockStateProviderType<?>`

### getState

```java
public BlockState getState(RandomSource p_225919_, BlockPos p_225920_)
```

**Parameters:**

- `p_225919_` (`RandomSource`)
- `p_225920_` (`BlockPos`)

**Returns:** `BlockState`
