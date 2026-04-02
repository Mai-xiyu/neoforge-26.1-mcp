# DynamicFluidContainerModel

**Package:** `net.neoforged.neoforge.client.model.item`
**Type:** class
**Implements:** `ItemModel`
**Side:** 🖥️ Client
**Annotations:** `@SuppressWarnings("deprecation")`

## Description

A dynamic fluid container model, capable of re-texturing itself at runtime to match the contained fluid.



Composed of a base layer, a fluid layer (applied with a mask) and a cover layer (optionally applied with a mask).
The entire model may optionally be flipped if the fluid is gaseous, and the fluid layer may glow if light-emitting.

## Methods

### DynamicFluidContainerModel

```java
ll never change

    private DynamicFluidContainerModel(Unbaked unbakedModel, BakingContext bakingContext, Matrix4fc transformation)
```

**Parameters:**

- `unbakedModel` (`Unbaked`)
- `bakingContext` (`BakingContext`)
- `transformation` (`Matrix4fc`)

**Returns:** `ll never change

    private`

### bakeModelForFluid

```java
private ItemModel bakeModelForFluid(Fluid fluid)
```

**Parameters:**

- `fluid` (`Fluid`)

**Returns:** `private ItemModel`

### CompositeModel

```java
return new CompositeModel()
```

**Returns:** `return new`

### setMaxEmissivity

```java
private static BakedQuad.MaterialInfo setMaxEmissivity(BakedQuad.MaterialInfo materialInfo)
```

**Parameters:**

- `materialInfo` (`BakedQuad.MaterialInfo`)

**Returns:** `private static BakedQuad.MaterialInfo`

### update

```java
public void update(ItemStackRenderState renderState, ItemStack stack, ItemModelResolver modelResolver, ItemDisplayContext displayContext, ClientLevel level, ItemOwner owner, int seed)
```

**Parameters:**

- `renderState` (`ItemStackRenderState`)
- `stack` (`ItemStack`)
- `modelResolver` (`ItemModelResolver`)
- `displayContext` (`ItemDisplayContext`)
- `level` (`ClientLevel`)
- `owner` (`ItemOwner`)
- `seed` (`int`)

### Textures

```java
public record Textures(Optional<Material> particle, Optional<Material> base, Optional<Material> fluid, Optional<Material> cover)
```

**Parameters:**

- `particle` (`Optional<Material>`)
- `base` (`Optional<Material>`)
- `fluid` (`Optional<Material>`)
- `cover` (`Optional<Material>`)

**Returns:** `public record`

### type

```java
public MapCodec<? extends ItemModel.Unbaked> type()
```

**Returns:** `MapCodec<? extends ItemModel.Unbaked>`

### bake

```java
public ItemModel bake(BakingContext bakingContext, Matrix4fc transformation)
```

**Parameters:**

- `bakingContext` (`BakingContext`)
- `transformation` (`Matrix4fc`)

**Returns:** `ItemModel`

### DynamicFluidContainerModel

```java
return new DynamicFluidContainerModel()
```

**Returns:** `return new`

### resolveDependencies

```java
public void resolveDependencies(Resolver resolver)
```

**Parameters:**

- `resolver` (`Resolver`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Textures` | record |  |
| `Unbaked` | record |  |
