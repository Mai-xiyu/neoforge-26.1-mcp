# RepairItemRecipe

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Extends:** `CustomRecipe`

## Methods

### RepairItemRecipe

```java
public RepairItemRecipe(CraftingBookCategory p_248679_)
```

**Parameters:**

- `p_248679_` (`CraftingBookCategory`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canCombine

```java
private static boolean canCombine(ItemStack p_336139_, ItemStack p_335795_)
```

**Parameters:**

- `p_336139_` (`ItemStack`)
- `p_335795_` (`ItemStack`)

**Returns:** `private static boolean`

### matches

```java
public boolean matches(CraftingInput p_345243_, Level p_44139_)
```

**Parameters:**

- `p_345243_` (`CraftingInput`)
- `p_44139_` (`Level`)

**Returns:** `public boolean`

### assemble

```java
public ItemStack assemble(CraftingInput p_346224_, HolderLookup.Provider p_335610_)
```

**Parameters:**

- `p_346224_` (`CraftingInput`)
- `p_335610_` (`HolderLookup.Provider`)

**Returns:** `public ItemStack`

### canCraftInDimensions

```java
public boolean canCraftInDimensions(int p_44128_, int p_44129_)
```

**Parameters:**

- `p_44128_` (`int`)
- `p_44129_` (`int`)

**Returns:** `boolean`

### getSerializer

```java
public RecipeSerializer<?> getSerializer()
```

**Returns:** `RecipeSerializer<?>`
