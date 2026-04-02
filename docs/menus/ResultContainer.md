# ResultContainer

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Implements:** `Container`, `RecipeCraftingHolder`

## Methods

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getItem

```java
public ItemStack getItem(int p_40147_)
```

**Parameters:**

- `p_40147_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_40149_, int p_40150_)
```

**Parameters:**

- `p_40149_` (`int`)
- `p_40150_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_40160_)
```

**Parameters:**

- `p_40160_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_40152_, ItemStack p_40153_)
```

**Parameters:**

- `p_40152_` (`int`)
- `p_40153_` (`ItemStack`)

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_40155_)
```

**Parameters:**

- `p_40155_` (`Player`)

**Returns:** `boolean`

### clearContent

```java
public void clearContent()
```

### setRecipeUsed

```java
public void setRecipeUsed(RecipeHolder<?> p_301012_)
```

**Parameters:**

- `p_301012_` (`RecipeHolder<?>`)

### getRecipeUsed

```java
public RecipeHolder<?> getRecipeUsed()
```

**Returns:** `RecipeHolder<?>`
