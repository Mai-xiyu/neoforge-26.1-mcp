# IUnbakedGeometry

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** interface<T extends IUnbakedGeometry<T>>
**Side:** 🖥️ Client

## Description

General interface for any model that can be baked, superset of vanilla `UnbakedModel`.



Instances of this class ar usually created via `IGeometryLoader`.
@see IGeometryLoader
@see IGeometryBakingContext

## Methods

### bake

```java
BakedModel bake(IGeometryBakingContext context, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState, ItemOverrides overrides)
```

**Parameters:**

- `context` (`IGeometryBakingContext`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)
- `overrides` (`ItemOverrides`)

**Returns:** `BakedModel`

### resolveParents

```java
default void resolveParents(Function<ResourceLocation, UnbakedModel> modelGetter, IGeometryBakingContext context)
```

**Parameters:**

- `modelGetter` (`Function<ResourceLocation, UnbakedModel>`)
- `context` (`IGeometryBakingContext`)

### getConfigurableComponentNames

```java
default Set<String> getConfigurableComponentNames()
```

**Returns:** `Set<String>`
