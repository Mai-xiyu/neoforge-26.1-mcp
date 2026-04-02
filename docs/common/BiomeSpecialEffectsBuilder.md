# BiomeSpecialEffectsBuilder

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class
**Extends:** `BiomeSpecialEffects.Builder`

## Description

Extension of the vanilla builder but also provides read access and a copy-from-existing-data helper.
Also, the base builder crashes if certain values aren't specified on build, so this enforces the setting of those.

## Methods

### copyOf

```java
public static BiomeSpecialEffectsBuilder copyOf(BiomeSpecialEffects baseEffects)
```

**Parameters:**

- `baseEffects` (`BiomeSpecialEffects`)

**Returns:** `public static BiomeSpecialEffectsBuilder`

### create

```java
public static BiomeSpecialEffectsBuilder create(int fogColor, int waterColor, int waterFogColor, int skyColor)
```

**Parameters:**

- `fogColor` (`int`)
- `waterColor` (`int`)
- `waterFogColor` (`int`)
- `skyColor` (`int`)

**Returns:** `public static BiomeSpecialEffectsBuilder`

### BiomeSpecialEffectsBuilder

```java
return new BiomeSpecialEffectsBuilder()
```

**Returns:** `return new`

### BiomeSpecialEffectsBuilder

```java
protected BiomeSpecialEffectsBuilder(int fogColor, int waterColor, int waterFogColor, int skyColor)
```

**Parameters:**

- `fogColor` (`int`)
- `waterColor` (`int`)
- `waterFogColor` (`int`)
- `skyColor` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getFogColor

```java
public int getFogColor()
```

**Returns:** `public int`

### waterColor

```java
public int waterColor()
```

**Returns:** `public int`

### getWaterFogColor

```java
public int getWaterFogColor()
```

**Returns:** `public int`

### getSkyColor

```java
public int getSkyColor()
```

**Returns:** `public int`

### getGrassColorModifier

```java
public BiomeSpecialEffects.GrassColorModifier getGrassColorModifier()
```

**Returns:** `public BiomeSpecialEffects.GrassColorModifier`

### getFoliageColorOverride

```java
public Optional<Integer> getFoliageColorOverride()
```

**Returns:** `public Optional<Integer>`

### getGrassColorOverride

```java
public Optional<Integer> getGrassColorOverride()
```

**Returns:** `public Optional<Integer>`

### getAmbientParticle

```java
public Optional<AmbientParticleSettings> getAmbientParticle()
```

**Returns:** `public Optional<AmbientParticleSettings>`

### getAmbientLoopSound

```java
public Optional<Holder<SoundEvent>> getAmbientLoopSound()
```

**Returns:** `public Optional<Holder<SoundEvent>>`

### getAmbientMoodSound

```java
public Optional<AmbientMoodSettings> getAmbientMoodSound()
```

**Returns:** `public Optional<AmbientMoodSettings>`

### getAmbientAdditionsSound

```java
public Optional<AmbientAdditionsSettings> getAmbientAdditionsSound()
```

**Returns:** `public Optional<AmbientAdditionsSettings>`

### getBackgroundMusic

```java
public Optional<Music> getBackgroundMusic()
```

**Returns:** `public Optional<Music>`
