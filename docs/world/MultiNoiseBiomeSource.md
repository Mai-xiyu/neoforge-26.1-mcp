# MultiNoiseBiomeSource

**Package:** `net.minecraft.world.level.biome`
**Type:** class
**Extends:** `BiomeSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `MapCodec<Climate.ParameterList<Holder<Biome>>>` |  |
| `CODEC` | `MapCodec<MultiNoiseBiomeSource>` |  |

## Methods

### MultiNoiseBiomeSource

```java
private MultiNoiseBiomeSource(Either<Climate.ParameterList<Holder<Biome>>, Holder<MultiNoiseBiomeSourceParameterList>> p_275370_)
```

**Parameters:**

- `p_275370_` (`Either<Climate.ParameterList<Holder<Biome>>, Holder<MultiNoiseBiomeSourceParameterList>>`)

**Returns:** `private`

### createFromList

```java
public static MultiNoiseBiomeSource createFromList(Climate.ParameterList<Holder<Biome>> p_275223_)
```

**Parameters:**

- `p_275223_` (`Climate.ParameterList<Holder<Biome>>`)

**Returns:** `public static MultiNoiseBiomeSource`

### createFromPreset

```java
public static MultiNoiseBiomeSource createFromPreset(Holder<MultiNoiseBiomeSourceParameterList> p_275250_)
```

**Parameters:**

- `p_275250_` (`Holder<MultiNoiseBiomeSourceParameterList>`)

**Returns:** `public static MultiNoiseBiomeSource`

### parameters

```java
private Climate.ParameterList<Holder<Biome>> parameters()
```

**Returns:** `private Climate.ParameterList<Holder<Biome>>`

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

### stable

```java
public boolean stable(ResourceKey<MultiNoiseBiomeSourceParameterList> p_275637_)
```

**Parameters:**

- `p_275637_` (`ResourceKey<MultiNoiseBiomeSourceParameterList>`)

**Returns:** `public boolean`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204272_, int p_204273_, int p_204274_, Climate.Sampler p_204275_)
```

**Parameters:**

- `p_204272_` (`int`)
- `p_204273_` (`int`)
- `p_204274_` (`int`)
- `p_204275_` (`Climate.Sampler`)

**Returns:** `Holder<Biome>`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(Climate.TargetPoint p_204270_)
```

**Parameters:**

- `p_204270_` (`Climate.TargetPoint`)

**Returns:** `Holder<Biome>`

### addDebugInfo

```java
public void addDebugInfo(List<String> p_207895_, BlockPos p_207896_, Climate.Sampler p_207897_)
```

**Parameters:**

- `p_207895_` (`List<String>`)
- `p_207896_` (`BlockPos`)
- `p_207897_` (`Climate.Sampler`)
