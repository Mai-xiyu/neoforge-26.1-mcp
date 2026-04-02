# PotionBrewing

**Package:** `net.minecraft.world.item.alchemy`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BREWING_TIME_SECONDS` | `int` |  |
| `EMPTY` | `PotionBrewing` |  |

## Methods

### PotionBrewing

```java
 PotionBrewing(List<Ingredient> p_340915_, List<PotionBrewing.Mix<Potion>> p_341164_, List<PotionBrewing.Mix<Item>> p_341170_)
```

**Parameters:**

- `p_340915_` (`List<Ingredient>`)
- `p_341164_` (`List<PotionBrewing.Mix<Potion>>`)
- `p_341170_` (`List<PotionBrewing.Mix<Item>>`)

**Returns:** ``

### PotionBrewing

```java
 PotionBrewing(List<Ingredient> p_340915_, List<PotionBrewing.Mix<Potion>> p_341164_, List<PotionBrewing.Mix<Item>> p_341170_, List<net.neoforged.neoforge.common.brewing.IBrewingRecipe> recipes)
```

**Parameters:**

- `p_340915_` (`List<Ingredient>`)
- `p_341164_` (`List<PotionBrewing.Mix<Potion>>`)
- `p_341170_` (`List<PotionBrewing.Mix<Item>>`)
- `recipes` (`List<net.neoforged.neoforge.common.brewing.IBrewingRecipe>`)

**Returns:** ``

### isIngredient

```java
public boolean isIngredient(ItemStack p_43507_)
```

**Parameters:**

- `p_43507_` (`ItemStack`)

**Returns:** `public boolean`

### isInput

```java
public boolean isInput(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getRecipes

```java
public List<net.neoforged.neoforge.common.brewing.IBrewingRecipe> getRecipes()
```

**Returns:** `List<net.neoforged.neoforge.common.brewing.IBrewingRecipe>`

### isContainer

```java
private boolean isContainer(ItemStack p_341168_)
```

**Parameters:**

- `p_341168_` (`ItemStack`)

**Returns:** `private boolean`

### isContainerIngredient

```java
public boolean isContainerIngredient(ItemStack p_43518_)
```

**Parameters:**

- `p_43518_` (`ItemStack`)

**Returns:** `public boolean`

### isPotionIngredient

```java
public boolean isPotionIngredient(ItemStack p_43523_)
```

**Parameters:**

- `p_43523_` (`ItemStack`)

**Returns:** `public boolean`

### isBrewablePotion

```java
public boolean isBrewablePotion(Holder<Potion> p_316354_)
```

**Parameters:**

- `p_316354_` (`Holder<Potion>`)

**Returns:** `public boolean`

### hasMix

```java
public boolean hasMix(ItemStack p_43509_, ItemStack p_43510_)
```

**Parameters:**

- `p_43509_` (`ItemStack`)
- `p_43510_` (`ItemStack`)

**Returns:** `public boolean`

### hasContainerMix

```java
public boolean hasContainerMix(ItemStack p_43520_, ItemStack p_43521_)
```

**Parameters:**

- `p_43520_` (`ItemStack`)
- `p_43521_` (`ItemStack`)

**Returns:** `public boolean`

### hasPotionMix

```java
public boolean hasPotionMix(ItemStack p_43525_, ItemStack p_43526_)
```

**Parameters:**

- `p_43525_` (`ItemStack`)
- `p_43526_` (`ItemStack`)

**Returns:** `public boolean`

### mix

```java
public ItemStack mix(ItemStack p_43530_, ItemStack p_43531_)
```

**Parameters:**

- `p_43530_` (`ItemStack`)
- `p_43531_` (`ItemStack`)

**Returns:** `public ItemStack`

### bootstrap

```java
public static PotionBrewing bootstrap(FeatureFlagSet p_341301_)
```

**Parameters:**

- `p_341301_` (`FeatureFlagSet`)

**Returns:** `PotionBrewing`

### bootstrap

```java
return bootstrap()
```

**Returns:** `return`

### bootstrap

```java
public static PotionBrewing bootstrap(FeatureFlagSet p_341301_, net.minecraft.core.RegistryAccess registryAccess)
```

**Parameters:**

- `p_341301_` (`FeatureFlagSet`)
- `registryAccess` (`net.minecraft.core.RegistryAccess`)

**Returns:** `public static PotionBrewing`

### addVanillaMixes

```java
 addVanillaMixes()
```

**Returns:** ``

### addVanillaMixes

```java
public static void addVanillaMixes(PotionBrewing.Builder p_341215_)
```

**Parameters:**

- `p_341215_` (`PotionBrewing.Builder`)

**Returns:** `public static void`

### Builder

```java
public Builder(FeatureFlagSet p_340975_)
```

**Parameters:**

- `p_340975_` (`FeatureFlagSet`)

**Returns:** `public`

### expectPotion

```java
private static void expectPotion(Item p_341194_)
```

**Parameters:**

- `p_341194_` (`Item`)

**Returns:** `private static void`

### addContainerRecipe

```java
public void addContainerRecipe(Item p_341264_, Item p_340992_, Item p_341160_)
```

**Parameters:**

- `p_341264_` (`Item`)
- `p_340992_` (`Item`)
- `p_341160_` (`Item`)

**Returns:** `public void`

### expectPotion

```java
 expectPotion()
```

**Returns:** ``

### expectPotion

```java
 expectPotion()
```

**Returns:** ``

### addContainer

```java
public void addContainer(Item p_340911_)
```

**Parameters:**

- `p_340911_` (`Item`)

**Returns:** `public void`

### expectPotion

```java
 expectPotion()
```

**Returns:** ``

### addMix

```java
public void addMix(Holder<Potion> p_341151_, Item p_341216_, Holder<Potion> p_340841_)
```

**Parameters:**

- `p_341151_` (`Holder<Potion>`)
- `p_341216_` (`Item`)
- `p_340841_` (`Holder<Potion>`)

**Returns:** `public void`

### addStartMix

```java
public void addStartMix(Item p_341103_, Holder<Potion> p_341346_)
```

**Parameters:**

- `p_341103_` (`Item`)
- `p_341346_` (`Holder<Potion>`)

**Returns:** `public void`

### addRecipe

```java
public void addRecipe(Ingredient input, Ingredient ingredient, ItemStack output)
```

**Parameters:**

- `input` (`Ingredient`)
- `ingredient` (`Ingredient`)
- `output` (`ItemStack`)

### addRecipe

```java
public void addRecipe(net.neoforged.neoforge.common.brewing.IBrewingRecipe recipe)
```

**Parameters:**

- `recipe` (`net.neoforged.neoforge.common.brewing.IBrewingRecipe`)

### build

```java
public PotionBrewing build()
```

**Returns:** `public PotionBrewing`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
