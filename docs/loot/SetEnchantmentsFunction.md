# SetEnchantmentsFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetEnchantmentsFunction>` |  |

## Methods

### SetEnchantmentsFunction

```java
 SetEnchantmentsFunction(List<LootItemCondition> p_299192_, Map<Holder<Enchantment>, NumberProvider> p_165338_, boolean p_165339_)
```

**Parameters:**

- `p_299192_` (`List<LootItemCondition>`)
- `p_165338_` (`Map<Holder<Enchantment>, NumberProvider>`)
- `p_165339_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetEnchantmentsFunction> getType()
```

**Returns:** `LootItemFunctionType<SetEnchantmentsFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_165346_, LootContext p_165347_)
```

**Parameters:**

- `p_165346_` (`ItemStack`)
- `p_165347_` (`LootContext`)

**Returns:** `ItemStack`

### Builder

```java
public Builder()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Builder

```java
public Builder(boolean p_165372_)
```

**Parameters:**

- `p_165372_` (`boolean`)

**Returns:** `public`

### getThis

```java
protected SetEnchantmentsFunction.Builder getThis()
```

**Returns:** `protected SetEnchantmentsFunction.Builder`

### withEnchantment

```java
public SetEnchantmentsFunction.Builder withEnchantment(Holder<Enchantment> p_346114_, NumberProvider p_165376_)
```

**Parameters:**

- `p_346114_` (`Holder<Enchantment>`)
- `p_165376_` (`NumberProvider`)

**Returns:** `public SetEnchantmentsFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
