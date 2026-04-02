# FluidTank

**Package:** `net.neoforged.neoforge.fluids.capability.templates`
**Type:** class
**Implements:** `IFluidHandler`, `IFluidTank`

## Description

Flexible implementation of a Fluid Storage object. NOT REQUIRED.
@author King Lemming

## Fields

| Name | Type | Description |
|------|------|-------------|
| `validator` | `Predicate<FluidStack>` |  |
| `fluid` | `FluidStack` |  |
| `capacity` | `int` |  |

## Methods

### FluidTank

```java
public FluidTank(int capacity)
```

**Parameters:**

- `capacity` (`int`)

**Returns:** `public`

### this

```java
 this(e -> true)
```

**Parameters:**

- `true` (`e ->`)

**Returns:** ``

### FluidTank

```java
public FluidTank(int capacity, Predicate<FluidStack> validator)
```

**Parameters:**

- `capacity` (`int`)
- `validator` (`Predicate<FluidStack>`)

**Returns:** `public`

### setCapacity

```java
public FluidTank setCapacity(int capacity)
```

**Parameters:**

- `capacity` (`int`)

**Returns:** `public FluidTank`

### setValidator

```java
public FluidTank setValidator(Predicate<FluidStack> validator)
```

**Parameters:**

- `validator` (`Predicate<FluidStack>`)

**Returns:** `public FluidTank`

### isFluidValid

```java
public boolean isFluidValid(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `public boolean`

### getCapacity

```java
public int getCapacity()
```

**Returns:** `public int`

### getFluid

```java
public FluidStack getFluid()
```

**Returns:** `public FluidStack`

### getFluidAmount

```java
public int getFluidAmount()
```

**Returns:** `public int`

### readFromNBT

```java
public FluidTank readFromNBT(HolderLookup.Provider lookupProvider, CompoundTag nbt)
```

**Parameters:**

- `lookupProvider` (`HolderLookup.Provider`)
- `nbt` (`CompoundTag`)

**Returns:** `public FluidTank`

### writeToNBT

```java
public CompoundTag writeToNBT(HolderLookup.Provider lookupProvider, CompoundTag nbt)
```

**Parameters:**

- `lookupProvider` (`HolderLookup.Provider`)
- `nbt` (`CompoundTag`)

**Returns:** `public CompoundTag`

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

### getCapacity

```java
return getCapacity()
```

**Returns:** `return`

### isFluidValid

```java
public boolean isFluidValid(int tank, FluidStack stack)
```

**Parameters:**

- `tank` (`int`)
- `stack` (`FluidStack`)

**Returns:** `boolean`

### isFluidValid

```java
return isFluidValid()
```

**Returns:** `return`

### fill

```java
public int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

### onContentsChanged

```java
 onContentsChanged()
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

### drain

```java
public FluidStack drain(int maxDrain, FluidAction action)
```

**Parameters:**

- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `FluidStack`

### onContentsChanged

```java
 onContentsChanged()
```

**Returns:** ``

### onContentsChanged

```java
protected void onContentsChanged()
```

**Returns:** `protected void`

### setFluid

```java
public void setFluid(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getSpace

```java
public int getSpace()
```

**Returns:** `public int`
