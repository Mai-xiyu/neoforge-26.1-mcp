# StonecutterMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INPUT_SLOT` | `int` |  |
| `RESULT_SLOT` | `int` |  |
| `container` | `Container` |  |

## Methods

### setChanged

```java
public void setChanged()
```

### StonecutterMenu

```java
public StonecutterMenu(int p_40294_, Inventory p_40295_)
```

**Parameters:**

- `p_40294_` (`int`)
- `p_40295_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### StonecutterMenu

```java
public StonecutterMenu(int p_40297_, Inventory p_40298_, ContainerLevelAccess p_40299_)
```

**Parameters:**

- `p_40297_` (`int`)
- `p_40298_` (`Inventory`)
- `p_40299_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_40362_)
```

**Parameters:**

- `p_40362_` (`ItemStack`)

**Returns:** `boolean`

### onTake

```java
public void onTake(Player p_150672_, ItemStack p_150673_)
```

**Parameters:**

- `p_150672_` (`Player`)
- `p_150673_` (`ItemStack`)

### getRelevantItems

```java
private List<ItemStack> getRelevantItems()
```

**Returns:** `private List<ItemStack>`

### getSelectedRecipeIndex

```java
public int getSelectedRecipeIndex()
```

**Returns:** `public int`

### getRecipes

```java
public List<RecipeHolder<StonecutterRecipe>> getRecipes()
```

**Returns:** `public List<RecipeHolder<StonecutterRecipe>>`

### getNumRecipes

```java
public int getNumRecipes()
```

**Returns:** `public int`

### hasInputItem

```java
public boolean hasInputItem()
```

**Returns:** `public boolean`

### stillValid

```java
public boolean stillValid(Player p_40307_)
```

**Parameters:**

- `p_40307_` (`Player`)

**Returns:** `boolean`

### stillValid

```java
return stillValid()
```

**Returns:** `return`

### clickMenuButton

```java
public boolean clickMenuButton(Player p_40309_, int p_40310_)
```

**Parameters:**

- `p_40309_` (`Player`)
- `p_40310_` (`int`)

**Returns:** `boolean`

### isValidRecipeIndex

```java
private boolean isValidRecipeIndex(int p_40335_)
```

**Parameters:**

- `p_40335_` (`int`)

**Returns:** `private boolean`

### slotsChanged

```java
public void slotsChanged(Container p_40302_)
```

**Parameters:**

- `p_40302_` (`Container`)

### createRecipeInput

```java
private static SingleRecipeInput createRecipeInput(Container p_346312_)
```

**Parameters:**

- `p_346312_` (`Container`)

**Returns:** `private static SingleRecipeInput`

### setupRecipeList

```java
private void setupRecipeList(Container p_40304_, ItemStack p_40305_)
```

**Parameters:**

- `p_40304_` (`Container`)
- `p_40305_` (`ItemStack`)

**Returns:** `private void`

### setupResultSlot

```java
void setupResultSlot()
```

### getType

```java
public MenuType<?> getType()
```

**Returns:** `MenuType<?>`

### registerUpdateListener

```java
public void registerUpdateListener(Runnable p_40324_)
```

**Parameters:**

- `p_40324_` (`Runnable`)

**Returns:** `public void`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_40321_, Slot p_40322_)
```

**Parameters:**

- `p_40321_` (`ItemStack`)
- `p_40322_` (`Slot`)

**Returns:** `boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_40328_, int p_40329_)
```

**Parameters:**

- `p_40328_` (`Player`)
- `p_40329_` (`int`)

**Returns:** `ItemStack`

### removed

```java
public void removed(Player p_40326_)
```

**Parameters:**

- `p_40326_` (`Player`)
