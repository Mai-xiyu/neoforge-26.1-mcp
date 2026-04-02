# SetComponentsFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetComponentsFunction>` |  |

## Methods

### SetComponentsFunction

```java
private SetComponentsFunction(List<LootItemCondition> p_330669_, DataComponentPatch p_330819_)
```

**Parameters:**

- `p_330669_` (`List<LootItemCondition>`)
- `p_330819_` (`DataComponentPatch`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetComponentsFunction> getType()
```

**Returns:** `LootItemFunctionType<SetComponentsFunction>`

### run

```java
public ItemStack run(ItemStack p_330211_, LootContext p_331318_)
```

**Parameters:**

- `p_330211_` (`ItemStack`)
- `p_331318_` (`LootContext`)

**Returns:** `ItemStack`

### setComponent

```java
<T> public static <T> LootItemConditionalFunction.Builder<?> setComponent(DataComponentType<T> p_331454_, T p_331398_)
```

**Parameters:**

- `p_331454_` (`DataComponentType<T>`)
- `p_331398_` (`T`)

**Returns:** `public static <T> LootItemConditionalFunction.Builder<?>`
