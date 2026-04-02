# SimpleContainer

**Package:** `net.minecraft.world`
**Type:** class
**Implements:** `Container`, `StackedContentsCompatible`

## Methods

### SimpleContainer

```java
public SimpleContainer(int p_19150_)
```

**Parameters:**

- `p_19150_` (`int`)

**Returns:** `public`

### SimpleContainer

```java
public SimpleContainer(ItemStack[]... p_19152_)
```

**Parameters:**

- `p_19152_` (`ItemStack[]...`)

**Returns:** `public`

### addListener

```java
public void addListener(ContainerListener p_19165_)
```

**Parameters:**

- `p_19165_` (`ContainerListener`)

**Returns:** `public void`

### removeListener

```java
public void removeListener(ContainerListener p_19182_)
```

**Parameters:**

- `p_19182_` (`ContainerListener`)

**Returns:** `public void`

### getItem

```java
public ItemStack getItem(int p_19157_)
```

**Parameters:**

- `p_19157_` (`int`)

**Returns:** `ItemStack`

### removeAllItems

```java
public List<ItemStack> removeAllItems()
```

**Returns:** `public List<ItemStack>`

### removeItem

```java
public ItemStack removeItem(int p_19159_, int p_19160_)
```

**Parameters:**

- `p_19159_` (`int`)
- `p_19160_` (`int`)

**Returns:** `ItemStack`

### removeItemType

```java
public ItemStack removeItemType(Item p_19171_, int p_19172_)
```

**Parameters:**

- `p_19171_` (`Item`)
- `p_19172_` (`int`)

**Returns:** `public ItemStack`

### addItem

```java
public ItemStack addItem(ItemStack p_19174_)
```

**Parameters:**

- `p_19174_` (`ItemStack`)

**Returns:** `public ItemStack`

### canAddItem

```java
public boolean canAddItem(ItemStack p_19184_)
```

**Parameters:**

- `p_19184_` (`ItemStack`)

**Returns:** `public boolean`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_19180_)
```

**Parameters:**

- `p_19180_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_19162_, ItemStack p_19163_)
```

**Parameters:**

- `p_19162_` (`int`)
- `p_19163_` (`ItemStack`)

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

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_19167_)
```

**Parameters:**

- `p_19167_` (`Player`)

**Returns:** `boolean`

### clearContent

```java
public void clearContent()
```

### fillStackedContents

```java
public void fillStackedContents(StackedContents p_19169_)
```

**Parameters:**

- `p_19169_` (`StackedContents`)

### toString

```java
public String toString()
```

**Returns:** `String`

### moveItemToEmptySlots

```java
private void moveItemToEmptySlots(ItemStack p_19190_)
```

**Parameters:**

- `p_19190_` (`ItemStack`)

**Returns:** `private void`

### moveItemToOccupiedSlotsWithSameType

```java
private void moveItemToOccupiedSlotsWithSameType(ItemStack p_19192_)
```

**Parameters:**

- `p_19192_` (`ItemStack`)

**Returns:** `private void`

### moveItemsBetweenStacks

```java
private void moveItemsBetweenStacks(ItemStack p_19186_, ItemStack p_19187_)
```

**Parameters:**

- `p_19186_` (`ItemStack`)
- `p_19187_` (`ItemStack`)

**Returns:** `private void`

### fromTag

```java
public void fromTag(ListTag p_19178_, HolderLookup.Provider p_331527_)
```

**Parameters:**

- `p_19178_` (`ListTag`)
- `p_331527_` (`HolderLookup.Provider`)

**Returns:** `public void`

### createTag

```java
public ListTag createTag(HolderLookup.Provider p_330840_)
```

**Parameters:**

- `p_330840_` (`HolderLookup.Provider`)

**Returns:** `public ListTag`

### getItems

```java
public NonNullList<ItemStack> getItems()
```

**Returns:** `public NonNullList<ItemStack>`
