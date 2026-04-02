# CopyBlockState

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CopyBlockState>` |  |

## Methods

### CopyBlockState

```java
 CopyBlockState(List<LootItemCondition> p_298625_, Holder<Block> p_298940_, Set<Property<?>> p_80052_)
```

**Parameters:**

- `p_298625_` (`List<LootItemCondition>`)
- `p_298940_` (`Holder<Block>`)
- `p_80052_` (`Set<Property<?>>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### CopyBlockState

```java
private CopyBlockState(List<LootItemCondition> p_298279_, Holder<Block> p_299047_, List<String> p_298632_)
```

**Parameters:**

- `p_298279_` (`List<LootItemCondition>`)
- `p_299047_` (`Holder<Block>`)
- `p_298632_` (`List<String>`)

**Returns:** `private`

### getType

```java
public LootItemFunctionType<CopyBlockState> getType()
```

**Returns:** `LootItemFunctionType<CopyBlockState>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
protected ItemStack run(ItemStack p_80060_, LootContext p_80061_)
```

**Parameters:**

- `p_80060_` (`ItemStack`)
- `p_80061_` (`LootContext`)

**Returns:** `ItemStack`

### copyState

```java
public static CopyBlockState.Builder copyState(Block p_80063_)
```

**Parameters:**

- `p_80063_` (`Block`)

**Returns:** `public static CopyBlockState.Builder`

### Builder

```java
 Builder(Block p_80079_)
```

**Parameters:**

- `p_80079_` (`Block`)

**Returns:** ``

### copy

```java
public CopyBlockState.Builder copy(Property<?> p_80085_)
```

**Parameters:**

- `p_80085_` (`Property<?>`)

**Returns:** `public CopyBlockState.Builder`

### IllegalStateException

```java
throw new IllegalStateException("Property " + p_80085_ + " is not present on block " + this.block)
```

**Parameters:**

- `this.block` (`"Property " + p_80085_ + " is not present on block " +`)

**Returns:** `throw new`

### getThis

```java
protected CopyBlockState.Builder getThis()
```

**Returns:** `protected CopyBlockState.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
