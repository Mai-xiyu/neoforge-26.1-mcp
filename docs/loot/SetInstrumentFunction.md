# SetInstrumentFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetInstrumentFunction>` |  |

## Methods

### SetInstrumentFunction

```java
private SetInstrumentFunction(List<LootItemCondition> p_298993_, TagKey<Instrument> p_231009_)
```

**Parameters:**

- `p_298993_` (`List<LootItemCondition>`)
- `p_231009_` (`TagKey<Instrument>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetInstrumentFunction> getType()
```

**Returns:** `LootItemFunctionType<SetInstrumentFunction>`

### run

```java
public ItemStack run(ItemStack p_231017_, LootContext p_231018_)
```

**Parameters:**

- `p_231017_` (`ItemStack`)
- `p_231018_` (`LootContext`)

**Returns:** `ItemStack`

### setInstrumentOptions

```java
public static LootItemConditionalFunction.Builder<?> setInstrumentOptions(TagKey<Instrument> p_231012_)
```

**Parameters:**

- `p_231012_` (`TagKey<Instrument>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
