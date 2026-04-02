# RangedResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class<T extends Resource> extends DelegatingResourceHandler<T>

## Description

A resource handler that wraps a range of indices of another handler.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `start` | `int` |  |
| `end` | `int` |  |

## Methods

### of

```java
public static <T extends Resource> RangedResourceHandler<T> of(ResourceHandler<T> delegate, int start, int end)
```

**Parameters:**

- `delegate` (`ResourceHandler<T>`)
- `start` (`int`)
- `end` (`int`)

**Returns:** `RangedResourceHandler<T>`

### of

```java
public static <T extends Resource> RangedResourceHandler<T> of(Supplier<ResourceHandler<T>> delegate, int start, int end)
```

**Parameters:**

- `delegate` (`Supplier<ResourceHandler<T>>`)
- `start` (`int`)
- `end` (`int`)

**Returns:** `RangedResourceHandler<T>`

### ofSingleIndex

```java
public static <T extends Resource> RangedResourceHandler<T> ofSingleIndex(ResourceHandler<T> delegate, int index)
```

**Parameters:**

- `delegate` (`ResourceHandler<T>`)
- `index` (`int`)

**Returns:** `RangedResourceHandler<T>`

### ofSingleIndex

```java
public static <T extends Resource> RangedResourceHandler<T> ofSingleIndex(Supplier<ResourceHandler<T>> delegate, int index)
```

**Parameters:**

- `delegate` (`Supplier<ResourceHandler<T>>`)
- `index` (`int`)

**Returns:** `RangedResourceHandler<T>`

### RangedResourceHandler

```java
protected RangedResourceHandler(ResourceHandler<T> delegate, int start, int end)
```

**Parameters:**

- `delegate` (`ResourceHandler<T>`)
- `start` (`int`)
- `end` (`int`)

**Returns:** `protected`

### RangedResourceHandler

```java
protected RangedResourceHandler(Supplier<ResourceHandler<T>> delegate, int start, int end)
```

**Parameters:**

- `delegate` (`Supplier<ResourceHandler<T>>`)
- `start` (`int`)
- `end` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException("Invalid range: start=" + start + ", end=" + end)
```

**Parameters:**

- `"` (`"Invalid range: start=" + start +`)
- `end` (`end=" +`)

**Returns:** `throw new`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException("Invalid range: end " + end + " is larger than the size of the handler " + delegateSize)
```

**Parameters:**

- `delegateSize` (`"Invalid range: end " + end + " is larger than the size of the handler " +`)

**Returns:** `throw new`

### size

```java
public int size()
```

**Returns:** `int`

### convertIndex

```java
protected int convertIndex(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `int`

### extract

```java
public int extract(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### insert

```java
public int insert(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`
