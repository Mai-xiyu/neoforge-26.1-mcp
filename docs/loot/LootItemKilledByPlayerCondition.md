# LootItemKilledByPlayerCondition

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** class
**Implements:** `LootItemCondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LootItemKilledByPlayerCondition>` |  |

## Methods

### LootItemKilledByPlayerCondition

```java
private LootItemKilledByPlayerCondition()
```

**Returns:** `private`

### getType

```java
public LootItemConditionType getType()
```

**Returns:** `LootItemConditionType`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### test

```java
public boolean test(LootContext p_81899_)
```

**Parameters:**

- `p_81899_` (`LootContext`)

**Returns:** `public boolean`

### killedByPlayer

```java
public static LootItemCondition.Builder killedByPlayer()
```

**Returns:** `public static LootItemCondition.Builder`
