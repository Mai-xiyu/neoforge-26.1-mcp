# ItemAccessItemHandler

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Extends:** `ItemAccessResourceHandler<ItemResource>`

## Description

Base implementation of an item `ResourceHandler` backed by an `ItemAccess`.
The stacks are stored in a `ItemContainerContents` data component.



To use this class, register a new `DataComponentType` which holds an `ItemContainerContents` for your item.
Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `validItem` | `Item` |  |
| `component` | `DataComponentType<ItemContainerContents>` |  |

## Methods

### ItemAccessItemHandler

```java
public ItemAccessItemHandler(ItemAccess itemAccess, DataComponentType<ItemContainerContents> component, int size)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `component` (`DataComponentType<ItemContainerContents>`)
- `size` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getContents

```java
protected ItemContainerContents getContents(ItemResource accessResource)
```

**Parameters:**

- `accessResource` (`ItemResource`)

**Returns:** `ItemContainerContents`

### getStackFromContents

```java
protected ItemStack getStackFromContents(ItemContainerContents contents, int slot)
```

**Parameters:**

- `contents` (`ItemContainerContents`)
- `slot` (`int`)

**Returns:** `ItemStack`

### getResourceFrom

```java
protected ItemResource getResourceFrom(ItemResource accessResource, int index)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `index` (`int`)

**Returns:** `ItemResource`

### getAmountFrom

```java
protected int getAmountFrom(ItemResource accessResource, int index)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `index` (`int`)

**Returns:** `int`

### update

```java
protected ItemResource update(ItemResource accessResource, int index, ItemResource newResource, int newAmount)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `index` (`int`)
- `newResource` (`ItemResource`)
- `newAmount` (`int`)

**Returns:** `ItemResource`

### isValid

```java
public boolean isValid(int index, ItemResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)

**Returns:** `boolean`

### getCapacity

```java
protected int getCapacity(int index, ItemResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)

**Returns:** `int`
