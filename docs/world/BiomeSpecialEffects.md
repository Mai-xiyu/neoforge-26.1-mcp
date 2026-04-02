# BiomeSpecialEffects

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BiomeSpecialEffects>` |  |
| `fogColor` | `OptionalInt` |  |
| `waterColor` | `OptionalInt` |  |
| `waterFogColor` | `OptionalInt` |  |
| `skyColor` | `OptionalInt` |  |
| `foliageColorOverride` | `Optional<Integer>` |  |

## Methods

### BiomeSpecialEffects

```java
 BiomeSpecialEffects(int p_47941_, int p_47942_, int p_47943_, int p_47944_, Optional<Integer> p_47945_, Optional<Integer> p_47946_, BiomeSpecialEffects.GrassColorModifier p_47947_, Optional<AmbientParticleSettings> p_47948_, Optional<Holder<SoundEvent>> p_47949_, Optional<AmbientMoodSettings> p_47950_, Optional<AmbientAdditionsSettings> p_47951_, Optional<Music> p_47952_)
```

**Parameters:**

- `p_47941_` (`int`)
- `p_47942_` (`int`)
- `p_47943_` (`int`)
- `p_47944_` (`int`)
- `p_47945_` (`Optional<Integer>`)
- `p_47946_` (`Optional<Integer>`)
- `p_47947_` (`BiomeSpecialEffects.GrassColorModifier`)
- `p_47948_` (`Optional<AmbientParticleSettings>`)
- `p_47949_` (`Optional<Holder<SoundEvent>>`)
- `p_47950_` (`Optional<AmbientMoodSettings>`)
- `p_47951_` (`Optional<AmbientAdditionsSettings>`)
- `p_47952_` (`Optional<Music>`)

**Returns:** ``

### getFogColor

```java
public int getFogColor()
```

**Returns:** `public int`

### getWaterColor

```java
public int getWaterColor()
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

### getGrassColorModifier

```java
public BiomeSpecialEffects.GrassColorModifier getGrassColorModifier()
```

**Returns:** `public BiomeSpecialEffects.GrassColorModifier`

### getAmbientParticleSettings

```java
public Optional<AmbientParticleSettings> getAmbientParticleSettings()
```

**Returns:** `public Optional<AmbientParticleSettings>`

### getAmbientLoopSoundEvent

```java
public Optional<Holder<SoundEvent>> getAmbientLoopSoundEvent()
```

**Returns:** `public Optional<Holder<SoundEvent>>`

### getAmbientMoodSettings

```java
public Optional<AmbientMoodSettings> getAmbientMoodSettings()
```

**Returns:** `public Optional<AmbientMoodSettings>`

### getAmbientAdditionsSettings

```java
public Optional<AmbientAdditionsSettings> getAmbientAdditionsSettings()
```

**Returns:** `public Optional<AmbientAdditionsSettings>`

### getBackgroundMusic

```java
public Optional<Music> getBackgroundMusic()
```

**Returns:** `public Optional<Music>`

### fogColor

```java
public BiomeSpecialEffects.Builder fogColor(int p_48020_)
```

**Parameters:**

- `p_48020_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### waterColor

```java
public BiomeSpecialEffects.Builder waterColor(int p_48035_)
```

**Parameters:**

- `p_48035_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### waterFogColor

```java
public BiomeSpecialEffects.Builder waterFogColor(int p_48038_)
```

**Parameters:**

- `p_48038_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### skyColor

```java
public BiomeSpecialEffects.Builder skyColor(int p_48041_)
```

**Parameters:**

- `p_48041_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### foliageColorOverride

```java
public BiomeSpecialEffects.Builder foliageColorOverride(int p_48044_)
```

**Parameters:**

