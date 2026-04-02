# SequenceFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Implements:** `LootItemFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SequenceFunction>` |  |
| `INLINE_CODEC` | `Codec<SequenceFunction>` |  |

## Methods

### SequenceFunction

```java
private SequenceFunction(List<LootItemFunction> p_299323_)
```

**Parameters:**

- `p_299323_` (`List<LootItemFunction>`)

**Returns:** `private`

### of

```java
public static SequenceFunction of(List<LootItemFunction> p_298958_)
```

**Parameters:**

- `p_298958_` (`List<LootItemFunction>`)

**Returns:** `public static SequenceFunction`

### apply

```java
public ItemStack apply(ItemStack p_299268_, LootContext p_298221_)
```

**Parameters:**

- `p_299268_` (`ItemStack`)
- `p_298221_` (`LootContext`)

**Returns:** `public ItemStack`

### validate

```java
public void validate(ValidationContext p_298605_)
```

**Parameters:**

- `p_298605_` (`ValidationContext`)

### getType

```java
public LootItemFunctionType<SequenceFunction> getType()
```

**Returns:** `LootItemFunctionType<SequenceFunction>`
