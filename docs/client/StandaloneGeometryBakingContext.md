# StandaloneGeometryBakingContext

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** class
**Implements:** `IGeometryBakingContext`
**Side:** 🖥️ Client

## Description

A IGeometryBakingContext geometry baking context that is not bound to block/item model loading.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LOCATION` | `ResourceLocation` |  |
| `INSTANCE` | `StandaloneGeometryBakingContext` |  |

## Methods

### create

```java
public static StandaloneGeometryBakingContext create(ResourceLocation modelName)
```

**Parameters:**

- `modelName` (`ResourceLocation`)

**Returns:** `public static StandaloneGeometryBakingContext`

### create

```java
public static StandaloneGeometryBakingContext create(Map<String, ResourceLocation> textures)
```

**Parameters:**

- `textures` (`Map<String, ResourceLocation>`)

**Returns:** `public static StandaloneGeometryBakingContext`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
public static StandaloneGeometryBakingContext create(ResourceLocation modelName, Map<String, ResourceLocation> textures)
```

**Parameters:**

- `modelName` (`ResourceLocation`)
- `textures` (`Map<String, ResourceLocation>`)

**Returns:** `public static StandaloneGeometryBakingContext`

### StandaloneGeometryBakingContext

```java
private StandaloneGeometryBakingContext(ResourceLocation modelName, Predicate<String> materialCheck, Function<String, Material> materialLookup, boolean isGui3d, boolean useBlockLight, boolean useAmbientOcclusion, ItemTransforms transforms, Transformation rootTransform, ResourceLocation renderTypeHint, BiPredicate<String, Boolean> visibilityTest)
```

**Parameters:**

- `modelName` (`ResourceLocation`)
- `materialCheck` (`Predicate<String>`)
- `materialLookup` (`Function<String, Material>`)
- `isGui3d` (`boolean`)
- `useBlockLight` (`boolean`)
- `useAmbientOcclusion` (`boolean`)
- `transforms` (`ItemTransforms`)
- `rootTransform` (`Transformation`)
- `renderTypeHint` (`ResourceLocation`)
- `visibilityTest` (`BiPredicate<String, Boolean>`)

**Returns:** `private`

### getModelName

```java
public String getModelName()
```

**Returns:** `String`

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

### getRenderTypeHint

```java
public ResourceLocation getRenderTypeHint()
```

**Returns:** `ResourceLocation`

### isComponentVisible

```java
public boolean isComponentVisible(String component, boolean fallback)
```

**Parameters:**

- `component` (`String`)
- `fallback` (`boolean`)

**Returns:** `boolean`

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

### builder

```java
public static Builder builder(IGeometryBakingContext parent)
```

**Parameters:**

- `parent` (`IGeometryBakingContext`)

**Returns:** `public static Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Builder

```java
private Builder()
```

**Returns:** `private`

### Builder

```java
private Builder(IGeometryBakingContext parent)
```

**Parameters:**

- `parent` (`IGeometryBakingContext`)

**Returns:** `private`

### withTextures

```java
public Builder withTextures(Map<String, ResourceLocation> textures, ResourceLocation defaultTexture)
```

**Parameters:**

- `textures` (`Map<String, ResourceLocation>`)
- `defaultTexture` (`ResourceLocation`)

**Returns:** `public Builder`

### withTextures

```java
return withTextures()
```

**Returns:** `return`

### withTextures

```java
public Builder withTextures(ResourceLocation atlasLocation, Map<String, ResourceLocation> textures, ResourceLocation defaultTexture)
```

**Parameters:**

- `atlasLocation` (`ResourceLocation`)
- `textures` (`Map<String, ResourceLocation>`)
- `defaultTexture` (`ResourceLocation`)

**Returns:** `public Builder`

### withMaterials

```java
public Builder withMaterials(Map<String, Material> materials, Material defaultMaterial)
```

**Parameters:**

- `materials` (`Map<String, Material>`)
- `defaultMaterial` (`Material`)

**Returns:** `public Builder`

### withGui3d

```java
public Builder withGui3d(boolean isGui3d)
```

**Parameters:**

- `isGui3d` (`boolean`)

**Returns:** `public Builder`

### withUseBlockLight

```java
public Builder withUseBlockLight(boolean useBlockLight)
```

**Parameters:**

- `useBlockLight` (`boolean`)

**Returns:** `public Builder`

### withUseAmbientOcclusion

```java
public Builder withUseAmbientOcclusion(boolean useAmbientOcclusion)
```

**Parameters:**

- `useAmbientOcclusion` (`boolean`)

**Returns:** `public Builder`

### withTransforms

```java
public Builder withTransforms(ItemTransforms transforms)
```

**Parameters:**

- `transforms` (`ItemTransforms`)

**Returns:** `public Builder`

### withRootTransform

```java
public Builder withRootTransform(Transformation rootTransform)
```

**Parameters:**

- `rootTransform` (`Transformation`)

**Returns:** `public Builder`

### withRenderTypeHint

```java
public Builder withRenderTypeHint(ResourceLocation renderTypeHint)
```

**Parameters:**

- `renderTypeHint` (`ResourceLocation`)

**Returns:** `public Builder`

### withVisibleComponents

```java
public Builder withVisibleComponents(Object2BooleanMap<String> parts)
```

**Parameters:**

- `parts` (`Object2BooleanMap<String>`)

**Returns:** `public Builder`

### build

```java
public StandaloneGeometryBakingContext build(ResourceLocation modelName)
```

**Parameters:**

- `modelName` (`ResourceLocation`)

**Returns:** `public StandaloneGeometryBakingContext`

### StandaloneGeometryBakingContext

```java
return new StandaloneGeometryBakingContext()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
