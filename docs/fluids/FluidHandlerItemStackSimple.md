# FluidHandlerItemStackSimple

**Package:** `net.neoforged.neoforge.fluids.capability.templates`
**Type:** class
**Implements:** `IFluidHandlerItem`

## Description

FluidHandlerItemStackSimple is a template capability provider for ItemStacks.
Data is stored in a `SimpleFluidContent` component.


This implementation only allows item containers to be fully filled or emptied, similar to vanilla buckets.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `componentType` | `Supplier<DataComponentType<SimpleFluidContent>>` |  |
| `container` | `ItemStack` |  |
| `capacity` | `int` |  |
| `emptyContainer` | `ItemStack` |  |

## Methods

### FluidHandlerItemStackSimple

```java
public public FluidHandlerItemStackSimple(Supplier<DataComponentType<SimpleFluidContent>> componentType, ItemStack container, int capacity)
```

**Parameters:**

- `componentType` (`Supplier<DataComponentType<SimpleFluidContent>>`)
- `container` (`ItemStack`)
- `capacity` (`int`)

**Returns:** `public`

### getContainer

```java
public ItemStack getContainer()
```

**Returns:** `ItemStack`

### getFluid

```java
public FluidStack getFluid()
```

**Returns:** `public FluidStack`

### setFluid

```java
protected void setFluid(FluidStack fluid)
```

**Parameters:**

- `fluid` (`FluidStack`)

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

### setContainerToEmpty

```java
 setContainerToEmpty()
```

**Returns:** ``

### canFillFluidType

```java
public boolean canFillFluidType(FluidStack fluid)
```

**Parameters:**

- `fluid` (`FluidStack`)

**Returns:** `public boolean`

### canDrainFluidType

```java
public boolean canDrainFluidType(FluidStack fluid)
```

**Parameters:**

- `fluid` (`FluidStack`)

**Returns:** `public boolean`

### setContainerToEmpty

```java
protected void setContainerToEmpty()
```

### Consumable

```java
public Consumable(Supplier<DataComponentType<SimpleFluidContent>> componentType, ItemStack container, int capacity)
```

**Parameters:**

- `componentType` (`Supplier<DataComponentType<SimpleFluidContent>>`)
- `container` (`ItemStack`)
- `capacity` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setContainerToEmpty

```java
protected void setContainerToEmpty()
```

### SwapEmpty

```java
public SwapEmpty(Supplier<DataComponentType<SimpleFluidContent>> componentType, ItemStack container, ItemStack emptyContainer, int capacity)
```

**Parameters:**

- `componentType` (`Supplier<DataComponentType<SimpleFluidContent>>`)
- `container` (`ItemStack`)
- `emptyContainer` (`ItemStack`)
- `capacity` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setContainerToEmpty

```java
protected void setContainerToEmpty()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Consumable` | class |  |
| `SwapEmpty` | class |  |
