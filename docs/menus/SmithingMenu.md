# SmithingMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `ItemCombinerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEMPLATE_SLOT` | `int` |  |
| `BASE_SLOT` | `int` |  |
| `ADDITIONAL_SLOT` | `int` |  |
| `RESULT_SLOT` | `int` |  |
| `TEMPLATE_SLOT_X_PLACEMENT` | `int` |  |
| `BASE_SLOT_X_PLACEMENT` | `int` |  |
| `ADDITIONAL_SLOT_X_PLACEMENT` | `int` |  |
| `SLOT_Y_PLACEMENT` | `int` |  |

## Methods

### SmithingMenu

```java
public SmithingMenu(int p_40245_, Inventory p_40246_)
```

**Parameters:**

- `p_40245_` (`int`)
- `p_40246_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SmithingMenu

```java
public SmithingMenu(int p_40248_, Inventory p_40249_, ContainerLevelAccess p_40250_)
```

**Parameters:**

- `p_40248_` (`int`)
- `p_40249_` (`Inventory`)
- `p_40250_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createInputSlotDefinitions

```java
protected ItemCombinerMenuSlotDefinition createInputSlotDefinitions()
```

**Returns:** `ItemCombinerMenuSlotDefinition`

### isValidBlock

```java
protected boolean isValidBlock(BlockState p_40266_)
```

**Parameters:**

- `p_40266_` (`BlockState`)

**Returns:** `boolean`

### mayPickup

```java
protected boolean mayPickup(Player p_40268_, boolean p_40269_)
```

**Parameters:**

- `p_40268_` (`Player`)
- `p_40269_` (`boolean`)

**Returns:** `boolean`

### onTake

```java
protected void onTake(Player p_150663_, ItemStack p_150664_)
```

**Parameters:**

- `p_150663_` (`Player`)
- `p_150664_` (`ItemStack`)

### getRelevantItems

```java
private List<ItemStack> getRelevantItems()
```

**Returns:** `private List<ItemStack>`

### createRecipeInput

```java
private SmithingRecipeInput createRecipeInput()
```

**Returns:** `private SmithingRecipeInput`

### shrinkStackInSlot

```java
private void shrinkStackInSlot(int p_40271_)
```

**Parameters:**

- `p_40271_` (`int`)

**Returns:** `private void`

### createResult

```java
public void createResult()
```

### getSlotToQuickMoveTo

```java
public int getSlotToQuickMoveTo(ItemStack p_266739_)
```

**Parameters:**

- `p_266739_` (`ItemStack`)

**Returns:** `int`

### findSlotMatchingIngredient

```java
private static OptionalInt findSlotMatchingIngredient(SmithingRecipe p_266790_, ItemStack p_266818_)
```

**Parameters:**

- `p_266790_` (`SmithingRecipe`)
- `p_266818_` (`ItemStack`)

**Returns:** `private static OptionalInt`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_40257_, Slot p_40258_)
```

**Parameters:**

- `p_40257_` (`ItemStack`)
- `p_40258_` (`Slot`)

**Returns:** `boolean`

### canMoveIntoInputSlots

```java
public boolean canMoveIntoInputSlots(ItemStack p_266846_)
```

**Parameters:**

- `p_266846_` (`ItemStack`)

**Returns:** `boolean`

### findSlotToQuickMoveTo

```java
private OptionalInt findSlotToQuickMoveTo(ItemStack p_295440_)
```

**Parameters:**

- `p_295440_` (`ItemStack`)

**Returns:** `private OptionalInt`
