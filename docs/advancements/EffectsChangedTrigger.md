# EffectsChangedTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<EffectsChangedTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<EffectsChangedTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<EffectsChangedTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<EffectsChangedTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_149263_, Entity p_149264_)
```

**Parameters:**

- `p_149263_` (`ServerPlayer`)
- `p_149264_` (`Entity`)

**Returns:** `public void`

### hasEffects

```java
public static Criterion<EffectsChangedTrigger.TriggerInstance> hasEffects(MobEffectsPredicate.Builder p_299317_)
```

**Parameters:**

- `p_299317_` (`MobEffectsPredicate.Builder`)

**Returns:** `public static Criterion<EffectsChangedTrigger.TriggerInstance>`

### gotEffectsFrom

```java
public static Criterion<EffectsChangedTrigger.TriggerInstance> gotEffectsFrom(EntityPredicate.Builder p_300971_)
```

**Parameters:**

- `p_300971_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<EffectsChangedTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_149275_, LootContext p_149276_)
```

**Parameters:**

- `p_149275_` (`ServerPlayer`)
- `p_149276_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312642_)
```

**Parameters:**

- `p_312642_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
