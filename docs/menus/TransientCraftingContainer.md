# TransientCraftingContainer

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Implements:** `CraftingContainer`

## Methods

### TransientCraftingContainer

```java
public TransientCraftingContainer(AbstractContainerMenu p_287684_, int p_287629_, int p_287593_)
```

**Parameters:**

- `p_287684_` (`AbstractContainerMenu`)
- `p_287629_` (`int`)
- `p_287593_` (`int`)

**Returns:** `public`

### TransientCraftingContainer

```java
public TransientCraftingContainer(AbstractContainerMenu p_287708_, int p_287591_, int p_287609_, NonNullList<ItemStack> p_287695_)
```

**Parameters:**

- `p_287708_` (`AbstractContainerMenu`)
- `p_287591_` (`int`)
- `p_287609_` (`int`)
- `p_287695_` (`NonNullList<ItemStack>`)

**Returns:** `public`

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
public ItemStack getItem(int p_287712_)
```

**Parameters:**

- `p_287712_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_287637_)
```

**Parameters:**

- `p_287637_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_287682_, int p_287576_)
```

**Parameters:**

- `p_287682_` (`int`)
- `p_287576_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_287681_, ItemStack p_287620_)
```

**Parameters:**

- `p_287681_` (`int`)
- `p_287620_` (`ItemStack`)

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_287774_)
```

**Parameters:**

- `p_287774_` (`Player`)

**Returns:** `boolean`

### clearContent

```java
public void clearContent()
```

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### getItems

```java
public List<ItemStack> getItems()
```

**Returns:** `List<ItemStack>`

### fillStackedContents

```java
public void fillStackedContents(StackedContents p_287653_)
```

**Parameters:**

- `p_287653_` (`StackedContents`)
