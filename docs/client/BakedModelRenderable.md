# BakedModelRenderable

**Package:** `net.neoforged.neoforge.client.model.renderable`
**Type:** class
**Implements:** `IRenderable<BakedModelRenderable.Context>`
**Side:** 🖥️ Client

## Description

IRenderable Renderable wrapper for BakedModel baked models.



The context can provide the `BlockState`, faces to be rendered, a `RandomSource` and seed,
a `ModelData` instance, and a `Vector4f tint`.
@see Context

## Methods

### of

```java
public static BakedModelRenderable of(ModelResourceLocation model)
```

**Parameters:**

- `model` (`ModelResourceLocation`)

**Returns:** `BakedModelRenderable`

### of

```java
public static BakedModelRenderable of(BakedModel model)
```

**Parameters:**

- `model` (`BakedModel`)

**Returns:** `BakedModelRenderable`

### BakedModelRenderable

```java
return new BakedModelRenderable()
```

**Returns:** `return new`

### BakedModelRenderable

```java
private BakedModelRenderable(BakedModel model)
```

**Parameters:**

- `model` (`BakedModel`)

**Returns:** `private`

### render

```java
public void render(PoseStack poseStack, MultiBufferSource bufferSource, ITextureRenderTypeLookup textureRenderTypeLookup, int lightmap, int overlay, float partialTick, Context context)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `textureRenderTypeLookup` (`ITextureRenderTypeLookup`)
- `lightmap` (`int`)
- `overlay` (`int`)
- `partialTick` (`float`)
- `context` (`Context`)

### withContext

```java
public IRenderable<Unit> withContext(ModelData modelData)
```

**Parameters:**

- `modelData` (`ModelData`)

**Returns:** `public IRenderable<Unit>`

### withModelDataContext

```java
public IRenderable<ModelData> withModelDataContext()
```

**Returns:** `public IRenderable<ModelData>`

### Context

```java
public record Context(BlockState state, Direction[] faces, RandomSource randomSource, long seed, ModelData data, Vector4f tint)
```

**Parameters:**

- `state` (`BlockState`)
- `faces` (`Direction[]`)
- `randomSource` (`RandomSource`)
- `seed` (`long`)
- `data` (`ModelData`)
- `tint` (`Vector4f`)

**Returns:** `public record`

### Context

```java
public Context(ModelData data)
```

**Parameters:**

- `data` (`ModelData`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Context` | record |  |
