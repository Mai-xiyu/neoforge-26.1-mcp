# EnchantingTableBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Nameable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `time` | `int` |  |
| `flip` | `float` |  |
| `oFlip` | `float` |  |
| `flipT` | `float` |  |
| `flipA` | `float` |  |
| `open` | `float` |  |
| `oOpen` | `float` |  |
| `rot` | `float` |  |
| `oRot` | `float` |  |
| `tRot` | `float` |  |

## Methods

### EnchantingTableBlockEntity

```java
public EnchantingTableBlockEntity(BlockPos p_340972_, BlockState p_340871_)
```

**Parameters:**

- `p_340972_` (`BlockPos`)
- `p_340871_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_341088_, HolderLookup.Provider p_341376_)
```

**Parameters:**

- `p_341088_` (`CompoundTag`)
- `p_341376_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_341199_, HolderLookup.Provider p_341063_)
```

**Parameters:**

- `p_341199_` (`CompoundTag`)
- `p_341063_` (`HolderLookup.Provider`)

### bookAnimationTick

```java
public static void bookAnimationTick(Level p_341315_, BlockPos p_341271_, BlockState p_341158_, EnchantingTableBlockEntity p_341066_)
```

**Parameters:**

- `p_341315_` (`Level`)
- `p_341271_` (`BlockPos`)
- `p_341158_` (`BlockState`)
- `p_341066_` (`EnchantingTableBlockEntity`)

**Returns:** `public static void`

### getName

```java
public Component getName()
```

**Returns:** `Component`

### setCustomName

```java
public void setCustomName(Component p_341274_)
```

**Parameters:**

- `p_341274_` (`Component`)

**Returns:** `public void`

### getCustomName

```java
public Component getCustomName()
```

**Returns:** `Component`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_341179_)
```

**Parameters:**

- `p_341179_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_340897_)
```

**Parameters:**

- `p_340897_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_341218_)
```

**Parameters:**

- `p_341218_` (`CompoundTag`)