- `p_48044_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### grassColorOverride

```java
public BiomeSpecialEffects.Builder grassColorOverride(int p_48046_)
```

**Parameters:**

- `p_48046_` (`int`)

**Returns:** `public BiomeSpecialEffects.Builder`

### grassColorModifier

```java
public BiomeSpecialEffects.Builder grassColorModifier(BiomeSpecialEffects.GrassColorModifier p_48032_)
```

**Parameters:**

- `p_48032_` (`BiomeSpecialEffects.GrassColorModifier`)

**Returns:** `public BiomeSpecialEffects.Builder`

### ambientParticle

```java
public BiomeSpecialEffects.Builder ambientParticle(AmbientParticleSettings p_48030_)
```

**Parameters:**

- `p_48030_` (`AmbientParticleSettings`)

**Returns:** `public BiomeSpecialEffects.Builder`

### ambientLoopSound

```java
public BiomeSpecialEffects.Builder ambientLoopSound(Holder<SoundEvent> p_263327_)
```

**Parameters:**

- `p_263327_` (`Holder<SoundEvent>`)

**Returns:** `public BiomeSpecialEffects.Builder`

### ambientMoodSound

```java
public BiomeSpecialEffects.Builder ambientMoodSound(AmbientMoodSettings p_48028_)
```

**Parameters:**

- `p_48028_` (`AmbientMoodSettings`)

**Returns:** `public BiomeSpecialEffects.Builder`

### ambientAdditionsSound

```java
public BiomeSpecialEffects.Builder ambientAdditionsSound(AmbientAdditionsSettings p_48026_)
```

**Parameters:**

- `p_48026_` (`AmbientAdditionsSettings`)

**Returns:** `public BiomeSpecialEffects.Builder`

### backgroundMusic

```java
public BiomeSpecialEffects.Builder backgroundMusic(Music p_48022_)
```

**Parameters:**

- `p_48022_` (`Music`)

**Returns:** `public BiomeSpecialEffects.Builder`

### build

```java
public BiomeSpecialEffects build()
```

**Returns:** `public BiomeSpecialEffects`

### NONE

```java
 NONE()
```

**Returns:** ``

### modifyColor

```java
public int modifyColor(double p_48081_, double p_48082_, int p_48083_)
```

**Parameters:**

- `p_48081_` (`double`)
- `p_48082_` (`double`)
- `p_48083_` (`int`)

**Returns:** `int`

### DARK_FOREST

```java
, DARK_FOREST()
```

**Returns:** `,`

### modifyColor

```java
public int modifyColor(double p_48089_, double p_48090_, int p_48091_)
```

**Parameters:**

- `p_48089_` (`double`)
- `p_48090_` (`double`)
- `p_48091_` (`int`)

**Returns:** `int`

### SWAMP

```java
, SWAMP()
```

**Returns:** `,`

### modifyColor

```java
public int modifyColor(double p_48097_, double p_48098_, int p_48099_)
```

**Parameters:**

- `p_48097_` (`double`)
- `p_48098_` (`double`)
- `p_48099_` (`int`)

**Returns:** `int`

### modifyColor

```java
public int modifyColor(double p_48065_, double p_48066_, int p_48067_)
```

**Parameters:**

- `p_48065_` (`double`)
- `p_48066_` (`double`)
- `p_48067_` (`int`)

**Returns:** `public int`

### GrassColorModifier

```java
.neoforged.fml.common.asm.enumextension.ReservedConstructor GrassColorModifier(String p_48058_)
```

**Parameters:**

- `p_48058_` (`String`)

**Returns:** `.neoforged.fml.common.asm.enumextension.ReservedConstructor`

### GrassColorModifier

```java
 GrassColorModifier(String name, ColorModifier delegate)
```

**Parameters:**

- `name` (`String`)
- `delegate` (`ColorModifier`)

**Returns:** ``

### getName

```java
public String getName()
```

**Returns:** `public String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`

### modifyGrassColor

```java
int modifyGrassColor(double x, double z, int color)
```

**Parameters:**

- `x` (`double`)
- `z` (`double`)
- `color` (`int`)

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `GrassColorModifier` | enum |  |
| `ColorModifier` | interface |  |
