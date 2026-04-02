# ServerRecipeBook

**Package:** `net.minecraft.stats`
**Type:** class
**Extends:** `RecipeBook`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RECIPE_BOOK_TAG` | `String` |  |

## Methods

### addRecipes

```java
public int addRecipes(Collection<RecipeHolder<?>> p_12792_, ServerPlayer p_12793_)
```

**Parameters:**

- `p_12792_` (`Collection<RecipeHolder<?>>`)
- `p_12793_` (`ServerPlayer`)

**Returns:** `public int`

### removeRecipes

```java
public int removeRecipes(Collection<RecipeHolder<?>> p_12807_, ServerPlayer p_12808_)
```

**Parameters:**

- `p_12807_` (`Collection<RecipeHolder<?>>`)
- `p_12808_` (`ServerPlayer`)

**Returns:** `public int`

### sendRecipes

```java
private void sendRecipes(ClientboundRecipePacket.State p_12802_, ServerPlayer p_12803_, List<ResourceLocation> p_12804_)
```

**Parameters:**

- `p_12802_` (`ClientboundRecipePacket.State`)
- `p_12803_` (`ServerPlayer`)
- `p_12804_` (`List<ResourceLocation>`)

**Returns:** `private void`

### toNbt

```java
public CompoundTag toNbt()
```

**Returns:** `public CompoundTag`

### fromNbt

```java
public void fromNbt(CompoundTag p_12795_, RecipeManager p_12796_)
```

**Parameters:**

- `p_12795_` (`CompoundTag`)
- `p_12796_` (`RecipeManager`)

**Returns:** `public void`

### loadRecipes

```java
private void loadRecipes(ListTag p_12798_, Consumer<RecipeHolder<?>> p_12799_, RecipeManager p_12800_)
```

**Parameters:**

- `p_12798_` (`ListTag`)
- `p_12799_` (`Consumer<RecipeHolder<?>>`)
- `p_12800_` (`RecipeManager`)

**Returns:** `private void`

### sendInitialRecipeBook

```java
public void sendInitialRecipeBook(ServerPlayer p_12790_)
```

**Parameters:**

- `p_12790_` (`ServerPlayer`)

**Returns:** `public void`
