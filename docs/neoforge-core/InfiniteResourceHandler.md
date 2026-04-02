# InfiniteResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class<T extends Resource> implements ResourceHandler<T>

## Description

A `ResourceHandler` that allows insertion and extraction of an unlimited amount of a specified resource.
@param <T> The type of resource that this handler can accept.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `infiniteResource` | `T` |  |

## Methods

### InfiniteResourceHandler

```java
public public InfiniteResourceHandler(T infiniteResource)
```

**Parameters:**

- `infiniteResource` (`T`)

**Returns:** `public`

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
