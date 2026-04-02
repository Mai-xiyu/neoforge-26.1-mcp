# SetWritableBookPagesFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetWritableBookPagesFunction>` |  |

## Methods

### SetWritableBookPagesFunction

```java
public SetWritableBookPagesFunction(List<LootItemCondition> p_333911_, List<Filterable<String>> p_333983_, ListOperation p_333754_)
```

**Parameters:**

- `p_333911_` (`List<LootItemCondition>`)
- `p_333983_` (`List<Filterable<String>>`)
- `p_333754_` (`ListOperation`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_333832_, LootContext p_333929_)
```

**Parameters:**

- `p_333832_` (`ItemStack`)
- `p_333929_` (`LootContext`)

**Returns:** `ItemStack`

### apply

```java
public WritableBookContent apply(WritableBookContent p_334044_)
```

**Parameters:**

- `p_334044_` (`WritableBookContent`)

**Returns:** `public WritableBookContent`

### getType

```java
public LootItemFunctionType<SetWritableBookPagesFunction> getType()
```

**Returns:** `LootItemFunctionType<SetWritableBookPagesFunction>`
