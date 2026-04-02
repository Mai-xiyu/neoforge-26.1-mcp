# VanillaContainerWrapper

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Implements:** `ResourceHandler<ItemResource>`

## Description

An implementation of `ResourceHandler<ItemResource>` for vanilla's `Container`.


Important note: This wrapper assumes that the container owns its slots.
If the container does not own its slots, for example because it delegates to another container, this wrapper should not be used!
@see PlayerInventoryWrapper
@see WorldlyContainerWrapper

## Methods

### of

```java
ResourceHandler<ItemResource> of(Container container)
```

**Parameters:**

- `container` (`Container`)

**Returns:** `ResourceHandler<ItemResource>`

### internalOf

```java
Only expose a ResourceHandler in this method.
        return internalOf()
```

**Returns:** `Only expose a ResourceHandler in this method.
        return`

### internalOf

```java
static VanillaContainerWrapper internalOf(Container container)
```

**Parameters:**

- `container` (`Container`)

**Returns:** `static VanillaContainerWrapper`

### PlayerInventoryWrapper

```java
return new PlayerInventoryWrapper()
```

**Returns:** `return new`

### VanillaContainerWrapper

```java
return new VanillaContainerWrapper()
```

**Returns:** `return new`

### VanillaContainerWrapper

```java
 VanillaContainerWrapper(Container container)
```

**Parameters:**

- `container` (`Container`)

**Returns:** ``

### resize

```java
void resize()
```

### getSlotWrapper

```java
SlotWrapper getSlotWrapper(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `SlotWrapper`

### onRootCommit

```java
void onRootCommit()
```

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

### SlotWrapper

```java
 SlotWrapper(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** ``

### getStack

```java
protected ItemStack getStack()
```

**Returns:** `ItemStack`

### setStack

```java
protected void setStack(ItemStack item)
```

**Parameters:**

- `item` (`ItemStack`)

### isValid

```java
protected boolean isValid(ItemResource resource)
```

**Parameters:**

- `resource` (`ItemResource`)

**Returns:** `boolean`

### getCapacity

```java
protected int getCapacity(ItemResource resource)
```

**Parameters:**

- `resource` (`ItemResource`)

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
public void updateSnapshots(TransactionContext transaction)
```

**Parameters:**

- `transaction` (`TransactionContext`)

### onRootCommit

```java
protected void onRootCommit(ItemStack original)
```

**Parameters:**

- `original` (`ItemStack`)

### setStack

```java
 setStack()
```

**Returns:** ``

### toString

```java
public String toString()
```

**Returns:** `String`
