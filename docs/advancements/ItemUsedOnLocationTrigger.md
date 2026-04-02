# ItemUsedOnLocationTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ItemUsedOnLocationTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ItemUsedOnLocationTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ItemUsedOnLocationTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ItemUsedOnLocationTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_286813_, BlockPos p_286625_, ItemStack p_286620_)
```

**Parameters:**

- `p_286813_` (`ServerPlayer`)
- `p_286625_` (`BlockPos`)
- `p_286620_` (`ItemStack`)

**Returns:** `public void`

### placedBlock

```java
public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlock(Block p_301158_)
```

**Parameters:**

- `p_301158_` (`Block`)

**Returns:** `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### placedBlock

```java
public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlock(LootItemCondition.Builder[]... p_301013_)
```

**Parameters:**

- `p_301013_` (`LootItemCondition.Builder[]...`)

**Returns:** `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### itemUsedOnLocation

```java
private static ItemUsedOnLocationTrigger.TriggerInstance itemUsedOnLocation(LocationPredicate.Builder p_286740_, ItemPredicate.Builder p_286777_)
```

**Parameters:**

- `p_286740_` (`LocationPredicate.Builder`)
- `p_286777_` (`ItemPredicate.Builder`)

**Returns:** `private static ItemUsedOnLocationTrigger.TriggerInstance`

### itemUsedOnBlock

```java
public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> itemUsedOnBlock(LocationPredicate.Builder p_286808_, ItemPredicate.Builder p_286486_)
```

**Parameters:**

- `p_286808_` (`LocationPredicate.Builder`)
- `p_286486_` (`ItemPredicate.Builder`)

**Returns:** `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### allayDropItemOnBlock

```java
public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> allayDropItemOnBlock(LocationPredicate.Builder p_286325_, ItemPredicate.Builder p_286531_)
```

**Parameters:**

- `p_286325_` (`LocationPredicate.Builder`)
- `p_286531_` (`ItemPredicate.Builder`)

**Returns:** `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_286800_)
```

**Parameters:**

- `p_286800_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312228_)
```

**Parameters:**

- `p_312228_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
