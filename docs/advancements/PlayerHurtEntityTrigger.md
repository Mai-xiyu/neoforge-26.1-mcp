# PlayerHurtEntityTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<PlayerHurtEntityTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<PlayerHurtEntityTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<PlayerHurtEntityTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<PlayerHurtEntityTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_60113_, Entity p_60114_, DamageSource p_60115_, float p_60116_, float p_60117_, boolean p_60118_)
```

**Parameters:**

- `p_60113_` (`ServerPlayer`)
- `p_60114_` (`Entity`)
- `p_60115_` (`DamageSource`)
- `p_60116_` (`float`)
- `p_60117_` (`float`)
- `p_60118_` (`boolean`)

**Returns:** `public void`

### playerHurtEntity

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity()
```

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### playerHurtEntityWithDamage

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntityWithDamage(Optional<DamagePredicate> p_300880_)
```

**Parameters:**

- `p_300880_` (`Optional<DamagePredicate>`)

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### playerHurtEntityWithDamage

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntityWithDamage(DamagePredicate.Builder p_300924_)
```

**Parameters:**

- `p_300924_` (`DamagePredicate.Builder`)

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### playerHurtEntity

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(Optional<EntityPredicate> p_298252_)
```

**Parameters:**

- `p_298252_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### playerHurtEntity

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(Optional<DamagePredicate> p_301287_, Optional<EntityPredicate> p_300951_)
```

**Parameters:**

- `p_301287_` (`Optional<DamagePredicate>`)
- `p_300951_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### playerHurtEntity

```java
public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(DamagePredicate.Builder p_301281_, Optional<EntityPredicate> p_298362_)
```

**Parameters:**

- `p_301281_` (`DamagePredicate.Builder`)
- `p_298362_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_60143_, LootContext p_60144_, DamageSource p_60145_, float p_60146_, float p_60147_, boolean p_60148_)
```

**Parameters:**

- `p_60143_` (`ServerPlayer`)
- `p_60144_` (`LootContext`)
- `p_60145_` (`DamageSource`)
- `p_60146_` (`float`)
- `p_60147_` (`float`)
- `p_60148_` (`boolean`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312140_)
```

**Parameters:**

- `p_312140_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
