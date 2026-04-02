# AnvilMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `ItemCombinerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INPUT_SLOT` | `int` |  |
| `ADDITIONAL_SLOT` | `int` |  |
| `RESULT_SLOT` | `int` |  |
| `MAX_NAME_LENGTH` | `int` |  |
| `repairItemCountCost` | `int` |  |

## Methods

### AnvilMenu

```java
public AnvilMenu(int p_39005_, Inventory p_39006_)
```

**Parameters:**

- `p_39005_` (`int`)
- `p_39006_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### AnvilMenu

```java
public AnvilMenu(int p_39008_, Inventory p_39009_, ContainerLevelAccess p_39010_)
```

**Parameters:**

- `p_39008_` (`int`)
- `p_39009_` (`Inventory`)
- `p_39010_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createInputSlotDefinitions

```java
protected ItemCombinerMenuSlotDefinition createInputSlotDefinitions()
```

**Returns:** `ItemCombinerMenuSlotDefinition`

### isValidBlock

```java
protected boolean isValidBlock(BlockState p_39019_)
```

**Parameters:**

- `p_39019_` (`BlockState`)

**Returns:** `boolean`

### mayPickup

```java
protected boolean mayPickup(Player p_39023_, boolean p_39024_)
```

**Parameters:**

- `p_39023_` (`Player`)
- `p_39024_` (`boolean`)

**Returns:** `boolean`

### onTake

```java
protected void onTake(Player p_150474_, ItemStack p_150475_)
```

**Parameters:**

- `p_150474_` (`Player`)
- `p_150475_` (`ItemStack`)

### createResult

```java
public void createResult()
```

### calculateIncreasedRepairCost

```java
public static int calculateIncreasedRepairCost(int p_39026_)
```

**Parameters:**

- `p_39026_` (`int`)

**Returns:** `public static int`

### setItemName

```java
public boolean setItemName(String p_288970_)
```

**Parameters:**

- `p_288970_` (`String`)

**Returns:** `public boolean`

### getCost

```java
public int getCost()
```

**Returns:** `public int`

### setMaximumCost

```java
public void setMaximumCost(long value)
```

**Parameters:**

- `value` (`long`)
