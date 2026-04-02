# PlayerInteractTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<PlayerInteractTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<PlayerInteractTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<PlayerInteractTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<PlayerInteractTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_61495_, ItemStack p_61496_, Entity p_61497_)
```

**Parameters:**

- `p_61495_` (`ServerPlayer`)
- `p_61496_` (`ItemStack`)
- `p_61497_` (`Entity`)

**Returns:** `public void`

### itemUsedOnEntity

```java
public static Criterion<PlayerInteractTrigger.TriggerInstance> itemUsedOnEntity(Optional<ContextAwarePredicate> p_299056_, ItemPredicate.Builder p_286289_, Optional<ContextAwarePredicate> p_301218_)
```

**Parameters:**

- `p_299056_` (`Optional<ContextAwarePredicate>`)
- `p_286289_` (`ItemPredicate.Builder`)
- `p_301218_` (`Optional<ContextAwarePredicate>`)

**Returns:** `public static Criterion<PlayerInteractTrigger.TriggerInstance>`

### itemUsedOnEntity

```java
public static Criterion<PlayerInteractTrigger.TriggerInstance> itemUsedOnEntity(ItemPredicate.Builder p_286235_, Optional<ContextAwarePredicate> p_298893_)
```

**Parameters:**

- `p_286235_` (`ItemPredicate.Builder`)
- `p_298893_` (`Optional<ContextAwarePredicate>`)

**Returns:** `public static Criterion<PlayerInteractTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_61522_, LootContext p_61523_)
```

**Parameters:**

- `p_61522_` (`ItemStack`)
- `p_61523_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312461_)
```

**Parameters:**

- `p_312461_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
