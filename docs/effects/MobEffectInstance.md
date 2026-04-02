# MobEffectInstance

**Package:** `net.minecraft.world.effect`
**Type:** class
**Implements:** `Comparable<MobEffectInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INFINITE_DURATION` | `int` |  |
| `MIN_AMPLIFIER` | `int` |  |
| `MAX_AMPLIFIER` | `int` |  |
| `CODEC` | `Codec<MobEffectInstance>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, MobEffectInstance>` |  |

## Methods

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316782_)
```

**Parameters:**

- `p_316782_` (`Holder<MobEffect>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316473_, int p_19523_)
```

**Parameters:**

- `p_316473_` (`Holder<MobEffect>`)
- `p_19523_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316819_, int p_216888_, int p_216889_)
```

**Parameters:**

- `p_316819_` (`Holder<MobEffect>`)
- `p_216888_` (`int`)
- `p_216889_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316846_, int p_19516_, int p_316691_, boolean p_316120_, boolean p_316433_)
```

**Parameters:**

- `p_316846_` (`Holder<MobEffect>`)
- `p_19516_` (`int`)
- `p_316691_` (`int`)
- `p_316120_` (`boolean`)
- `p_316433_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316870_, int p_316726_, int p_316828_, boolean p_316179_, boolean p_316397_, boolean p_316398_)
```

**Parameters:**

- `p_316870_` (`Holder<MobEffect>`)
- `p_316726_` (`int`)
- `p_316828_` (`int`)
- `p_316179_` (`boolean`)
- `p_316397_` (`boolean`)
- `p_316398_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MobEffectInstance

```java
public MobEffectInstance(Holder<MobEffect> p_316176_, int p_19529_, int p_19530_, boolean p_19531_, boolean p_19532_, boolean p_19533_, MobEffectInstance p_316863_)
```

**Parameters:**

- `p_316176_` (`Holder<MobEffect>`)
- `p_19529_` (`int`)
- `p_19530_` (`int`)
- `p_19531_` (`boolean`)
- `p_19532_` (`boolean`)
- `p_19533_` (`boolean`)
- `p_316863_` (`MobEffectInstance`)

**Returns:** `public`

### MobEffectInstance

```java
public MobEffectInstance(MobEffectInstance p_19543_)
```

**Parameters:**

- `p_19543_` (`MobEffectInstance`)

**Returns:** `public`

### MobEffectInstance

```java
private MobEffectInstance(Holder<MobEffect> p_324441_, MobEffectInstance.Details p_324529_)
```

**Parameters:**

- `p_324441_` (`Holder<MobEffect>`)
- `p_324529_` (`MobEffectInstance.Details`)

**Returns:** `private`

### asDetails

```java
private MobEffectInstance.Details asDetails()
```

**Returns:** `private MobEffectInstance.Details`

### getBlendFactor

```java
public float getBlendFactor(LivingEntity p_316410_, float p_316194_)
```

**Parameters:**

- `p_316410_` (`LivingEntity`)
- `p_316194_` (`float`)

**Returns:** `public float`

### getParticleOptions

```java
public ParticleOptions getParticleOptions()
```

**Returns:** `public ParticleOptions`

### setDetailsFrom

```java
void setDetailsFrom(MobEffectInstance p_19549_)
```

**Parameters:**

- `p_19549_` (`MobEffectInstance`)

### update

```java
public boolean update(MobEffectInstance p_19559_)
```

**Parameters:**

- `p_19559_` (`MobEffectInstance`)

**Returns:** `public boolean`

### isShorterDurationThan

```java
private boolean isShorterDurationThan(MobEffectInstance p_268133_)
```

**Parameters:**

- `p_268133_` (`MobEffectInstance`)

**Returns:** `private boolean`

### isInfiniteDuration

```java
public boolean isInfiniteDuration()
```

**Returns:** `public boolean`

### endsWithin

```java
public boolean endsWithin(int p_268088_)
```

**Parameters:**

- `p_268088_` (`int`)

**Returns:** `public boolean`

### mapDuration

```java
public int mapDuration(Int2IntFunction p_268089_)
```

**Parameters:**

- `p_268089_` (`Int2IntFunction`)

**Returns:** `public int`

### getEffect

```java
public Holder<MobEffect> getEffect()
```

**Returns:** `public Holder<MobEffect>`

### getDuration

```java
public int getDuration()
```

**Returns:** `public int`

### getAmplifier

```java
public int getAmplifier()
```

**Returns:** `public int`

### isAmbient

```java
public boolean isAmbient()
```

**Returns:** `public boolean`

### isVisible

```java
public boolean isVisible()
```

**Returns:** `public boolean`

### showIcon

```java
public boolean showIcon()
```

**Returns:** `public boolean`

### tick

```java
public boolean tick(LivingEntity p_19553_, Runnable p_19554_)
```

**Parameters:**

- `p_19553_` (`LivingEntity`)
- `p_19554_` (`Runnable`)

**Returns:** `public boolean`

### hasRemainingDuration

```java
private boolean hasRemainingDuration()
```

**Returns:** `private boolean`

### tickDownDuration

```java
private int tickDownDuration()
```

**Returns:** `private int`

### onEffectStarted

```java
public void onEffectStarted(LivingEntity p_295220_)
```

**Parameters:**

- `p_295220_` (`LivingEntity`)

**Returns:** `public void`

### onMobRemoved

```java
public void onMobRemoved(LivingEntity p_338566_, Entity.RemovalReason p_338384_)
```

**Parameters:**

- `p_338566_` (`LivingEntity`)
- `p_338384_` (`Entity.RemovalReason`)

