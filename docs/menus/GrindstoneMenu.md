# GrindstoneMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_NAME_LENGTH` | `int` |  |
| `INPUT_SLOT` | `int` |  |
| `ADDITIONAL_SLOT` | `int` |  |
| `RESULT_SLOT` | `int` |  |

## Methods

### setChanged

```java
public void setChanged()
```

### GrindstoneMenu

```java
public GrindstoneMenu(int p_39563_, Inventory p_39564_)
```

**Parameters:**

- `p_39563_` (`int`)
- `p_39564_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### GrindstoneMenu

```java
public GrindstoneMenu(int p_39566_, Inventory p_39567_, ContainerLevelAccess p_39568_)
```

**Parameters:**

- `p_39566_` (`int`)
- `p_39567_` (`Inventory`)
- `p_39568_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPlace

```java
public boolean mayPlace(ItemStack p_39607_)
```

**Parameters:**

- `p_39607_` (`ItemStack`)

**Returns:** `boolean`

### mayPlace

```java
public boolean mayPlace(ItemStack p_39616_)
```

**Parameters:**

- `p_39616_` (`ItemStack`)

**Returns:** `boolean`

### mayPlace

```java
public boolean mayPlace(ItemStack p_39630_)
```

**Parameters:**

- `p_39630_` (`ItemStack`)

**Returns:** `boolean`

### onTake

```java
public void onTake(Player p_150574_, ItemStack p_150575_)
```

**Parameters:**

- `p_150574_` (`Player`)
- `p_150575_` (`ItemStack`)

### getExperienceAmount

```java
private int getExperienceAmount(Level p_39632_)
```

**Parameters:**

- `p_39632_` (`Level`)

**Returns:** `private int`

### getExperienceFromItem

```java
private int getExperienceFromItem(ItemStack p_39637_)
```

**Parameters:**

- `p_39637_` (`ItemStack`)

**Returns:** `private int`

### slotsChanged

```java
public void slotsChanged(Container p_39570_)
```

**Parameters:**

- `p_39570_` (`Container`)

### createResult

```java
private void createResult()
```

**Returns:** `private void`

### computeResult

```java
private ItemStack computeResult(ItemStack p_332654_, ItemStack p_332736_)
```

**Parameters:**

- `p_332654_` (`ItemStack`)
- `p_332736_` (`ItemStack`)

**Returns:** `private ItemStack`

### mergeItems

```java
private ItemStack mergeItems(ItemStack p_332723_, ItemStack p_332686_)
```

**Parameters:**

- `p_332723_` (`ItemStack`)
- `p_332686_` (`ItemStack`)

**Returns:** `private ItemStack`

### mergeEnchantsFrom

```java
private void mergeEnchantsFrom(ItemStack p_332680_, ItemStack p_332800_)
```

**Parameters:**

- `p_332680_` (`ItemStack`)
- `p_332800_` (`ItemStack`)

**Returns:** `private void`

### removeNonCursesFrom

```java
private ItemStack removeNonCursesFrom(ItemStack p_332709_)
```

**Parameters:**

- `p_332709_` (`ItemStack`)

**Returns:** `private ItemStack`

### removed

```java
public void removed(Player p_39586_)
```

**Parameters:**

- `p_39586_` (`Player`)

### stillValid

```java
public boolean stillValid(Player p_39572_)
```

**Parameters:**

- `p_39572_` (`Player`)

**Returns:** `boolean`

### stillValid

```java
return stillValid()
```

**Returns:** `return`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_39588_, int p_39589_)
```

**Parameters:**

- `p_39588_` (`Player`)
- `p_39589_` (`int`)

**Returns:** `ItemStack`
