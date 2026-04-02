# BrewingStandMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`

## Methods

### BrewingStandMenu

```java
public BrewingStandMenu(int p_39090_, Inventory p_39091_)
```

**Parameters:**

- `p_39090_` (`int`)
- `p_39091_` (`Inventory`)

**Returns:** `public`

### BrewingStandMenu

```java
public BrewingStandMenu(int p_39093_, Inventory p_39094_, Container p_39095_, ContainerData p_39096_)
```

**Parameters:**

- `p_39093_` (`int`)
- `p_39094_` (`Inventory`)
- `p_39095_` (`Container`)
- `p_39096_` (`ContainerData`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### checkContainerSize

```java
 checkContainerSize()
```

**Returns:** ``

### checkContainerDataCount

```java
 checkContainerDataCount()
```

**Returns:** ``

### stillValid

```java
public boolean stillValid(Player p_39098_)
```

**Parameters:**

- `p_39098_` (`Player`)

**Returns:** `boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_39100_, int p_39101_)
```

**Parameters:**

- `p_39100_` (`Player`)
- `p_39101_` (`int`)

**Returns:** `ItemStack`

### getFuel

```java
public int getFuel()
```

**Returns:** `public int`

### getBrewingTicks

```java
public int getBrewingTicks()
```

**Returns:** `public int`

### FuelSlot

```java
public FuelSlot(Container p_39105_, int p_39106_, int p_39107_, int p_39108_)
```

**Parameters:**

- `p_39105_` (`Container`)
- `p_39106_` (`int`)
- `p_39107_` (`int`)
- `p_39108_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_39111_)
```

**Parameters:**

- `p_39111_` (`ItemStack`)

**Returns:** `boolean`

### mayPlaceItem

```java
return mayPlaceItem()
```

**Returns:** `return`

### mayPlaceItem

```java
public static boolean mayPlaceItem(ItemStack p_39113_)
```

**Parameters:**

- `p_39113_` (`ItemStack`)

**Returns:** `public static boolean`

### IngredientsSlot

```java
public IngredientsSlot(PotionBrewing p_340951_, Container p_39115_, int p_39116_, int p_39117_, int p_39118_)
```

**Parameters:**

- `p_340951_` (`PotionBrewing`)
- `p_39115_` (`Container`)
- `p_39116_` (`int`)
- `p_39117_` (`int`)
- `p_39118_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_39121_)
```

**Parameters:**

- `p_39121_` (`ItemStack`)

**Returns:** `boolean`

### PotionSlot

```java
public PotionSlot(Container p_39123_, int p_39124_, int p_39125_, int p_39126_)
```

**Parameters:**

- `p_39123_` (`Container`)
- `p_39124_` (`int`)
- `p_39125_` (`int`)
- `p_39126_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### PotionSlot

```java
public PotionSlot(PotionBrewing potionBrewing, Container p_39123_, int p_39124_, int p_39125_, int p_39126_)
```

**Parameters:**

- `potionBrewing` (`PotionBrewing`)
- `p_39123_` (`Container`)
- `p_39124_` (`int`)
- `p_39125_` (`int`)
- `p_39126_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_39132_)
```

**Parameters:**

- `p_39132_` (`ItemStack`)

**Returns:** `boolean`

### mayPlaceItem

```java
return mayPlaceItem()
```

**Returns:** `return`

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### onTake

```java
public void onTake(Player p_150499_, ItemStack p_150500_)
```

**Parameters:**

- `p_150499_` (`Player`)
- `p_150500_` (`ItemStack`)

### mayPlaceItem ⚠️ *Deprecated*

```java
use the overload that takes PotionBrewing instead
        public static boolean mayPlaceItem(ItemStack p_39134_)
```

**Parameters:**

- `p_39134_` (`ItemStack`)

**Returns:** `use the overload that takes PotionBrewing instead
        public static boolean`

### mayPlaceItem

```java
public static boolean mayPlaceItem(PotionBrewing potionBrewing, ItemStack p_39134_)
```

**Parameters:**

- `potionBrewing` (`PotionBrewing`)
- `p_39134_` (`ItemStack`)

**Returns:** `public static boolean`
