# WeightedStateProvider

**Package:** `net.minecraft.world.level.levelgen.feature.stateproviders`
**Type:** class
**Extends:** `BlockStateProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeightedStateProvider>` |  |

## Methods

### create

```java
private static DataResult<WeightedStateProvider> create(SimpleWeightedRandomList<BlockState> p_161598_)
```

**Parameters:**

- `p_161598_` (`SimpleWeightedRandomList<BlockState>`)

**Returns:** `private static DataResult<WeightedStateProvider>`

### WeightedStateProvider

```java
public WeightedStateProvider(SimpleWeightedRandomList<BlockState> p_161596_)
```

**Parameters:**

- `p_161596_` (`SimpleWeightedRandomList<BlockState>`)

**Returns:** `public`

### WeightedStateProvider

```java
public WeightedStateProvider(SimpleWeightedRandomList.Builder<BlockState> p_161594_)
```

**Parameters:**

- `p_161594_` (`SimpleWeightedRandomList.Builder<BlockState>`)

**Returns:** `public`

### type

```java
protected BlockStateProviderType<?> type()
```

**Returns:** `BlockStateProviderType<?>`

### getState

```java
public BlockState getState(RandomSource p_225966_, BlockPos p_225967_)
```

**Parameters:**

- `p_225966_` (`RandomSource`)
- `p_225967_` (`BlockPos`)

**Returns:** `BlockState`
