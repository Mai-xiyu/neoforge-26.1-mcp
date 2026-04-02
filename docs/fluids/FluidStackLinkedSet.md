# FluidStackLinkedSet

**Package:** `net.neoforged.neoforge.fluids`
**Type:** class

## Description

Utility class for creating ObjectLinkedOpenCustomHashSet linked set for `FluidStack`
with specific Hash.Strategy hash strategy as `FluidStack` does not override `#hashCode()` and `#equals(Object)`.
@see net.minecraft.world.item.ItemStackLinkedSet

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE_AND_COMPONENTS` | `Hash.Strategy<? super FluidStack>` |  |

## Methods

### hashCode

```java
public int hashCode(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `public int`

### equals

```java
public boolean equals(FluidStack first, FluidStack second)
```

**Parameters:**

- `first` (`FluidStack`)
- `second` (`FluidStack`)

**Returns:** `public boolean`

### createTypeAndComponentsSet

```java
public static Set<FluidStack> createTypeAndComponentsSet()
```

**Returns:** `public static Set<FluidStack>`
