# TameAnimalTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<TameAnimalTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TameAnimalTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<TameAnimalTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<TameAnimalTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_68830_, Animal p_68831_)
```

**Parameters:**

- `p_68830_` (`ServerPlayer`)
- `p_68831_` (`Animal`)

**Returns:** `public void`

### tamedAnimal

```java
public static Criterion<TameAnimalTrigger.TriggerInstance> tamedAnimal()
```

**Returns:** `public static Criterion<TameAnimalTrigger.TriggerInstance>`

### tamedAnimal

```java
public static Criterion<TameAnimalTrigger.TriggerInstance> tamedAnimal(EntityPredicate.Builder p_301051_)
```

**Parameters:**

- `p_301051_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<TameAnimalTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_68853_)
```

**Parameters:**

- `p_68853_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312345_)
```

**Parameters:**

- `p_312345_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
