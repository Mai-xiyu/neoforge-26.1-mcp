# CraftingMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `RecipeBookMenu<CraftingInput, CraftingRecipe>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RESULT_SLOT` | `int` |  |

## Methods

### CraftingMenu

```java
public CraftingMenu(int p_39353_, Inventory p_39354_)
```

**Parameters:**

- `p_39353_` (`int`)
- `p_39354_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### CraftingMenu

```java
public CraftingMenu(int p_39356_, Inventory p_39357_, ContainerLevelAccess p_39358_)
```

**Parameters:**

- `p_39356_` (`int`)
- `p_39357_` (`Inventory`)
- `p_39358_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### slotChangedCraftingGrid

```java
protected static void slotChangedCraftingGrid(AbstractContainerMenu p_150547_, Level p_150548_, Player p_150549_, CraftingContainer p_150550_, ResultContainer p_150551_, RecipeHolder<CraftingRecipe> p_345124_)
```

**Parameters:**

- `p_150547_` (`AbstractContainerMenu`)
- `p_150548_` (`Level`)
- `p_150549_` (`Player`)
- `p_150550_` (`CraftingContainer`)
- `p_150551_` (`ResultContainer`)
- `p_345124_` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `protected static void`

### slotsChanged

```java
public void slotsChanged(Container p_39366_)
```

**Parameters:**

- `p_39366_` (`Container`)

### beginPlacingRecipe

```java
public void beginPlacingRecipe()
```

### finishPlacingRecipe

```java
public void finishPlacingRecipe(RecipeHolder<CraftingRecipe> p_345915_)
```

**Parameters:**

- `p_345915_` (`RecipeHolder<CraftingRecipe>`)

### fillCraftSlotsStackedContents

```java
public void fillCraftSlotsStackedContents(StackedContents p_39374_)
```

**Parameters:**

- `p_39374_` (`StackedContents`)

### clearCraftingContent

```java
public void clearCraftingContent()
```

### recipeMatches

```java
public boolean recipeMatches(RecipeHolder<CraftingRecipe> p_300858_)
```

**Parameters:**

- `p_300858_` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `boolean`

### removed

```java
public void removed(Player p_39389_)
```

**Parameters:**

- `p_39389_` (`Player`)

### stillValid

```java
public boolean stillValid(Player p_39368_)
```

**Parameters:**

- `p_39368_` (`Player`)

**Returns:** `boolean`

### stillValid

```java
return stillValid()
```

**Returns:** `return`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_39391_, int p_39392_)
```

**Parameters:**

- `p_39391_` (`Player`)
- `p_39392_` (`int`)

**Returns:** `ItemStack`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_39381_, Slot p_39382_)
```

**Parameters:**

- `p_39381_` (`ItemStack`)
- `p_39382_` (`Slot`)

**Returns:** `boolean`

### getResultSlotIndex

```java
public int getResultSlotIndex()
```

**Returns:** `int`

### getGridWidth

```java
public int getGridWidth()
```

**Returns:** `int`

### getGridHeight

```java
public int getGridHeight()
```

**Returns:** `int`

### getSize

```java
public int getSize()
```

**Returns:** `int`

### getRecipeBookType

```java
public RecipeBookType getRecipeBookType()
```

**Returns:** `RecipeBookType`

### shouldMoveToInventory

```java
public boolean shouldMoveToInventory(int p_150553_)
```

**Parameters:**

- `p_150553_` (`int`)

**Returns:** `boolean`
