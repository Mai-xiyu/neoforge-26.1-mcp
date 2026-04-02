# RegisteredResource

**Package:** `net.neoforged.neoforge.transfer.resource`
**Type:** interface<T> extends Resource, TypedInstance<T>

## Description

Helper interface for resources backed by a #value registry entry.
@param <T> The type of the backing registry entry.

## Methods

### value

```java
T value()
```

**Returns:** `T`

### is

```java
.NonExtendable
    default boolean is(Predicate<Holder<T>> predicate)
```

**Parameters:**

- `predicate` (`Predicate<Holder<T>>`)

**Returns:** `.NonExtendable
    default boolean`
