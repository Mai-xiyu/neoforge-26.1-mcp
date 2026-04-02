# ComposterWrapper

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Extends:** `SnapshotJournal<BlockState>`
**Annotations:** `@ApiStatus`

## Description

`ResourceHandler<ItemResource>` implementation for the composter block.

## Methods

### getBlockState

```java
public BlockState getBlockState()
```

**Returns:** `public BlockState`

### size

```java
public int size()
```

**Returns:** `int`

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

### updateSnapshots

```java
Always update snapshots even if increaseSuccessful below is false, to send the COMPOSTER_FILL level event updateSnapshots()
```

**Returns:** `Always update snapshots even if increaseSuccessful below is false, to send the COMPOSTER_FILL level event`

### setLevel

```java
 setLevel(currentLevel + 1)
```

**Parameters:**

- `1` (`currentLevel +`)

**Returns:** ``

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

### toString

```java
public String toString()
```

**Returns:** `String`

### size

```java
public int size()
```

**Returns:** `int`

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

### updateSnapshots

```java
 updateSnapshots()
```

**Returns:** ``

### setLevel

```java
 setLevel()
```

**Returns:** ``

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

### toString

```java
public String toString()
```

**Returns:** `String`
