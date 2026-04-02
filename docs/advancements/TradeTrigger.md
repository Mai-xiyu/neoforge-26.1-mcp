# TradeTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<TradeTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TradeTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<TradeTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<TradeTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_70960_, AbstractVillager p_70961_, ItemStack p_70962_)
```

**Parameters:**

- `p_70960_` (`ServerPlayer`)
- `p_70961_` (`AbstractVillager`)
- `p_70962_` (`ItemStack`)

**Returns:** `public void`

### tradedWithVillager

```java
public static Criterion<TradeTrigger.TriggerInstance> tradedWithVillager()
```

**Returns:** `public static Criterion<TradeTrigger.TriggerInstance>`

### tradedWithVillager

```java
public static Criterion<TradeTrigger.TriggerInstance> tradedWithVillager(EntityPredicate.Builder p_191437_)
```

**Parameters:**

- `p_191437_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<TradeTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_70985_, ItemStack p_70986_)
```

**Parameters:**

- `p_70985_` (`LootContext`)
- `p_70986_` (`ItemStack`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312082_)
```

**Parameters:**

- `p_312082_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
