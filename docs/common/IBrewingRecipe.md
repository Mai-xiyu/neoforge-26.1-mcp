# IBrewingRecipe

**Package:** `net.neoforged.neoforge.common.brewing`
**Type:** interface

## Description

Interface for more flexible brewing recipes.


Register using `RegisterBrewingRecipesEvent` and `Builder#addRecipe(IBrewingRecipe)`.

## Methods

### isInput

```java
boolean isInput(ItemStack input)
```

**Parameters:**

- `input` (`ItemStack`)

**Returns:** `boolean`

### isIngredient

```java
boolean isIngredient(ItemStack ingredient)
```

**Parameters:**

- `ingredient` (`ItemStack`)

**Returns:** `boolean`

### getOutput

```java
ItemStack getOutput(ItemStack input, ItemStack ingredient)
```

**Parameters:**

- `input` (`ItemStack`)
- `ingredient` (`ItemStack`)

**Returns:** `ItemStack`
