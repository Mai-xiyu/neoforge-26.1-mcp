# CopyComponentsFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CopyComponentsFunction>` |  |
| `CODEC` | `Codec<CopyComponentsFunction.Source>` |  |

## Methods

### CopyComponentsFunction

```java
 CopyComponentsFunction(List<LootItemCondition> p_330806_, CopyComponentsFunction.Source p_330881_, Optional<List<DataComponentType<?>>> p_338636_, Optional<List<DataComponentType<?>>> p_338680_)
```

**Parameters:**

- `p_330806_` (`List<LootItemCondition>`)
- `p_330881_` (`CopyComponentsFunction.Source`)
- `p_338636_` (`Optional<List<DataComponentType<?>>>`)
- `p_338680_` (`Optional<List<DataComponentType<?>>>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<CopyComponentsFunction> getType()
```

**Returns:** `LootItemFunctionType<CopyComponentsFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_330563_, LootContext p_331220_)
```

**Parameters:**

- `p_330563_` (`ItemStack`)
- `p_331220_` (`LootContext`)

**Returns:** `ItemStack`

### copyComponents

```java
public static CopyComponentsFunction.Builder copyComponents(CopyComponentsFunction.Source p_331133_)
```

**Parameters:**

- `p_331133_` (`CopyComponentsFunction.Source`)

**Returns:** `public static CopyComponentsFunction.Builder`

### Builder

```java
 Builder(CopyComponentsFunction.Source p_331304_)
```

**Parameters:**

- `p_331304_` (`CopyComponentsFunction.Source`)

**Returns:** ``

### include

```java
public CopyComponentsFunction.Builder include(DataComponentType<?> p_338267_)
```

**Parameters:**

- `p_338267_` (`DataComponentType<?>`)

**Returns:** `public CopyComponentsFunction.Builder`

### exclude

```java
public CopyComponentsFunction.Builder exclude(DataComponentType<?> p_338302_)
```

**Parameters:**

- `p_338302_` (`DataComponentType<?>`)

**Returns:** `public CopyComponentsFunction.Builder`

### getThis

```java
protected CopyComponentsFunction.Builder getThis()
```

**Returns:** `protected CopyComponentsFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

### BLOCK_ENTITY

```java
 BLOCK_ENTITY()
```

**Returns:** ``

### Source

```java
private Source(String p_330561_)
```

**Parameters:**

- `p_330561_` (`String`)

**Returns:** `private`

### get

```java
public DataComponentMap get(LootContext p_331014_)
```

**Parameters:**

- `p_331014_` (`LootContext`)

**Returns:** `public DataComponentMap`

### MatchException

```java
throw new MatchException()
```

**Returns:** `throw new`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `public Set<LootContextParam<?>>`

### MatchException

```java
throw new MatchException()
```

**Returns:** `throw new`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `Source` | enum |  |
