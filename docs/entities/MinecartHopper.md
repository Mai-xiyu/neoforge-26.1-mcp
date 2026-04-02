# MinecartHopper

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `AbstractMinecartContainer`
**Implements:** `Hopper`

## Methods

### MinecartHopper

```java
public MinecartHopper(EntityType<? extends MinecartHopper> p_38584_, Level p_38585_)
```

**Parameters:**

- `p_38584_` (`EntityType<? extends MinecartHopper>`)
- `p_38585_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MinecartHopper

```java
public MinecartHopper(Level p_38587_, double p_38588_, double p_38589_, double p_38590_)
```

**Parameters:**

- `p_38587_` (`Level`)
- `p_38588_` (`double`)
- `p_38589_` (`double`)
- `p_38590_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getMinecartType

```java
public AbstractMinecart.Type getMinecartType()
```

**Returns:** `AbstractMinecart.Type`

### getDefaultDisplayBlockState

```java
public BlockState getDefaultDisplayBlockState()
```

**Returns:** `BlockState`

### getDefaultDisplayOffset

```java
public int getDefaultDisplayOffset()
```

**Returns:** `int`

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### activateMinecart

```java
public void activateMinecart(int p_38596_, int p_38597_, int p_38598_, boolean p_38599_)
```

**Parameters:**

- `p_38596_` (`int`)
- `p_38597_` (`int`)
- `p_38598_` (`int`)
- `p_38599_` (`boolean`)

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `public boolean`

### setEnabled

```java
public void setEnabled(boolean p_38614_)
```

**Parameters:**

- `p_38614_` (`boolean`)

**Returns:** `public void`

### getLevelX

```java
public double getLevelX()
```

**Returns:** `double`

### getLevelY

```java
public double getLevelY()
```

**Returns:** `double`

### getLevelZ

```java
public double getLevelZ()
```

**Returns:** `double`

### isGridAligned

```java
public boolean isGridAligned()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### suckInItems

```java
public boolean suckInItems()
```

**Returns:** `public boolean`

### getDropItem

```java
protected Item getDropItem()
```

**Returns:** `Item`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38608_)
```

**Parameters:**

- `p_38608_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38606_)
```

**Parameters:**

- `p_38606_` (`CompoundTag`)

### createMenu

```java
public AbstractContainerMenu createMenu(int p_38601_, Inventory p_38602_)
```

**Parameters:**

- `p_38601_` (`int`)
- `p_38602_` (`Inventory`)

**Returns:** `AbstractContainerMenu`

### HopperMenu

```java
return new HopperMenu()
```

**Returns:** `return new`
