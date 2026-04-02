# TheEndBiomeSource

**Package:** `net.minecraft.world.level.biome`
**Type:** class
**Extends:** `BiomeSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TheEndBiomeSource>` |  |

## Methods

### create

```java
public static TheEndBiomeSource create(HolderGetter<Biome> p_256561_)
```

**Parameters:**

- `p_256561_` (`HolderGetter<Biome>`)

**Returns:** `public static TheEndBiomeSource`

### TheEndBiomeSource

```java
private TheEndBiomeSource(Holder<Biome> p_220678_, Holder<Biome> p_220679_, Holder<Biome> p_220680_, Holder<Biome> p_220681_, Holder<Biome> p_220682_)
```

**Parameters:**

- `p_220678_` (`Holder<Biome>`)
- `p_220679_` (`Holder<Biome>`)
- `p_220680_` (`Holder<Biome>`)
- `p_220681_` (`Holder<Biome>`)
- `p_220682_` (`Holder<Biome>`)

**Returns:** `private`

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
public Holder<Biome> getNoiseBiome(int p_204292_, int p_204293_, int p_204294_, Climate.Sampler p_204295_)
```

**Parameters:**

- `p_204292_` (`int`)
- `p_204293_` (`int`)
- `p_204294_` (`int`)
- `p_204295_` (`Climate.Sampler`)

**Returns:** `Holder<Biome>`
