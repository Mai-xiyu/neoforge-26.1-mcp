# NonInteractiveResultSlot

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `Slot`

## Methods

### NonInteractiveResultSlot

```java
public NonInteractiveResultSlot(Container p_307372_, int p_307687_, int p_307440_, int p_307347_)
```

**Parameters:**

- `p_307372_` (`Container`)
- `p_307687_` (`int`)
- `p_307440_` (`int`)
- `p_307347_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onQuickCraft

```java
public void onQuickCraft(ItemStack p_307668_, ItemStack p_307399_)
```

**Parameters:**

- `p_307668_` (`ItemStack`)
- `p_307399_` (`ItemStack`)

### mayPickup

```java
public boolean mayPickup(Player p_307569_)
```

**Parameters:**

- `p_307569_` (`Player`)

**Returns:** `boolean`

### tryRemove

```java
public Optional<ItemStack> tryRemove(int p_307436_, int p_307573_, Player p_307226_)
```

**Parameters:**

- `p_307436_` (`int`)
- `p_307573_` (`int`)
- `p_307226_` (`Player`)

**Returns:** `Optional<ItemStack>`

### safeTake

```java
public ItemStack safeTake(int p_307592_, int p_307524_, Player p_307360_)
```

**Parameters:**

- `p_307592_` (`int`)
- `p_307524_` (`int`)
- `p_307360_` (`Player`)

**Returns:** `ItemStack`

### safeInsert

```java
public ItemStack safeInsert(ItemStack p_307685_)
```

**Parameters:**

- `p_307685_` (`ItemStack`)

**Returns:** `ItemStack`

### safeInsert

```java
public ItemStack safeInsert(ItemStack p_307656_, int p_307278_)
```

**Parameters:**

- `p_307656_` (`ItemStack`)
- `p_307278_` (`int`)

**Returns:** `ItemStack`

### allowModification

```java
public boolean allowModification(Player p_307532_)
```

**Parameters:**

- `p_307532_` (`Player`)

**Returns:** `boolean`

### mayPlace

```java
public boolean mayPlace(ItemStack p_307504_)
```

**Parameters:**

- `p_307504_` (`ItemStack`)

**Returns:** `boolean`

### remove

```java
public ItemStack remove(int p_307370_)
```

**Parameters:**

- `p_307370_` (`int`)

**Returns:** `ItemStack`

### onTake

```java
public void onTake(Player p_307447_, ItemStack p_307430_)
```

**Parameters:**

- `p_307447_` (`Player`)
- `p_307430_` (`ItemStack`)

### isHighlightable

```java
public boolean isHighlightable()
```

**Returns:** `boolean`

### isFake

```java
public boolean isFake()
```

**Returns:** `boolean`
