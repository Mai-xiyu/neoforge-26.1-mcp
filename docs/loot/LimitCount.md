# LimitCount

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LimitCount>` |  |

## Methods

### LimitCount

```java
private LimitCount(List<LootItemCondition> p_299132_, IntRange p_165214_)
```

**Parameters:**

- `p_299132_` (`List<LootItemCondition>`)
- `p_165214_` (`IntRange`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<LimitCount> getType()
```

**Returns:** `LootItemFunctionType<LimitCount>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80644_, LootContext p_80645_)
```

**Parameters:**

- `p_80644_` (`ItemStack`)
- `p_80645_` (`LootContext`)

**Returns:** `ItemStack`

### limitCount

```java
public static LootItemConditionalFunction.Builder<?> limitCount(IntRange p_165216_)
```

**Parameters:**

- `p_165216_` (`IntRange`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
