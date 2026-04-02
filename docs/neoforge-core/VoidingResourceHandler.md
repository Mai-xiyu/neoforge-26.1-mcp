# VoidingResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class<T extends Resource> implements ResourceHandler<T>

## Description

A resource handler that destroys any resources inserted into it.
@param <T> The type of resource that this handler can accept.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `emptyResource` | `T` |  |

## Methods

### VoidingResourceHandler

```java
public public VoidingResourceHandler(T emptyResource)
```

**Parameters:**

- `emptyResource` (`T`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Resource is not empty: " + emptyResource)
```

**Parameters:**

- `emptyResource` (`"Resource is not empty: " +`)

**Returns:** `throw new`

### size

```java
public int size()
```

**Returns:** `int`

### insert

```java
public int insert(int index, T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
public int extract(int index, T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### getResource

```java
public T getResource(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `T`

### getAmountAsLong

```java
public long getAmountAsLong(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `long`

### getCapacityAsLong

```java
public long getCapacityAsLong(int index, T resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)

**Returns:** `long`

### isValid

```java
public boolean isValid(int index, T resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)

**Returns:** `boolean`
