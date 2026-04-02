# ExplosionCondition

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** class
**Implements:** `LootItemCondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ExplosionCondition>` |  |

## Methods

### ExplosionCondition

```java
private ExplosionCondition()
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
public boolean test(LootContext p_81659_)
```

**Parameters:**

- `p_81659_` (`LootContext`)

**Returns:** `public boolean`

### survivesExplosion

```java
public static LootItemCondition.Builder survivesExplosion()
```

**Returns:** `public static LootItemCondition.Builder`
