# CrafterMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`
**Implements:** `ContainerListener`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SLOT_COUNT` | `int` |  |

## Methods

### CrafterMenu

```java
public CrafterMenu(int p_307357_, Inventory p_307257_)
```

**Parameters:**

- `p_307357_` (`int`)
- `p_307257_` (`Inventory`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### CrafterMenu

```java
public CrafterMenu(int p_307363_, Inventory p_307517_, CraftingContainer p_307449_, ContainerData p_307285_)
```

**Parameters:**

- `p_307363_` (`int`)
- `p_307517_` (`Inventory`)
- `p_307449_` (`CraftingContainer`)
- `p_307285_` (`ContainerData`)

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

### addSlots

```java
private void addSlots(Inventory p_307214_)
```

**Parameters:**

- `p_307214_` (`Inventory`)

**Returns:** `private void`

### setSlotState

```java
public void setSlotState(int p_307384_, boolean p_307499_)
```

**Parameters:**

- `p_307384_` (`int`)
- `p_307499_` (`boolean`)

**Returns:** `public void`

### isSlotDisabled

```java
public boolean isSlotDisabled(int p_307609_)
```

**Parameters:**

- `p_307609_` (`int`)

**Returns:** `public boolean`

### isPowered

```java
public boolean isPowered()
```

**Returns:** `public boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_307459_, int p_307204_)
```

**Parameters:**

- `p_307459_` (`Player`)
- `p_307204_` (`int`)

**Returns:** `ItemStack`

### stillValid

```java
public boolean stillValid(Player p_307229_)
```

**Parameters:**

- `p_307229_` (`Player`)

**Returns:** `boolean`

### refreshRecipeResult

```java
private void refreshRecipeResult()
```

**Returns:** `private void`

### getContainer

```java
public Container getContainer()
```

**Returns:** `public Container`

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_307332_, int p_307437_, ItemStack p_307233_)
```

**Parameters:**

- `p_307332_` (`AbstractContainerMenu`)
- `p_307437_` (`int`)
- `p_307233_` (`ItemStack`)

### dataChanged

```java
public void dataChanged(AbstractContainerMenu p_307424_, int p_307646_, int p_307221_)
```

**Parameters:**

- `p_307424_` (`AbstractContainerMenu`)
- `p_307646_` (`int`)
- `p_307221_` (`int`)
