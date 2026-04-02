# ResultSlot

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `Slot`

## Methods

### ResultSlot

```java
public ResultSlot(Player p_40166_, CraftingContainer p_40167_, Container p_40168_, int p_40169_, int p_40170_, int p_40171_)
```

**Parameters:**

- `p_40166_` (`Player`)
- `p_40167_` (`CraftingContainer`)
- `p_40168_` (`Container`)
- `p_40169_` (`int`)
- `p_40170_` (`int`)
- `p_40171_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_40178_)
```

**Parameters:**

- `p_40178_` (`ItemStack`)

**Returns:** `boolean`

### remove

```java
public ItemStack remove(int p_40173_)
```

**Parameters:**

- `p_40173_` (`int`)

**Returns:** `ItemStack`

### onQuickCraft

```java
protected void onQuickCraft(ItemStack p_40180_, int p_40181_)
```

**Parameters:**

- `p_40180_` (`ItemStack`)
- `p_40181_` (`int`)

### onSwapCraft

```java
protected void onSwapCraft(int p_40183_)
```

**Parameters:**

- `p_40183_` (`int`)

### checkTakeAchievements

```java
protected void checkTakeAchievements(ItemStack p_40185_)
```

**Parameters:**

- `p_40185_` (`ItemStack`)

### onTake

```java
public void onTake(Player p_150638_, ItemStack p_150639_)
```

**Parameters:**

- `p_150638_` (`Player`)
- `p_150639_` (`ItemStack`)

### isFake

```java
public boolean isFake()
```

**Returns:** `boolean`
