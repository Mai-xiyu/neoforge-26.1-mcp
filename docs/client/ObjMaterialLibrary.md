# ObjMaterialLibrary

**Package:** `net.neoforged.neoforge.client.model.obj`
**Type:** class
**Side:** 🖥️ Client

## Description

An OBJ material library (MTL), composed of named `Material materials`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `ObjMaterialLibrary` |  |
| `name` | `String` |  |
| `ambientColor` | `Vector4f` |  |
| `ambientColorMap` | `String` |  |
| `diffuseColor` | `Vector4f` |  |
| `diffuseColorMap` | `String` |  |
| `specularColor` | `Vector4f` |  |
| `specularHighlight` | `float` |  |
| `specularColorMap` | `String` |  |
| `dissolve` | `float` |  |
| `transparency` | `float` |  |
| `diffuseTintIndex` | `int` |  |

## Methods

### ObjMaterialLibrary

```java
private ObjMaterialLibrary()
```

**Returns:** `private`

### ObjMaterialLibrary

```java
public ObjMaterialLibrary(ObjTokenizer reader)
```

**Parameters:**

- `reader` (`ObjTokenizer`)

**Returns:** `public`

### getMaterial

```java
public Material getMaterial(String mat)
```

**Parameters:**

- `mat` (`String`)

**Returns:** `public Material`

### NoSuchElementException

```java
throw new NoSuchElementException("The material was not found in the library: " + mat)
```

**Parameters:**

- `mat` (`"The material was not found in the library: " +`)

**Returns:** `throw new`

### Material

```java
public Material(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Material` | class |  |
