# ItemDurabilityTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ItemDurabilityTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ItemDurabilityTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ItemDurabilityTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ItemDurabilityTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_43670_, ItemStack p_43671_, int p_43672_)
```

**Parameters:**

- `p_43670_` (`ServerPlayer`)
- `p_43671_` (`ItemStack`)
- `p_43672_` (`int`)

**Returns:** `public void`

### changedDurability

```java
public static Criterion<ItemDurabilityTrigger.TriggerInstance> changedDurability(Optional<ItemPredicate> p_299020_, MinMaxBounds.Ints p_151288_)
```

**Parameters:**

- `p_299020_` (`Optional<ItemPredicate>`)
- `p_151288_` (`MinMaxBounds.Ints`)

**Returns:** `public static Criterion<ItemDurabilityTrigger.TriggerInstance>`

### changedDurability

```java
public static Criterion<ItemDurabilityTrigger.TriggerInstance> changedDurability(Optional<ContextAwarePredicate> p_299196_, Optional<ItemPredicate> p_299039_, MinMaxBounds.Ints p_286730_)
```

**Parameters:**

- `p_299196_` (`Optional<ContextAwarePredicate>`)
- `p_299039_` (`Optional<ItemPredicate>`)
- `p_286730_` (`MinMaxBounds.Ints`)

**Returns:** `public static Criterion<ItemDurabilityTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_43699_, int p_43700_)
```

**Parameters:**

- `p_43699_` (`ItemStack`)
- `p_43700_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
