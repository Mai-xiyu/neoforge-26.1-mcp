# FluidInstance

**Package:** `net.neoforged.neoforge.fluids`
**Type:** interface
**Extends:** `TypedInstance<Fluid>, DataComponentGetter`

## Methods

### amount

```java
int amount()
```

**Returns:** `int`

### getFluidType

```java
Returns the fluid type of this instance.
    default FluidType getFluidType()
```

**Returns:** `Returns the fluid type of this instance.
    default FluidType`

### is

```java
Check if the fluid type of this instance is equal to the given fluid type.
    default boolean is(FluidType fluidType)
```

**Parameters:**

- `fluidType` (`FluidType`)

**Returns:** `Check if the fluid type of this instance is equal to the given fluid type.
    default boolean`
