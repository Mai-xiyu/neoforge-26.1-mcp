# FunctionReference

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FunctionReference>` |  |

## Methods

### FunctionReference

```java
private FunctionReference(List<LootItemCondition> p_298661_, ResourceKey<LootItemFunction> p_335440_)
```

**Parameters:**

- `p_298661_` (`List<LootItemCondition>`)
- `p_335440_` (`ResourceKey<LootItemFunction>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<FunctionReference> getType()
```

**Returns:** `LootItemFunctionType<FunctionReference>`

### validate

```java
public void validate(ValidationContext p_279281_)
```

**Parameters:**

- `p_279281_` (`ValidationContext`)

### run

```java
protected ItemStack run(ItemStack p_279458_, LootContext p_279370_)
```

**Parameters:**

- `p_279458_` (`ItemStack`)
- `p_279370_` (`LootContext`)

**Returns:** `ItemStack`

### functionReference

```java
public static LootItemConditionalFunction.Builder<?> functionReference(ResourceKey<LootItemFunction> p_335382_)
```

**Parameters:**

- `p_335382_` (`ResourceKey<LootItemFunction>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
