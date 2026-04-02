# InventoryMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `RecipeBookMenu<CraftingInput, CraftingRecipe>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CONTAINER_ID` | `int` |  |
| `RESULT_SLOT` | `int` |  |
| `CRAFT_SLOT_START` | `int` |  |
| `CRAFT_SLOT_COUNT` | `int` |  |
| `CRAFT_SLOT_END` | `int` |  |
| `ARMOR_SLOT_START` | `int` |  |
| `ARMOR_SLOT_COUNT` | `int` |  |
| `ARMOR_SLOT_END` | `int` |  |
| `INV_SLOT_START` | `int` |  |
| `INV_SLOT_END` | `int` |  |
| `USE_ROW_SLOT_START` | `int` |  |
| `USE_ROW_SLOT_END` | `int` |  |
| `SHIELD_SLOT` | `int` |  |
| `BLOCK_ATLAS` | `ResourceLocation` |  |
| `EMPTY_ARMOR_SLOT_HELMET` | `ResourceLocation` |  |
| `EMPTY_ARMOR_SLOT_CHESTPLATE` | `ResourceLocation` |  |
| `EMPTY_ARMOR_SLOT_LEGGINGS` | `ResourceLocation` |  |
| `EMPTY_ARMOR_SLOT_BOOTS` | `ResourceLocation` |  |
| `EMPTY_ARMOR_SLOT_SHIELD` | `ResourceLocation` |  |
| `active` | `boolean` |  |

## Methods

### InventoryMenu

```java
public InventoryMenu(Inventory p_39706_, boolean p_39707_, Player p_39708_)
```

**Parameters:**

- `p_39706_` (`Inventory`)
- `p_39707_` (`boolean`)
- `p_39708_` (`Player`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setByPlayer

```java
public void setByPlayer(ItemStack p_270969_, ItemStack p_299918_)
```

**Parameters:**

- `p_270969_` (`ItemStack`)
- `p_299918_` (`ItemStack`)

### getNoItemIcon

```java
public Pair<ResourceLocation, ResourceLocation> getNoItemIcon()
```

**Returns:** `Pair<ResourceLocation, ResourceLocation>`

### isHotbarSlot

```java
public static boolean isHotbarSlot(int p_150593_)
```

**Parameters:**

- `p_150593_` (`int`)

**Returns:** `public static boolean`

### fillCraftSlotsStackedContents

```java
public void fillCraftSlotsStackedContents(StackedContents p_39714_)
```

**Parameters:**

- `p_39714_` (`StackedContents`)

### clearCraftingContent

```java
public void clearCraftingContent()
```

### recipeMatches

```java
public boolean recipeMatches(RecipeHolder<CraftingRecipe> p_300901_)
```

**Parameters:**

- `p_300901_` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `boolean`

### slotsChanged

```java
public void slotsChanged(Container p_39710_)
```

**Parameters:**

- `p_39710_` (`Container`)

### removed

```java
public void removed(Player p_39721_)
```

**Parameters:**

- `p_39721_` (`Player`)

### stillValid

```java
public boolean stillValid(Player p_39712_)
```

**Parameters:**

- `p_39712_` (`Player`)

**Returns:** `boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_39723_, int p_39724_)
```

**Parameters:**

- `p_39723_` (`Player`)
- `p_39724_` (`int`)

**Returns:** `ItemStack`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_39716_, Slot p_39717_)
```

**Parameters:**

- `p_39716_` (`ItemStack`)
- `p_39717_` (`Slot`)

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

### getCraftSlots

```java
public CraftingContainer getCraftSlots()
```

**Returns:** `public CraftingContainer`

### getRecipeBookType

```java
public RecipeBookType getRecipeBookType()
```

**Returns:** `RecipeBookType`

### shouldMoveToInventory

```java
public boolean shouldMoveToInventory(int p_150591_)
```

**Parameters:**

- `p_150591_` (`int`)

**Returns:** `boolean`
