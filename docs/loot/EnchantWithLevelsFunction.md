# EnchantWithLevelsFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EnchantWithLevelsFunction>` |  |

## Methods

### EnchantWithLevelsFunction

```java
 EnchantWithLevelsFunction(List<LootItemCondition> p_298580_, NumberProvider p_165194_, Optional<HolderSet<Enchantment>> p_345769_)
```

**Parameters:**

- `p_298580_` (`List<LootItemCondition>`)
- `p_165194_` (`NumberProvider`)
- `p_345769_` (`Optional<HolderSet<Enchantment>>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<EnchantWithLevelsFunction> getType()
```

**Returns:** `LootItemFunctionType<EnchantWithLevelsFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80483_, LootContext p_80484_)
```

**Parameters:**

- `p_80483_` (`ItemStack`)
- `p_80484_` (`LootContext`)

**Returns:** `ItemStack`

### enchantWithLevels

```java
public static EnchantWithLevelsFunction.Builder enchantWithLevels(HolderLookup.Provider p_346232_, NumberProvider p_165197_)
```

**Parameters:**

- `p_346232_` (`HolderLookup.Provider`)
- `p_165197_` (`NumberProvider`)

**Returns:** `public static EnchantWithLevelsFunction.Builder`

### Builder

```java
public Builder(NumberProvider p_165200_)
```

**Parameters:**

- `p_165200_` (`NumberProvider`)

**Returns:** `public`

### getThis

```java
protected EnchantWithLevelsFunction.Builder getThis()
```

**Returns:** `protected EnchantWithLevelsFunction.Builder`

### fromOptions

```java
public EnchantWithLevelsFunction.Builder fromOptions(HolderSet<Enchantment> p_345342_)
```

**Parameters:**

- `p_345342_` (`HolderSet<Enchantment>`)

**Returns:** `public EnchantWithLevelsFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
