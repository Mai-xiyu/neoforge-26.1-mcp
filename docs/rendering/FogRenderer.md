# FogRenderer

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BIOME_FOG_TRANSITION_TIME` | `float` |  |

## Methods

### setupColor

```java
public static void setupColor(Camera p_109019_, float p_109020_, ClientLevel p_109021_, int p_109022_, float p_109023_)
```

**Parameters:**

- `p_109019_` (`Camera`)
- `p_109020_` (`float`)
- `p_109021_` (`ClientLevel`)
- `p_109022_` (`int`)
- `p_109023_` (`float`)

**Returns:** `public static void`

### setupNoFog

```java
public static void setupNoFog()
```

**Returns:** `public static void`

### setupFog

```java
public static void setupFog(Camera p_234173_, FogRenderer.FogMode p_234174_, float p_234175_, boolean p_234176_, float p_234177_)
```

**Parameters:**

- `p_234173_` (`Camera`)
- `p_234174_` (`FogRenderer.FogMode`)
- `p_234175_` (`float`)
- `p_234176_` (`boolean`)
- `p_234177_` (`float`)

**Returns:** `public static void`

### levelFogColor

```java
public static void levelFogColor()
```

**Returns:** `public static void`

### getMobEffect

```java
public Holder<MobEffect> getMobEffect()
```

**Returns:** `Holder<MobEffect>`

### setupFog

```java
public void setupFog(FogRenderer.FogData p_234181_, LivingEntity p_234182_, MobEffectInstance p_234183_, float p_234184_, float p_234185_)
```

**Parameters:**

- `p_234181_` (`FogRenderer.FogData`)
- `p_234182_` (`LivingEntity`)
- `p_234183_` (`MobEffectInstance`)
- `p_234184_` (`float`)
- `p_234185_` (`float`)

### getMobEffect

```java
public Holder<MobEffect> getMobEffect()
```

**Returns:** `Holder<MobEffect>`

### setupFog

```java
public void setupFog(FogRenderer.FogData p_234194_, LivingEntity p_234195_, MobEffectInstance p_234196_, float p_234197_, float p_234198_)
```

**Parameters:**

- `p_234194_` (`FogRenderer.FogData`)
- `p_234195_` (`LivingEntity`)
- `p_234196_` (`MobEffectInstance`)
- `p_234197_` (`float`)
- `p_234198_` (`float`)

### getModifiedVoidDarkness

```java
public float getModifiedVoidDarkness(LivingEntity p_234189_, MobEffectInstance p_234190_, float p_234191_, float p_234192_)
```

**Parameters:**

- `p_234189_` (`LivingEntity`)
- `p_234190_` (`MobEffectInstance`)
- `p_234191_` (`float`)
- `p_234192_` (`float`)

**Returns:** `float`

### FogData

```java
public FogData(FogRenderer.FogMode p_234204_)
```

**Parameters:**

- `p_234204_` (`FogRenderer.FogMode`)

**Returns:** `public`

### getMobEffect

```java
Holder<MobEffect> getMobEffect()
```

**Returns:** `Holder<MobEffect>`

### setupFog

```java
void setupFog(FogRenderer.FogData p_234212_, LivingEntity p_234213_, MobEffectInstance p_234214_, float p_234215_, float p_234216_)
```

**Parameters:**

- `p_234212_` (`FogRenderer.FogData`)
- `p_234213_` (`LivingEntity`)
- `p_234214_` (`MobEffectInstance`)
- `p_234215_` (`float`)
- `p_234216_` (`float`)

### isEnabled

```java
default boolean isEnabled(LivingEntity p_234206_, float p_234207_)
```

**Parameters:**

- `p_234206_` (`LivingEntity`)
- `p_234207_` (`float`)

**Returns:** `default boolean`

### getModifiedVoidDarkness

```java
default float getModifiedVoidDarkness(LivingEntity p_234208_, MobEffectInstance p_234209_, float p_234210_, float p_234211_)
```

**Parameters:**

- `p_234208_` (`LivingEntity`)
- `p_234209_` (`MobEffectInstance`)
- `p_234210_` (`float`)
- `p_234211_` (`float`)

**Returns:** `default float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FogMode` | enum |  |
