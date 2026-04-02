# ConditionUserBuilder

**Package:** `net.minecraft.world.level.storage.loot.predicates`
**Type:** interface<T extends ConditionUserBuilder<T>>

## Methods

### when

```java
T when(LootItemCondition.Builder p_231043_)
```

**Parameters:**

- `p_231043_` (`LootItemCondition.Builder`)

**Returns:** `T`

### when

```java
<E> default <E> T when(Iterable<E> p_231041_, Function<E, LootItemCondition.Builder> p_231042_)
```

**Parameters:**

- `p_231041_` (`Iterable<E>`)
- `p_231042_` (`Function<E, LootItemCondition.Builder>`)

**Returns:** `default <E> T`

### unwrap

```java
T unwrap()
```

**Returns:** `T`
