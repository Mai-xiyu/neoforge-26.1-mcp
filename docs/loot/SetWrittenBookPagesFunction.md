# SetWrittenBookPagesFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PAGE_CODEC` | `Codec<Component>` |  |
| `CODEC` | `MapCodec<SetWrittenBookPagesFunction>` |  |

## Methods

### SetWrittenBookPagesFunction

```java
public SetWrittenBookPagesFunction(List<LootItemCondition> p_333863_, List<Filterable<Component>> p_333788_, ListOperation p_334047_)
```

**Parameters:**

- `p_333863_` (`List<LootItemCondition>`)
- `p_333788_` (`List<Filterable<Component>>`)
- `p_334047_` (`ListOperation`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_333960_, LootContext p_333892_)
```

**Parameters:**

- `p_333960_` (`ItemStack`)
- `p_333892_` (`LootContext`)

**Returns:** `ItemStack`

### apply

```java
public WrittenBookContent apply(WrittenBookContent p_333830_)
```

**Parameters:**

- `p_333830_` (`WrittenBookContent`)

**Returns:** `WrittenBookContent`

### getType

```java
public LootItemFunctionType<SetWrittenBookPagesFunction> getType()
```

**Returns:** `LootItemFunctionType<SetWrittenBookPagesFunction>`
