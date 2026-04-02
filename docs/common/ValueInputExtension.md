# ValueInputExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension class for `ValueInput`

## Methods

### self

```java
private ValueInput self()
```

**Returns:** `private ValueInput`

### keySet

```java
default Set<String> keySet()
```

**Returns:** `Set<String>`

### readChild

```java
default void readChild(String key, ValueIOSerializable object)
```

**Parameters:**

- `key` (`String`)
- `object` (`ValueIOSerializable`)

### rawChildOrEmpty

```java
default ValueInput rawChildOrEmpty(String key)
```

**Parameters:**

- `key` (`String`)

**Returns:** `ValueInput`
