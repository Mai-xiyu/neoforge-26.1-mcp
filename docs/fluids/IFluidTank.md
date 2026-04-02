# IFluidTank

**Package:** `net.neoforged.neoforge.fluids`
**Type:** interface

## Description

This interface represents a Fluid Tank. IT IS NOT REQUIRED but is provided for convenience.
You are free to handle Fluids in any way that you wish - this is simply an easy default way.
DO NOT ASSUME that these objects are used internally in all cases.

## Methods

### getFluid

```java
FluidStack getFluid()
```

**Returns:** `FluidStack`

### getFluidAmount

```java
int getFluidAmount()
```

**Returns:** `int`

### getCapacity

```java
int getCapacity()
```

**Returns:** `int`

### isFluidValid

```java
boolean isFluidValid(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `boolean`

### fill

```java
int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

### drain

```java
FluidStack drain(int maxDrain, FluidAction action)
```

**Parameters:**

- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### drain

```java
FluidStack drain(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`
