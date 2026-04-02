# Slot

**Package:** `net.minecraft.world.inventory`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `container` | `Container` |  |
| `index` | `int` |  |
| `x` | `int` |  |
| `y` | `int` |  |

## Methods

### Slot

```java
public Slot(Container p_40223_, int p_40224_, int p_40225_, int p_40226_)
```

**Parameters:**

- `p_40223_` (`Container`)
- `p_40224_` (`int`)
- `p_40225_` (`int`)
- `p_40226_` (`int`)

**Returns:** `public`

### onQuickCraft

```java
public void onQuickCraft(ItemStack p_40235_, ItemStack p_40236_)
```

**Parameters:**

- `p_40235_` (`ItemStack`)
- `p_40236_` (`ItemStack`)

**Returns:** `public void`

### onQuickCraft

```java
protected void onQuickCraft(ItemStack p_40232_, int p_40233_)
```

**Parameters:**

- `p_40232_` (`ItemStack`)
- `p_40233_` (`int`)

**Returns:** `protected void`

### onSwapCraft

```java
protected void onSwapCraft(int p_40237_)
```

**Parameters:**

- `p_40237_` (`int`)

**Returns:** `protected void`

### checkTakeAchievements

```java
protected void checkTakeAchievements(ItemStack p_40239_)
```

**Parameters:**

- `p_40239_` (`ItemStack`)

**Returns:** `protected void`

### onTake

```java
public void onTake(Player p_150645_, ItemStack p_150646_)
```

**Parameters:**

- `p_150645_` (`Player`)
- `p_150646_` (`ItemStack`)

**Returns:** `public void`

### mayPlace

```java
public boolean mayPlace(ItemStack p_40231_)
```

**Parameters:**

- `p_40231_` (`ItemStack`)

**Returns:** `public boolean`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

### hasItem

```java
public boolean hasItem()
```

**Returns:** `public boolean`

### setByPlayer

```java
public void setByPlayer(ItemStack p_270152_)
```

**Parameters:**

- `p_270152_` (`ItemStack`)

**Returns:** `public void`

### setByPlayer

```java
public void setByPlayer(ItemStack p_299990_, ItemStack p_299965_)
```

**Parameters:**

- `p_299990_` (`ItemStack`)
- `p_299965_` (`ItemStack`)

**Returns:** `public void`

### set

```java
public void set(ItemStack p_40240_)
```

**Parameters:**

- `p_40240_` (`ItemStack`)

**Returns:** `public void`

### setChanged

```java
public void setChanged()
```

**Returns:** `public void`

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `public int`

### getMaxStackSize

```java
public int getMaxStackSize(ItemStack p_40238_)
```

**Parameters:**

- `p_40238_` (`ItemStack`)

**Returns:** `public int`

### getNoItemIcon

```java
public Pair<ResourceLocation, ResourceLocation> getNoItemIcon()
```

**Returns:** `Pair<ResourceLocation, ResourceLocation>`

### remove

```java
public ItemStack remove(int p_40227_)
```

**Parameters:**

- `p_40227_` (`int`)

**Returns:** `public ItemStack`

### mayPickup

```java
public boolean mayPickup(Player p_40228_)
```

**Parameters:**

- `p_40228_` (`Player`)

**Returns:** `public boolean`

### isActive

```java
public boolean isActive()
```

**Returns:** `public boolean`

### getSlotIndex

```java
public int getSlotIndex()
```

**Returns:** `int`

### isSameInventory

```java
public boolean isSameInventory(Slot other)
```

**Parameters:**

- `other` (`Slot`)

**Returns:** `boolean`

### setBackground

```java
public Slot setBackground(ResourceLocation atlas, ResourceLocation sprite)
```

**Parameters:**

- `atlas` (`ResourceLocation`)
- `sprite` (`ResourceLocation`)

**Returns:** `Slot`

### tryRemove

```java
public Optional<ItemStack> tryRemove(int p_150642_, int p_150643_, Player p_150644_)
```

**Parameters:**

- `p_150642_` (`int`)
- `p_150643_` (`int`)
- `p_150644_` (`Player`)

**Returns:** `public Optional<ItemStack>`

### safeTake

```java
public ItemStack safeTake(int p_150648_, int p_150649_, Player p_150650_)
```

**Parameters:**

- `p_150648_` (`int`)
- `p_150649_` (`int`)
- `p_150650_` (`Player`)

**Returns:** `public ItemStack`

### safeInsert

```java
public ItemStack safeInsert(ItemStack p_150660_)
```

**Parameters:**

- `p_150660_` (`ItemStack`)

**Returns:** `public ItemStack`

### safeInsert

```java
public ItemStack safeInsert(ItemStack p_150657_, int p_150658_)
```

**Parameters:**

- `p_150657_` (`ItemStack`)
- `p_150658_` (`int`)

**Returns:** `public ItemStack`

### allowModification

```java
public boolean allowModification(Player p_150652_)
```

**Parameters:**

- `p_150652_` (`Player`)

**Returns:** `public boolean`

### getContainerSlot

```java
public int getContainerSlot()
```

**Returns:** `public int`

### isHighlightable

```java
public boolean isHighlightable()
```

**Returns:** `public boolean`

### isFake

```java
public boolean isFake()
```

**Returns:** `public boolean`
