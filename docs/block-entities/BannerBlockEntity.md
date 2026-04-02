# BannerBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Nameable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_PATTERNS` | `int` |  |

## Methods

### BannerBlockEntity

```java
public BannerBlockEntity(BlockPos p_155035_, BlockState p_155036_)
```

**Parameters:**

- `p_155035_` (`BlockPos`)
- `p_155036_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### BannerBlockEntity

```java
public BannerBlockEntity(BlockPos p_155038_, BlockState p_155039_, DyeColor p_155040_)
```

**Parameters:**

- `p_155038_` (`BlockPos`)
- `p_155039_` (`BlockState`)
- `p_155040_` (`DyeColor`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### fromItem

```java
public void fromItem(ItemStack p_58490_, DyeColor p_58491_)
```

**Parameters:**

- `p_58490_` (`ItemStack`)
- `p_58491_` (`DyeColor`)

**Returns:** `public void`

### getName

```java
public Component getName()
```

**Returns:** `Component`

### getCustomName

```java
public Component getCustomName()
```

**Returns:** `Component`

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187456_, HolderLookup.Provider p_324143_)
```

**Parameters:**

- `p_187456_` (`CompoundTag`)
- `p_324143_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338645_, HolderLookup.Provider p_338247_)
```

**Parameters:**

- `p_338645_` (`CompoundTag`)
- `p_338247_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324478_)
```

**Parameters:**

- `p_324478_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getPatterns

```java
public BannerPatternLayers getPatterns()
```

**Returns:** `public BannerPatternLayers`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

### getBaseColor

```java
public DyeColor getBaseColor()
```

**Returns:** `public DyeColor`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338244_)
```

**Parameters:**

- `p_338244_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338762_)
```

**Parameters:**

- `p_338762_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_331690_)
```

**Parameters:**

- `p_331690_` (`CompoundTag`)
