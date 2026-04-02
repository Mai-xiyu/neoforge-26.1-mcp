# LecternBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Clearable`, `MenuProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DATA_PAGE` | `int` |  |
| `NUM_DATA` | `int` |  |
| `SLOT_BOOK` | `int` |  |
| `NUM_SLOTS` | `int` |  |

## Methods

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
public ItemStack getItem(int p_59580_)
```

**Parameters:**

- `p_59580_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_59582_, int p_59583_)
```

**Parameters:**

- `p_59582_` (`int`)
- `p_59583_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_59590_)
```

**Parameters:**

- `p_59590_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_59585_, ItemStack p_59586_)
```

**Parameters:**

- `p_59585_` (`int`)
- `p_59586_` (`ItemStack`)

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_59588_)
```

**Parameters:**

- `p_59588_` (`Player`)

**Returns:** `boolean`

### canPlaceItem

```java
public boolean canPlaceItem(int p_59592_, ItemStack p_59593_)
```

**Parameters:**

- `p_59592_` (`int`)
- `p_59593_` (`ItemStack`)

**Returns:** `boolean`

### clearContent

```java
public void clearContent()
```

### get

```java
public int get(int p_59600_)
```

**Parameters:**

- `p_59600_` (`int`)

**Returns:** `int`

### set

```java
public void set(int p_59602_, int p_59603_)
```

**Parameters:**

- `p_59602_` (`int`)
- `p_59603_` (`int`)

### getCount

```java
public int getCount()
```

**Returns:** `int`

### LecternBlockEntity

```java
public LecternBlockEntity(BlockPos p_155622_, BlockState p_155623_)
```

**Parameters:**

- `p_155622_` (`BlockPos`)
- `p_155623_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBook

```java
public ItemStack getBook()
```

**Returns:** `public ItemStack`

### hasBook

```java
public boolean hasBook()
```

**Returns:** `public boolean`

### setBook

```java
public void setBook(ItemStack p_59537_)
```

**Parameters:**

- `p_59537_` (`ItemStack`)

**Returns:** `public void`

### onBookItemRemove

```java
void onBookItemRemove()
```

### setBook

```java
public void setBook(ItemStack p_59539_, Player p_59540_)
```

**Parameters:**

- `p_59539_` (`ItemStack`)
- `p_59540_` (`Player`)

**Returns:** `public void`

### setPage

```java
void setPage(int p_59533_)
```

**Parameters:**

- `p_59533_` (`int`)

### getPage

```java
public int getPage()
```

**Returns:** `public int`

### getRedstoneSignal

```java
public int getRedstoneSignal()
```

**Returns:** `public int`

### resolveBook

```java
private ItemStack resolveBook(ItemStack p_59555_, Player p_59556_)
```

**Parameters:**

- `p_59555_` (`ItemStack`)
- `p_59556_` (`Player`)

**Returns:** `private ItemStack`

### createCommandSourceStack

```java
private CommandSourceStack createCommandSourceStack(Player p_59535_)
```

**Parameters:**

- `p_59535_` (`Player`)

**Returns:** `private CommandSourceStack`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155625_, HolderLookup.Provider p_324025_)
```

**Parameters:**

- `p_155625_` (`CompoundTag`)
- `p_324025_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187509_, HolderLookup.Provider p_323474_)
```

**Parameters:**

- `p_187509_` (`CompoundTag`)
- `p_323474_` (`HolderLookup.Provider`)

### clearContent

```java
public void clearContent()
```

### createMenu

```java
public AbstractContainerMenu createMenu(int p_59562_, Inventory p_59563_, Player p_59564_)
```

**Parameters:**

- `p_59562_` (`int`)
- `p_59563_` (`Inventory`)
- `p_59564_` (`Player`)

**Returns:** `AbstractContainerMenu`

### LecternMenu

```java
return new LecternMenu()
```

**Returns:** `return new`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `Component`

### getPageCount

```java
private static int getPageCount(ItemStack p_331229_)
```

**Parameters:**

- `p_331229_` (`ItemStack`)

**Returns:** `private static int`
