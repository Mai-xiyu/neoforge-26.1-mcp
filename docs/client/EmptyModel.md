# EmptyModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Extends:** `SimpleUnbakedGeometry<EmptyModel>`
**Side:** 🖥️ Client

## Description

A completely empty model with no quads or texture dependencies.



You can access it as a `BakedModel`, an `IUnbakedGeometry` or an `IGeometryLoader`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BAKED` | `BakedModel` |  |
| `INSTANCE` | `EmptyModel` |  |
| `LOADER` | `IGeometryLoader<EmptyModel>` |  |

## Methods

### EmptyModel

```java
private EmptyModel()
```

**Returns:** `private`

### addQuads

```java
protected void addQuads(IGeometryBakingContext owner, IModelBuilder<?> modelBuilder, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelTransform)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)

### bake

```java
public BakedModel bake(IGeometryBakingContext context, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState, ItemOverrides overrides)
```

**Parameters:**

- `context` (`IGeometryBakingContext`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)
- `overrides` (`ItemOverrides`)

**Returns:** `BakedModel`

### makeEmptyCulledFaces

```java
SimpleBakedModel must have a quad list per face in its map.
        private static Map<Direction, List<BakedQuad>> makeEmptyCulledFaces()
```

**Returns:** `SimpleBakedModel must have a quad list per face in its map.
        private static Map<Direction, List<BakedQuad>>`

### Baked

```java
public Baked()
```

**Returns:** `public`

### getParticleIcon

```java
public TextureAtlasSprite getParticleIcon()
```

**Returns:** `TextureAtlasSprite`
