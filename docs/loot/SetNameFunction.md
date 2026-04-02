# SetNameFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetNameFunction>` |  |
| `CODEC` | `Codec<SetNameFunction.Target>` |  |

## Methods

### SetNameFunction

```java
private SetNameFunction(List<LootItemCondition> p_299241_, Optional<Component> p_298804_, Optional<LootContext.EntityTarget> p_298545_, SetNameFunction.Target p_338830_)
```

**Parameters:**

- `p_299241_` (`List<LootItemCondition>`)
- `p_298804_` (`Optional<Component>`)
- `p_298545_` (`Optional<LootContext.EntityTarget>`)
- `p_338830_` (`SetNameFunction.Target`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetNameFunction> getType()
```

**Returns:** `LootItemFunctionType<SetNameFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### createResolver

```java
public static UnaryOperator<Component> createResolver(LootContext p_81140_, LootContext.EntityTarget p_81141_)
```

**Parameters:**

- `p_81140_` (`LootContext`)
- `p_81141_` (`LootContext.EntityTarget`)

**Returns:** `public static UnaryOperator<Component>`

### run

```java
public ItemStack run(ItemStack p_81137_, LootContext p_81138_)
```

**Parameters:**

- `p_81137_` (`ItemStack`)
- `p_81138_` (`LootContext`)

**Returns:** `ItemStack`

### setName

```java
public static LootItemConditionalFunction.Builder<?> setName(Component p_165460_, SetNameFunction.Target p_338546_)
```

**Parameters:**

- `p_165460_` (`Component`)
- `p_338546_` (`SetNameFunction.Target`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### setName

```java
public static LootItemConditionalFunction.Builder<?> setName(Component p_165458_, SetNameFunction.Target p_338818_, LootContext.EntityTarget p_338518_)
```

**Parameters:**

- `p_165458_` (`Component`)
- `p_338818_` (`SetNameFunction.Target`)
- `p_338518_` (`LootContext.EntityTarget`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### ITEM_NAME

```java
, ITEM_NAME()
```

**Returns:** `,`

### Target

```java
private Target(String p_338794_)
```

**Parameters:**

- `p_338794_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### component

```java
public DataComponentType<Component> component()
```

**Returns:** `public DataComponentType<Component>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Target` | enum |  |
