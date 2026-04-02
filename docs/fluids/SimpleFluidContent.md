# SimpleFluidContent

**Package:** `net.neoforged.neoforge.fluids`
**Type:** class
**Implements:** `DataComponentHolder`

## Description

Stock data component class to hold a `FluidStack`.


A corresponding `DataComponentType` must be registered to use this class.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `SimpleFluidContent` |  |
| `CODEC` | `Codec<SimpleFluidContent>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, SimpleFluidContent>` |  |

## Methods

### SimpleFluidContent

```java
private SimpleFluidContent(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `private`

### copyOf

```java
public static SimpleFluidContent copyOf(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `public static SimpleFluidContent`

### copy

```java
public FluidStack copy()
```

**Returns:** `public FluidStack`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getFluid

```java
public Fluid getFluid()
```

**Returns:** `public Fluid`

### getFluidHolder

```java
public Holder<Fluid> getFluidHolder()
```

**Returns:** `public Holder<Fluid>`

### is

```java
public boolean is(TagKey<Fluid> tag)
```

**Parameters:**

- `tag` (`TagKey<Fluid>`)

**Returns:** `public boolean`

### is

```java
public boolean is(Fluid fluid)
```

**Parameters:**

- `fluid` (`Fluid`)

**Returns:** `public boolean`

### is

```java
public boolean is(Predicate<Holder<Fluid>> predicate)
```

**Parameters:**

- `predicate` (`Predicate<Holder<Fluid>>`)

**Returns:** `public boolean`

### is

```java
public boolean is(Holder<Fluid> holder)
```

**Parameters:**

- `holder` (`Holder<Fluid>`)

**Returns:** `public boolean`

### is

```java
public boolean is(HolderSet<Fluid> holders)
```

**Parameters:**

- `holders` (`HolderSet<Fluid>`)

**Returns:** `public boolean`

### getAmount

```java
public int getAmount()
```

**Returns:** `public int`

### getFluidType

```java
public FluidType getFluidType()
```

**Returns:** `public FluidType`

### is

```java
public boolean is(FluidType fluidType)
```

**Parameters:**

- `fluidType` (`FluidType`)

**Returns:** `public boolean`

### matches

```java
public boolean matches(FluidStack other)
```

**Parameters:**

- `other` (`FluidStack`)

**Returns:** `public boolean`

### isSameFluid

```java
public boolean isSameFluid(FluidStack other)
```

**Parameters:**

- `other` (`FluidStack`)

**Returns:** `public boolean`

### isSameFluidSameComponents

```java
public boolean isSameFluidSameComponents(FluidStack other)
```

**Parameters:**

- `other` (`FluidStack`)

**Returns:** `public boolean`

### isSameFluidSameComponents

```java
public boolean isSameFluidSameComponents(SimpleFluidContent content)
```

**Parameters:**

- `content` (`SimpleFluidContent`)

**Returns:** `public boolean`

### isSameFluidSameComponents

```java
return isSameFluidSameComponents()
```

**Returns:** `return`

### getComponents

```java
public DataComponentMap getComponents()
```

**Returns:** `DataComponentMap`

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
