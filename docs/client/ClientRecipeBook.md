# ClientRecipeBook

**Package:** `net.minecraft.client`
**Type:** class
**Extends:** `RecipeBook`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### setupCollections

```java
public void setupCollections(Iterable<RecipeHolder<?>> p_266814_, RegistryAccess p_266878_)
```

**Parameters:**

- `p_266814_` (`Iterable<RecipeHolder<?>>`)
- `p_266878_` (`RegistryAccess`)

**Returns:** `public void`

### categorizeAndGroupRecipes

```java
private static Map<RecipeBookCategories, List<List<RecipeHolder<?>>>> categorizeAndGroupRecipes(Iterable<RecipeHolder<?>> p_90643_)
```

**Parameters:**

- `p_90643_` (`Iterable<RecipeHolder<?>>`)

**Returns:** `private static Map<RecipeBookCategories, List<List<RecipeHolder<?>>>>`

### getCategory

```java
private static RecipeBookCategories getCategory(RecipeHolder<?> p_301136_)
```

**Parameters:**

- `p_301136_` (`RecipeHolder<?>`)

**Returns:** `private static RecipeBookCategories`

### getCollections

```java
public List<RecipeCollection> getCollections()
```

**Returns:** `public List<RecipeCollection>`

### getCollection

```java
public List<RecipeCollection> getCollection(RecipeBookCategories p_90624_)
```

**Parameters:**

- `p_90624_` (`RecipeBookCategories`)

**Returns:** `public List<RecipeCollection>`
