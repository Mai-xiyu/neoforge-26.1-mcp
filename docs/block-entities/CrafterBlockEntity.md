# CrafterBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`
**Implements:** `CraftingContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CONTAINER_WIDTH` | `int` |  |
| `CONTAINER_HEIGHT` | `int` |  |
| `CONTAINER_SIZE` | `int` |  |
| `SLOT_DISABLED` | `int` |  |
| `SLOT_ENABLED` | `int` |  |
| `DATA_TRIGGERED` | `int` |  |
| `NUM_DATA` | `int` |  |
| `containerData` | `ContainerData` |  |

## Methods

### get

```java
public int get(int p_307671_)
```

**Parameters:**

- `p_307671_` (`int`)

**Returns:** `int`

### set

```java
public void set(int p_307241_, int p_307484_)
```

**Parameters:**

- `p_307241_` (`int`)
- `p_307484_` (`int`)

### getCount

```java
public int getCount()
```

**Returns:** `int`

### CrafterBlockEntity

```java
public CrafterBlockEntity(BlockPos p_307502_, BlockState p_307485_)
```

**Parameters:**

- `p_307502_` (`BlockPos`)
- `p_307485_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_307441_, Inventory p_307664_)
```

**Parameters:**

- `p_307441_` (`int`)
- `p_307664_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### CrafterMenu

```java
return new CrafterMenu()
```

**Returns:** `return new`

### setSlotState

```java
public void setSlotState(int p_307571_, boolean p_307624_)
```

**Parameters:**

- `p_307571_` (`int`)
- `p_307624_` (`boolean`)

**Returns:** `public void`

### isSlotDisabled

```java
public boolean isSlotDisabled(int p_307461_)
```

**Parameters:**

- `p_307461_` (`int`)

**Returns:** `public boolean`

### canPlaceItem

```java
public boolean canPlaceItem(int p_307543_, ItemStack p_307267_)
```

**Parameters:**

- `p_307543_` (`int`)
- `p_307267_` (`ItemStack`)

**Returns:** `boolean`

### smallerStackExist

```java
private boolean smallerStackExist(int p_307396_, ItemStack p_307520_, int p_307348_)
```

**Parameters:**

- `p_307396_` (`int`)
- `p_307520_` (`ItemStack`)
- `p_307348_` (`int`)

**Returns:** `private boolean`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_307457_, HolderLookup.Provider p_324538_)
```

**Parameters:**

- `p_307457_` (`CompoundTag`)
- `p_324538_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_307531_, HolderLookup.Provider p_324381_)
```

**Parameters:**

- `p_307531_` (`CompoundTag`)
- `p_324381_` (`HolderLookup.Provider`)

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

### getItem

```java
public ItemStack getItem(int p_307189_)
```

**Parameters:**

- `p_307189_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_307195_, ItemStack p_307232_)
```

**Parameters:**

- `p_307195_` (`int`)
- `p_307232_` (`ItemStack`)

### stillValid

```java
public boolean stillValid(Player p_307443_)
```

**Parameters:**

- `p_307443_` (`Player`)

**Returns:** `boolean`

### getItems

```java
public NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_307392_)
```

**Parameters:**

- `p_307392_` (`NonNullList<ItemStack>`)

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### fillStackedContents

```java
public void fillStackedContents(StackedContents p_307380_)
```

**Parameters:**

- `p_307380_` (`StackedContents`)

### addDisabledSlots

```java
private void addDisabledSlots(CompoundTag p_307523_)
```

**Parameters:**

- `p_307523_` (`CompoundTag`)

**Returns:** `private void`

### addTriggered

```java
private void addTriggered(CompoundTag p_307675_)
```

**Parameters:**

- `p_307675_` (`CompoundTag`)

**Returns:** `private void`

### setTriggered

```java
public void setTriggered(boolean p_307366_)
```

**Parameters:**

- `p_307366_` (`boolean`)

**Returns:** `public void`

### isTriggered

```java
public boolean isTriggered()
```

**Returns:** `boolean`

### serverTick

```java
public static void serverTick(Level p_307316_, BlockPos p_307463_, BlockState p_307350_, CrafterBlockEntity p_307265_)
```

**Parameters:**

- `p_307316_` (`Level`)
- `p_307463_` (`BlockPos`)
- `p_307350_` (`BlockState`)
- `p_307265_` (`CrafterBlockEntity`)

**Returns:** `public static void`

### setCraftingTicksRemaining

```java
public void setCraftingTicksRemaining(int p_307276_)
```

**Parameters:**

- `p_307276_` (`int`)

**Returns:** `public void`

### getRedstoneSignal

```java
public int getRedstoneSignal()
```

**Returns:** `public int`

### slotCanBeDisabled

```java
private boolean slotCanBeDisabled(int p_307658_)
```

**Parameters:**

- `p_307658_` (`int`)

**Returns:** `private boolean`
