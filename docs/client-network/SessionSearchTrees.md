# SessionSearchTrees

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CREATIVE_NAMES` | `SessionSearchTrees.Key` |  |
| `CREATIVE_TAGS` | `SessionSearchTrees.Key` |  |

## Methods

### register

```java
private void register(SessionSearchTrees.Key p_345458_, Runnable p_346175_)
```

**Parameters:**

- `p_345458_` (`SessionSearchTrees.Key`)
- `p_346175_` (`Runnable`)

**Returns:** `private void`

### rebuildAfterLanguageChange

```java
public void rebuildAfterLanguageChange()
```

**Returns:** `public void`

### getTooltipLines

```java
private static Stream<String> getTooltipLines(Stream<ItemStack> p_344879_, Item.TooltipContext p_345662_, TooltipFlag p_345262_)
```

**Parameters:**

- `p_344879_` (`Stream<ItemStack>`)
- `p_345662_` (`Item.TooltipContext`)
- `p_345262_` (`TooltipFlag`)

**Returns:** `private static Stream<String>`

### updateRecipes

```java
public void updateRecipes(ClientRecipeBook p_346233_, RegistryAccess.Frozen p_345600_)
```

**Parameters:**

- `p_346233_` (`ClientRecipeBook`)
- `p_345600_` (`RegistryAccess.Frozen`)

**Returns:** `public void`

### recipes

```java
public SearchTree<RecipeCollection> recipes()
```

**Returns:** `public SearchTree<RecipeCollection>`

### updateCreativeTags

```java
public void updateCreativeTags(List<ItemStack> p_346121_)
```

**Parameters:**

- `p_346121_` (`List<ItemStack>`)

**Returns:** `public void`

### updateCreativeTags

```java
public void updateCreativeTags(List<ItemStack> p_346121_, SessionSearchTrees.Key key)
```

**Parameters:**

- `p_346121_` (`List<ItemStack>`)
- `key` (`SessionSearchTrees.Key`)

**Returns:** `public void`

### creativeTagSearch

```java
public SearchTree<ItemStack> creativeTagSearch()
```

**Returns:** `public SearchTree<ItemStack>`

### creativeTagSearch

```java
public SearchTree<ItemStack> creativeTagSearch(SessionSearchTrees.Key key)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)

**Returns:** `public SearchTree<ItemStack>`

### updateCreativeTooltips

```java
public void updateCreativeTooltips(HolderLookup.Provider p_345391_, List<ItemStack> p_346357_)
```

**Parameters:**

- `p_345391_` (`HolderLookup.Provider`)
- `p_346357_` (`List<ItemStack>`)

**Returns:** `public void`

### updateCreativeTooltips

```java
public void updateCreativeTooltips(HolderLookup.Provider p_345391_, List<ItemStack> p_346357_, SessionSearchTrees.Key key)
```

**Parameters:**

- `p_345391_` (`HolderLookup.Provider`)
- `p_346357_` (`List<ItemStack>`)
- `key` (`SessionSearchTrees.Key`)

**Returns:** `public void`

### creativeNameSearch

```java
public SearchTree<ItemStack> creativeNameSearch()
```

**Returns:** `public SearchTree<ItemStack>`

### creativeNameSearch

```java
public SearchTree<ItemStack> creativeNameSearch(SessionSearchTrees.Key key)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)

**Returns:** `public SearchTree<ItemStack>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Key` | class |  |
