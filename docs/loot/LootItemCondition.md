# LootItemCondition

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** interface
**Extends:** `LootContextUser, Predicate<LootContext>`

## Methods

### getType

```java
LootItemConditionType getType()
```

**Returns:** `LootItemConditionType`

### build

```java
LootItemCondition build()
```

**Returns:** `LootItemCondition`

### invert

```java
default LootItemCondition.Builder invert()
```

**Returns:** `default LootItemCondition.Builder`

### or

```java
default AnyOfCondition.Builder or(LootItemCondition.Builder p_286316_)
```

**Parameters:**

- `p_286316_` (`LootItemCondition.Builder`)

**Returns:** `default AnyOfCondition.Builder`

### and

```java
default AllOfCondition.Builder and(LootItemCondition.Builder p_286363_)
```

**Parameters:**

- `p_286363_` (`LootItemCondition.Builder`)

**Returns:** `default AllOfCondition.Builder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | interface |  |
