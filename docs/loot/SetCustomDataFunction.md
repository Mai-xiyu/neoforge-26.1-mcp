# SetCustomDataFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetCustomDataFunction>` |  |

## Methods

### SetCustomDataFunction

```java
private SetCustomDataFunction(List<LootItemCondition> p_330259_, CompoundTag p_330792_)
```

**Parameters:**

- `p_330259_` (`List<LootItemCondition>`)
- `p_330792_` (`CompoundTag`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetCustomDataFunction> getType()
```

**Returns:** `LootItemFunctionType<SetCustomDataFunction>`

### run

```java
public ItemStack run(ItemStack p_330737_, LootContext p_331310_)
```

**Parameters:**

- `p_330737_` (`ItemStack`)
- `p_331310_` (`LootContext`)

**Returns:** `ItemStack`

### setCustomData

```java
public static LootItemConditionalFunction.Builder<?> setCustomData(CompoundTag p_330248_)
```

**Parameters:**

- `p_330248_` (`CompoundTag`)

**Returns:** `LootItemConditionalFunction.Builder<?>`
