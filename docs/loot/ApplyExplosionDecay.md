# ApplyExplosionDecay

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ApplyExplosionDecay>` |  |

## Methods

### ApplyExplosionDecay

```java
private ApplyExplosionDecay(List<LootItemCondition> p_298289_)
```

**Parameters:**

- `p_298289_` (`List<LootItemCondition>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<ApplyExplosionDecay> getType()
```

**Returns:** `LootItemFunctionType<ApplyExplosionDecay>`

### run

```java
public ItemStack run(ItemStack p_80034_, LootContext p_80035_)
```

**Parameters:**

- `p_80034_` (`ItemStack`)
- `p_80035_` (`LootContext`)

**Returns:** `ItemStack`

### explosionDecay

```java
public static LootItemConditionalFunction.Builder<?> explosionDecay()
```

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### simpleBuilder

```java
return simpleBuilder()
```

**Returns:** `return`
