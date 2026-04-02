# CombinedResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** class<T extends Resource> implements ResourceHandler<T>

## Description

A resource handler that wraps multiple resource handlers, concatenating all their indices into one large handler.



The size of the wrapper will not change in response to changes in the size of wrapped handlers.
This means that indices added to the wrapped handlers will not be visible and indices removed will appear empty and read-only.
To adjust to size changes of the wrapped handlers, the wrapper must be recreated.

## Methods

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException("Index " + index + " is out-of-bounds for combined handler with size " + sizeCache)
```

**Parameters:**

- `sizeCache` (`"Index " + index + " is out-of-bounds for combined handler with size " +`)

**Returns:** `throw new`

### getHandlerFromIndex

```java
protected ResourceHandler<T> getHandlerFromIndex(int handlerIndex)
```

**Parameters:**

- `handlerIndex` (`int`)

**Returns:** `protected ResourceHandler<T>`

### getSlotFromIndex

```java
protected int getSlotFromIndex(int index, int handlerIndex)
```

**Parameters:**

- `index` (`int`)
- `handlerIndex` (`int`)

**Returns:** `protected int`

### size

```java
public final int size()
```

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
