# ShapelessRecipeBuilder

**Package:** `net.minecraft.data.recipes`
**Type:** class
**Implements:** `RecipeBuilder`

## Methods

### ShapelessRecipeBuilder

```java
public ShapelessRecipeBuilder(RecipeCategory p_250837_, ItemLike p_251897_, int p_252227_)
```

**Parameters:**

- `p_250837_` (`RecipeCategory`)
- `p_251897_` (`ItemLike`)
- `p_252227_` (`int`)

**Returns:** `public`

### ShapelessRecipeBuilder

```java
public ShapelessRecipeBuilder(RecipeCategory p_250837_, ItemStack result)
```

**Parameters:**

- `p_250837_` (`RecipeCategory`)
- `result` (`ItemStack`)

**Returns:** `public`

### shapeless

```java
public static ShapelessRecipeBuilder shapeless(RecipeCategory p_250714_, ItemLike p_249659_)
```

**Parameters:**

- `p_250714_` (`RecipeCategory`)
- `p_249659_` (`ItemLike`)

**Returns:** `public static ShapelessRecipeBuilder`

### ShapelessRecipeBuilder

```java
return new ShapelessRecipeBuilder()
```

**Returns:** `return new`

### shapeless

```java
public static ShapelessRecipeBuilder shapeless(RecipeCategory p_252339_, ItemLike p_250836_, int p_249928_)
```

**Parameters:**

- `p_252339_` (`RecipeCategory`)
- `p_250836_` (`ItemLike`)
- `p_249928_` (`int`)

**Returns:** `public static ShapelessRecipeBuilder`

### ShapelessRecipeBuilder

```java
return new ShapelessRecipeBuilder()
```

**Returns:** `return new`

### shapeless

```java
public static ShapelessRecipeBuilder shapeless(RecipeCategory p_252339_, ItemStack result)
```

**Parameters:**

- `p_252339_` (`RecipeCategory`)
- `result` (`ItemStack`)

**Returns:** `public static ShapelessRecipeBuilder`

### ShapelessRecipeBuilder

```java
return new ShapelessRecipeBuilder()
```

**Returns:** `return new`

### requires

```java
public ShapelessRecipeBuilder requires(TagKey<Item> p_206420_)
```

**Parameters:**

- `p_206420_` (`TagKey<Item>`)

**Returns:** `public ShapelessRecipeBuilder`

### requires

```java
public ShapelessRecipeBuilder requires(ItemLike p_126210_)
```

**Parameters:**

- `p_126210_` (`ItemLike`)

**Returns:** `public ShapelessRecipeBuilder`

### requires

```java
public ShapelessRecipeBuilder requires(ItemLike p_126212_, int p_126213_)
```

**Parameters:**

- `p_126212_` (`ItemLike`)
- `p_126213_` (`int`)

**Returns:** `public ShapelessRecipeBuilder`

### requires

```java
public ShapelessRecipeBuilder requires(Ingredient p_126185_)
```

**Parameters:**

- `p_126185_` (`Ingredient`)

**Returns:** `public ShapelessRecipeBuilder`

### requires

```java
public ShapelessRecipeBuilder requires(Ingredient p_126187_, int p_126188_)
```

**Parameters:**

- `p_126187_` (`Ingredient`)
- `p_126188_` (`int`)

**Returns:** `public ShapelessRecipeBuilder`

### unlockedBy

```java
public ShapelessRecipeBuilder unlockedBy(String p_176781_, Criterion<?> p_300897_)
```

**Parameters:**

- `p_176781_` (`String`)
- `p_300897_` (`Criterion<?>`)

**Returns:** `public ShapelessRecipeBuilder`

### group

```java
public ShapelessRecipeBuilder group(String p_126195_)
```

**Parameters:**

- `p_126195_` (`String`)

**Returns:** `public ShapelessRecipeBuilder`

### getResult

```java
public Item getResult()
```

**Returns:** `Item`

### save

```java
public void save(RecipeOutput p_301215_, ResourceLocation p_126206_)
```

**Parameters:**

- `p_301215_` (`RecipeOutput`)
- `p_126206_` (`ResourceLocation`)

### ensureValid

```java
private void ensureValid(ResourceLocation p_126208_)
```

**Parameters:**

- `p_126208_` (`ResourceLocation`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("No way of obtaining recipe " + p_126208_)
```

**Parameters:**

- `p_126208_` (`"No way of obtaining recipe " +`)

**Returns:** `throw new`
