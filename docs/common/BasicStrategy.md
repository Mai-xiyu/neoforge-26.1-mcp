# BasicStrategy

**Package:** `net.neoforged.neoforge.common.util.strategy`
**Type:** class
**Implements:** `Hash.Strategy<Object>`

## Description

A strategy that uses `Objects#hashCode(Object)` and `Object#equals(Object)`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BASIC` | `Hash.Strategy<? super Object>` |  |

## Methods

### BasicStrategy

```java
private BasicStrategy()
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
