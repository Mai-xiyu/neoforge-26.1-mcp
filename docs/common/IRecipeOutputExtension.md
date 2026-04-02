# IRecipeOutputExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extra methods for `RecipeOutput`.

## Methods

### self

```java
private RecipeOutput self()
```

**Returns:** `private RecipeOutput`

### accept

```java
void accept(ResourceLocation id, Recipe<?> recipe, AdvancementHolder advancement, ICondition[]... conditions)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `recipe` (`Recipe<?>`)
- `advancement` (`AdvancementHolder`)
- `conditions` (`ICondition[]...`)

### withConditions

```java
default RecipeOutput withConditions(ICondition[]... conditions)
```

**Parameters:**

- `conditions` (`ICondition[]...`)

**Returns:** `RecipeOutput`
