# BrewingRecipe

**Package:** `net.neoforged.neoforge.common.brewing`
**Type:** class
**Implements:** `IBrewingRecipe`

## Methods

### BrewingRecipe

```java
public BrewingRecipe(Ingredient input, Ingredient ingredient, ItemStack output)
```

**Parameters:**

- `input` (`Ingredient`)
- `ingredient` (`Ingredient`)
- `output` (`ItemStack`)

**Returns:** `public`

### isInput

```java
public boolean isInput(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getOutput

```java
public ItemStack getOutput(ItemStack input, ItemStack ingredient)
```

**Parameters:**

- `input` (`ItemStack`)
- `ingredient` (`ItemStack`)

**Returns:** `ItemStack`

### getInput

```java
public Ingredient getInput()
```

**Returns:** `public Ingredient`

### getIngredient

```java
public Ingredient getIngredient()
```

**Returns:** `public Ingredient`

### getOutput

```java
public ItemStack getOutput()
```

**Returns:** `public ItemStack`

### isIngredient

```java
public boolean isIngredient(ItemStack ingredient)
```

**Parameters:**

- `ingredient` (`ItemStack`)

**Returns:** `boolean`
