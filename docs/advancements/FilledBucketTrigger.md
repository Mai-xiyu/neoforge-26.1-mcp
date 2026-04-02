# FilledBucketTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<FilledBucketTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FilledBucketTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<FilledBucketTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<FilledBucketTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_38773_, ItemStack p_38774_)
```

**Parameters:**

- `p_38773_` (`ServerPlayer`)
- `p_38774_` (`ItemStack`)

**Returns:** `public void`

### filledBucket

```java
public static Criterion<FilledBucketTrigger.TriggerInstance> filledBucket(ItemPredicate.Builder p_300965_)
```

**Parameters:**

- `p_300965_` (`ItemPredicate.Builder`)

**Returns:** `public static Criterion<FilledBucketTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_38792_)
```

**Parameters:**

- `p_38792_` (`ItemStack`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
