# WeightedListHeight

**Package:** `net.minecraft.world.level.levelgen.heightproviders`
**Type:** class
**Extends:** `HeightProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeightedListHeight>` |  |

## Methods

### WeightedListHeight

```java
public WeightedListHeight(SimpleWeightedRandomList<HeightProvider> p_191536_)
```

**Parameters:**

- `p_191536_` (`SimpleWeightedRandomList<HeightProvider>`)

**Returns:** `public`

### sample

```java
public int sample(RandomSource p_226314_, WorldGenerationContext p_226315_)
```

**Parameters:**

- `p_226314_` (`RandomSource`)
- `p_226315_` (`WorldGenerationContext`)

**Returns:** `int`

### getType

```java
public HeightProviderType<?> getType()
```

**Returns:** `HeightProviderType<?>`
