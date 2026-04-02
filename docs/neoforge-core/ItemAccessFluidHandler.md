# ItemAccessFluidHandler

**Package:** `net.neoforged.neoforge.transfer.fluid`
**Type:** class
**Extends:** `ItemAccessResourceHandler<FluidResource>`

## Description

Base implementation of a simple fluid `ResourceHandler` backed by an `ItemAccess`.
Data is stored in a `SimpleFluidContent` component.


This class allows the backing items to contain any partial level of fluid up to its capacity.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `validItem` | `Item` |  |
| `component` | `DataComponentType<SimpleFluidContent>` |  |
| `capacity` | `int` |  |

## Methods

### ItemAccessFluidHandler

```java
public ItemAccessFluidHandler(ItemAccess itemAccess, DataComponentType<SimpleFluidContent> component, int capacity)
```

**Parameters:**

- `itemAccess` (`ItemAccess`)
- `component` (`DataComponentType<SimpleFluidContent>`)
- `capacity` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getResourceFrom

```java
protected FluidResource getResourceFrom(ItemResource accessResource, int index)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `index` (`int`)

**Returns:** `FluidResource`

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
protected ItemResource update(ItemResource accessResource, int index, FluidResource newResource, int newAmount)
```

**Parameters:**

- `accessResource` (`ItemResource`)
- `index` (`int`)
- `newResource` (`FluidResource`)
- `newAmount` (`int`)

**Returns:** `ItemResource`

### isValid

```java
public boolean isValid(int index, FluidResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`FluidResource`)

**Returns:** `boolean`

### getCapacity

```java
protected int getCapacity(int index, FluidResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`FluidResource`)

**Returns:** `int`
