# DataComponentFluidIngredient

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Extends:** `FluidIngredient`

## Description

Fluid ingredient that matches the given set of fluids, additionally performing either a
`DataComponentFluidIngredient#isStrict() strict` or partial test on the FluidStack's components.



Strict ingredients will only match fluid stacks that have exactly the provided components, while partial ones will
match if the stack's components contain all required components for the #components input predicate.
@see DataComponentIngredient DataComponentIngredient, its item equivalent

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DataComponentFluidIngredient>` |  |

## Methods

### DataComponentFluidIngredient

```java
public DataComponentFluidIngredient(HolderSet<Fluid> fluids, DataComponentPredicate components, boolean strict)
```

**Parameters:**

- `fluids` (`HolderSet<Fluid>`)
- `components` (`DataComponentPredicate`)
- `strict` (`boolean`)

**Returns:** `public`

### test

```java
public boolean test(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `boolean`

### generateStacks

```java
public Stream<FluidStack> generateStacks()
```

**Returns:** `public Stream<FluidStack>`

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

### fluids

```java
public HolderSet<Fluid> fluids()
```

**Returns:** `public HolderSet<Fluid>`

### components

```java
public DataComponentPredicate components()
```

**Returns:** `public DataComponentPredicate`

### isStrict

```java
public boolean isStrict()
```

**Returns:** `public boolean`

### of

```java
public static FluidIngredient of(boolean strict, FluidStack stack)
```

**Parameters:**

- `strict` (`boolean`)
- `stack` (`FluidStack`)

**Returns:** `FluidIngredient`

### of

```java
public static <T> FluidIngredient of(boolean strict, DataComponentType<? super T> type, T value, Fluid[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `type` (`DataComponentType<? super T>`)
- `value` (`T`)
- `fluids` (`Fluid[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static <T> FluidIngredient of(boolean strict, Supplier<? extends DataComponentType<? super T>> type, T value, Fluid[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `type` (`Supplier<? extends DataComponentType<? super T>>`)
- `value` (`T`)
- `fluids` (`Fluid[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentMap map, Fluid[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `fluids` (`Fluid[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentMap map, Holder<Fluid>[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `fluids` (`Holder<Fluid>[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentMap map, HolderSet<Fluid> fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `fluids` (`HolderSet<Fluid>`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentPredicate predicate, Holder<Fluid>[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `fluids` (`Holder<Fluid>[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentPredicate predicate, Fluid[]... fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `fluids` (`Fluid[]...`)

**Returns:** `FluidIngredient`

### of

```java
public static FluidIngredient of(boolean strict, DataComponentPredicate predicate, HolderSet<Fluid> fluids)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `fluids` (`HolderSet<Fluid>`)

**Returns:** `FluidIngredient`

### DataComponentFluidIngredient

```java
return new DataComponentFluidIngredient()
```

**Returns:** `return new`
