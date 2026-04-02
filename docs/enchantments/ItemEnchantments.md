# ItemEnchantments

**Package:** `net.minecraft.world.item.enchantment`
**Type:** class
**Implements:** `TooltipProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `ItemEnchantments` |  |
| `CODEC` | `Codec<ItemEnchantments>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ItemEnchantments>` |  |

## Methods

### ItemEnchantments

```java
 ItemEnchantments(Object2IntOpenHashMap<Holder<Enchantment>> p_341287_, boolean p_330219_)
```

**Parameters:**

- `p_341287_` (`Object2IntOpenHashMap<Holder<Enchantment>>`)
- `p_330219_` (`boolean`)

**Returns:** ``

### getLevel

```java
public int getLevel(Holder<Enchantment> p_345693_)
```

**Parameters:**

- `p_345693_` (`Holder<Enchantment>`)

**Returns:** `public int`

### addToTooltip

```java
public void addToTooltip(Item.TooltipContext p_341290_, Consumer<Component> p_331119_, TooltipFlag p_330400_)
```

**Parameters:**

- `p_341290_` (`Item.TooltipContext`)
- `p_331119_` (`Consumer<Component>`)
- `p_330400_` (`TooltipFlag`)

### getTagOrEmpty

```java
<T> private static <T> HolderSet<T> getTagOrEmpty(HolderLookup.Provider p_341186_, ResourceKey<Registry<T>> p_341113_, TagKey<T> p_341409_)
```

**Parameters:**

- `p_341186_` (`HolderLookup.Provider`)
- `p_341113_` (`ResourceKey<Registry<T>>`)
- `p_341409_` (`TagKey<T>`)

**Returns:** `private static <T> HolderSet<T>`

### withTooltip

```java
public ItemEnchantments withTooltip(boolean p_335616_)
```

**Parameters:**

- `p_335616_` (`boolean`)

**Returns:** `public ItemEnchantments`

### ItemEnchantments

```java
return new ItemEnchantments()
```

**Returns:** `return new`

### keySet

```java
public Set<Holder<Enchantment>> keySet()
```

**Returns:** `public Set<Holder<Enchantment>>`

### entrySet

```java
public Set<Entry<Holder<Enchantment>>> entrySet()
```

**Returns:** `public Set<Entry<Holder<Enchantment>>>`

### size

```java
public int size()
```

**Returns:** `public int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### equals

```java
public boolean equals(Object p_331697_)
```

**Parameters:**

- `p_331697_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### Mutable

```java
public Mutable(ItemEnchantments p_330722_)
```

**Parameters:**

- `p_330722_` (`ItemEnchantments`)

**Returns:** `public`

### set

```java
public void set(Holder<Enchantment> p_344861_, int p_330832_)
```

**Parameters:**

- `p_344861_` (`Holder<Enchantment>`)
- `p_330832_` (`int`)

**Returns:** `public void`

### upgrade

```java
public void upgrade(Holder<Enchantment> p_346263_, int p_331153_)
```

**Parameters:**

- `p_346263_` (`Holder<Enchantment>`)
- `p_331153_` (`int`)

**Returns:** `public void`

### removeIf

```java
public void removeIf(Predicate<Holder<Enchantment>> p_332079_)
```

**Parameters:**

- `p_332079_` (`Predicate<Holder<Enchantment>>`)

**Returns:** `public void`

### getLevel

```java
public int getLevel(Holder<Enchantment> p_345430_)
```

**Parameters:**

- `p_345430_` (`Holder<Enchantment>`)

**Returns:** `public int`

### keySet

```java
public Set<Holder<Enchantment>> keySet()
```

**Returns:** `public Set<Holder<Enchantment>>`

### toImmutable

```java
public ItemEnchantments toImmutable()
```

**Returns:** `public ItemEnchantments`

### ItemEnchantments

```java
return new ItemEnchantments()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Mutable` | class |  |
