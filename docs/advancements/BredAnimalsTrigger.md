# BredAnimalsTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<BredAnimalsTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BredAnimalsTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<BredAnimalsTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<BredAnimalsTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_147279_, Animal p_147280_, Animal p_147281_, AgeableMob p_147282_)
```

**Parameters:**

- `p_147279_` (`ServerPlayer`)
- `p_147280_` (`Animal`)
- `p_147281_` (`Animal`)
- `p_147282_` (`AgeableMob`)

**Returns:** `public void`

### bredAnimals

```java
public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals()
```

**Returns:** `public static Criterion<BredAnimalsTrigger.TriggerInstance>`

### bredAnimals

```java
public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals(EntityPredicate.Builder p_301285_)
```

**Parameters:**

- `p_301285_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<BredAnimalsTrigger.TriggerInstance>`

### bredAnimals

```java
public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals(Optional<EntityPredicate> p_301067_, Optional<EntityPredicate> p_301159_, Optional<EntityPredicate> p_301056_)
```

**Parameters:**

- `p_301067_` (`Optional<EntityPredicate>`)
- `p_301159_` (`Optional<EntityPredicate>`)
- `p_301056_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<BredAnimalsTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_18676_, LootContext p_18677_, LootContext p_18678_)
```

**Parameters:**

- `p_18676_` (`LootContext`)
- `p_18677_` (`LootContext`)
- `p_18678_` (`LootContext`)

**Returns:** `public boolean`

### matches

```java
private static boolean matches(Optional<ContextAwarePredicate> p_298925_, LootContext p_298317_)
```

**Parameters:**

- `p_298925_` (`Optional<ContextAwarePredicate>`)
- `p_298317_` (`LootContext`)

**Returns:** `private static boolean`

### validate

```java
public void validate(CriterionValidator p_312663_)
```

**Parameters:**

- `p_312663_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
