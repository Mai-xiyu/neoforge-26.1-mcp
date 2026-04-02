# FillPlayerHead

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FillPlayerHead>` |  |

## Methods

### FillPlayerHead

```java
public FillPlayerHead(List<LootItemCondition> p_298265_, LootContext.EntityTarget p_80605_)
```

**Parameters:**

- `p_298265_` (`List<LootItemCondition>`)
- `p_80605_` (`LootContext.EntityTarget`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<FillPlayerHead> getType()
```

**Returns:** `LootItemFunctionType<FillPlayerHead>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80608_, LootContext p_80609_)
```

**Parameters:**

- `p_80608_` (`ItemStack`)
- `p_80609_` (`LootContext`)

**Returns:** `ItemStack`

### fillPlayerHead

```java
public static LootItemConditionalFunction.Builder<?> fillPlayerHead(LootContext.EntityTarget p_165208_)
```

**Parameters:**

- `p_165208_` (`LootContext.EntityTarget`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
