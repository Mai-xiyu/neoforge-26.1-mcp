# ChiseledBookShelfBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Container`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_BOOKS_IN_STORAGE` | `int` |  |

## Methods

### ChiseledBookShelfBlockEntity

```java
public ChiseledBookShelfBlockEntity(BlockPos p_249541_, BlockState p_251752_)
```

**Parameters:**

- `p_249541_` (`BlockPos`)
- `p_251752_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateState

```java
private void updateState(int p_261806_)
```

**Parameters:**

- `p_261806_` (`int`)

**Returns:** `private void`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338883_, HolderLookup.Provider p_338454_)
```

**Parameters:**

- `p_338883_` (`CompoundTag`)
- `p_338454_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_251872_, HolderLookup.Provider p_323649_)
```

**Parameters:**

- `p_251872_` (`CompoundTag`)
- `p_323649_` (`HolderLookup.Provider`)

### count

```java
public int count()
```

**Returns:** `public int`

### clearContent

```java
public void clearContent()
```

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
public ItemStack getItem(int p_256203_)
```

**Parameters:**

- `p_256203_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_255828_, int p_255673_)
```

**Parameters:**

- `p_255828_` (`int`)
- `p_255673_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_255874_)
```

**Parameters:**

- `p_255874_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_256610_, ItemStack p_255789_)
```

**Parameters:**

- `p_256610_` (`int`)
- `p_255789_` (`ItemStack`)

### canTakeItem

```java
public boolean canTakeItem(Container p_282172_, int p_281387_, ItemStack p_283257_)
```

**Parameters:**

- `p_282172_` (`Container`)
- `p_281387_` (`int`)
- `p_283257_` (`ItemStack`)

**Returns:** `boolean`

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### stillValid

```java
public boolean stillValid(Player p_256481_)
```

**Parameters:**

- `p_256481_` (`Player`)

**Returns:** `boolean`

### canPlaceItem

```java
public boolean canPlaceItem(int p_256567_, ItemStack p_255922_)
```

**Parameters:**

- `p_256567_` (`int`)
- `p_255922_` (`ItemStack`)

**Returns:** `boolean`

### getLastInteractedSlot

```java
public int getLastInteractedSlot()
```

**Returns:** `public int`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338565_)
```

**Parameters:**

- `p_338565_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338540_)
```

**Parameters:**

- `p_338540_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_332725_)
```

**Parameters:**

- `p_332725_` (`CompoundTag`)
