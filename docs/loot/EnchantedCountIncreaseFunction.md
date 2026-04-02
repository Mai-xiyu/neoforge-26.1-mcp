# EnchantedCountIncreaseFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_LIMIT` | `int` |  |
| `CODEC` | `MapCodec<EnchantedCountIncreaseFunction>` |  |

## Methods

### EnchantedCountIncreaseFunction

```java
 EnchantedCountIncreaseFunction(List<LootItemCondition> p_344944_, Holder<Enchantment> p_345194_, NumberProvider p_344806_, int p_345432_)
```

**Parameters:**

- `p_344944_` (`List<LootItemCondition>`)
- `p_345194_` (`Holder<Enchantment>`)
- `p_344806_` (`NumberProvider`)
- `p_345432_` (`int`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<EnchantedCountIncreaseFunction> getType()
```

**Returns:** `LootItemFunctionType<EnchantedCountIncreaseFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### hasLimit

```java
private boolean hasLimit()
```

**Returns:** `private boolean`

### run

```java
public ItemStack run(ItemStack p_345285_, LootContext p_345560_)
```

**Parameters:**

- `p_345285_` (`ItemStack`)
- `p_345560_` (`LootContext`)

**Returns:** `ItemStack`

### lootingMultiplier

```java
public static EnchantedCountIncreaseFunction.Builder lootingMultiplier(HolderLookup.Provider p_344982_, NumberProvider p_345939_)
```

**Parameters:**

- `p_344982_` (`HolderLookup.Provider`)
- `p_345939_` (`NumberProvider`)

**Returns:** `public static EnchantedCountIncreaseFunction.Builder`

### Builder

```java
public Builder(Holder<Enchantment> p_345337_, NumberProvider p_345112_)
```

**Parameters:**

- `p_345337_` (`Holder<Enchantment>`)
- `p_345112_` (`NumberProvider`)

**Returns:** `public`

### getThis

```java
protected EnchantedCountIncreaseFunction.Builder getThis()
```

**Returns:** `protected EnchantedCountIncreaseFunction.Builder`

### setLimit

```java
public EnchantedCountIncreaseFunction.Builder setLimit(int p_344833_)
```

**Parameters:**

- `p_344833_` (`int`)

**Returns:** `public EnchantedCountIncreaseFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
