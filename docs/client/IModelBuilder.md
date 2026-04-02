# IModelBuilder

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface<T extends IModelBuilder<T>>
**Side:** 🖥️ Client

## Description

Base interface for any object that collects culled and unculled faces and bakes them into a model.



Provides a generic base implementation via `#of(boolean, boolean, boolean, ItemTransforms, ItemOverrides, TextureAtlasSprite, RenderTypeGroup)`
and a quad-collecting alternative via `#collecting(List)`.

## Methods

### of

```java
static IModelBuilder<?> of(boolean hasAmbientOcclusion, boolean usesBlockLight, boolean isGui3d, ItemTransforms transforms, ItemOverrides overrides, TextureAtlasSprite particle, RenderTypeGroup renderTypes)
```

**Parameters:**

- `hasAmbientOcclusion` (`boolean`)
- `usesBlockLight` (`boolean`)
- `isGui3d` (`boolean`)
- `transforms` (`ItemTransforms`)
- `overrides` (`ItemOverrides`)
- `particle` (`TextureAtlasSprite`)
- `renderTypes` (`RenderTypeGroup`)

**Returns:** `IModelBuilder<?>`

### Simple

```java
return new Simple()
```

**Returns:** `return new`

### collecting

```java
static IModelBuilder<?> collecting(List<BakedQuad> quads)
```

**Parameters:**

- `quads` (`List<BakedQuad>`)

**Returns:** `IModelBuilder<?>`

### Collecting

```java
return new Collecting()
```

**Returns:** `return new`

### addCulledFace

```java
T addCulledFace(Direction facing, BakedQuad quad)
```

**Parameters:**

- `facing` (`Direction`)
- `quad` (`BakedQuad`)

**Returns:** `T`

### addUnculledFace

```java
T addUnculledFace(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `T`

### build

```java
BakedModel build()
```

**Returns:** `BakedModel`

### Simple

```java
private Simple(boolean hasAmbientOcclusion, boolean usesBlockLight, boolean isGui3d, ItemTransforms transforms, ItemOverrides overrides, TextureAtlasSprite particle, RenderTypeGroup renderTypes)
```

**Parameters:**

- `hasAmbientOcclusion` (`boolean`)
- `usesBlockLight` (`boolean`)
- `isGui3d` (`boolean`)
- `transforms` (`ItemTransforms`)
- `overrides` (`ItemOverrides`)
- `particle` (`TextureAtlasSprite`)
- `renderTypes` (`RenderTypeGroup`)

**Returns:** `private`

### addCulledFace

```java
public Simple addCulledFace(Direction facing, BakedQuad quad)
```

**Parameters:**

- `facing` (`Direction`)
- `quad` (`BakedQuad`)

**Returns:** `Simple`

### addUnculledFace

```java
public Simple addUnculledFace(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `Simple`

### build

```java
public BakedModel build()
```

**Returns:** `BakedModel`

### Collecting

```java
private Collecting(List<BakedQuad> quads)
```

**Parameters:**

- `quads` (`List<BakedQuad>`)

**Returns:** `private`

### addCulledFace

```java
public Collecting addCulledFace(Direction facing, BakedQuad quad)
```

**Parameters:**

- `facing` (`Direction`)
- `quad` (`BakedQuad`)

**Returns:** `Collecting`

### addUnculledFace

```java
public Collecting addUnculledFace(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `Collecting`

### build

```java
public BakedModel build()
```

**Returns:** `BakedModel`