**Returns:** `public void`

### onMobHurt

```java
public void onMobHurt(LivingEntity p_338201_, DamageSource p_338572_, float p_338779_)
```

**Parameters:**

- `p_338201_` (`LivingEntity`)
- `p_338572_` (`DamageSource`)
- `p_338779_` (`float`)

**Returns:** `public void`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### toString

```java
public String toString()
```

**Returns:** `String`

### describeDuration

```java
private String describeDuration()
```

**Returns:** `private String`

### equals

```java
public boolean equals(Object p_19574_)
```

**Parameters:**

- `p_19574_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### save

```java
public Tag save()
```

**Returns:** `public Tag`

### load

```java
public static MobEffectInstance load(CompoundTag p_19561_)
```

**Parameters:**

- `p_19561_` (`CompoundTag`)

**Returns:** `MobEffectInstance`

### compareTo

```java
public int compareTo(MobEffectInstance p_19566_)
```

**Parameters:**

- `p_19566_` (`MobEffectInstance`)

**Returns:** `public int`

### onEffectAdded

```java
public void onEffectAdded(LivingEntity p_338286_)
```

**Parameters:**

- `p_338286_` (`LivingEntity`)

**Returns:** `public void`

### is

```java
public boolean is(Holder<MobEffect> p_316657_)
```

**Parameters:**

- `p_316657_` (`Holder<MobEffect>`)

**Returns:** `public boolean`

### copyBlendState

```java
public void copyBlendState(MobEffectInstance p_316485_)
```

**Parameters:**

- `p_316485_` (`MobEffectInstance`)

**Returns:** `public void`

### skipBlending

```java
public void skipBlending()
```

**Returns:** `public void`

### getCures

```java
public java.util.Set<net.neoforged.neoforge.common.EffectCure> getCures()
```

**Returns:** `java.util.Set<net.neoforged.neoforge.common.EffectCure>`

### setImmediate

```java
public void setImmediate(MobEffectInstance p_316328_)
```

**Parameters:**

- `p_316328_` (`MobEffectInstance`)

**Returns:** `public void`

### copyFrom

```java
public void copyFrom(MobEffectInstance.BlendState p_316847_)
```

**Parameters:**

- `p_316847_` (`MobEffectInstance.BlendState`)

**Returns:** `public void`

### tick

```java
public void tick(MobEffectInstance p_316550_)
```

**Parameters:**

- `p_316550_` (`MobEffectInstance`)

**Returns:** `public void`

### computeTarget

```java
private static float computeTarget(MobEffectInstance p_316339_)
```

**Parameters:**

- `p_316339_` (`MobEffectInstance`)

**Returns:** `private static float`

### getBlendDuration

```java
private static int getBlendDuration(MobEffectInstance p_316448_)
```

**Parameters:**

- `p_316448_` (`MobEffectInstance`)

**Returns:** `private static int`

### getFactor

```java
public float getFactor(LivingEntity p_316317_, float p_316789_)
```

**Parameters:**

- `p_316317_` (`LivingEntity`)
- `p_316789_` (`float`)

**Returns:** `public float`

### Details

```java
static record Details(int amplifier, int duration, boolean ambient, boolean showParticles, boolean showIcon, Optional<MobEffectInstance.Details> hiddenEffect, Optional<java.util.Set<net.neoforged.neoforge.common.EffectCure>> cures)
```

**Parameters:**

- `amplifier` (`int`)
- `duration` (`int`)
- `ambient` (`boolean`)
- `showParticles` (`boolean`)
- `showIcon` (`boolean`)
- `hiddenEffect` (`Optional<MobEffectInstance.Details>`)
- `cures` (`Optional<java.util.Set<net.neoforged.neoforge.common.EffectCure>>`)

**Returns:** `static record`

### create

```java
private static MobEffectInstance.Details create(int p_323657_, int p_324205_, boolean p_324263_, boolean p_324000_, Optional<Boolean> p_323607_, Optional<MobEffectInstance.Details> p_324604_)
```

**Parameters:**

- `p_323657_` (`int`)
- `p_324205_` (`int`)
- `p_324263_` (`boolean`)
- `p_324000_` (`boolean`)
- `p_323607_` (`Optional<Boolean>`)
- `p_324604_` (`Optional<MobEffectInstance.Details>`)

**Returns:** `private static MobEffectInstance.Details`

### create

```java
private static MobEffectInstance.Details create(int p_323657_, int p_324205_, boolean p_324263_, boolean p_324000_, Optional<Boolean> p_323607_, Optional<MobEffectInstance.Details> p_324604_, Optional<java.util.Set<net.neoforged.neoforge.common.EffectCure>> cures)
```

**Parameters:**

- `p_323657_` (`int`)
- `p_324205_` (`int`)
- `p_324263_` (`boolean`)
- `p_324000_` (`boolean`)
- `p_323607_` (`Optional<Boolean>`)
- `p_324604_` (`Optional<MobEffectInstance.Details>`)
- `cures` (`Optional<java.util.Set<net.neoforged.neoforge.common.EffectCure>>`)

**Returns:** `private static MobEffectInstance.Details`

### Details

```java
 Details(int amplifier, int duration, boolean ambient, boolean showParticles, boolean showIcon, Optional<MobEffectInstance.Details> hiddenEffect)
```

**Parameters:**

- `amplifier` (`int`)
- `duration` (`int`)
- `ambient` (`boolean`)
- `showParticles` (`boolean`)
- `showIcon` (`boolean`)
- `hiddenEffect` (`Optional<MobEffectInstance.Details>`)

**Returns:** ``
