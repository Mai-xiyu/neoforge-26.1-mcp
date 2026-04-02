# FixedBiomeSource

**Package:** `net.minecraft.world.level.biome`
**Type:** class
**Extends:** `BiomeSource`
**Implements:** `BiomeManager.NoiseBiomeSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FixedBiomeSource>` |  |

## Methods

### FixedBiomeSource

```java
public FixedBiomeSource(Holder<Biome> p_204257_)
```

**Parameters:**

- `p_204257_` (`Holder<Biome>`)

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
public Holder<Biome> getNoiseBiome(int p_204265_, int p_204266_, int p_204267_, Climate.Sampler p_204268_)
```

**Parameters:**

- `p_204265_` (`int`)
- `p_204266_` (`int`)
- `p_204267_` (`int`)
- `p_204268_` (`Climate.Sampler`)

**Returns:** `Holder<Biome>`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204261_, int p_204262_, int p_204263_)
```

**Parameters:**

- `p_204261_` (`int`)
- `p_204262_` (`int`)
- `p_204263_` (`int`)

**Returns:** `Holder<Biome>`

### findBiomeHorizontal

```java
public Pair<BlockPos, Holder<Biome>> findBiomeHorizontal(int p_220640_, int p_220641_, int p_220642_, int p_220643_, int p_220644_, Predicate<Holder<Biome>> p_220645_, RandomSource p_220646_, boolean p_220647_, Climate.Sampler p_220648_)
```

**Parameters:**

- `p_220640_` (`int`)
- `p_220641_` (`int`)
- `p_220642_` (`int`)
- `p_220643_` (`int`)
- `p_220644_` (`int`)
- `p_220645_` (`Predicate<Holder<Biome>>`)
- `p_220646_` (`RandomSource`)
- `p_220647_` (`boolean`)
- `p_220648_` (`Climate.Sampler`)

**Returns:** `Pair<BlockPos, Holder<Biome>>`

### findClosestBiome3d

```java
public Pair<BlockPos, Holder<Biome>> findClosestBiome3d(BlockPos p_220650_, int p_220651_, int p_220652_, int p_220653_, Predicate<Holder<Biome>> p_220654_, Climate.Sampler p_220655_, LevelReader p_220656_)
```

**Parameters:**

- `p_220650_` (`BlockPos`)
- `p_220651_` (`int`)
- `p_220652_` (`int`)
- `p_220653_` (`int`)
- `p_220654_` (`Predicate<Holder<Biome>>`)
- `p_220655_` (`Climate.Sampler`)
- `p_220656_` (`LevelReader`)

**Returns:** `Pair<BlockPos, Holder<Biome>>`

### getBiomesWithin

```java
public Set<Holder<Biome>> getBiomesWithin(int p_187038_, int p_187039_, int p_187040_, int p_187041_, Climate.Sampler p_187042_)
```

**Parameters:**

- `p_187038_` (`int`)
- `p_187039_` (`int`)
- `p_187040_` (`int`)
- `p_187041_` (`int`)
- `p_187042_` (`Climate.Sampler`)

**Returns:** `Set<Holder<Biome>>`
