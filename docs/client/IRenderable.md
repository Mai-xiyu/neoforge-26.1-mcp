# IRenderable

**Package:** `net.neoforged.neoforge.client.model.renderable`
**Type:** interface<T>
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

A standard interface for things that can be rendered to a `MultiBufferSource`.
@param <T> The type of context object used by the rendering logic

## Methods

### render

```java
void render(PoseStack poseStack, MultiBufferSource bufferSource, ITextureRenderTypeLookup textureRenderTypeLookup, int lightmap, int overlay, float partialTick, T context)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `textureRenderTypeLookup` (`ITextureRenderTypeLookup`)
- `lightmap` (`int`)
- `overlay` (`int`)
- `partialTick` (`float`)
- `context` (`T`)

### withContext

```java
default IRenderable<Unit> withContext(T context)
```

**Parameters:**

- `context` (`T`)

**Returns:** `IRenderable<Unit>`
