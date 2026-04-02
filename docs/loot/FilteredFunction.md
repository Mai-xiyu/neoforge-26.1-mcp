# FilteredFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FilteredFunction>` |  |

## Methods

### FilteredFunction

```java
public FilteredFunction(List<LootItemCondition> p_341370_, ItemPredicate p_341210_, LootItemFunction p_340816_)
```

**Parameters:**

- `p_341370_` (`List<LootItemCondition>`)
- `p_341210_` (`ItemPredicate`)
- `p_340816_` (`LootItemFunction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<FilteredFunction> getType()
```

**Returns:** `LootItemFunctionType<FilteredFunction>`

### run

```java
public ItemStack run(ItemStack p_340845_, LootContext p_341349_)
```

**Parameters:**

- `p_340845_` (`ItemStack`)
- `p_341349_` (`LootContext`)

**Returns:** `ItemStack`

### validate

```java
public void validate(ValidationContext p_341254_)
```

**Parameters:**

- `p_341254_` (`ValidationContext`)
