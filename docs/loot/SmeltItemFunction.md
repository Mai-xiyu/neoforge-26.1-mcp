# SmeltItemFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SmeltItemFunction>` |  |

## Methods

### SmeltItemFunction

```java
private SmeltItemFunction(List<LootItemCondition> p_299162_)
```

**Parameters:**

- `p_299162_` (`List<LootItemCondition>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SmeltItemFunction> getType()
```

**Returns:** `LootItemFunctionType<SmeltItemFunction>`

### run

```java
public ItemStack run(ItemStack p_81268_, LootContext p_81269_)
```

**Parameters:**

- `p_81268_` (`ItemStack`)
- `p_81269_` (`LootContext`)

**Returns:** `ItemStack`

### smelted

```java
public static LootItemConditionalFunction.Builder<?> smelted()
```

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### simpleBuilder

```java
return simpleBuilder()
```

**Returns:** `return`
