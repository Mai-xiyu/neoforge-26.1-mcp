# EnchantRandomlyFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EnchantRandomlyFunction>` |  |

## Methods

### EnchantRandomlyFunction

```java
 EnchantRandomlyFunction(List<LootItemCondition> p_299014_, Optional<HolderSet<Enchantment>> p_298965_, boolean p_344945_)
```

**Parameters:**

- `p_299014_` (`List<LootItemCondition>`)
- `p_298965_` (`Optional<HolderSet<Enchantment>>`)
- `p_344945_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<EnchantRandomlyFunction> getType()
```

**Returns:** `LootItemFunctionType<EnchantRandomlyFunction>`

### run

```java
public ItemStack run(ItemStack p_80429_, LootContext p_80430_)
```

**Parameters:**

- `p_80429_` (`ItemStack`)
- `p_80430_` (`LootContext`)

**Returns:** `ItemStack`

### enchantItem

```java
private static ItemStack enchantItem(ItemStack p_230980_, Holder<Enchantment> p_346257_, RandomSource p_230982_)
```

**Parameters:**

- `p_230980_` (`ItemStack`)
- `p_346257_` (`Holder<Enchantment>`)
- `p_230982_` (`RandomSource`)

**Returns:** `private static ItemStack`

### randomEnchantment

```java
public static EnchantRandomlyFunction.Builder randomEnchantment()
```

**Returns:** `public static EnchantRandomlyFunction.Builder`

### randomApplicableEnchantment

```java
public static EnchantRandomlyFunction.Builder randomApplicableEnchantment(HolderLookup.Provider p_346405_)
```

**Parameters:**

- `p_346405_` (`HolderLookup.Provider`)

**Returns:** `public static EnchantRandomlyFunction.Builder`

### getThis

```java
protected EnchantRandomlyFunction.Builder getThis()
```

**Returns:** `protected EnchantRandomlyFunction.Builder`

### withEnchantment

```java
public EnchantRandomlyFunction.Builder withEnchantment(Holder<Enchantment> p_346278_)
```

**Parameters:**

- `p_346278_` (`Holder<Enchantment>`)

**Returns:** `public EnchantRandomlyFunction.Builder`

### withOneOf

```java
public EnchantRandomlyFunction.Builder withOneOf(HolderSet<Enchantment> p_345384_)
```

**Parameters:**

- `p_345384_` (`HolderSet<Enchantment>`)

**Returns:** `public EnchantRandomlyFunction.Builder`

### allowingIncompatibleEnchantments

```java
public EnchantRandomlyFunction.Builder allowingIncompatibleEnchantments()
```

**Returns:** `public EnchantRandomlyFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
