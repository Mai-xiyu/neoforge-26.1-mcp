# IFluidHandler

**Package:** `net.neoforged.neoforge.fluids.capability`
**Type:** interface

## Description

Implement this interface as a capability which should handle fluids, generally storing them in
one or more internal `IFluidTank` objects.



A reference implementation is provided `TileFluidHandler`.

## Methods

### execute

```java
public boolean execute()
```

**Returns:** `public boolean`

### simulate

```java
public boolean simulate()
```

**Returns:** `public boolean`

### getTanks

```java
int getTanks()
```

**Returns:** `int`

### getFluidInTank

```java
FluidStack getFluidInTank(int tank)
```

**Parameters:**

- `tank` (`int`)

**Returns:** `FluidStack`

### getTankCapacity

```java
int getTankCapacity(int tank)
```

**Parameters:**

- `tank` (`int`)

**Returns:** `int`

### isFluidValid

```java
boolean isFluidValid(int tank, FluidStack stack)
```

**Parameters:**

- `tank` (`int`)
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
FluidStack drain(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### drain

```java
FluidStack drain(int maxDrain, FluidAction action)
```

**Parameters:**

- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`
