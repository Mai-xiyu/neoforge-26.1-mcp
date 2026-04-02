# UsingItemTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<UsingItemTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<UsingItemTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<UsingItemTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<UsingItemTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_163866_, ItemStack p_163867_)
```

**Parameters:**

- `p_163866_` (`ServerPlayer`)
- `p_163867_` (`ItemStack`)

**Returns:** `public void`

### lookingAt

```java
public static Criterion<UsingItemTrigger.TriggerInstance> lookingAt(EntityPredicate.Builder p_163884_, ItemPredicate.Builder p_163885_)
```

**Parameters:**

- `p_163884_` (`EntityPredicate.Builder`)
- `p_163885_` (`ItemPredicate.Builder`)

**Returns:** `public static Criterion<UsingItemTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_163887_)
```

**Parameters:**

- `p_163887_` (`ItemStack`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
