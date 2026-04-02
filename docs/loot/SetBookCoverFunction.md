# SetBookCoverFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetBookCoverFunction>` |  |

## Methods

### SetBookCoverFunction

```java
public SetBookCoverFunction(List<LootItemCondition> p_333787_, Optional<Filterable<String>> p_333956_, Optional<String> p_334034_, Optional<Integer> p_333739_)
```

**Parameters:**

- `p_333787_` (`List<LootItemCondition>`)
- `p_333956_` (`Optional<Filterable<String>>`)
- `p_334034_` (`Optional<String>`)
- `p_333739_` (`Optional<Integer>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_334048_, LootContext p_334012_)
```

**Parameters:**

- `p_334048_` (`ItemStack`)
- `p_334012_` (`LootContext`)

**Returns:** `ItemStack`

### apply

```java
private WrittenBookContent apply(WrittenBookContent p_333821_)
```

**Parameters:**

- `p_333821_` (`WrittenBookContent`)

**Returns:** `private WrittenBookContent`

### getType

```java
public LootItemFunctionType<SetBookCoverFunction> getType()
```

**Returns:** `LootItemFunctionType<SetBookCoverFunction>`
