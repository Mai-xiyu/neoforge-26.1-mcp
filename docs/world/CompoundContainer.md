# CompoundContainer

**Package:** `net.minecraft.world`
**Type:** class
**Implements:** `Container`

## Methods

### CompoundContainer

```java
public CompoundContainer(Container p_18913_, Container p_18914_)
```

**Parameters:**

- `p_18913_` (`Container`)
- `p_18914_` (`Container`)

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

### contains

```java
public boolean contains(Container p_18928_)
```

**Parameters:**

- `p_18928_` (`Container`)

**Returns:** `public boolean`

### getItem

```java
public ItemStack getItem(int p_18920_)
```

**Parameters:**

- `p_18920_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_18922_, int p_18923_)
```

**Parameters:**

- `p_18922_` (`int`)
- `p_18923_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_18932_)
```

**Parameters:**

- `p_18932_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_18925_, ItemStack p_18926_)
```

**Parameters:**

- `p_18925_` (`int`)
- `p_18926_` (`ItemStack`)

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_18930_)
```

**Parameters:**

- `p_18930_` (`Player`)

**Returns:** `boolean`

### startOpen

```java
public void startOpen(Player p_18940_)
```

**Parameters:**

- `p_18940_` (`Player`)

### stopOpen

```java
public void stopOpen(Player p_18937_)
```

**Parameters:**

- `p_18937_` (`Player`)

### canPlaceItem

```java
public boolean canPlaceItem(int p_18934_, ItemStack p_18935_)
```

**Parameters:**

- `p_18934_` (`int`)
- `p_18935_` (`ItemStack`)

**Returns:** `boolean`

### clearContent

```java
public void clearContent()
```
