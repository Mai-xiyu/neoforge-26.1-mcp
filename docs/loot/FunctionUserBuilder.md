# FunctionUserBuilder

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** interface<T extends FunctionUserBuilder<T>>

## Methods

### apply

```java
T apply(LootItemFunction.Builder p_230990_)
```

**Parameters:**

- `p_230990_` (`LootItemFunction.Builder`)

**Returns:** `T`

### apply

```java
<E> default <E> T apply(Iterable<E> p_230985_, Function<E, LootItemFunction.Builder> p_230986_)
```

**Parameters:**

- `p_230985_` (`Iterable<E>`)
- `p_230986_` (`Function<E, LootItemFunction.Builder>`)

**Returns:** `default <E> T`

### apply

```java
<E> default <E> T apply(E[] p_230988_, Function<E, LootItemFunction.Builder> p_230989_)
```

**Parameters:**

- `p_230988_` (`E[]`)
- `p_230989_` (`Function<E, LootItemFunction.Builder>`)

**Returns:** `default <E> T`

### unwrap

```java
T unwrap()
```

**Returns:** `T`
