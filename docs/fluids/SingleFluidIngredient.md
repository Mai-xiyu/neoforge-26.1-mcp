# SingleFluidIngredient

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Extends:** `FluidIngredient`

## Description

Fluid ingredient that only matches the fluid of the given stack.



Unlike with ingredients, this is an explicit "type" of fluid ingredient,
though it may still be written without a type field, see `FluidIngredient#MAP_CODEC_NONEMPTY`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SingleFluidIngredient>` |  |

## Methods

### SingleFluidIngredient

```java
public SingleFluidIngredient(Holder<Fluid> fluid)
```

**Parameters:**

- `fluid` (`Holder<Fluid>`)

**Returns:** `public`

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

### fluid

```java
public Holder<Fluid> fluid()
```

**Returns:** `public Holder<Fluid>`
