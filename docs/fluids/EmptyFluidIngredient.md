# EmptyFluidIngredient

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Extends:** `FluidIngredient`

## Description

Singleton that represents an empty fluid ingredient.



This is the only instance of an explicitly empty ingredient,
and may be used as a fallback in FluidIngredient convenience methods
(such as when trying to create an ingredient from an empty list).
@see FluidIngredient#empty()
@see FluidIngredient#isEmpty()

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `EmptyFluidIngredient` |  |
| `CODEC` | `MapCodec<EmptyFluidIngredient>` |  |

## Methods

### EmptyFluidIngredient

```java
private EmptyFluidIngredient()
```

**Returns:** `private`

### test

```java
public boolean test(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `boolean`

### generateStacks

```java
protected Stream<FluidStack> generateStacks()
```

**Returns:** `Stream<FluidStack>`

### isSimple

```java
public boolean isSimple()
```

**Returns:** `boolean`

### getType

```java
public FluidIngredientType<?> getType()
```

**Returns:** `FluidIngredientType<?>`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`
