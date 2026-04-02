# Potion

**Package:** `net.minecraft.world.item.alchemy`
**Type:** class
**Implements:** `FeatureElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Holder<Potion>>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Holder<Potion>>` |  |

## Methods

### Potion

```java
public Potion(MobEffectInstance[]... p_43487_)
```

**Parameters:**

- `p_43487_` (`MobEffectInstance[]...`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Potion

```java
public Potion(String p_43484_, MobEffectInstance[]... p_43485_)
```

**Parameters:**

- `p_43484_` (`String`)
- `p_43485_` (`MobEffectInstance[]...`)

**Returns:** `public`

### requiredFeatures

```java
public Potion requiredFeatures(FeatureFlag[]... p_338520_)
```

**Parameters:**

- `p_338520_` (`FeatureFlag[]...`)

**Returns:** `public Potion`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### getName

```java
public static String getName(Optional<Holder<Potion>> p_330503_, String p_43493_)
```

**Parameters:**

- `p_330503_` (`Optional<Holder<Potion>>`)
- `p_43493_` (`String`)

**Returns:** `public static String`

### getEffects

```java
public List<MobEffectInstance> getEffects()
```

**Returns:** `public List<MobEffectInstance>`

### hasInstantEffects

```java
public boolean hasInstantEffects()
```

**Returns:** `public boolean`
