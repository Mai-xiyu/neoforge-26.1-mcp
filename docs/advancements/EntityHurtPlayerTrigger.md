# EntityHurtPlayerTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<EntityHurtPlayerTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<EntityHurtPlayerTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<EntityHurtPlayerTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<EntityHurtPlayerTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_35175_, DamageSource p_35176_, float p_35177_, float p_35178_, boolean p_35179_)
```

**Parameters:**

- `p_35175_` (`ServerPlayer`)
- `p_35176_` (`DamageSource`)
- `p_35177_` (`float`)
- `p_35178_` (`float`)
- `p_35179_` (`boolean`)

**Returns:** `public void`

### entityHurtPlayer

```java
public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer()
```

**Returns:** `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance>`

### entityHurtPlayer

```java
public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer(DamagePredicate p_300967_)
```

**Parameters:**

- `p_300967_` (`DamagePredicate`)

**Returns:** `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance>`

### entityHurtPlayer

```java
public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer(DamagePredicate.Builder p_301174_)
```

**Parameters:**

- `p_301174_` (`DamagePredicate.Builder`)

**Returns:** `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_35201_, DamageSource p_35202_, float p_35203_, float p_35204_, boolean p_35205_)
```

**Parameters:**

- `p_35201_` (`ServerPlayer`)
- `p_35202_` (`DamageSource`)
- `p_35203_` (`float`)
- `p_35204_` (`float`)
- `p_35205_` (`boolean`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
