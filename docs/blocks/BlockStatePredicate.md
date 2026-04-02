# BlockStatePredicate

**Package:** `net.minecraft.world.level.block.state.predicate`
**Type:** class
**Implements:** `Predicate<BlockState>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ANY` | `Predicate<BlockState>` |  |

## Methods

### BlockStatePredicate

```java
private BlockStatePredicate(StateDefinition<Block, BlockState> p_61286_)
```

**Parameters:**

- `p_61286_` (`StateDefinition<Block, BlockState>`)

**Returns:** `private`

### forBlock

```java
public static BlockStatePredicate forBlock(Block p_61288_)
```

**Parameters:**

- `p_61288_` (`Block`)

**Returns:** `public static BlockStatePredicate`

### test

```java
public boolean test(BlockState p_61290_)
```

**Parameters:**

- `p_61290_` (`BlockState`)

**Returns:** `public boolean`

### applies

```java
protected <T extends Comparable<T>> boolean applies(BlockState p_61292_, Property<T> p_61293_, Predicate<Object> p_61294_)
```

**Parameters:**

- `p_61292_` (`BlockState`)
- `p_61293_` (`Property<T>`)
- `p_61294_` (`Predicate<Object>`)

**Returns:** `protected <T extends Comparable<T>> boolean`

### where

```java
public <V extends Comparable<V>> BlockStatePredicate where(Property<V> p_61296_, Predicate<Object> p_61297_)
```

**Parameters:**

- `p_61296_` (`Property<V>`)
- `p_61297_` (`Predicate<Object>`)

**Returns:** `public <V extends Comparable<V>> BlockStatePredicate`

### IllegalArgumentException

```java
throw new IllegalArgumentException(this.definition + " cannot support property " + p_61296_)
```

**Parameters:**

- `p_61296_` (`this.definition + " cannot support property " +`)

**Returns:** `throw new`
