# SetItemDamageFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetItemDamageFunction>` |  |

## Methods

### SetItemDamageFunction

```java
private SetItemDamageFunction(List<LootItemCondition> p_298394_, NumberProvider p_165428_, boolean p_165429_)
```

**Parameters:**

- `p_298394_` (`List<LootItemCondition>`)
- `p_165428_` (`NumberProvider`)
- `p_165429_` (`boolean`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetItemDamageFunction> getType()
```

**Returns:** `LootItemFunctionType<SetItemDamageFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_81048_, LootContext p_81049_)
```

**Parameters:**

- `p_81048_` (`ItemStack`)
- `p_81049_` (`LootContext`)

**Returns:** `ItemStack`

### setDamage

```java
public static LootItemConditionalFunction.Builder<?> setDamage(NumberProvider p_165431_)
```

**Parameters:**

- `p_165431_` (`NumberProvider`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### setDamage

```java
public static LootItemConditionalFunction.Builder<?> setDamage(NumberProvider p_165433_, boolean p_165434_)
```

**Parameters:**

- `p_165433_` (`NumberProvider`)
- `p_165434_` (`boolean`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
