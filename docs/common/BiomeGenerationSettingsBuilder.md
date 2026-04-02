# BiomeGenerationSettingsBuilder

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class
**Extends:** `BiomeGenerationSettings.PlainBuilder`

## Methods

### BiomeGenerationSettingsBuilder

```java
public BiomeGenerationSettingsBuilder(BiomeGenerationSettings orig)
```

**Parameters:**

- `orig` (`BiomeGenerationSettings`)

**Returns:** `public`

### getFeatures

```java
public List<Holder<PlacedFeature>> getFeatures(GenerationStep.Decoration stage)
```

**Parameters:**

- `stage` (`GenerationStep.Decoration`)

**Returns:** `public List<Holder<PlacedFeature>>`

### getCarvers

```java
public List<Holder<ConfiguredWorldCarver<?>>> getCarvers(GenerationStep.Carving stage)
```

**Parameters:**

- `stage` (`GenerationStep.Carving`)

**Returns:** `public List<Holder<ConfiguredWorldCarver<?>>>`
