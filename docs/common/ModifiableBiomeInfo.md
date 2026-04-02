# ModifiableBiomeInfo

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class

## Description

Holds lazy-evaluable modified biome info.
Memoizers are not used because it's important to return null
without evaluating the biome info if it's accessed outside of a server context.

## Methods

### ModifiableBiomeInfo

```java
public public ModifiableBiomeInfo(BiomeInfo originalBiomeInfo)
```

**Parameters:**

- `originalBiomeInfo` (`BiomeInfo`)

**Returns:** `public`

### get

```java
public BiomeInfo get()
```

**Returns:** `BiomeInfo`

### getOriginalBiomeInfo

```java
public BiomeInfo getOriginalBiomeInfo()
```

**Returns:** `BiomeInfo`

### getModifiedBiomeInfo

```java
public BiomeInfo getModifiedBiomeInfo()
```

**Returns:** `BiomeInfo`

### applyBiomeModifiers

```java
.Internal
    public boolean applyBiomeModifiers(Holder<Biome> biome, List<BiomeModifier> biomeModifiers, RegistryAccess registryAccess)
```

**Parameters:**

- `biome` (`Holder<Biome>`)
- `biomeModifiers` (`List<BiomeModifier>`)
- `registryAccess` (`RegistryAccess`)

**Returns:** `.Internal
    public boolean`

### BiomeInfo

```java
public record BiomeInfo(ClimateSettings climateSettings, BiomeSpecialEffects effects, BiomeGenerationSettings generationSettings, MobSpawnSettings mobSpawnSettings)
```

**Parameters:**

- `climateSettings` (`ClimateSettings`)
- `effects` (`BiomeSpecialEffects`)
- `generationSettings` (`BiomeGenerationSettings`)
- `mobSpawnSettings` (`MobSpawnSettings`)

**Returns:** `record`

### copyOf

```java
public static Builder copyOf(BiomeInfo original)
```

**Parameters:**

- `original` (`BiomeInfo`)

**Returns:** `Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Builder

```java
private Builder(ClimateSettingsBuilder climateSettings, BiomeSpecialEffectsBuilder effects, BiomeGenerationSettingsBuilder generationSettings, MobSpawnSettingsBuilder mobSpawnSettings)
```

**Parameters:**

- `climateSettings` (`ClimateSettingsBuilder`)
- `effects` (`BiomeSpecialEffectsBuilder`)
- `generationSettings` (`BiomeGenerationSettingsBuilder`)
- `mobSpawnSettings` (`MobSpawnSettingsBuilder`)

**Returns:** `private`

### build

```java
public BiomeInfo build()
```

**Returns:** `public BiomeInfo`

### getClimateSettings

```java
public ClimateSettingsBuilder getClimateSettings()
```

**Returns:** `public ClimateSettingsBuilder`

### getSpecialEffects

```java
public BiomeSpecialEffectsBuilder getSpecialEffects()
```

**Returns:** `public BiomeSpecialEffectsBuilder`

### getGenerationSettings

```java
public BiomeGenerationSettingsBuilder getGenerationSettings()
```

**Returns:** `public BiomeGenerationSettingsBuilder`

### getMobSpawnSettings

```java
public MobSpawnSettingsBuilder getMobSpawnSettings()
```

**Returns:** `public MobSpawnSettingsBuilder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BiomeInfo` | record |  |
| `Builder` | class |  |
