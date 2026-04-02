# BucketPickupHandlerWrapper

**Package:** `net.neoforged.neoforge.fluids.capability.wrappers`
**Type:** class
**Implements:** `IFluidHandler`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `player` | `Player` |  |
| `bucketPickupHandler` | `BucketPickup` |  |
| `world` | `Level` |  |
| `blockPos` | `BlockPos` |  |

## Methods

### BucketPickupHandlerWrapper

```java
public BucketPickupHandlerWrapper(Player player, BucketPickup bucketPickupHandler, Level world, BlockPos blockPos)
```

**Parameters:**

- `player` (`Player`)
- `bucketPickupHandler` (`BucketPickup`)
- `world` (`Level`)
- `blockPos` (`BlockPos`)

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

### FluidStack

```java
return new FluidStack()
```

**Returns:** `return new`
