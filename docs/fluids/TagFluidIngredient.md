# TagFluidIngredient

**Package:** `net.neoforged.neoforge.fluids.crafting`
**Type:** class
**Extends:** `FluidIngredient`

## Description

Fluid ingredient that matches all fluids within the given tag.



Unlike with ingredients, this is an explicit "type" of fluid ingredient,
though it may still be written without a type field, see `FluidIngredient#MAP_CODEC_NONEMPTY`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TagFluidIngredient>` |  |

## Methods

### TagFluidIngredient

```java
public TagFluidIngredient(TagKey<Fluid> tag)
```

**Parameters:**

- `tag` (`TagKey<Fluid>`)

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

### tag

```java
public TagKey<Fluid> tag()
```

**Returns:** `public TagKey<Fluid>`
