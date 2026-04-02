# CheckerboardColumnBiomeSource

**Package:** `net.minecraft.world.level.biome`
**Type:** class
**Extends:** `BiomeSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CheckerboardColumnBiomeSource>` |  |

## Methods

### CheckerboardColumnBiomeSource

```java
public CheckerboardColumnBiomeSource(HolderSet<Biome> p_204243_, int p_204244_)
```

**Parameters:**

- `p_204243_` (`HolderSet<Biome>`)
- `p_204244_` (`int`)

**Returns:** `public`

### collectPossibleBiomes

```java
protected Stream<Holder<Biome>> collectPossibleBiomes()
```

**Returns:** `Stream<Holder<Biome>>`

### codec

```java
protected MapCodec<? extends BiomeSource> codec()
```

**Returns:** `MapCodec<? extends BiomeSource>`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204248_, int p_204249_, int p_204250_, Climate.Sampler p_204251_)
```

**Parameters:**

- `p_204248_` (`int`)
- `p_204249_` (`int`)
- `p_204250_` (`int`)
- `p_204251_` (`Climate.Sampler`)

**Returns:** `Holder<Biome>`
