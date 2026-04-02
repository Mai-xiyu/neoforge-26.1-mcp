# IdentityStrategy

**Package:** `net.neoforged.neoforge.common.util.strategy`
**Type:** class
**Implements:** `Hash.Strategy<Object>`

## Description

A strategy that uses `System#identityHashCode(Object)` and `a == b` comparisons.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `IDENTITY` | `Hash.Strategy<? super Object>` |  |

## Methods

### IdentityStrategy

```java
private IdentityStrategy()
```

**Returns:** `private`

### hashCode

```java
public int hashCode(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `int`

### equals

```java
public boolean equals(Object a, Object b)
```

**Parameters:**

- `a` (`Object`)
- `b` (`Object`)

**Returns:** `boolean`
