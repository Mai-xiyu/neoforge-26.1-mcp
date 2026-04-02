# RecipeManager

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Extends:** `SimpleJsonResourceReloadListener`

## Methods

### RecipeManager

```java
public RecipeManager(HolderLookup.Provider p_324137_)
```

**Parameters:**

- `p_324137_` (`HolderLookup.Provider`)

**Returns:** `public`

### apply

```java
protected void apply(Map<ResourceLocation, JsonElement> p_44037_, ResourceManager p_44038_, ProfilerFiller p_44039_)
```

**Parameters:**

- `p_44037_` (`Map<ResourceLocation, JsonElement>`)
- `p_44038_` (`ResourceManager`)
- `p_44039_` (`ProfilerFiller`)

**Returns:** `protected void`

### hadErrorsLoading

```java
public boolean hadErrorsLoading()
```

**Returns:** `public boolean`

### getRecipeFor

```java
public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>> getRecipeFor(RecipeType<T> p_44016_, I p_345492_, Level p_44018_)
```

**Parameters:**

- `p_44016_` (`RecipeType<T>`)
- `p_345492_` (`I`)
- `p_44018_` (`Level`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>>`

### getRecipeFor

```java
public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>> getRecipeFor(RecipeType<T> p_345895_, I p_345268_, Level p_346336_, ResourceLocation p_346260_)
```

**Parameters:**

- `p_345895_` (`RecipeType<T>`)
- `p_345268_` (`I`)
- `p_346336_` (`Level`)
- `p_346260_` (`ResourceLocation`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>>`

### getRecipeFor

```java
public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>> getRecipeFor(RecipeType<T> p_220249_, I p_345826_, Level p_220251_, RecipeHolder<T> p_346407_)
```

**Parameters:**

- `p_220249_` (`RecipeType<T>`)
- `p_345826_` (`I`)
- `p_220251_` (`Level`)
- `p_346407_` (`RecipeHolder<T>`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> Optional<RecipeHolder<T>>`

### getAllRecipesFor

```java
public <I extends RecipeInput, T extends Recipe<I>> List<RecipeHolder<T>> getAllRecipesFor(RecipeType<T> p_44014_)
```

**Parameters:**

- `p_44014_` (`RecipeType<T>`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> List<RecipeHolder<T>>`

### getRecipesFor

```java
public <I extends RecipeInput, T extends Recipe<I>> List<RecipeHolder<T>> getRecipesFor(RecipeType<T> p_44057_, I p_346353_, Level p_44059_)
```

**Parameters:**

- `p_44057_` (`RecipeType<T>`)
- `p_346353_` (`I`)
- `p_44059_` (`Level`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> List<RecipeHolder<T>>`

### byType

```java
private <I extends RecipeInput, T extends Recipe<I>> Collection<RecipeHolder<T>> byType(RecipeType<T> p_44055_)
```

**Parameters:**

- `p_44055_` (`RecipeType<T>`)

**Returns:** `private <I extends RecipeInput, T extends Recipe<I>> Collection<RecipeHolder<T>>`

### getRemainingItemsFor

```java
public <I extends RecipeInput, T extends Recipe<I>> NonNullList<ItemStack> getRemainingItemsFor(RecipeType<T> p_44070_, I p_345118_, Level p_44072_)
```

**Parameters:**

- `p_44070_` (`RecipeType<T>`)
- `p_345118_` (`I`)
- `p_44072_` (`Level`)

**Returns:** `public <I extends RecipeInput, T extends Recipe<I>> NonNullList<ItemStack>`

### byKey

```java
public Optional<RecipeHolder<?>> byKey(ResourceLocation p_44044_)
```

**Parameters:**

- `p_44044_` (`ResourceLocation`)

**Returns:** `public Optional<RecipeHolder<?>>`

### getOrderedRecipes

```java
public Collection<RecipeHolder<?>> getOrderedRecipes()
```

**Returns:** `public Collection<RecipeHolder<?>>`

### getRecipes

```java
public Collection<RecipeHolder<?>> getRecipes()
```

**Returns:** `public Collection<RecipeHolder<?>>`

### getRecipeIds

```java
public Stream<ResourceLocation> getRecipeIds()
```

**Returns:** `public Stream<ResourceLocation>`

### fromJson

```java
protected static RecipeHolder<?> fromJson(ResourceLocation p_44046_, JsonObject p_44047_, HolderLookup.Provider p_323755_)
```

**Parameters:**

- `p_44046_` (`ResourceLocation`)
- `p_44047_` (`JsonObject`)
- `p_323755_` (`HolderLookup.Provider`)

**Returns:** `RecipeHolder<?>`

### replaceRecipes

```java
public void replaceRecipes(Iterable<RecipeHolder<?>> p_44025_)
```

**Parameters:**

- `p_44025_` (`Iterable<RecipeHolder<?>>`)

**Returns:** `public void`

### createCheck

```java
public static <I extends RecipeInput, T extends Recipe<I>> RecipeManager.CachedCheck<I, T> createCheck(RecipeType<T> p_220268_)
```

**Parameters:**

- `p_220268_` (`RecipeType<T>`)

**Returns:** `public static <I extends RecipeInput, T extends Recipe<I>> RecipeManager.CachedCheck<I, T>`

### getRecipeFor

```java
public Optional<RecipeHolder<T>> getRecipeFor(I p_344742_, Level p_220279_)
```

**Parameters:**

- `p_344742_` (`I`)
- `p_220279_` (`Level`)

**Returns:** `Optional<RecipeHolder<T>>`

### getRecipeFor

```java
Optional<RecipeHolder<T>> getRecipeFor(I p_344938_, Level p_220281_)
```

**Parameters:**

- `p_344938_` (`I`)
- `p_220281_` (`Level`)

**Returns:** `Optional<RecipeHolder<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CachedCheck` | interface |  |
