# RecipeUnlockedTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<RecipeUnlockedTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<RecipeUnlockedTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<RecipeUnlockedTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<RecipeUnlockedTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_63719_, RecipeHolder<?> p_301160_)
```

**Parameters:**

- `p_63719_` (`ServerPlayer`)
- `p_301160_` (`RecipeHolder<?>`)

**Returns:** `public void`

### unlocked

```java
public static Criterion<RecipeUnlockedTrigger.TriggerInstance> unlocked(ResourceLocation p_63729_)
```

**Parameters:**

- `p_63729_` (`ResourceLocation`)

**Returns:** `public static Criterion<RecipeUnlockedTrigger.TriggerInstance>`

### matches

```java
public boolean matches(RecipeHolder<?> p_301295_)
```

**Parameters:**

- `p_301295_` (`RecipeHolder<?>`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
