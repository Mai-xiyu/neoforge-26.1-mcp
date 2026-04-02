# TriPredicate

**Package:** `net.neoforged.neoforge.common.util`
**Type:** interface<T, U, V>
**Annotations:** `@FunctionalInterface`

## Description

A predicate that takes three arguments and returns a boolean.

## Methods

### test

```java
boolean test(T t, U u, V v)
```

**Parameters:**

- `t` (`T`)
- `u` (`U`)
- `v` (`V`)

**Returns:** `boolean`

### and

```java
default TriPredicate<T, U, V> and(TriPredicate<? super T, ? super U, ? super V> other)
```

**Parameters:**

- `other` (`TriPredicate<? super T, ? super U, ? super V>`)

**Returns:** `default TriPredicate<T, U, V>`

### negate

```java
default TriPredicate<T, U, V> negate()
```

**Returns:** `default TriPredicate<T, U, V>`

### or

```java
default TriPredicate<T, U, V> or(TriPredicate<? super T, ? super U, ? super V> other)
```

**Parameters:**

- `other` (`TriPredicate<? super T, ? super U, ? super V>`)

**Returns:** `default TriPredicate<T, U, V>`
