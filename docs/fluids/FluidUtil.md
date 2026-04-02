# FluidUtil

**Package:** `net.neoforged.neoforge.fluids`
**Type:** class

## Methods

### FluidUtil

```java
private FluidUtil()
```

**Returns:** `private`

### interactWithFluidHandler

```java
public static boolean interactWithFluidHandler(Player player, InteractionHand hand, Level level, BlockPos pos, Direction side)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `boolean`

### interactWithFluidHandler

```java
public static boolean interactWithFluidHandler(Player player, InteractionHand hand, IFluidHandler handler)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)
- `handler` (`IFluidHandler`)

**Returns:** `boolean`

### tryFillContainer

```java
public static FluidActionResult tryFillContainer(ItemStack container, IFluidHandler fluidSource, int maxAmount, Player player, boolean doFill)
```

**Parameters:**

- `container` (`ItemStack`)
- `fluidSource` (`IFluidHandler`)
- `maxAmount` (`int`)
- `player` (`Player`)
- `doFill` (`boolean`)

**Returns:** `FluidActionResult`

### tryFluidTransfer

```java
 tryFluidTransfer()
```

**Returns:** ``

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### tryEmptyContainer

```java
public static FluidActionResult tryEmptyContainer(ItemStack container, IFluidHandler fluidDestination, int maxAmount, Player player, boolean doDrain)
```

**Parameters:**

- `container` (`ItemStack`)
- `fluidDestination` (`IFluidHandler`)
- `maxAmount` (`int`)
- `player` (`Player`)
- `doDrain` (`boolean`)

**Returns:** `FluidActionResult`

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### tryFillContainerAndStow

```java
public static FluidActionResult tryFillContainerAndStow(ItemStack container, IFluidHandler fluidSource, IItemHandler inventory, int maxAmount, Player player, boolean doFill)
```

**Parameters:**

- `container` (`ItemStack`)
- `fluidSource` (`IFluidHandler`)
- `inventory` (`IItemHandler`)
- `maxAmount` (`int`)
- `player` (`Player`)
- `doFill` (`boolean`)

**Returns:** `FluidActionResult`

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### tryEmptyContainerAndStow

```java
public static FluidActionResult tryEmptyContainerAndStow(ItemStack container, IFluidHandler fluidDestination, IItemHandler inventory, int maxAmount, Player player, boolean doDrain)
```

**Parameters:**

- `container` (`ItemStack`)
- `fluidDestination` (`IFluidHandler`)
- `inventory` (`IItemHandler`)
- `maxAmount` (`int`)
- `player` (`Player`)
- `doDrain` (`boolean`)

**Returns:** `FluidActionResult`

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### FluidActionResult

```java
return new FluidActionResult()
```

**Returns:** `return new`

### tryFluidTransfer

```java
public static FluidStack tryFluidTransfer(IFluidHandler fluidDestination, IFluidHandler fluidSource, int maxAmount, boolean doTransfer)
```

**Parameters:**

- `fluidDestination` (`IFluidHandler`)
- `fluidSource` (`IFluidHandler`)
- `maxAmount` (`int`)
- `doTransfer` (`boolean`)

**Returns:** `FluidStack`

### tryFluidTransfer_Internal

```java
return tryFluidTransfer_Internal()
```

**Returns:** `return`

### tryFluidTransfer

```java
public static FluidStack tryFluidTransfer(IFluidHandler fluidDestination, IFluidHandler fluidSource, FluidStack resource, boolean doTransfer)
```

**Parameters:**

- `fluidDestination` (`IFluidHandler`)
- `fluidSource` (`IFluidHandler`)
- `resource` (`FluidStack`)
- `doTransfer` (`boolean`)

**Returns:** `FluidStack`

### tryFluidTransfer_Internal

```java
return tryFluidTransfer_Internal()
```

**Returns:** `return`

### getFluidHandler

```java
public static Optional<IFluidHandlerItem> getFluidHandler(ItemStack itemStack)
```

**Parameters:**

- `itemStack` (`ItemStack`)

**Returns:** `Optional<IFluidHandlerItem>`

### getFluidContained

```java
public static Optional<FluidStack> getFluidContained(ItemStack container)
```

**Parameters:**

- `container` (`ItemStack`)

**Returns:** `Optional<FluidStack>`

### getFluidHandler

```java
public static Optional<IFluidHandler> getFluidHandler(Level level, BlockPos blockPos, Direction side)
```

**Parameters:**

- `level` (`Level`)
- `blockPos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `Optional<IFluidHandler>`

### tryPickUpFluid

```java
public static FluidActionResult tryPickUpFluid(ItemStack emptyContainer, Player playerIn, Level level, BlockPos pos, Direction side)
```

**Parameters:**

- `emptyContainer` (`ItemStack`)
- `playerIn` (`Player`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `FluidActionResult`

### tryFillContainer

```java
return tryFillContainer()
```

**Returns:** `return`

### tryPlaceFluid

```java
public static FluidActionResult tryPlaceFluid(Player player, Level level, InteractionHand hand, BlockPos pos, ItemStack container, FluidStack resource)
```

**Parameters:**

- `player` (`Player`)
- `level` (`Level`)
- `hand` (`InteractionHand`)
- `pos` (`BlockPos`)
- `container` (`ItemStack`)
- `resource` (`FluidStack`)

**Returns:** `FluidActionResult`

### tryPlaceFluid

```java
public static boolean tryPlaceFluid(Player player, Level level, InteractionHand hand, BlockPos pos, IFluidHandler fluidSource, FluidStack resource)
```

**Parameters:**

- `player` (`Player`)
- `level` (`Level`)
- `hand` (`InteractionHand`)
- `pos` (`BlockPos`)
- `fluidSource` (`IFluidHandler`)
- `resource` (`FluidStack`)

**Returns:** `boolean`

### BlockWrapper

```java
return new BlockWrapper()
```

**Returns:** `return new`

### destroyBlockOnFluidPlacement

```java
public static void destroyBlockOnFluidPlacement(Level level, BlockPos pos)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)

### getFilledBucket

```java
public static ItemStack getFilledBucket(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`
