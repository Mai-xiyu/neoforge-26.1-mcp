# CopyNameFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CopyNameFunction>` |  |
| `CODEC` | `Codec<CopyNameFunction.NameSource>` |  |

## Methods

### CopyNameFunction

```java
private CopyNameFunction(List<LootItemCondition> p_298700_, CopyNameFunction.NameSource p_80178_)
```

**Parameters:**

- `p_298700_` (`List<LootItemCondition>`)
- `p_80178_` (`CopyNameFunction.NameSource`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<CopyNameFunction> getType()
```

**Returns:** `LootItemFunctionType<CopyNameFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80185_, LootContext p_80186_)
```

**Parameters:**

- `p_80185_` (`ItemStack`)
- `p_80186_` (`LootContext`)

**Returns:** `ItemStack`

### copyName

```java
public static LootItemConditionalFunction.Builder<?> copyName(CopyNameFunction.NameSource p_80188_)
```

**Parameters:**

- `p_80188_` (`CopyNameFunction.NameSource`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### BLOCK_ENTITY

```java
, BLOCK_ENTITY()
```

**Returns:** `,`

### NameSource

```java
private NameSource(String p_80206_, LootContextParam<?> p_80207_)
```

**Parameters:**

- `p_80206_` (`String`)
- `p_80207_` (`LootContextParam<?>`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NameSource` | enum |  |
