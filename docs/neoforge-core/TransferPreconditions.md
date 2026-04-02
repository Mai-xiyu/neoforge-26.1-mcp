# TransferPreconditions

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class

## Description

Precondition checks useful for implementing `ResourceHandler`.

## Methods

### TransferPreconditions

```java
private TransferPreconditions()
```

**Returns:** `private`

### checkNonEmpty

```java
public static void checkNonEmpty(Resource resource)
```

**Parameters:**

- `resource` (`Resource`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Expected resource to be non-empty: " + resource)
```

**Parameters:**

- `resource` (`"Expected resource to be non-empty: " +`)

**Returns:** `throw new`

### checkNonNegative

```java
public static void checkNonNegative(int value)
```

**Parameters:**

- `value` (`int`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Expected value to be non-negative: " + value)
```

**Parameters:**

- `value` (`"Expected value to be non-negative: " +`)

**Returns:** `throw new`

### checkNonEmptyNonNegative

```java
public static void checkNonEmptyNonNegative(Resource resource, int value)
```

**Parameters:**

- `resource` (`Resource`)
- `value` (`int`)

### checkNonEmpty

```java
 checkNonEmpty()
```

**Returns:** ``

### checkNonNegative

```java
 checkNonNegative()
```

**Returns:** ``
