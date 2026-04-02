# AllOfCondition

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** class
**Extends:** `CompositeLootItemCondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AllOfCondition>` |  |
| `INLINE_CODEC` | `Codec<AllOfCondition>` |  |

## Methods

### AllOfCondition

```java
 AllOfCondition(List<LootItemCondition> p_299216_)
```

**Parameters:**

- `p_299216_` (`List<LootItemCondition>`)

**Returns:** ``

### allOf

```java
public static AllOfCondition allOf(List<LootItemCondition> p_298400_)
```

**Parameters:**

- `p_298400_` (`List<LootItemCondition>`)

**Returns:** `public static AllOfCondition`

### getType

```java
public LootItemConditionType getType()
```

**Returns:** `LootItemConditionType`

### allOf

```java
public static AllOfCondition.Builder allOf(LootItemCondition.Builder[]... p_286873_)
```

**Parameters:**

- `p_286873_` (`LootItemCondition.Builder[]...`)

**Returns:** `public static AllOfCondition.Builder`

### Builder

```java
public Builder(LootItemCondition.Builder[]... p_286842_)
```

**Parameters:**

- `p_286842_` (`LootItemCondition.Builder[]...`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### and

```java
public AllOfCondition.Builder and(LootItemCondition.Builder p_286760_)
```

**Parameters:**

- `p_286760_` (`LootItemCondition.Builder`)

**Returns:** `AllOfCondition.Builder`

### create

```java
protected LootItemCondition create(List<LootItemCondition> p_298491_)
```

**Parameters:**

- `p_298491_` (`List<LootItemCondition>`)

**Returns:** `LootItemCondition`

### AllOfCondition

```java
return new AllOfCondition()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
