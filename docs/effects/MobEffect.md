# MobEffect

**Package:** `net.minecraft.world.effect`
**Type:** class
**Implements:** `FeatureElement`, `net.neoforged.neoforge.common.extensions.IMobEffectExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Holder<MobEffect>>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Holder<MobEffect>>` |  |

## Methods

### MobEffect

```java
protected MobEffect(MobEffectCategory p_19451_, int p_19452_)
```

**Parameters:**

- `p_19451_` (`MobEffectCategory`)
- `p_19452_` (`int`)

**Returns:** `protected`

### MobEffect

```java
protected MobEffect(MobEffectCategory p_333963_, int p_333864_, ParticleOptions p_333716_)
```

**Parameters:**

- `p_333963_` (`MobEffectCategory`)
- `p_333864_` (`int`)
- `p_333716_` (`ParticleOptions`)

**Returns:** `protected`

### getBlendDurationTicks

```java
public int getBlendDurationTicks()
```

**Returns:** `public int`

### applyEffectTick

```java
public boolean applyEffectTick(LivingEntity p_19467_, int p_19468_)
```

**Parameters:**

- `p_19467_` (`LivingEntity`)
- `p_19468_` (`int`)

**Returns:** `public boolean`

### applyInstantenousEffect

```java
public void applyInstantenousEffect(Entity p_19462_, Entity p_19463_, LivingEntity p_19464_, int p_19465_, double p_19466_)
```

**Parameters:**

- `p_19462_` (`Entity`)
- `p_19463_` (`Entity`)
- `p_19464_` (`LivingEntity`)
- `p_19465_` (`int`)
- `p_19466_` (`double`)

**Returns:** `public void`

### shouldApplyEffectTickThisTick

```java
public boolean shouldApplyEffectTickThisTick(int p_295329_, int p_295167_)
```

**Parameters:**

- `p_295329_` (`int`)
- `p_295167_` (`int`)

**Returns:** `public boolean`

### onEffectStarted

```java
public void onEffectStarted(LivingEntity p_296490_, int p_296147_)
```

**Parameters:**

- `p_296490_` (`LivingEntity`)
- `p_296147_` (`int`)

**Returns:** `public void`

### onEffectAdded

```java
public void onEffectAdded(LivingEntity p_338333_, int p_338715_)
```

**Parameters:**

- `p_338333_` (`LivingEntity`)
- `p_338715_` (`int`)

**Returns:** `public void`

### onMobRemoved

```java
public void onMobRemoved(LivingEntity p_338500_, int p_338476_, Entity.RemovalReason p_338373_)
```

**Parameters:**

- `p_338500_` (`LivingEntity`)
- `p_338476_` (`int`)
- `p_338373_` (`Entity.RemovalReason`)

**Returns:** `public void`

### onMobHurt

```java
public void onMobHurt(LivingEntity p_338186_, int p_338204_, DamageSource p_338393_, float p_338618_)
```

**Parameters:**

- `p_338186_` (`LivingEntity`)
- `p_338204_` (`int`)
- `p_338393_` (`DamageSource`)
- `p_338618_` (`float`)

**Returns:** `public void`

### isInstantenous

```java
public boolean isInstantenous()
```

**Returns:** `public boolean`

### getOrCreateDescriptionId

```java
protected String getOrCreateDescriptionId()
```

**Returns:** `protected String`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getCategory

```java
public MobEffectCategory getCategory()
```

**Returns:** `public MobEffectCategory`

### getColor

```java
public int getColor()
```

**Returns:** `public int`

### addAttributeModifier

```java
public MobEffect addAttributeModifier(Holder<Attribute> p_316656_, ResourceLocation p_350368_, double p_19475_, AttributeModifier.Operation p_19476_)
```

**Parameters:**

- `p_316656_` (`Holder<Attribute>`)
- `p_350368_` (`ResourceLocation`)
- `p_19475_` (`double`)
- `p_19476_` (`AttributeModifier.Operation`)

**Returns:** `public MobEffect`

### addAttributeModifier

```java
public MobEffect addAttributeModifier(Holder<Attribute> attribute, ResourceLocation id, AttributeModifier.Operation operation, it.unimi.dsi.fastutil.ints.Int2DoubleFunction curve)
```

**Parameters:**

- `attribute` (`Holder<Attribute>`)
- `id` (`ResourceLocation`)
- `operation` (`AttributeModifier.Operation`)
- `curve` (`it.unimi.dsi.fastutil.ints.Int2DoubleFunction`)

**Returns:** `MobEffect`

### setBlendDuration

```java
public MobEffect setBlendDuration(int p_316265_)
```

**Parameters:**

- `p_316265_` (`int`)

**Returns:** `public MobEffect`

### createModifiers

```java
public void createModifiers(int p_316803_, BiConsumer<Holder<Attribute>, AttributeModifier> p_316902_)
```

**Parameters:**

- `p_316803_` (`int`)
- `p_316902_` (`BiConsumer<Holder<Attribute>, AttributeModifier>`)

**Returns:** `public void`

### removeAttributeModifiers

```java
public void removeAttributeModifiers(AttributeMap p_19470_)
```

**Parameters:**

- `p_19470_` (`AttributeMap`)

**Returns:** `public void`

### addAttributeModifiers

```java
public void addAttributeModifiers(AttributeMap p_19479_, int p_19480_)
```

**Parameters:**

- `p_19479_` (`AttributeMap`)
- `p_19480_` (`int`)

**Returns:** `public void`

### isBeneficial

```java
public boolean isBeneficial()
```

**Returns:** `public boolean`

### createParticleOptions

```java
public ParticleOptions createParticleOptions(MobEffectInstance p_333815_)
```

**Parameters:**

- `p_333815_` (`MobEffectInstance`)

**Returns:** `public ParticleOptions`

### withSoundOnAdded

```java
public MobEffect withSoundOnAdded(SoundEvent p_338383_)
```

**Parameters:**

- `p_338383_` (`SoundEvent`)

**Returns:** `public MobEffect`

### requiredFeatures

```java
public MobEffect requiredFeatures(FeatureFlag[]... p_338702_)
```

**Parameters:**

- `p_338702_` (`FeatureFlag[]...`)

**Returns:** `public MobEffect`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### initializeClient

```java
public void initializeClient(java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions> consumer)
```

**Parameters:**

- `consumer` (`java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions>`)

### AttributeTemplate

```java
public static record AttributeTemplate(ResourceLocation id, double amount, AttributeModifier.Operation operation, it.unimi.dsi.fastutil.ints.Int2DoubleFunction curve)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `amount` (`double`)
- `operation` (`AttributeModifier.Operation`)
- `curve` (`it.unimi.dsi.fastutil.ints.Int2DoubleFunction`)

**Returns:** `public static record`

### AttributeTemplate

```java
public AttributeTemplate(ResourceLocation id, double amount, AttributeModifier.Operation operation)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `amount` (`double`)
- `operation` (`AttributeModifier.Operation`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### create

```java
public AttributeModifier create(int p_316614_)
```

**Parameters:**

- `p_316614_` (`int`)

**Returns:** `public AttributeModifier`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AttributeTemplate` | record |  |
