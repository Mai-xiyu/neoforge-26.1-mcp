# SmithingTrimRecipeBuilder

**Package:** `net.minecraft.data.recipes`
**Type:** class

## Methods

### SmithingTrimRecipeBuilder

```java
public SmithingTrimRecipeBuilder(RecipeCategory p_267007_, Ingredient p_266712_, Ingredient p_267018_, Ingredient p_267264_)
```

**Parameters:**

- `p_267007_` (`RecipeCategory`)
- `p_266712_` (`Ingredient`)
- `p_267018_` (`Ingredient`)
- `p_267264_` (`Ingredient`)

**Returns:** `public`

### smithingTrim

```java
public static SmithingTrimRecipeBuilder smithingTrim(Ingredient p_266812_, Ingredient p_266843_, Ingredient p_267309_, RecipeCategory p_267269_)
```

**Parameters:**

- `p_266812_` (`Ingredient`)
- `p_266843_` (`Ingredient`)
- `p_267309_` (`Ingredient`)
- `p_267269_` (`RecipeCategory`)

**Returns:** `public static SmithingTrimRecipeBuilder`

### SmithingTrimRecipeBuilder

```java
return new SmithingTrimRecipeBuilder()
```

**Returns:** `return new`

### unlocks

```java
public SmithingTrimRecipeBuilder unlocks(String p_266882_, Criterion<?> p_301261_)
```

**Parameters:**

- `p_266882_` (`String`)
- `p_301261_` (`Criterion<?>`)

**Returns:** `public SmithingTrimRecipeBuilder`

### save

```java
public void save(RecipeOutput p_301110_, ResourceLocation p_266718_)
```

**Parameters:**

- `p_301110_` (`RecipeOutput`)
- `p_266718_` (`ResourceLocation`)

**Returns:** `public void`

### ensureValid

```java
private void ensureValid(ResourceLocation p_267040_)
```

**Parameters:**

- `p_267040_` (`ResourceLocation`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("No way of obtaining recipe " + p_267040_)
```

**Parameters:**

- `p_267040_` (`"No way of obtaining recipe " +`)

**Returns:** `throw new`
