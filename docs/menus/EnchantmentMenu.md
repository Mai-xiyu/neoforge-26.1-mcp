# EnchantmentMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `costs` | `int[]` |  |
| `enchantClue` | `int[]` |  |
| `levelClue` | `int[]` |  |

## Methods

### setChanged

```java
public void setChanged()
```

### EnchantmentMenu

```java
public EnchantmentMenu(int p_39454_, Inventory p_39455_)
```

**Parameters:**

- `p_39454_` (`int`)
- `p_39455_` (`Inventory`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EnchantmentMenu

```java
public EnchantmentMenu(int p_39457_, Inventory p_39458_, ContainerLevelAccess p_39459_)
```

**Parameters:**

- `p_39457_` (`int`)
- `p_39458_` (`Inventory`)
- `p_39459_` (`ContainerLevelAccess`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### mayPlace

```java
public boolean mayPlace(ItemStack p_39517_)
```

**Parameters:**

- `p_39517_` (`ItemStack`)

**Returns:** `boolean`

### getNoItemIcon

```java
public Pair<ResourceLocation, ResourceLocation> getNoItemIcon()
```

**Returns:** `Pair<ResourceLocation, ResourceLocation>`

### slotsChanged

```java
public void slotsChanged(Container p_39461_)
```

**Parameters:**

- `p_39461_` (`Container`)

### clickMenuButton

```java
public boolean clickMenuButton(Player p_39465_, int p_39466_)
```

**Parameters:**

- `p_39465_` (`Player`)
- `p_39466_` (`int`)

**Returns:** `boolean`

### getEnchantmentList

```java
private List<EnchantmentInstance> getEnchantmentList(RegistryAccess p_345264_, ItemStack p_39472_, int p_39473_, int p_39474_)
```

**Parameters:**

- `p_345264_` (`RegistryAccess`)
- `p_39472_` (`ItemStack`)
- `p_39473_` (`int`)
- `p_39474_` (`int`)

**Returns:** `private List<EnchantmentInstance>`

### getGoldCount

```java
public int getGoldCount()
```

**Returns:** `public int`

### getEnchantmentSeed

```java
public int getEnchantmentSeed()
```

**Returns:** `public int`

### removed

```java
public void removed(Player p_39488_)
```

**Parameters:**

- `p_39488_` (`Player`)

### stillValid

```java
public boolean stillValid(Player p_39463_)
```

**Parameters:**

- `p_39463_` (`Player`)

**Returns:** `boolean`

### stillValid

```java
return stillValid()
```

**Returns:** `return`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_39490_, int p_39491_)
```

**Parameters:**

- `p_39490_` (`Player`)
- `p_39491_` (`int`)

**Returns:** `ItemStack`
