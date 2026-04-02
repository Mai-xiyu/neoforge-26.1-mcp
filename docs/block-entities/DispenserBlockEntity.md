# DispenserBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CONTAINER_SIZE` | `int` |  |

## Methods

### DispenserBlockEntity

```java
protected DispenserBlockEntity(BlockEntityType<?> p_155489_, BlockPos p_155490_, BlockState p_155491_)
```

**Parameters:**

- `p_155489_` (`BlockEntityType<?>`)
- `p_155490_` (`BlockPos`)
- `p_155491_` (`BlockState`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### DispenserBlockEntity

```java
public DispenserBlockEntity(BlockPos p_155493_, BlockState p_155494_)
```

**Parameters:**

- `p_155493_` (`BlockPos`)
- `p_155494_` (`BlockState`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### getRandomSlot

```java
public int getRandomSlot(RandomSource p_222762_)
```

**Parameters:**

- `p_222762_` (`RandomSource`)

**Returns:** `public int`

### insertItem

```java
public ItemStack insertItem(ItemStack p_347519_)
```

**Parameters:**

- `p_347519_` (`ItemStack`)

**Returns:** `public ItemStack`

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155496_, HolderLookup.Provider p_323868_)
```

**Parameters:**

- `p_155496_` (`CompoundTag`)
- `p_323868_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187498_, HolderLookup.Provider p_323791_)
```

**Parameters:**

- `p_187498_` (`CompoundTag`)
- `p_323791_` (`HolderLookup.Provider`)

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_59243_)
```

**Parameters:**

- `p_59243_` (`NonNullList<ItemStack>`)

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_59235_, Inventory p_59236_)
```

**Parameters:**

- `p_59235_` (`int`)
- `p_59236_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### DispenserMenu

```java
return new DispenserMenu()
```

**Returns:** `return new`
