# Recipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** interface<T extends RecipeInput>

## Methods

### matches

```java
boolean matches(T p_346065_, Level p_345375_)
```

**Parameters:**

- `p_346065_` (`T`)
- `p_345375_` (`Level`)

**Returns:** `boolean`

### assemble

```java
ItemStack assemble(T p_345149_, HolderLookup.Provider p_346030_)
```

**Parameters:**

- `p_345149_` (`T`)
- `p_346030_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### canCraftInDimensions

```java
boolean canCraftInDimensions(int p_43999_, int p_44000_)
```

**Parameters:**

- `p_43999_` (`int`)
- `p_44000_` (`int`)

**Returns:** `boolean`

### getResultItem

```java
ItemStack getResultItem(HolderLookup.Provider p_336125_)
```

**Parameters:**

- `p_336125_` (`HolderLookup.Provider`)

**Returns:** `ItemStack`

### getRemainingItems

```java
default NonNullList<ItemStack> getRemainingItems(T p_345383_)
```

**Parameters:**

- `p_345383_` (`T`)

**Returns:** `default NonNullList<ItemStack>`

### getIngredients

```java
default NonNullList<Ingredient> getIngredients()
```

**Returns:** `default NonNullList<Ingredient>`

### isSpecial

```java
default boolean isSpecial()
```

**Returns:** `default boolean`

### showNotification

```java
default boolean showNotification()
```

**Returns:** `default boolean`

### getGroup

```java
default String getGroup()
```

**Returns:** `default String`

### getToastSymbol

```java
default ItemStack getToastSymbol()
```

**Returns:** `default ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getSerializer

```java
RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`

### getType

```java
RecipeType<?> getType()
```

**Returns:** `RecipeType<?>`

### isIncomplete

```java
default boolean isIncomplete()
```

**Returns:** `default boolean`
