# BlockGeometryBakingContext

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** class
**Implements:** `IGeometryBakingContext`
**Side:** 🖥️ Client

## Description

A IGeometryBakingContext geometry baking context that is bound to a `BlockModel`.



Users should not be instantiating this themselves.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `owner` | `BlockModel` |  |
| `visibilityData` | `VisibilityData` |  |

## Methods

### BlockGeometryBakingContext

```java
.Internal
    public BlockGeometryBakingContext(BlockModel owner)
```

**Parameters:**

- `owner` (`BlockModel`)

**Returns:** `.Internal
    public`

### getModelName

```java
public String getModelName()
```

**Returns:** `String`

### hasCustomGeometry

```java
public boolean hasCustomGeometry()
```

**Returns:** `public boolean`

### getCustomGeometry

```java
public IUnbakedGeometry<?> getCustomGeometry()
```

**Returns:** `IUnbakedGeometry<?>`

### setCustomGeometry

```java
public void setCustomGeometry(IUnbakedGeometry<?> geometry)
```

**Parameters:**

- `geometry` (`IUnbakedGeometry<?>`)

**Returns:** `public void`

### isComponentVisible

```java
public boolean isComponentVisible(String part, boolean fallback)
```

**Parameters:**

- `part` (`String`)
- `fallback` (`boolean`)

**Returns:** `boolean`

### hasMaterial

```java
public boolean hasMaterial(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `boolean`

### getMaterial

```java
public Material getMaterial(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `Material`

### isGui3d

```java
public boolean isGui3d()
```

**Returns:** `boolean`

### useBlockLight

```java
public boolean useBlockLight()
```

**Returns:** `boolean`

### useAmbientOcclusion

```java
public boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### getRootTransform

```java
public Transformation getRootTransform()
```

**Returns:** `Transformation`

### setRootTransform

```java
public void setRootTransform(Transformation rootTransform)
```

**Parameters:**

- `rootTransform` (`Transformation`)

**Returns:** `public void`

### getRenderTypeHint

```java
public ResourceLocation getRenderTypeHint()
```

**Returns:** `ResourceLocation`

### setRenderTypeHint

```java
public void setRenderTypeHint(ResourceLocation renderTypeHint)
```

**Parameters:**

- `renderTypeHint` (`ResourceLocation`)

**Returns:** `public void`

### setGui3d

```java
public void setGui3d(boolean gui3d)
```

**Parameters:**

- `gui3d` (`boolean`)

**Returns:** `public void`

### copyFrom

```java
public void copyFrom(BlockGeometryBakingContext other)
```

**Parameters:**

- `other` (`BlockGeometryBakingContext`)

**Returns:** `public void`

### bake

```java
public BakedModel bake(ModelBaker baker, Function<Material, TextureAtlasSprite> bakedTextureGetter, ModelState modelTransform, ItemOverrides overrides)
```

**Parameters:**

- `baker` (`ModelBaker`)
- `bakedTextureGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)
- `overrides` (`ItemOverrides`)

**Returns:** `public BakedModel`

### IllegalStateException

```java
throw new IllegalStateException("Can not use custom baking without custom geometry")
```

**Parameters:**

- `geometry"` (`"Can not use custom baking without custom`)

**Returns:** `throw new`

### hasCustomVisibility

```java
public boolean hasCustomVisibility(String part)
```

**Parameters:**

- `part` (`String`)

**Returns:** `public boolean`

### isVisible

```java
public boolean isVisible(String part, boolean fallback)
```

**Parameters:**

- `part` (`String`)
- `fallback` (`boolean`)

**Returns:** `public boolean`

### setVisibilityState

```java
public void setVisibilityState(String partName, boolean type)
```

**Parameters:**

- `partName` (`String`)
- `type` (`boolean`)

**Returns:** `public void`

### copyFrom

```java
public void copyFrom(VisibilityData visibilityData)
```

**Parameters:**

- `visibilityData` (`VisibilityData`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `VisibilityData` | class |  |
