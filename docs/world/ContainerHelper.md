# ContainerHelper

**Package:** `net.minecraft.world`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TAG_ITEMS` | `String` |  |

## Methods

### removeItem

```java
public static ItemStack removeItem(List<ItemStack> p_18970_, int p_18971_, int p_18972_)
```

**Parameters:**

- `p_18970_` (`List<ItemStack>`)
- `p_18971_` (`int`)
- `p_18972_` (`int`)

**Returns:** `public static ItemStack`

### takeItem

```java
public static ItemStack takeItem(List<ItemStack> p_18967_, int p_18968_)
```

**Parameters:**

- `p_18967_` (`List<ItemStack>`)
- `p_18968_` (`int`)

**Returns:** `public static ItemStack`

### saveAllItems

```java
public static CompoundTag saveAllItems(CompoundTag p_18974_, NonNullList<ItemStack> p_18975_, HolderLookup.Provider p_331375_)
```

**Parameters:**

- `p_18974_` (`CompoundTag`)
- `p_18975_` (`NonNullList<ItemStack>`)
- `p_331375_` (`HolderLookup.Provider`)

**Returns:** `public static CompoundTag`

### saveAllItems

```java
return saveAllItems()
```

**Returns:** `return`

### saveAllItems

```java
public static CompoundTag saveAllItems(CompoundTag p_18977_, NonNullList<ItemStack> p_18978_, boolean p_18979_, HolderLookup.Provider p_330957_)
```

**Parameters:**

- `p_18977_` (`CompoundTag`)
- `p_18978_` (`NonNullList<ItemStack>`)
- `p_18979_` (`boolean`)
- `p_330957_` (`HolderLookup.Provider`)

**Returns:** `public static CompoundTag`

### loadAllItems

```java
public static void loadAllItems(CompoundTag p_18981_, NonNullList<ItemStack> p_18982_, HolderLookup.Provider p_332027_)
```

**Parameters:**

- `p_18981_` (`CompoundTag`)
- `p_18982_` (`NonNullList<ItemStack>`)
- `p_332027_` (`HolderLookup.Provider`)

**Returns:** `public static void`

### clearOrCountMatchingItems

```java
public static int clearOrCountMatchingItems(Container p_18957_, Predicate<ItemStack> p_18958_, int p_18959_, boolean p_18960_)
```

**Parameters:**

- `p_18957_` (`Container`)
- `p_18958_` (`Predicate<ItemStack>`)
- `p_18959_` (`int`)
- `p_18960_` (`boolean`)

**Returns:** `public static int`

### clearOrCountMatchingItems

```java
public static int clearOrCountMatchingItems(ItemStack p_18962_, Predicate<ItemStack> p_18963_, int p_18964_, boolean p_18965_)
```

**Parameters:**

- `p_18962_` (`ItemStack`)
- `p_18963_` (`Predicate<ItemStack>`)
- `p_18964_` (`int`)
- `p_18965_` (`boolean`)

**Returns:** `public static int`
