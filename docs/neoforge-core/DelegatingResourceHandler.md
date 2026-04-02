# DelegatingResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class<T extends Resource> implements ResourceHandler<T>

## Description

A resource handler that delegates all calls to another handler.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `delegate` | `Supplier<ResourceHandler<T>>` |  |

## Methods

### DelegatingResourceHandler

```java
public DelegatingResourceHandler(ResourceHandler<T> delegate)
```

**Parameters:**

- `delegate` (`ResourceHandler<T>`)

**Returns:** `public`

### DelegatingResourceHandler

```java
public DelegatingResourceHandler(Supplier<ResourceHandler<T>> delegate)
```

**Parameters:**

- `delegate` (`Supplier<ResourceHandler<T>>`)

**Returns:** `public`

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

### insert

```java
public int insert(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

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

### extract

```java
public int extract(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### getDelegate

```java
public ResourceHandler<T> getDelegate()
```

**Returns:** `public ResourceHandler<T>`
