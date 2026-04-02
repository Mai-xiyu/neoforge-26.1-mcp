# SummonedEntityTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<SummonedEntityTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<SummonedEntityTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<SummonedEntityTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<SummonedEntityTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_68257_, Entity p_68258_)
```

**Parameters:**

- `p_68257_` (`ServerPlayer`)
- `p_68258_` (`Entity`)

**Returns:** `public void`

### summonedEntity

```java
public static Criterion<SummonedEntityTrigger.TriggerInstance> summonedEntity(EntityPredicate.Builder p_68276_)
```

**Parameters:**

- `p_68276_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<SummonedEntityTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_68280_)
```

**Parameters:**

- `p_68280_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312389_)
```

**Parameters:**

- `p_312389_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
