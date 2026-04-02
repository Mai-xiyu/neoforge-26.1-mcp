# CompositeRenderable

**Package:** `net.neoforged.neoforge.client.model.renderable`
**Type:** class
**Implements:** `IRenderable<CompositeRenderable.Transforms>`
**Side:** 🖥️ Client

## Description

A renderable object composed of a hierarchy of parts, each made up of a number of meshes.



Each mesh renders a set of quads using a different texture.
@see Builder

## Methods

### CompositeRenderable

```java
private CompositeRenderable()
```

**Returns:** `private`

### render

```java
public void render(PoseStack poseStack, MultiBufferSource bufferSource, ITextureRenderTypeLookup textureRenderTypeLookup, int lightmap, int overlay, float partialTick, Transforms context)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `textureRenderTypeLookup` (`ITextureRenderTypeLookup`)
- `lightmap` (`int`)
- `overlay` (`int`)
- `partialTick` (`float`)
- `context` (`Transforms`)

### builder

```java
public static Builder builder()
```

**Returns:** `public static Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Component

```java
public Component(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `public`

### render

```java
public void render(PoseStack poseStack, MultiBufferSource bufferSource, ITextureRenderTypeLookup textureRenderTypeLookup, int lightmap, int overlay, Transforms context)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `textureRenderTypeLookup` (`ITextureRenderTypeLookup`)
- `lightmap` (`int`)
- `overlay` (`int`)
- `context` (`Transforms`)

**Returns:** `public void`

### Mesh

```java
public Mesh(ResourceLocation texture)
```

**Parameters:**

- `texture` (`ResourceLocation`)

**Returns:** `public`

### render

```java
public void render(PoseStack poseStack, MultiBufferSource bufferSource, ITextureRenderTypeLookup textureRenderTypeLookup, int lightmap, int overlay)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `textureRenderTypeLookup` (`ITextureRenderTypeLookup`)
- `lightmap` (`int`)
- `overlay` (`int`)

**Returns:** `public void`

### Builder

```java
private Builder()
```

**Returns:** `private`

### child

```java
public PartBuilder<Builder> child(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `public PartBuilder<Builder>`

### get

```java
public CompositeRenderable get()
```

**Returns:** `public CompositeRenderable`

### PartBuilder

```java
private PartBuilder(T parent, Component component)
```

**Parameters:**

- `parent` (`T`)
- `component` (`Component`)

**Returns:** `private`

### child

```java
public PartBuilder<PartBuilder<T>> child(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `public PartBuilder<PartBuilder<T>>`

### addMesh

```java
public PartBuilder<T> addMesh(ResourceLocation texture, List<BakedQuad> quads)
```

**Parameters:**

- `texture` (`ResourceLocation`)
- `quads` (`List<BakedQuad>`)

**Returns:** `public PartBuilder<T>`

### end

```java
public T end()
```

**Returns:** `public T`

### of

```java
public static Transforms of(ImmutableMap<String, Matrix4f> parts)
```

**Parameters:**

- `parts` (`ImmutableMap<String, Matrix4f>`)

**Returns:** `Transforms`

### Transforms

```java
return new Transforms()
```

**Returns:** `return new`

### Transforms

```java
private Transforms(ImmutableMap<String, Matrix4f> parts)
```

**Parameters:**

- `parts` (`ImmutableMap<String, Matrix4f>`)

**Returns:** `private`

### getTransform

```java
public Matrix4f getTransform(String part)
```

**Parameters:**

- `part` (`String`)

**Returns:** `Matrix4f`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `PartBuilder` | class |  |
| `Transforms` | class |  |
