# IGeometryBakingContext

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** interface
**Side:** 🖥️ Client

## Description

The context in which a geometry is being baked, providing information such as lighting and
ItemTransforms transforms, and allowing the user to create Material materials and query
RenderTypeGroup render types.
@see StandaloneGeometryBakingContext
@see BlockGeometryBakingContext

## Methods

### getModelName

```java
String getModelName()
```

**Returns:** `String`

### hasMaterial

```java
boolean hasMaterial(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `boolean`

### getMaterial

```java
Material getMaterial(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `Material`

### isGui3d

```java
boolean isGui3d()
```

**Returns:** `boolean`

### useBlockLight

```java
boolean useBlockLight()
```

**Returns:** `boolean`

### useAmbientOcclusion

```java
boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### getTransforms

```java
ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### getRootTransform

```java
Transformation getRootTransform()
```

**Returns:** `Transformation`

### getRenderTypeHint

```java
ResourceLocation getRenderTypeHint()
```

**Returns:** `ResourceLocation`

### isComponentVisible

```java
boolean isComponentVisible(String component, boolean fallback)
```

**Parameters:**

- `component` (`String`)
- `fallback` (`boolean`)

**Returns:** `boolean`

### getRenderType

```java
default RenderTypeGroup getRenderType(ResourceLocation name)
```

**Parameters:**

- `name` (`ResourceLocation`)

**Returns:** `RenderTypeGroup`
