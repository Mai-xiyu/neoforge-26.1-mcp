# CauldronWrapper

**Package:** `net.neoforged.neoforge.fluids.capability.wrappers`
**Type:** class
**Implements:** `IFluidHandler`
**Annotations:** `@ApiStatus`

## Methods

### CauldronWrapper

```java
public CauldronWrapper(Level level, BlockPos pos)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)

**Returns:** `public`

### getTanks

```java
public int getTanks()
```

**Returns:** `int`

### getContent

```java
private CauldronFluidContent getContent(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `private CauldronFluidContent`

### IllegalStateException

```java
throw new IllegalStateException("Unexpected error: no cauldron at location " + pos)
```

**Parameters:**

- `pos` (`"Unexpected error: no cauldron at location " +`)

**Returns:** `throw new`

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

### updateLevel

```java
Called by fill and drain to update the block state.
    private void updateLevel(CauldronFluidContent newContent, int level, FluidAction action)
```

**Parameters:**

- `newContent` (`CauldronFluidContent`)
- `level` (`int`)
- `action` (`FluidAction`)

**Returns:** `Called by fill and drain to update the block state.
    private void`

### fill

```java
public int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

### updateLevel

```java
 updateLevel(currentLevel + insertedIncrements * levelIncrements)
```

**Parameters:**

- `levelIncrements` (`currentLevel + insertedIncrements *`)

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

### drain

```java
private FluidStack drain(BlockState state, int maxDrain, FluidAction action)
```

**Parameters:**

- `state` (`BlockState`)
- `maxDrain` (`int`)
- `action` (`FluidAction`)

**Returns:** `private FluidStack`

### updateLevel

```java
Otherwise just decrease levels updateLevel()
```

**Returns:** `Otherwise just decrease levels`

### FluidStack

```java
return new FluidStack(extractedIncrements * amountIncrements)
```

**Parameters:**

- `amountIncrements` (`extractedIncrements *`)

**Returns:** `return new`
