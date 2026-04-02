# SmithingTransformRecipeBuilder

**Package:** `net.minecraft.data.recipes`
**Type:** class

## Methods

### SmithingTransformRecipeBuilder

```java
public SmithingTransformRecipeBuilder(Ingredient p_266973_, Ingredient p_267047_, Ingredient p_267009_, RecipeCategory p_266694_, Item p_267183_)
```

**Parameters:**

- `p_266973_` (`Ingredient`)
- `p_267047_` (`Ingredient`)
- `p_267009_` (`Ingredient`)
- `p_266694_` (`RecipeCategory`)
- `p_267183_` (`Item`)

**Returns:** `public`

### smithing

```java
public static SmithingTransformRecipeBuilder smithing(Ingredient p_267071_, Ingredient p_266959_, Ingredient p_266803_, RecipeCategory p_266757_, Item p_267256_)
```

**Parameters:**

- `p_267071_` (`Ingredient`)
- `p_266959_` (`Ingredient`)
- `p_266803_` (`Ingredient`)
- `p_266757_` (`RecipeCategory`)
- `p_267256_` (`Item`)

**Returns:** `public static SmithingTransformRecipeBuilder`

### SmithingTransformRecipeBuilder

```java
return new SmithingTransformRecipeBuilder()
```

**Returns:** `return new`

### unlocks

```java
public SmithingTransformRecipeBuilder unlocks(String p_266919_, Criterion<?> p_300923_)
```

**Parameters:**

- `p_266919_` (`String`)
- `p_300923_` (`Criterion<?>`)

**Returns:** `public SmithingTransformRecipeBuilder`

### save

```java
public void save(RecipeOutput p_301163_, String p_300906_)
```

**Parameters:**

- `p_301163_` (`RecipeOutput`)
- `p_300906_` (`String`)

**Returns:** `public void`

### save

```java
public void save(RecipeOutput p_301291_, ResourceLocation p_300873_)
```

**Parameters:**

- `p_301291_` (`RecipeOutput`)
- `p_300873_` (`ResourceLocation`)

**Returns:** `public void`

### ensureValid

```java
private void ensureValid(ResourceLocation p_267259_)
```

**Parameters:**

- `p_267259_` (`ResourceLocation`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("No way of obtaining recipe " + p_267259_)
```

**Parameters:**

- `p_267259_` (`"No way of obtaining recipe " +`)

**Returns:** `throw new`
