# ResourceHandler

**Package:** `net.neoforged.neoforge.transfer`
**Type:** interface<T extends Resource>

## Description

A generic handler for the transfer and storage of `Resource resources` whether it be inserting, extracting, querying some value, etc.
Indices


A resource handler is organized into indices, which are addressed using an int between `0` and `size() - 1`.


An index represents a "slot", "tank", "buffer", depending on the type of resource.


Out-of-bounds access using methods that accept an `index` will usually throw an exception,
so only indices between 0 (included) and the size (excluded) should be used.
If a storage has a dynamic size, it should be lenient to accommodate for callers
holding onto a previously returned size.
@param <T> The type of resource this handler manages.

## Methods

### size

```java
int size()
```

**Returns:** `int`

### getResource

```java
T getResource(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `T`

### getAmountAsLong

```java
long getAmountAsLong(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `long`

### getAmountAsInt

```java
.NonExtendable
    default int getAmountAsInt(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `.NonExtendable
    default int`

### getCapacityAsLong

```java
long getCapacityAsLong(int index, T resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)

**Returns:** `long`

### getCapacityAsInt

```java
.NonExtendable
    default int getCapacityAsInt(int index, T resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)

**Returns:** `.NonExtendable
    default int`

### isValid

```java
boolean isValid(int index, T resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)

**Returns:** `boolean`

### insert

```java
int insert(int index, T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### insert

```java
default int insert(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
int extract(int index, T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
default int extract(T resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`T`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### asClass

```java
static <T extends Resource> Class<ResourceHandler<T>> asClass()
```

**Returns:** `Class<ResourceHandler<T>>`
