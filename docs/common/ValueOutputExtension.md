# ValueOutputExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension class for `ValueOutput`

## Methods

### self

```java
private ValueOutput self()
```

**Returns:** `private ValueOutput`

### store

```java
default void store(CompoundTag tag)
```

**Parameters:**

- `tag` (`CompoundTag`)

### putChild

```java
default void putChild(String key, ValueIOSerializable child)
```

**Parameters:**

- `key` (`String`)
- `child` (`ValueIOSerializable`)
