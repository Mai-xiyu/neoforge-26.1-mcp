# BiomeGenerationSettings

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `BiomeGenerationSettings` |  |
| `CODEC` | `MapCodec<BiomeGenerationSettings>` |  |
| `carvers` | `Map<GenerationStep.Carving, List<Holder<ConfiguredWorldCarver<?>>>>` |  |
| `features` | `List<List<Holder<PlacedFeature>>>` |  |

## Methods

### BiomeGenerationSettings

```java
public BiomeGenerationSettings(Map<GenerationStep.Carving, HolderSet<ConfiguredWorldCarver<?>>> p_186650_, List<HolderSet<PlacedFeature>> p_186651_)
```

**Parameters:**

- `p_186650_` (`Map<GenerationStep.Carving, HolderSet<ConfiguredWorldCarver<?>>>`)
- `p_186651_` (`List<HolderSet<PlacedFeature>>`)

**Returns:** `public`

### getCarvers

```java
public Iterable<Holder<ConfiguredWorldCarver<?>>> getCarvers(GenerationStep.Carving p_204188_)
```

**Parameters:**

- `p_204188_` (`GenerationStep.Carving`)

**Returns:** `public Iterable<Holder<ConfiguredWorldCarver<?>>>`

### getCarvingStages

```java
public java.util.Set<GenerationStep.Carving> getCarvingStages()
```

**Returns:** `public java.util.Set<GenerationStep.Carving>`

### getFlowerFeatures

```java
public List<ConfiguredFeature<?, ?>> getFlowerFeatures()
```

**Returns:** `public List<ConfiguredFeature<?, ?>>`

### features

```java
public List<HolderSet<PlacedFeature>> features()
```

**Returns:** `public List<HolderSet<PlacedFeature>>`

### hasFeature

```java
public boolean hasFeature(PlacedFeature p_186659_)
```

**Parameters:**

- `p_186659_` (`PlacedFeature`)

**Returns:** `public boolean`

### Builder

```java
public Builder(HolderGetter<PlacedFeature> p_255774_, HolderGetter<ConfiguredWorldCarver<?>> p_256003_)
```

**Parameters:**

- `p_255774_` (`HolderGetter<PlacedFeature>`)
- `p_256003_` (`HolderGetter<ConfiguredWorldCarver<?>>`)

**Returns:** `public`

### addFeature

```java
public BiomeGenerationSettings.Builder addFeature(GenerationStep.Decoration p_256059_, ResourceKey<PlacedFeature> p_256259_)
```

**Parameters:**

- `p_256059_` (`GenerationStep.Decoration`)
- `p_256259_` (`ResourceKey<PlacedFeature>`)

**Returns:** `public BiomeGenerationSettings.Builder`

### addCarver

```java
public BiomeGenerationSettings.Builder addCarver(GenerationStep.Carving p_256471_, ResourceKey<ConfiguredWorldCarver<?>> p_255733_)
```

**Parameters:**

- `p_256471_` (`GenerationStep.Carving`)
- `p_255733_` (`ResourceKey<ConfiguredWorldCarver<?>>`)

**Returns:** `public BiomeGenerationSettings.Builder`

### addFeature

```java
public BiomeGenerationSettings.PlainBuilder addFeature(GenerationStep.Decoration p_256360_, Holder<PlacedFeature> p_256577_)
```

**Parameters:**

- `p_256360_` (`GenerationStep.Decoration`)
- `p_256577_` (`Holder<PlacedFeature>`)

**Returns:** `public BiomeGenerationSettings.PlainBuilder`

### addFeature

```java
public BiomeGenerationSettings.PlainBuilder addFeature(int p_256305_, Holder<PlacedFeature> p_255636_)
```

**Parameters:**

- `p_256305_` (`int`)
- `p_255636_` (`Holder<PlacedFeature>`)

**Returns:** `public BiomeGenerationSettings.PlainBuilder`

### addCarver

```java
public BiomeGenerationSettings.PlainBuilder addCarver(GenerationStep.Carving p_256091_, Holder<ConfiguredWorldCarver<?>> p_256082_)
```

**Parameters:**

- `p_256091_` (`GenerationStep.Carving`)
- `p_256082_` (`Holder<ConfiguredWorldCarver<?>>`)

**Returns:** `public BiomeGenerationSettings.PlainBuilder`

### addFeatureStepsUpTo

```java
protected void addFeatureStepsUpTo(int p_256411_)
```

**Parameters:**

- `p_256411_` (`int`)

**Returns:** `protected void`

### build

```java
public BiomeGenerationSettings build()
```

**Returns:** `public BiomeGenerationSettings`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `PlainBuilder` | class |  |
