# SetItemCountFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetItemCountFunction>` |  |

## Methods

### SetItemCountFunction

```java
private SetItemCountFunction(List<LootItemCondition> p_299158_, NumberProvider p_165410_, boolean p_165411_)
```

**Parameters:**

- `p_299158_` (`List<LootItemCondition>`)
- `p_165410_` (`NumberProvider`)
- `p_165411_` (`boolean`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetItemCountFunction> getType()
```

**Returns:** `LootItemFunctionType<SetItemCountFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_81006_, LootContext p_81007_)
```

**Parameters:**

- `p_81006_` (`ItemStack`)
- `p_81007_` (`LootContext`)

**Returns:** `ItemStack`

### setCount

```java
public static LootItemConditionalFunction.Builder<?> setCount(NumberProvider p_165413_)
```

**Parameters:**

- `p_165413_` (`NumberProvider`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### setCount

```java
public static LootItemConditionalFunction.Builder<?> setCount(NumberProvider p_165415_, boolean p_165416_)
```

**Parameters:**

- `p_165415_` (`NumberProvider`)
- `p_165416_` (`boolean`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
