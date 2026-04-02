# ChestBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `RandomizableContainerBlockEntity`
**Implements:** `LidBlockEntity`

## Methods

### onOpen

```java
protected void onOpen(Level p_155357_, BlockPos p_155358_, BlockState p_155359_)
```

**Parameters:**

- `p_155357_` (`Level`)
- `p_155358_` (`BlockPos`)
- `p_155359_` (`BlockState`)

### onClose

```java
protected void onClose(Level p_155367_, BlockPos p_155368_, BlockState p_155369_)
```

**Parameters:**

- `p_155367_` (`Level`)
- `p_155368_` (`BlockPos`)
- `p_155369_` (`BlockState`)

### openerCountChanged

```java
protected void openerCountChanged(Level p_155361_, BlockPos p_155362_, BlockState p_155363_, int p_155364_, int p_155365_)
```

**Parameters:**

- `p_155361_` (`Level`)
- `p_155362_` (`BlockPos`)
- `p_155363_` (`BlockState`)
- `p_155364_` (`int`)
- `p_155365_` (`int`)

### isOwnContainer

```java
protected boolean isOwnContainer(Player p_155355_)
```

**Parameters:**

- `p_155355_` (`Player`)

**Returns:** `boolean`

### ChestBlockEntity

```java
protected ChestBlockEntity(BlockEntityType<?> p_155327_, BlockPos p_155328_, BlockState p_155329_)
```

**Parameters:**

- `p_155327_` (`BlockEntityType<?>`)
- `p_155328_` (`BlockPos`)
- `p_155329_` (`BlockState`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### ChestBlockEntity

```java
public ChestBlockEntity(BlockPos p_155331_, BlockState p_155332_)
```

**Parameters:**

- `p_155331_` (`BlockPos`)
- `p_155332_` (`BlockState`)

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

### getDefaultName

```java
protected Component getDefaultName()
```

**Returns:** `Component`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155349_, HolderLookup.Provider p_324564_)
```

**Parameters:**

- `p_155349_` (`CompoundTag`)
- `p_324564_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187489_, HolderLookup.Provider p_324448_)
```

**Parameters:**

- `p_187489_` (`CompoundTag`)
- `p_324448_` (`HolderLookup.Provider`)

### lidAnimateTick

```java
public static void lidAnimateTick(Level p_155344_, BlockPos p_155345_, BlockState p_155346_, ChestBlockEntity p_155347_)
```

**Parameters:**

- `p_155344_` (`Level`)
- `p_155345_` (`BlockPos`)
- `p_155346_` (`BlockState`)
- `p_155347_` (`ChestBlockEntity`)

**Returns:** `public static void`

### playSound

```java
static void playSound(Level p_155339_, BlockPos p_155340_, BlockState p_155341_, SoundEvent p_155342_)
```

**Parameters:**

- `p_155339_` (`Level`)
- `p_155340_` (`BlockPos`)
- `p_155341_` (`BlockState`)
- `p_155342_` (`SoundEvent`)

**Returns:** `static void`

### triggerEvent

```java
public boolean triggerEvent(int p_59114_, int p_59115_)
```

**Parameters:**

- `p_59114_` (`int`)
- `p_59115_` (`int`)

**Returns:** `boolean`

### startOpen

```java
public void startOpen(Player p_59120_)
```

**Parameters:**

- `p_59120_` (`Player`)

### stopOpen

```java
public void stopOpen(Player p_59118_)
```

**Parameters:**

- `p_59118_` (`Player`)

### getItems

```java
protected NonNullList<ItemStack> getItems()
```

**Returns:** `NonNullList<ItemStack>`

### setItems

```java
protected void setItems(NonNullList<ItemStack> p_59110_)
```

**Parameters:**

- `p_59110_` (`NonNullList<ItemStack>`)

### getOpenNess

```java
public float getOpenNess(float p_59080_)
```

**Parameters:**

- `p_59080_` (`float`)

**Returns:** `float`

### getOpenCount

```java
public static int getOpenCount(BlockGetter p_59087_, BlockPos p_59088_)
```

**Parameters:**

- `p_59087_` (`BlockGetter`)
- `p_59088_` (`BlockPos`)

**Returns:** `public static int`

### swapContents

```java
public static void swapContents(ChestBlockEntity p_59104_, ChestBlockEntity p_59105_)
```

**Parameters:**

- `p_59104_` (`ChestBlockEntity`)
- `p_59105_` (`ChestBlockEntity`)

**Returns:** `public static void`

### createMenu

```java
protected AbstractContainerMenu createMenu(int p_59082_, Inventory p_59083_)
```

**Parameters:**

- `p_59082_` (`int`)
- `p_59083_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### setBlockState

```java
public void setBlockState(BlockState p_155251_)
```

**Parameters:**

- `p_155251_` (`BlockState`)

### recheckOpen

```java
public void recheckOpen()
```

**Returns:** `public void`

### signalOpenCount

```java
protected void signalOpenCount(Level p_155333_, BlockPos p_155334_, BlockState p_155335_, int p_155336_, int p_155337_)
```

**Parameters:**

- `p_155333_` (`Level`)
- `p_155334_` (`BlockPos`)
- `p_155335_` (`BlockState`)
- `p_155336_` (`int`)
- `p_155337_` (`int`)

**Returns:** `protected void`
