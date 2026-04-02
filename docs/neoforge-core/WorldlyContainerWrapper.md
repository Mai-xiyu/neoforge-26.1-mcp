# WorldlyContainerWrapper

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Implements:** `ResourceHandler<ItemResource>`

## Description

An implementation of `ResourceHandler<ItemResource>` for vanilla's `WorldlyContainer` .


Important note: This wrapper assumes that the container owns its slots.
If the container does not own its slots, for example because it delegates to another container, this wrapper should not be used!
@see VanillaContainerWrapper
@see PlayerInventoryWrapper

## Methods

### WorldlyContainerWrapper

```java
public WorldlyContainerWrapper(WorldlyContainer container, Direction side)
```

**Parameters:**

- `container` (`WorldlyContainer`)
- `side` (`Direction`)

**Returns:** `public`

### convertSlot

```java
private int convertSlot(int slot)
```

**Parameters:**

- `slot` (`int`)

**Returns:** `private int`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException("Cannot access container with negative slot index: " + slot)
```

**Parameters:**

- `slot` (`"Cannot access container with negative slot index: " +`)

**Returns:** `throw new`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException("Cannot access worldly container on side " + side + " : out of bounds slot index " + slot + " with size " + slots.length)
```

**Parameters:**

- `slots.length` (`"Cannot access worldly container on side " + side + " : out of bounds slot index " + slot + " with size " +`)

**Returns:** `throw new`

### size

```java
public int size()
```

**Returns:** `int`

### getResource

```java
public ItemResource getResource(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `ItemResource`

### getAmountAsLong

```java
public long getAmountAsLong(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `long`

### getCapacityAsLong

```java
public long getCapacityAsLong(int index, ItemResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)

**Returns:** `long`

### isValid

```java
public boolean isValid(int index, ItemResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)

**Returns:** `boolean`

### insert

```java
public int insert(int index, ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
public int extract(int index, ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`
