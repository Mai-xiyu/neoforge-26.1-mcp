# SetItemFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetItemFunction>` |  |

## Methods

### SetItemFunction

```java
public SetItemFunction(List<LootItemCondition> p_340855_, Holder<Item> p_341008_)
```

**Parameters:**

- `p_340855_` (`List<LootItemCondition>`)
- `p_341008_` (`Holder<Item>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetItemFunction> getType()
```

**Returns:** `LootItemFunctionType<SetItemFunction>`

### run

```java
public ItemStack run(ItemStack p_340909_, LootContext p_341298_)
```

**Parameters:**

- `p_340909_` (`ItemStack`)
- `p_341298_` (`LootContext`)

**Returns:** `ItemStack`
