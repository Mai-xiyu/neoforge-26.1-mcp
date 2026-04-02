# ShapedRecipeBuilder

**Package:** `net.minecraft.data.recipes`
**Type:** class
**Implements:** `RecipeBuilder`

## Methods

### ShapedRecipeBuilder

```java
public ShapedRecipeBuilder(RecipeCategory p_249996_, ItemLike p_251475_, int p_248948_)
```

**Parameters:**

- `p_249996_` (`RecipeCategory`)
- `p_251475_` (`ItemLike`)
- `p_248948_` (`int`)

**Returns:** `public`

### ShapedRecipeBuilder

```java
public ShapedRecipeBuilder(RecipeCategory p_249996_, ItemStack result)
```

**Parameters:**

- `p_249996_` (`RecipeCategory`)
- `result` (`ItemStack`)

**Returns:** `public`

### shaped

```java
public static ShapedRecipeBuilder shaped(RecipeCategory p_250853_, ItemLike p_249747_)
```

**Parameters:**

- `p_250853_` (`RecipeCategory`)
- `p_249747_` (`ItemLike`)

**Returns:** `public static ShapedRecipeBuilder`

### shaped

```java
return shaped()
```

**Returns:** `return`

### shaped

```java
public static ShapedRecipeBuilder shaped(RecipeCategory p_251325_, ItemLike p_250636_, int p_249081_)
```

**Parameters:**

- `p_251325_` (`RecipeCategory`)
- `p_250636_` (`ItemLike`)
- `p_249081_` (`int`)

**Returns:** `public static ShapedRecipeBuilder`

### ShapedRecipeBuilder

```java
return new ShapedRecipeBuilder()
```

**Returns:** `return new`

### shaped

```java
public static ShapedRecipeBuilder shaped(RecipeCategory p_251325_, ItemStack result)
```

**Parameters:**

- `p_251325_` (`RecipeCategory`)
- `result` (`ItemStack`)

**Returns:** `public static ShapedRecipeBuilder`

### ShapedRecipeBuilder

```java
return new ShapedRecipeBuilder()
```

**Returns:** `return new`

### define

```java
public ShapedRecipeBuilder define(Character p_206417_, TagKey<Item> p_206418_)
```

**Parameters:**

- `p_206417_` (`Character`)
- `p_206418_` (`TagKey<Item>`)

**Returns:** `public ShapedRecipeBuilder`

### define

```java
public ShapedRecipeBuilder define(Character p_126128_, ItemLike p_126129_)
```

**Parameters:**

- `p_126128_` (`Character`)
- `p_126129_` (`ItemLike`)

**Returns:** `public ShapedRecipeBuilder`

### define

```java
public ShapedRecipeBuilder define(Character p_126125_, Ingredient p_126126_)
```

**Parameters:**

- `p_126125_` (`Character`)
- `p_126126_` (`Ingredient`)

**Returns:** `public ShapedRecipeBuilder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Symbol '" + p_126125_ + "' is already defined!")
```

**Parameters:**

- `defined!"` (`"Symbol '" + p_126125_ + "' is already`)

**Returns:** `throw new`

### pattern

```java
public ShapedRecipeBuilder pattern(String p_126131_)
```

**Parameters:**

- `p_126131_` (`String`)

**Returns:** `public ShapedRecipeBuilder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Pattern must be the same width on every line!")
```

**Parameters:**

- `line!"` (`"Pattern must be the same width on every`)

**Returns:** `throw new`

### unlockedBy

```java
public ShapedRecipeBuilder unlockedBy(String p_126133_, Criterion<?> p_301126_)
```

**Parameters:**

- `p_126133_` (`String`)
- `p_301126_` (`Criterion<?>`)

**Returns:** `public ShapedRecipeBuilder`

### group

```java
public ShapedRecipeBuilder group(String p_126146_)
```

**Parameters:**

- `p_126146_` (`String`)

**Returns:** `public ShapedRecipeBuilder`

### showNotification

```java
public ShapedRecipeBuilder showNotification(boolean p_273326_)
```

**Parameters:**

- `p_273326_` (`boolean`)

**Returns:** `public ShapedRecipeBuilder`

### getResult

```java
public Item getResult()
```

**Returns:** `Item`

### save

```java
public void save(RecipeOutput p_301098_, ResourceLocation p_126142_)
```

**Parameters:**

- `p_301098_` (`RecipeOutput`)
- `p_126142_` (`ResourceLocation`)

### ensureValid

```java
private ShapedRecipePattern ensureValid(ResourceLocation p_126144_)
```

**Parameters:**

- `p_126144_` (`ResourceLocation`)

**Returns:** `private ShapedRecipePattern`

### IllegalStateException

```java
throw new IllegalStateException("No way of obtaining recipe " + p_126144_)
```

**Parameters:**

- `p_126144_` (`"No way of obtaining recipe " +`)

**Returns:** `throw new`
