# CraftingInput

**Package:** `net.minecraft.world.item.crafting`
**Type:** class
**Implements:** `RecipeInput`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `CraftingInput` |  |
| `EMPTY` | `CraftingInput.Positioned` |  |

## Methods

### CraftingInput

```java
private CraftingInput(int p_346099_, int p_344783_, List<ItemStack> p_345241_)
```

**Parameters:**

- `p_346099_` (`int`)
- `p_344783_` (`int`)
- `p_345241_` (`List<ItemStack>`)

**Returns:** `private`

### of

```java
public static CraftingInput of(int p_346122_, int p_344877_, List<ItemStack> p_345183_)
```

**Parameters:**

- `p_346122_` (`int`)
- `p_344877_` (`int`)
- `p_345183_` (`List<ItemStack>`)

**Returns:** `public static CraftingInput`

### ofPositioned

```java
public static CraftingInput.Positioned ofPositioned(int p_347479_, int p_347466_, List<ItemStack> p_347585_)
```

**Parameters:**

- `p_347479_` (`int`)
- `p_347466_` (`int`)
- `p_347585_` (`List<ItemStack>`)

**Returns:** `public static CraftingInput.Positioned`

### getItem

```java
public ItemStack getItem(int p_345667_)
```

**Parameters:**

- `p_345667_` (`int`)

**Returns:** `ItemStack`

### getItem

```java
public ItemStack getItem(int p_346237_, int p_345556_)
```

**Parameters:**

- `p_346237_` (`int`)
- `p_345556_` (`int`)

**Returns:** `public ItemStack`

### size

```java
public int size()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### stackedContents

```java
public StackedContents stackedContents()
```

**Returns:** `public StackedContents`

### items

```java
public List<ItemStack> items()
```

**Returns:** `public List<ItemStack>`

### ingredientCount

```java
public int ingredientCount()
```

**Returns:** `public int`

### width

```java
public int width()
```

**Returns:** `public int`

### height

```java
public int height()
```

**Returns:** `public int`

### equals

```java
public boolean equals(Object p_345299_)
```

**Parameters:**

- `p_345299_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### Positioned

```java
public static record Positioned(CraftingInput input, int left, int top)
```

**Parameters:**

- `input` (`CraftingInput`)
- `left` (`int`)
- `top` (`int`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Positioned` | record |  |
