# RecipeCraftedTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<RecipeCraftedTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<RecipeCraftedTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<RecipeCraftedTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<RecipeCraftedTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_281468_, ResourceLocation p_282903_, List<ItemStack> p_282070_)
```

**Parameters:**

- `p_281468_` (`ServerPlayer`)
- `p_282903_` (`ResourceLocation`)
- `p_282070_` (`List<ItemStack>`)

**Returns:** `public void`

### craftedItem

```java
public static Criterion<RecipeCraftedTrigger.TriggerInstance> craftedItem(ResourceLocation p_282794_, List<ItemPredicate.Builder> p_281369_)
```

**Parameters:**

- `p_282794_` (`ResourceLocation`)
- `p_281369_` (`List<ItemPredicate.Builder>`)

**Returns:** `public static Criterion<RecipeCraftedTrigger.TriggerInstance>`

### craftedItem

```java
public static Criterion<RecipeCraftedTrigger.TriggerInstance> craftedItem(ResourceLocation p_283538_)
```

**Parameters:**

- `p_283538_` (`ResourceLocation`)

**Returns:** `public static Criterion<RecipeCraftedTrigger.TriggerInstance>`

### crafterCraftedItem

```java
public static Criterion<RecipeCraftedTrigger.TriggerInstance> crafterCraftedItem(ResourceLocation p_335404_)
```

**Parameters:**

- `p_335404_` (`ResourceLocation`)

**Returns:** `public static Criterion<RecipeCraftedTrigger.TriggerInstance>`

### matches

```java
boolean matches(ResourceLocation p_283528_, List<ItemStack> p_283698_)
```

**Parameters:**

- `p_283528_` (`ResourceLocation`)
- `p_283698_` (`List<ItemStack>`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
