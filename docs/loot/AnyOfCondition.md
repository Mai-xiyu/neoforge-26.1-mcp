# AnyOfCondition

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** class
**Extends:** `CompositeLootItemCondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AnyOfCondition>` |  |

## Methods

### AnyOfCondition

```java
 AnyOfCondition(List<LootItemCondition> p_299191_)
```

**Parameters:**

- `p_299191_` (`List<LootItemCondition>`)

**Returns:** ``

### getType

```java
public LootItemConditionType getType()
```

**Returns:** `LootItemConditionType`

### anyOf

```java
public static AnyOfCondition.Builder anyOf(LootItemCondition.Builder[]... p_286239_)
```

**Parameters:**

- `p_286239_` (`LootItemCondition.Builder[]...`)

**Returns:** `public static AnyOfCondition.Builder`

### Builder

```java
public Builder(LootItemCondition.Builder[]... p_286497_)
```

**Parameters:**

- `p_286497_` (`LootItemCondition.Builder[]...`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### or

```java
public AnyOfCondition.Builder or(LootItemCondition.Builder p_286344_)
```

**Parameters:**

- `p_286344_` (`LootItemCondition.Builder`)

**Returns:** `AnyOfCondition.Builder`

### create

```java
protected LootItemCondition create(List<LootItemCondition> p_298816_)
```

**Parameters:**

- `p_298816_` (`List<LootItemCondition>`)

**Returns:** `LootItemCondition`

### AnyOfCondition

```java
return new AnyOfCondition()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
