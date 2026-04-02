# VoidFluidHandler

**Package:** `net.neoforged.neoforge.fluids.capability.templates`
**Type:** class
**Implements:** `IFluidHandler`

## Description

VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting full.
It does not store fluid that gets filled into it, but "destroys" it upon receiving it.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `VoidFluidHandler` |  |

## Methods

### VoidFluidHandler

```java
public VoidFluidHandler()
```

**Returns:** `public`

### getTanks

```java
public int getTanks()
```

**Returns:** `int`

### getFluidInTank

```java
public FluidStack getFluidInTank(int tank)
```

**Parameters:**

- `tank` (`int`)

**Returns:** `FluidStack`

### getTankCapacity

```java
public int getTankCapacity(int tank)
```

**Parameters:**

- `tank` (`int`)

**Returns:** `int`

### isFluidValid

```java
public boolean isFluidValid(int tank, FluidStack stack)
```

**Parameters:**

- `tank` (`int`)
- `stack` (`FluidStack`)

**Returns:** `boolean`

### fill

```java
public int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

### drain

```java
public FluidStack drain(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### drain

```java
public FluidStack drain(int maxDrain, FluidAction action)
```

**Parameters:**

- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`
