# IEnchantmentExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Enchantment self()
```

**Returns:** `private Enchantment`

### getDamageBonus

```java
default float getDamageBonus(int level, EntityType<?> entityType, ItemStack enchantedItem)
```

**Parameters:**

- `level` (`int`)
- `entityType` (`EntityType<?>`)
- `enchantedItem` (`ItemStack`)

**Returns:** `default float`

### allowedInCreativeTab

```java
default boolean allowedInCreativeTab(Item book, Set<TagKey<Item>> allowedCategories)
```

**Parameters:**

- `book` (`Item`)
- `allowedCategories` (`Set<TagKey<Item>>`)

**Returns:** `default boolean`
