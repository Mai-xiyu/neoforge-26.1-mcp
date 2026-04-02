# ConditionalRecipeOutput

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** class
**Implements:** `RecipeOutput`
**Annotations:** `@ApiStatus`

## Description

Wrapper around a `RecipeOutput` that adds conditions to all received recipes.
Do not use directly, obtain via `RecipeOutput#withConditions(ICondition...)`.

## Methods

### ConditionalRecipeOutput

```java
public ConditionalRecipeOutput(RecipeOutput inner, ICondition[] conditions)
```

**Parameters:**

- `inner` (`RecipeOutput`)
- `conditions` (`ICondition[]`)

**Returns:** `public`

### advancement

```java
public Advancement.Builder advancement()
```

**Returns:** `Advancement.Builder`

### accept

```java
public void accept(ResourceLocation id, Recipe<?> recipe, AdvancementHolder advancement, ICondition[]... conditions)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `recipe` (`Recipe<?>`)
- `advancement` (`AdvancementHolder`)
- `conditions` (`ICondition[]...`)
