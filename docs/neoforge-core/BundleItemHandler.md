# BundleItemHandler

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Implements:** `ResourceHandler<ItemResource>`

## Description

Item `ResourceHandler` backed by an `ItemAccess` for use with bundle-like items.
The stacks are stored in a `BundleContents` data component.



To use this class, register a new `DataComponentType` which holds an `BundleContents` for your item.
Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `itemAccess` | `ItemAccess` |  |
| `validItem` | `Item` |  |
| `component` | `DataComponentType<BundleContents>` |  |

## Methods

### BundleItemHandler

```java
public BundleItemHandler(ItemAccess itemAccess, DataComponentType<BundleContents> component)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `component` (`DataComponentType<BundleContents>`)

**Returns:** `public`

### size

```java
public int size()
```

**Returns:** `int`

### getStack

```java
ItemStackTemplate getStack(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `ItemStackTemplate`

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
