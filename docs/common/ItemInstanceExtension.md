# ItemInstanceExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private ItemInstance self()
```

**Returns:** `private ItemInstance`

### canPerformAction

```java
default boolean canPerformAction(ItemAbility itemAbility)
```

**Parameters:**

- `itemAbility` (`ItemAbility`)

**Returns:** `boolean`

### getTagEnchantments

```java
default ItemEnchantments getTagEnchantments()
```

**Returns:** `ItemEnchantments`

### getEnchantmentLevel

```java
default int getEnchantmentLevel(Holder<Enchantment> enchantment)
```

**Parameters:**

- `enchantment` (`Holder<Enchantment>`)

**Returns:** `int`
