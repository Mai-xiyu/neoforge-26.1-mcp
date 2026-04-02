# KilledByCrossbowTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<KilledByCrossbowTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<KilledByCrossbowTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<KilledByCrossbowTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<KilledByCrossbowTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_46872_, Collection<Entity> p_46873_)
```

**Parameters:**

- `p_46872_` (`ServerPlayer`)
- `p_46873_` (`Collection<Entity>`)

**Returns:** `public void`

### crossbowKilled

```java
public static Criterion<KilledByCrossbowTrigger.TriggerInstance> crossbowKilled(EntityPredicate.Builder[]... p_301077_)
```

**Parameters:**

- `p_301077_` (`EntityPredicate.Builder[]...`)

**Returns:** `public static Criterion<KilledByCrossbowTrigger.TriggerInstance>`

### crossbowKilled

```java
public static Criterion<KilledByCrossbowTrigger.TriggerInstance> crossbowKilled(MinMaxBounds.Ints p_301148_)
```

**Parameters:**

- `p_301148_` (`MinMaxBounds.Ints`)

**Returns:** `public static Criterion<KilledByCrossbowTrigger.TriggerInstance>`

### matches

```java
public boolean matches(Collection<LootContext> p_46898_, int p_46899_)
```

**Parameters:**

- `p_46898_` (`Collection<LootContext>`)
- `p_46899_` (`int`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312236_)
```

**Parameters:**

- `p_312236_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
