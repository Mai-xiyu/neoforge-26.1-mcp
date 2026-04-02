# BarrelBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`

## Methods

### onOpen

```java
protected void onOpen(Level p_155062_, BlockPos p_155063_, BlockState p_155064_)
```

**Parameters:**

- `p_155062_` (`Level`)
- `p_155063_` (`BlockPos`)
- `p_155064_` (`BlockState`)

### onClose

```java
protected void onClose(Level p_155072_, BlockPos p_155073_, BlockState p_155074_)
```

**Parameters:**

- `p_155072_` (`Level`)
- `p_155073_` (`BlockPos`)
- `p_155074_` (`BlockState`)

### openerCountChanged

```java
protected void openerCountChanged(Level p_155066_, BlockPos p_155067_, BlockState p_155068_, int p_155069_, int p_155070_)
```

**Parameters:**

- `p_155066_` (`Level`)
- `p_155067_` (`BlockPos`)
- `p_155068_` (`BlockState`)
- `p_155069_` (`int`)
- `p_155070_` (`int`)

### isOwnContainer

```java
protected boolean isOwnContainer(Player p_155060_)
```

**Parameters:**

- `p_155060_` (`Player`)

**Returns:** `boolean`

### BarrelBlockEntity

```java
public BarrelBlockEntity(BlockPos p_155052_, BlockState p_155053_)
```

**Parameters:**

- `p_155052_` (`BlockPos`)
- `p_155053_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187459_, HolderLookup.Provider p_323686_)
```

**Parameters:**

- `p_187459_` (`CompoundTag`)
- `p_323686_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155055_, HolderLookup.Provider p_324230_)
```

**Parameters:**

- `p_155055_` (`CompoundTag`)
- `p_324230_` (`HolderLookup.Provider`)

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_58610_)
```

**Parameters:**

- `p_58610_` (`NonNullList<ItemStack>`)

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_58598_, Inventory p_58599_)
```

**Parameters:**

- `p_58598_` (`int`)
- `p_58599_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### startOpen

```java
public void startOpen(Player p_58616_)
```

**Parameters:**

- `p_58616_` (`Player`)

### stopOpen

```java
public void stopOpen(Player p_58614_)
```

**Parameters:**

- `p_58614_` (`Player`)

### recheckOpen

```java
public void recheckOpen()
```

**Returns:** `public void`

### updateBlockState

```java
void updateBlockState(BlockState p_58607_, boolean p_58608_)
```

**Parameters:**

- `p_58607_` (`BlockState`)
- `p_58608_` (`boolean`)

### playSound

```java
void playSound(BlockState p_58601_, SoundEvent p_58602_)
```

**Parameters:**

- `p_58601_` (`BlockState`)
- `p_58602_` (`SoundEvent`)
