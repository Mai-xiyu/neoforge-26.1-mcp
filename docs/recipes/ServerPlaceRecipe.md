# ServerPlaceRecipe

**Package:** `net.minecraft.recipebook`
**Type:** class<I extends RecipeInput, R extends Recipe<I>> implements PlaceRecipe<Integer>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `stackedContents` | `StackedContents` |  |
| `inventory` | `Inventory` |  |
| `menu` | `RecipeBookMenu<I, R>` |  |

## Methods

### ServerPlaceRecipe

```java
public ServerPlaceRecipe(RecipeBookMenu<I, R> p_135431_)
```

**Parameters:**

- `p_135431_` (`RecipeBookMenu<I, R>`)

**Returns:** `public`

### recipeClicked

```java
public void recipeClicked(ServerPlayer p_135435_, RecipeHolder<R> p_301150_, boolean p_135437_)
```

**Parameters:**

- `p_135435_` (`ServerPlayer`)
- `p_301150_` (`RecipeHolder<R>`)
- `p_135437_` (`boolean`)

**Returns:** `public void`

### clearGrid

```java
protected void clearGrid()
```

**Returns:** `protected void`

### handleRecipeClicked

```java
protected void handleRecipeClicked(RecipeHolder<R> p_301187_, boolean p_135442_)
```

**Parameters:**

- `p_301187_` (`RecipeHolder<R>`)
- `p_135442_` (`boolean`)

**Returns:** `protected void`

### addItemToSlot

```java
public void addItemToSlot(Integer p_346390_, int p_346229_, int p_345733_, int p_345812_, int p_346351_)
```

**Parameters:**

- `p_346390_` (`Integer`)
- `p_346229_` (`int`)
- `p_345733_` (`int`)
- `p_345812_` (`int`)
- `p_346351_` (`int`)

**Returns:** `public void`

### getStackSize

```java
protected int getStackSize(boolean p_135450_, int p_135451_, boolean p_135452_)
```

**Parameters:**

- `p_135450_` (`boolean`)
- `p_135451_` (`int`)
- `p_135452_` (`boolean`)

**Returns:** `protected int`

### moveItemToGrid

```java
protected int moveItemToGrid(Slot p_135439_, ItemStack p_135440_, int p_346157_)
```

**Parameters:**

- `p_135439_` (`Slot`)
- `p_135440_` (`ItemStack`)
- `p_346157_` (`int`)

**Returns:** `protected int`

### testClearGrid

```java
private boolean testClearGrid()
```

**Returns:** `private boolean`

### getAmountOfFreeSlotsInInventory

```java
private int getAmountOfFreeSlotsInInventory()
```

**Returns:** `private int`
