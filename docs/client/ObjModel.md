# ObjModel

**Package:** `net.neoforged.neoforge.client.model.obj`
**Type:** class
**Extends:** `SimpleUnbakedGeometry<ObjModel>`
**Side:** 🖥️ Client

## Description

A model loaded from an OBJ file.



Supports positions, texture coordinates, normals and colors. The `ObjMaterialLibrary material library`
has support for numerous features, including support for `ResourceLocation` textures (non-standard).

## Fields

| Name | Type | Description |
|------|------|-------------|
| `automaticCulling` | `boolean` |  |
| `shadeQuads` | `boolean` |  |
| `flipV` | `boolean` |  |
| `emissiveAmbient` | `boolean` |  |
| `modelLocation` | `ResourceLocation` |  |

## Methods

### ObjModel

```java
private ObjModel(ModelSettings settings)
```

**Parameters:**

- `settings` (`ModelSettings`)

**Returns:** `private`

### parse

```java
public static ObjModel parse(ObjTokenizer tokenizer, ModelSettings settings)
```

**Parameters:**

- `tokenizer` (`ObjTokenizer`)
- `settings` (`ModelSettings`)

**Returns:** `public static ObjModel`

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

### addQuads

```java
protected void addQuads(IGeometryBakingContext owner, IModelBuilder<?> modelBuilder, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelTransform)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)

### getRootComponentNames

```java
public Set<String> getRootComponentNames()
```

**Returns:** `public Set<String>`

### getConfigurableComponentNames

```java
public Set<String> getConfigurableComponentNames()
```

**Returns:** `Set<String>`

### makeQuad

```java
private Pair<BakedQuad, Direction> makeQuad(int[][] indices, int tintIndex, Vector4f colorTint, Vector4f ambientColor, TextureAtlasSprite texture, Transformation transform)
```

**Parameters:**

- `indices` (`int[][]`)
- `tintIndex` (`int`)
- `colorTint` (`Vector4f`)
- `ambientColor` (`Vector4f`)
- `texture` (`TextureAtlasSprite`)
- `transform` (`Transformation`)

**Returns:** `private Pair<BakedQuad, Direction>`

### bakeRenderable

```java
public CompositeRenderable bakeRenderable(IGeometryBakingContext configuration)
```

**Parameters:**

- `configuration` (`IGeometryBakingContext`)

**Returns:** `public CompositeRenderable`

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
public void addQuads(IGeometryBakingContext owner, IModelBuilder<?> modelBuilder, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelTransform)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)

**Returns:** `public void`

### bake

```java
public void bake(CompositeRenderable.PartBuilder<?> builder, IGeometryBakingContext configuration)
```

**Parameters:**

- `builder` (`CompositeRenderable.PartBuilder<?>`)
- `configuration` (`IGeometryBakingContext`)

**Returns:** `public void`

### getTextures

```java
public Collection<Material> getTextures(IGeometryBakingContext owner, Function<ResourceLocation, UnbakedModel> modelGetter, Set<com.mojang.datafixers.util.Pair<String, String>> missingTextureErrors)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelGetter` (`Function<ResourceLocation, UnbakedModel>`)
- `missingTextureErrors` (`Set<com.mojang.datafixers.util.Pair<String, String>>`)

**Returns:** `public Collection<Material>`

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
public void addQuads(IGeometryBakingContext owner, IModelBuilder<?> modelBuilder, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelTransform)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)

### bake

```java
public void bake(CompositeRenderable.PartBuilder<?> builder, IGeometryBakingContext configuration)
```

**Parameters:**

- `builder` (`CompositeRenderable.PartBuilder<?>`)
- `configuration` (`IGeometryBakingContext`)

### getTextures

```java
public Collection<Material> getTextures(IGeometryBakingContext owner, Function<ResourceLocation, UnbakedModel> modelGetter, Set<com.mojang.datafixers.util.Pair<String, String>> missingTextureErrors)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelGetter` (`Function<ResourceLocation, UnbakedModel>`)
- `missingTextureErrors` (`Set<com.mojang.datafixers.util.Pair<String, String>>`)

**Returns:** `Collection<Material>`

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
public void addQuads(IGeometryBakingContext owner, IModelBuilder<?> modelBuilder, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelTransform)
```

**Parameters:**

- `owner` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelTransform` (`ModelState`)

**Returns:** `public void`

### bake

```java
public void bake(CompositeRenderable.PartBuilder<?> builder, IGeometryBakingContext configuration)
```

**Parameters:**

- `builder` (`CompositeRenderable.PartBuilder<?>`)
- `configuration` (`IGeometryBakingContext`)

**Returns:** `public void`

### ModelSettings

```java
public record ModelSettings(ResourceLocation modelLocation, boolean automaticCulling, boolean shadeQuads, boolean flipV, boolean emissiveAmbient, String mtlOverride)
```

**Parameters:**

- `modelLocation` (`ResourceLocation`)
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
| `ModelSettings` | record |  |
