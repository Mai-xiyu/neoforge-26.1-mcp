# RecipeBookCategories

**Package:** `net.minecraft.client`
**Type:** enum
**Implements:** `net.neoforged.fml.common.asm.enumextension.IExtensibleEnum`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SMOKER_CATEGORIES` | `List<RecipeBookCategories>` |  |
| `BLAST_FURNACE_CATEGORIES` | `List<RecipeBookCategories>` |  |
| `FURNACE_CATEGORIES` | `List<RecipeBookCategories>` |  |
| `CRAFTING_CATEGORIES` | `List<RecipeBookCategories>` |  |
| `AGGREGATE_CATEGORIES` | `Map<RecipeBookCategories, List<RecipeBookCategories>>` |  |

## Methods

### RecipeBookCategories

```java
.neoforged.fml.common.asm.enumextension.ReservedConstructor
    private RecipeBookCategories(ItemStack[]... p_92267_)
```

**Parameters:**

- `p_92267_` (`ItemStack[]...`)

**Returns:** `.neoforged.fml.common.asm.enumextension.ReservedConstructor
    private`

### RecipeBookCategories

```java
private RecipeBookCategories(java.util.function.Supplier<List<ItemStack>> itemIconsSupplier)
```

**Parameters:**

- `itemIconsSupplier` (`java.util.function.Supplier<List<ItemStack>>`)

**Returns:** `private`

### getCategories

```java
public static List<RecipeBookCategories> getCategories(RecipeBookType p_92270_)
```

**Parameters:**

- `p_92270_` (`RecipeBookType`)

**Returns:** `public static List<RecipeBookCategories>`

### getIconItems

```java
public List<ItemStack> getIconItems()
```

**Returns:** `public List<ItemStack>`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`
