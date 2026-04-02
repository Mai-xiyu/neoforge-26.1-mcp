# ObjGeometry

**Package:** `net.neoforged.neoforge.client.model.obj`
**Type:** class
**Implements:** `ExtendedUnbakedGeometry`
**Side:** 🖥️ Client

## Fields

| Name | Type | Description |
|------|------|-------------|
| `automaticCulling` | `boolean` |  |
| `shadeQuads` | `boolean` |  |
| `flipV` | `boolean` |  |
| `emissiveAmbient` | `boolean` |  |
| `modelLocation` | `Identifier` |  |

## Methods

### ObjGeometry

```java
private ObjGeometry(Settings settings)
```

**Parameters:**

- `settings` (`Settings`)

**Returns:** `private`

### parse

```java
public static ObjGeometry parse(ObjTokenizer tokenizer, Settings settings)
```

**Parameters:**

- `tokenizer` (`ObjTokenizer`)
- `settings` (`Settings`)

**Returns:** `public static ObjGeometry`

### material

```java
Sets the current material(starts new mesh)
```

**Parameters:**

- `mesh` (`starts new`)

**Returns:** `Sets the current`

### ModelMesh

```java
model.new ModelMesh()
```

**Returns:** `model.new`

### ModelGroup

```java
model.new ModelGroup()
```

**Returns:** `model.new`

### parseVector3

```java
private static Vector3f parseVector3(String[] line)
```

**Parameters:**

- `line` (`String[]`)

**Returns:** `private static Vector3f`

### Vector3f

```java
> new Vector3f()
```

**Returns:** `> new`

### parseVector4

```java
static Vector4f parseVector4(String[] line)
```

**Parameters:**

- `line` (`String[]`)

**Returns:** `static Vector4f`

### Vector4f

```java
> new Vector4f()
```

**Returns:** `> new`

### bake

```java
public QuadCollection bake(TextureSlots textureSlots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `textureSlots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `QuadCollection`

### makeQuad

```java
private Pair<BakedQuad, Direction> makeQuad(ModelBaker baker, int[][] indices, int tintIndex, Vector4f colorTint, Vector4f ambientColor, Material.Baked material, Transparency transparency, Transformation transform)
```

**Parameters:**

- `baker` (`ModelBaker`)
- `indices` (`int[][]`)
- `tintIndex` (`int`)
- `colorTint` (`Vector4f`)
- `ambientColor` (`Vector4f`)
- `material` (`Material.Baked`)
- `transparency` (`Transparency`)
- `transform` (`Transformation`)

**Returns:** `private Pair<BakedQuad, Direction>`

### ModelObject

```java
 ModelObject(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** ``

### name

```java
public String name()
```

**Returns:** `public String`

### addQuads

```java
public void addQuads(QuadCollection.Builder builder, TextureSlots slots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `builder` (`QuadCollection.Builder`)
- `slots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `public void`

### addNamesRecursively

```java
protected void addNamesRecursively(Set<String> names)
```

**Parameters:**

- `names` (`Set<String>`)

**Returns:** `protected void`

### ModelGroup

```java
 ModelGroup(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### addQuads

```java
public void addQuads(QuadCollection.Builder builder, TextureSlots slots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `builder` (`QuadCollection.Builder`)
- `slots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

### addNamesRecursively

```java
protected void addNamesRecursively(Set<String> names)
```

**Parameters:**

- `names` (`Set<String>`)

### ModelMesh

```java
public ModelMesh(ObjMaterialLibrary.Material currentMat, String currentSmoothingGroup)
```

**Parameters:**

- `currentMat` (`ObjMaterialLibrary.Material`)
- `currentSmoothingGroup` (`String`)

**Returns:** `public`

### addQuads

```java
public void addQuads(QuadCollection.Builder builder, TextureSlots slots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `builder` (`QuadCollection.Builder`)
- `slots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `public void`

### Settings

```java
public record Settings(Identifier modelLocation, boolean automaticCulling, boolean shadeQuads, boolean flipV, boolean emissiveAmbient, String mtlOverride)
```

**Parameters:**

- `modelLocation` (`Identifier`)
- `automaticCulling` (`boolean`)
- `shadeQuads` (`boolean`)
- `flipV` (`boolean`)
- `emissiveAmbient` (`boolean`)
- `mtlOverride` (`String`)

**Returns:** `public record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ModelObject` | class |  |
| `ModelGroup` | class |  |
| `Settings` | record |  |
