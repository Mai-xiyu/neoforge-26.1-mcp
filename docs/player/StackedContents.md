# StackedContents

**Package:** `net.minecraft.world.entity.player`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `contents` | `Int2IntMap` |  |

## Methods

### accountSimpleStack

```java
public void accountSimpleStack(ItemStack p_36467_)
```

**Parameters:**

- `p_36467_` (`ItemStack`)

**Returns:** `public void`

### accountStack

```java
public void accountStack(ItemStack p_36492_)
```

**Parameters:**

- `p_36492_` (`ItemStack`)

**Returns:** `public void`

### accountStack

```java
public void accountStack(ItemStack p_36469_, int p_36470_)
```

**Parameters:**

- `p_36469_` (`ItemStack`)
- `p_36470_` (`int`)

**Returns:** `public void`

### getStackingIndex

```java
public static int getStackingIndex(ItemStack p_36497_)
```

**Parameters:**

- `p_36497_` (`ItemStack`)

**Returns:** `public static int`

### has

```java
boolean has(int p_36483_)
```

**Parameters:**

- `p_36483_` (`int`)

**Returns:** `boolean`

### take

```java
int take(int p_36457_, int p_36458_)
```

**Parameters:**

- `p_36457_` (`int`)
- `p_36458_` (`int`)

**Returns:** `int`

### put

```java
void put(int p_36485_, int p_36486_)
```

**Parameters:**

- `p_36485_` (`int`)
- `p_36486_` (`int`)

### canCraft

```java
public boolean canCraft(Recipe<?> p_36476_, IntList p_36477_)
```

**Parameters:**

- `p_36476_` (`Recipe<?>`)
- `p_36477_` (`IntList`)

**Returns:** `public boolean`

### canCraft

```java
public boolean canCraft(Recipe<?> p_36479_, IntList p_36480_, int p_36481_)
```

**Parameters:**

- `p_36479_` (`Recipe<?>`)
- `p_36480_` (`IntList`)
- `p_36481_` (`int`)

**Returns:** `public boolean`

### getBiggestCraftableStack

```java
public int getBiggestCraftableStack(RecipeHolder<?> p_301005_, IntList p_36474_)
```

**Parameters:**

- `p_301005_` (`RecipeHolder<?>`)
- `p_36474_` (`IntList`)

**Returns:** `public int`

### getBiggestCraftableStack

```java
public int getBiggestCraftableStack(RecipeHolder<?> p_300888_, int p_300980_, IntList p_36495_)
```

**Parameters:**

- `p_300888_` (`RecipeHolder<?>`)
- `p_300980_` (`int`)
- `p_36495_` (`IntList`)

**Returns:** `public int`

### fromStackingIndex

```java
public static ItemStack fromStackingIndex(int p_36455_)
```

**Parameters:**

- `p_36455_` (`int`)

**Returns:** `public static ItemStack`

### clear

```java
public void clear()
```

**Returns:** `public void`

### RecipePicker

```java
public RecipePicker(Recipe<?> p_36508_)
```

**Parameters:**

- `p_36508_` (`Recipe<?>`)

**Returns:** `public`

### tryPick

```java
public boolean tryPick(int p_36513_, IntList p_36514_)
```

**Parameters:**

- `p_36513_` (`int`)
- `p_36514_` (`IntList`)

**Returns:** `public boolean`

### getUniqueAvailableIngredientItems

```java
private int[] getUniqueAvailableIngredientItems()
```

**Returns:** `private int[]`

### dfs

```java
private boolean dfs(int p_36511_)
```

**Parameters:**

- `p_36511_` (`int`)

**Returns:** `private boolean`

### isSatisfied

```java
private boolean isSatisfied(int p_36524_)
```

**Parameters:**

- `p_36524_` (`int`)

**Returns:** `private boolean`

### setSatisfied

```java
private void setSatisfied(int p_36536_)
```

**Parameters:**

- `p_36536_` (`int`)

**Returns:** `private void`

### getSatisfiedIndex

```java
private int getSatisfiedIndex(int p_36545_)
```

**Parameters:**

- `p_36545_` (`int`)

**Returns:** `private int`

### hasConnection

```java
private boolean hasConnection(boolean p_36519_, int p_36520_, int p_36521_)
```

**Parameters:**

- `p_36519_` (`boolean`)
- `p_36520_` (`int`)
- `p_36521_` (`int`)

**Returns:** `private boolean`

### hasResidual

```java
private boolean hasResidual(boolean p_36532_, int p_36533_, int p_36534_)
```

**Parameters:**

- `p_36532_` (`boolean`)
- `p_36533_` (`int`)
- `p_36534_` (`int`)

**Returns:** `private boolean`

### toggleResidual

```java
private void toggleResidual(boolean p_36541_, int p_36542_, int p_36543_)
```

**Parameters:**

- `p_36541_` (`boolean`)
- `p_36542_` (`int`)
- `p_36543_` (`int`)

**Returns:** `private void`

### getIndex

```java
private int getIndex(boolean p_36547_, int p_36548_, int p_36549_)
```

**Parameters:**

- `p_36547_` (`boolean`)
- `p_36548_` (`int`)
- `p_36549_` (`int`)

**Returns:** `private int`

### visit

```java
private void visit(boolean p_36516_, int p_36517_)
```

**Parameters:**

- `p_36516_` (`boolean`)
- `p_36517_` (`int`)

**Returns:** `private void`

### hasVisited

```java
private boolean hasVisited(boolean p_36529_, int p_36530_)
```

**Parameters:**

- `p_36529_` (`boolean`)
- `p_36530_` (`int`)

**Returns:** `private boolean`

### getVisitedIndex

```java
private int getVisitedIndex(boolean p_36538_, int p_36539_)
```

**Parameters:**

- `p_36538_` (`boolean`)
- `p_36539_` (`int`)

**Returns:** `private int`

### tryPickAll

```java
public int tryPickAll(int p_36526_, IntList p_36527_)
```

**Parameters:**

- `p_36526_` (`int`)
- `p_36527_` (`IntList`)

**Returns:** `public int`

### getMinIngredientCount

```java
private int getMinIngredientCount()
```

**Returns:** `private int`
