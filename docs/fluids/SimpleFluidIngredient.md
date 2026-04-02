# SimpleFluidIngredient

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Extends:** `FluidIngredient`

## Description

Fluid ingredient that matches the fluids specified by the given `HolderSet`.
Most commonly, this will either be a list of fluids or a fluid tag.



Unlike with ingredients, this is technically an explicit "type" of fluid ingredient,
though in JSON, it is still written without a type field, see `FluidIngredientCodecs#codec()`

## Methods

### SimpleFluidIngredient

```java
public SimpleFluidIngredient(HolderSet<Fluid> values)
```

**Parameters:**

- `values` (`HolderSet<Fluid>`)

**Returns:** `public`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Fluid ingredients can't be empty!")
```

**Parameters:**

- `empty!"` (`"Fluid ingredients can't be`)

**Returns:** `throw new`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Fluid ingredients can't contain the empty fluid")
```

**Parameters:**

- `fluid"` (`"Fluid ingredients can't contain the empty`)

**Returns:** `throw new`

### test

```java
public boolean test(FluidStack fluidStack)
```

**Parameters:**

- `fluidStack` (`FluidStack`)

**Returns:** `boolean`

### generateFluids

```java
protected Stream<Holder<Fluid>> generateFluids()
```

**Returns:** `Stream<Holder<Fluid>>`

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

### display

```java
public SlotDisplay display()
```

**Returns:** `SlotDisplay`

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

### fluidSet

```java
public HolderSet<Fluid> fluidSet()
```

**Returns:** `public HolderSet<Fluid>`
