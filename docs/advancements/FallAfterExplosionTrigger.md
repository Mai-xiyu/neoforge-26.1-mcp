# FallAfterExplosionTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<FallAfterExplosionTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FallAfterExplosionTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<FallAfterExplosionTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<FallAfterExplosionTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_335648_, Vec3 p_336086_, Entity p_336120_)
```

**Parameters:**

- `p_335648_` (`ServerPlayer`)
- `p_336086_` (`Vec3`)
- `p_336120_` (`Entity`)

**Returns:** `public void`

### fallAfterExplosion

```java
public static Criterion<FallAfterExplosionTrigger.TriggerInstance> fallAfterExplosion(DistancePredicate p_335666_, EntityPredicate.Builder p_335823_)
```

**Parameters:**

- `p_335666_` (`DistancePredicate`)
- `p_335823_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<FallAfterExplosionTrigger.TriggerInstance>`

### validate

```java
public void validate(CriterionValidator p_335649_)
```

**Parameters:**

- `p_335649_` (`CriterionValidator`)

### matches

```java
public boolean matches(ServerLevel p_335990_, Vec3 p_335477_, Vec3 p_336025_, LootContext p_335849_)
```

**Parameters:**

- `p_335990_` (`ServerLevel`)
- `p_335477_` (`Vec3`)
- `p_336025_` (`Vec3`)
- `p_335849_` (`LootContext`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
