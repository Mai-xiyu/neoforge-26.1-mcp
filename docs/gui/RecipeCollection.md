# RecipeCollection

**Package:** `net.minecraft.client.gui.screens.recipebook`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RecipeCollection

```java
public RecipeCollection(RegistryAccess p_266782_, List<RecipeHolder<?>> p_267051_)
```

**Parameters:**

- `p_266782_` (`RegistryAccess`)
- `p_267051_` (`List<RecipeHolder<?>>`)

**Returns:** `public`

### allRecipesHaveSameResult

```java
private static boolean allRecipesHaveSameResult(RegistryAccess p_267210_, List<RecipeHolder<?>> p_100509_)
```

**Parameters:**

- `p_267210_` (`RegistryAccess`)
- `p_100509_` (`List<RecipeHolder<?>>`)

**Returns:** `private static boolean`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `public RegistryAccess`

### hasKnownRecipes

```java
public boolean hasKnownRecipes()
```

**Returns:** `public boolean`

### updateKnownRecipes

```java
public void updateKnownRecipes(RecipeBook p_100500_)
```

**Parameters:**

- `p_100500_` (`RecipeBook`)

**Returns:** `public void`

### canCraft

```java
public void canCraft(StackedContents p_100502_, int p_100503_, int p_100504_, RecipeBook p_100505_)
```

**Parameters:**

- `p_100502_` (`StackedContents`)
- `p_100503_` (`int`)
- `p_100504_` (`int`)
- `p_100505_` (`RecipeBook`)

**Returns:** `public void`

### isCraftable

```java
public boolean isCraftable(RecipeHolder<?> p_301167_)
```

**Parameters:**

- `p_301167_` (`RecipeHolder<?>`)

**Returns:** `public boolean`

### hasCraftable

```java
public boolean hasCraftable()
```

**Returns:** `public boolean`

### hasFitting

```java
public boolean hasFitting()
```

**Returns:** `public boolean`

### getRecipes

```java
public List<RecipeHolder<?>> getRecipes()
```

**Returns:** `public List<RecipeHolder<?>>`

### getRecipes

```java
public List<RecipeHolder<?>> getRecipes(boolean p_100511_)
```

**Parameters:**

- `p_100511_` (`boolean`)

**Returns:** `public List<RecipeHolder<?>>`

### getDisplayRecipes

```java
public List<RecipeHolder<?>> getDisplayRecipes(boolean p_100514_)
```

**Parameters:**

- `p_100514_` (`boolean`)

**Returns:** `public List<RecipeHolder<?>>`

### hasSingleResultItem

```java
public boolean hasSingleResultItem()
```

**Returns:** `public boolean`
