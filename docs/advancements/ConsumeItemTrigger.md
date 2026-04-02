# ConsumeItemTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ConsumeItemTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ConsumeItemTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ConsumeItemTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ConsumeItemTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_23683_, ItemStack p_23684_)
```

**Parameters:**

- `p_23683_` (`ServerPlayer`)
- `p_23684_` (`ItemStack`)

**Returns:** `public void`

### usedItem

```java
public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem()
```

**Returns:** `public static Criterion<ConsumeItemTrigger.TriggerInstance>`

### usedItem

```java
public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem(ItemLike p_301200_)
```

**Parameters:**

- `p_301200_` (`ItemLike`)

**Returns:** `public static Criterion<ConsumeItemTrigger.TriggerInstance>`

### usedItem

```java
public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem(ItemPredicate.Builder p_300855_)
```

**Parameters:**

- `p_300855_` (`ItemPredicate.Builder`)

**Returns:** `public static Criterion<ConsumeItemTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_23702_)
```

**Parameters:**

- `p_23702_` (`ItemStack`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
