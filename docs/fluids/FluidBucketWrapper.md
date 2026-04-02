# FluidBucketWrapper

**Package:** `net.neoforged.neoforge.fluids.capability.wrappers`
**Type:** class
**Implements:** `IFluidHandlerItem`

## Description

Wrapper for vanilla and forge buckets.
Swaps between empty bucket and filled bucket of the correct type.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `container` | `ItemStack` |  |

## Methods

### FluidBucketWrapper

```java
public FluidBucketWrapper(ItemStack container)
```

**Parameters:**

- `container` (`ItemStack`)

**Returns:** `public`

### getContainer

```java
public ItemStack getContainer()
```

**Returns:** `ItemStack`

### canFillFluidType

```java
public boolean canFillFluidType(FluidStack fluid)
```

**Parameters:**

- `fluid` (`FluidStack`)

**Returns:** `public boolean`

### getFluid

```java
public FluidStack getFluid()
```

**Returns:** `public FluidStack`

### setFluid

```java
protected void setFluid(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `protected void`

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

### getFluid

```java
return getFluid()
```

**Returns:** `return`

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

### setFluid

```java
 setFluid()
```

**Returns:** ``

### drain

```java
public FluidStack drain(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### setFluid

```java
 setFluid()
```

**Returns:** ``

### drain

```java
public FluidStack drain(int maxDrain, FluidAction action)
```

**Parameters:**

- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### setFluid

```java
 setFluid()
```

**Returns:** ``
