# FluidStacksResourceHandler

**Package:** `net.neoforged.neoforge.transfer.fluid`
**Type:** class
**Extends:** `StacksResourceHandler<FluidStack, FluidResource>`

## Description

Base implementation of a `ResourceHandler<FluidResource>` backed by a list of `FluidStack`s.


The following methods will typically be overridden:

(optional) `#isValid` to limit which resources are allowed in this handler; by default any resource is allowed.
(optional) `#getCapacity` to specify the capacity of this handler; by default the `#capacity` given in the constructor is used.
(recommended) `#onContentsChanged` to react to changes in this handler, for example to trigger `setChanged()`.


## Fields

| Name | Type | Description |
|------|------|-------------|
| `capacity` | `int` |  |

## Methods

### FluidStacksResourceHandler

```java
public FluidStacksResourceHandler(int size, int capacity)
```

**Parameters:**

- `size` (`int`)
- `capacity` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FluidStacksResourceHandler

```java
public FluidStacksResourceHandler(NonNullList<FluidStack> stacks, int capacity)
```

**Parameters:**

- `stacks` (`NonNullList<FluidStack>`)
- `capacity` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getResourceFrom

```java
public FluidResource getResourceFrom(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `FluidResource`

### getAmountFrom

```java
public int getAmountFrom(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

### getStackFrom

```java
protected FluidStack getStackFrom(FluidResource resource, int amount)
```

**Parameters:**

- `resource` (`FluidResource`)
- `amount` (`int`)

**Returns:** `FluidStack`

### getCapacity

```java
protected int getCapacity(int index, FluidResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`FluidResource`)

**Returns:** `int`

### copyOf

```java
protected FluidStack copyOf(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `FluidStack`

### matches

```java
public boolean matches(FluidStack stack, FluidResource resource)
```

**Parameters:**

- `stack` (`FluidStack`)
- `resource` (`FluidResource`)

**Returns:** `boolean`
