# UsedTotemTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<UsedTotemTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<UsedTotemTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<UsedTotemTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<UsedTotemTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_74432_, ItemStack p_74433_)
```

**Parameters:**

- `p_74432_` (`ServerPlayer`)
- `p_74433_` (`ItemStack`)

**Returns:** `public void`

### usedTotem

```java
public static Criterion<UsedTotemTrigger.TriggerInstance> usedTotem(ItemPredicate p_163725_)
```

**Parameters:**

- `p_163725_` (`ItemPredicate`)

**Returns:** `public static Criterion<UsedTotemTrigger.TriggerInstance>`

### usedTotem

```java
public static Criterion<UsedTotemTrigger.TriggerInstance> usedTotem(ItemLike p_74453_)
```

**Parameters:**

- `p_74453_` (`ItemLike`)

**Returns:** `public static Criterion<UsedTotemTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_74451_)
```

**Parameters:**

- `p_74451_` (`ItemStack`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
