# ObjLoader

**Package:** `net.neoforged.neoforge.client.model.obj`
**Type:** class
**Implements:** `IGeometryLoader<ObjModel>`, `ResourceManagerReloadListener`
**Side:** 🖥️ Client

## Description

A loader for `ObjModel OBJ models`.



Allows the user to enable automatic face culling, toggle quad shading, flip UVs, render emissively and specify a
`ObjMaterialLibrary material library` override.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ObjLoader` |  |

## Methods

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager resourceManager)
```

**Parameters:**

- `resourceManager` (`ResourceManager`)

### read

```java
public ObjModel read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `ObjModel`

### JsonParseException

```java
throw new JsonParseException("OBJ Loader requires a 'model' key that points to a valid .OBJ model.")
```

**Parameters:**

- `model."` (`"OBJ Loader requires a 'model' key that points to a valid .OBJ`)

**Returns:** `throw new`

### loadModel

```java
public ObjModel loadModel(ObjModel.ModelSettings settings)
```

**Parameters:**

- `settings` (`ObjModel.ModelSettings`)

**Returns:** `public ObjModel`

### RuntimeException

```java
throw new RuntimeException("Could not find OBJ model")
```

**Parameters:**

- `model"` (`"Could not find OBJ`)

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException("Could not read OBJ model")
```

**Parameters:**

- `model"` (`"Could not read OBJ`)

**Returns:** `throw new`

### loadMaterialLibrary

```java
public ObjMaterialLibrary loadMaterialLibrary(ResourceLocation materialLocation)
```

**Parameters:**

- `materialLocation` (`ResourceLocation`)

**Returns:** `public ObjMaterialLibrary`

### ObjMaterialLibrary

```java
return new ObjMaterialLibrary()
```

**Returns:** `return new`

### RuntimeException

```java
throw new RuntimeException("Could not find OBJ material library")
```

**Parameters:**

- `library"` (`"Could not find OBJ material`)

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException("Could not read OBJ material library")
```

**Parameters:**

- `library"` (`"Could not read OBJ material`)

**Returns:** `throw new`
