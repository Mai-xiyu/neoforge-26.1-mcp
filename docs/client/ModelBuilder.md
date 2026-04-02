# ModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators`
**Type:** class<T extends ModelBuilder<T>>
**Extends:** `ModelFile`
**Side:** 🖥️ Client

## Description

General purpose model builder, contains all the commonalities between item
and block models.
@see ModelProvider
@see BlockModelBuilder
@see ItemModelBuilder
@param <T> Self type, for simpler chaining of methods.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `textures` | `Map<String, String>` |  |
| `transforms` | `TransformsBuilder` |  |
| `existingFileHelper` | `ExistingFileHelper` |  |
| `renderType` | `String` |  |
| `ambientOcclusion` | `boolean` |  |
| `guiLight` | `GuiLight` |  |
| `elements` | `List<ElementBuilder>` |  |
| `customLoader` | `CustomLoaderBuilder<T>` |  |

## Methods

### ModelBuilder

```java
protected ModelBuilder(ResourceLocation outputLocation, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `outputLocation` (`ResourceLocation`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### exists

```java
protected boolean exists()
```

**Returns:** `boolean`

### parent

```java
public T parent(ModelFile parent)
```

**Parameters:**

- `parent` (`ModelFile`)

**Returns:** `T`

### self

```java
return self()
```

**Returns:** `return`

### texture

```java
public T texture(String key, String texture)
```

**Parameters:**

- `key` (`String`)
- `texture` (`String`)

**Returns:** `T`

### self

```java
return self()
```

**Returns:** `return`

### texture

```java
return texture()
```

**Returns:** `return`

### texture

```java
public T texture(String key, ResourceLocation texture)
```

**Parameters:**

- `key` (`String`)
- `texture` (`ResourceLocation`)

**Returns:** `T`

### self

```java
return self()
```

**Returns:** `return`

### renderType

```java
public T renderType(String renderType)
```

**Parameters:**

- `renderType` (`String`)

**Returns:** `T`

### renderType

```java
public T renderType(ResourceLocation renderType)
```

**Parameters:**

- `renderType` (`ResourceLocation`)

**Returns:** `T`

### self

```java
return self()
```

**Returns:** `return`

### transforms

```java
public TransformsBuilder transforms()
```

**Returns:** `public TransformsBuilder`

### ao

```java
public T ao(boolean ao)
```

**Parameters:**

- `ao` (`boolean`)

**Returns:** `public T`

### self

```java
return self()
```

**Returns:** `return`

### guiLight

```java
public T guiLight(GuiLight light)
```

**Parameters:**

- `light` (`GuiLight`)

**Returns:** `public T`

### self

```java
return self()
```

**Returns:** `return`

### element

```java
public ElementBuilder element()
```

**Returns:** `public ElementBuilder`

### element

```java
public ElementBuilder element(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `ElementBuilder`

### getElementCount

```java
public int getElementCount()
```

**Returns:** `int`

### customLoader

```java
public <L extends CustomLoaderBuilder<T>> L customLoader(BiFunction<T, ExistingFileHelper, L> customLoaderFactory)
```

**Parameters:**

- `customLoaderFactory` (`BiFunction<T, ExistingFileHelper, L>`)

**Returns:** `<L extends CustomLoaderBuilder<T>> L`

### rootTransforms

```java
public RootTransformsBuilder rootTransforms()
```

**Returns:** `public RootTransformsBuilder`

### toJson

```java
public JsonObject toJson()
```

**Returns:** `JsonObject`

### serializeLocOrKey

```java
private String serializeLocOrKey(String tex)
```

**Parameters:**

- `tex` (`String`)

**Returns:** `private String`

### serializeVector3f

```java
private JsonArray serializeVector3f(Vector3f vec)
```

**Parameters:**

- `vec` (`Vector3f`)

**Returns:** `private JsonArray`

### serializeFloat

```java
private Number serializeFloat(float f)
```

**Parameters:**

- `f` (`float`)

**Returns:** `private Number`

### validateCoordinate

```java
private void validateCoordinate(float coord, char name)
```

**Parameters:**

- `coord` (`float`)
- `name` (`char`)

**Returns:** `private void`

### validatePosition

```java
private void validatePosition(Vector3f pos)
```

**Parameters:**

- `pos` (`Vector3f`)

**Returns:** `private void`

### from

```java
public ElementBuilder from(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `ElementBuilder`

### validatePosition

```java
 validatePosition()
```

**Returns:** ``

### to

```java
public ElementBuilder to(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `ElementBuilder`

### validatePosition

```java
 validatePosition()
```

**Returns:** ``

### face

```java
public FaceBuilder face(Direction dir)
```

**Parameters:**

- `dir` (`Direction`)

**Returns:** `FaceBuilder`

### rotation

```java
public RotationBuilder rotation()
```

**Returns:** `public RotationBuilder`

### shade

```java
public ElementBuilder shade(boolean shade)
```

**Parameters:**

- `shade` (`boolean`)

**Returns:** `public ElementBuilder`

### allFaces

```java
public ElementBuilder allFaces(BiConsumer<Direction, FaceBuilder> action)
```

**Parameters:**

- `action` (`BiConsumer<Direction, FaceBuilder>`)

**Returns:** `ElementBuilder`

### allFacesExcept

```java
public ElementBuilder allFacesExcept(BiConsumer<Direction, FaceBuilder> action, Set<Direction> exc)
```

**Parameters:**

- `action` (`BiConsumer<Direction, FaceBuilder>`)
- `exc` (`Set<Direction>`)

**Returns:** `ElementBuilder`

### faces

```java
public ElementBuilder faces(BiConsumer<Direction, FaceBuilder> action)
```

**Parameters:**

- `action` (`BiConsumer<Direction, FaceBuilder>`)

**Returns:** `ElementBuilder`

### textureAll

```java
public ElementBuilder textureAll(String texture)
```

**Parameters:**

- `texture` (`String`)

**Returns:** `ElementBuilder`

### texture

```java
public ElementBuilder texture(String texture)
```

**Parameters:**

- `texture` (`String`)

**Returns:** `ElementBuilder`

### cube

```java
public ElementBuilder cube(String texture)
```

**Parameters:**

- `texture` (`String`)

**Returns:** `ElementBuilder`

### emissivity

```java
public ElementBuilder emissivity(int blockLight, int skyLight)
```

**Parameters:**

- `blockLight` (`int`)
- `skyLight` (`int`)

**Returns:** `ElementBuilder`

### color

```java
public ElementBuilder color(int color)
```

**Parameters:**

- `color` (`int`)

**Returns:** `ElementBuilder`

### ao

```java
public ElementBuilder ao(boolean ao)
```

**Parameters:**

- `ao` (`boolean`)

**Returns:** `ElementBuilder`

### addTexture

```java
private BiConsumer<Direction, FaceBuilder> addTexture(String texture)
```

**Parameters:**

- `texture` (`String`)

**Returns:** `private BiConsumer<Direction, FaceBuilder>`

### build

```java
BlockElement build()
```

**Returns:** `BlockElement`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### end

```java
public T end()
```

**Returns:** `public T`

### self

```java
return self()
```

**Returns:** `return`

### FaceBuilder

```java
 FaceBuilder(Direction dir)
```

**Parameters:**

- `dir` (`Direction`)

**Returns:** ``

### cullface

```java
public FaceBuilder cullface(Direction dir)
```

**Parameters:**

- `dir` (`Direction`)

**Returns:** `public FaceBuilder`

### tintindex

```java
public FaceBuilder tintindex(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `public FaceBuilder`

### texture

```java
public FaceBuilder texture(String texture)
```

**Parameters:**

- `texture` (`String`)

**Returns:** `FaceBuilder`

### uvs

```java
public FaceBuilder uvs(float u1, float v1, float u2, float v2)
```

**Parameters:**

- `u1` (`float`)
- `v1` (`float`)
- `u2` (`float`)
- `v2` (`float`)

**Returns:** `public FaceBuilder`

### rotation

```java
public FaceBuilder rotation(FaceRotation rot)
```

**Parameters:**

- `rot` (`FaceRotation`)

**Returns:** `FaceBuilder`

### emissivity

```java
public FaceBuilder emissivity(int blockLight, int skyLight)
```

**Parameters:**

- `blockLight` (`int`)
- `skyLight` (`int`)

**Returns:** `FaceBuilder`

### color

```java
public FaceBuilder color(int color)
```

**Parameters:**

- `color` (`int`)

**Returns:** `FaceBuilder`

### ao

```java
public FaceBuilder ao(boolean ao)
```

**Parameters:**

- `ao` (`boolean`)

**Returns:** `FaceBuilder`

### build

```java
BlockElementFace build()
```

**Returns:** `BlockElementFace`

### IllegalStateException

```java
throw new IllegalStateException("A model face must have a texture")
```

**Parameters:**

- `texture"` (`"A model face must have a`)

**Returns:** `throw new`

### end

```java
public ElementBuilder end()
```

**Returns:** `public ElementBuilder`

### origin

```java
public RotationBuilder origin(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public RotationBuilder`

### axis

```java
public RotationBuilder axis(Direction.Axis axis)
```

**Parameters:**

- `axis` (`Direction.Axis`)

**Returns:** `RotationBuilder`

### angle

```java
public RotationBuilder angle(float angle)
```

**Parameters:**

- `angle` (`float`)

**Returns:** `RotationBuilder`

### rescale

```java
public RotationBuilder rescale(boolean rescale)
```

**Parameters:**

- `rescale` (`boolean`)

**Returns:** `public RotationBuilder`

### build

```java
BlockElementRotation build()
```

**Returns:** `BlockElementRotation`

### BlockElementRotation

```java
return new BlockElementRotation()
```

**Returns:** `return new`

### end

```java
public ElementBuilder end()
```

**Returns:** `public ElementBuilder`

### FaceRotation

```java
private FaceRotation(int rotation)
```

**Parameters:**

- `rotation` (`int`)

**Returns:** `private`

### transform

```java
public TransformVecBuilder transform(ItemDisplayContext type)
```

**Parameters:**

- `type` (`ItemDisplayContext`)

**Returns:** `TransformVecBuilder`

### build

```java
Map<ItemDisplayContext, ItemTransform> build()
```

**Returns:** `Map<ItemDisplayContext, ItemTransform>`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### end

```java
public T end()
```

**Returns:** `public T`

### self

```java
return self()
```

**Returns:** `return`

### TransformVecBuilder

```java
 TransformVecBuilder(ItemDisplayContext type)
```

**Parameters:**

- `type` (`ItemDisplayContext`)

**Returns:** ``

### rotation

```java
public TransformVecBuilder rotation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public TransformVecBuilder`

### leftRotation

```java
public TransformVecBuilder leftRotation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public TransformVecBuilder`

### rotation

```java
return rotation()
```

**Returns:** `return`

### translation

```java
public TransformVecBuilder translation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public TransformVecBuilder`

### scale

```java
public TransformVecBuilder scale(float sc)
```

**Parameters:**

- `sc` (`float`)

**Returns:** `public TransformVecBuilder`

### scale

```java
return scale()
```

**Returns:** `return`

### scale

```java
public TransformVecBuilder scale(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public TransformVecBuilder`

### rightRotation

```java
public TransformVecBuilder rightRotation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `public TransformVecBuilder`

### build

```java
ItemTransform build()
```

**Returns:** `ItemTransform`

### ItemTransform

```java
return new ItemTransform()
```

**Returns:** `return new`

### end

```java
public TransformsBuilder end()
```

**Returns:** `public TransformsBuilder`

### RootTransformsBuilder

```java
 RootTransformsBuilder()
```

**Returns:** ``

### translation

```java
public RootTransformsBuilder translation(Vector3f translation)
```

**Parameters:**

- `translation` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### translation

```java
public RootTransformsBuilder translation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
public RootTransformsBuilder rotation(Quaternionf rotation)
```

**Parameters:**

- `rotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
public RootTransformsBuilder rotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### leftRotation

```java
public RootTransformsBuilder leftRotation(Quaternionf leftRotation)
```

**Parameters:**

- `leftRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
return rotation()
```

**Returns:** `return`

### leftRotation

```java
public RootTransformsBuilder leftRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
public RootTransformsBuilder rightRotation(Quaternionf rightRotation)
```

**Parameters:**

- `rightRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
public RootTransformsBuilder rightRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### postRotation

```java
public RootTransformsBuilder postRotation(Quaternionf postRotation)
```

**Parameters:**

- `postRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
return rightRotation()
```

**Returns:** `return`

### postRotation

```java
public RootTransformsBuilder postRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(float scale)
```

**Parameters:**

- `scale` (`float`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(float xScale, float yScale, float zScale)
```

**Parameters:**

- `xScale` (`float`)
- `yScale` (`float`)
- `zScale` (`float`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(Vector3f scale)
```

**Parameters:**

- `scale` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### transform

```java
public RootTransformsBuilder transform(Transformation transformation)
```

**Parameters:**

- `transformation` (`Transformation`)

**Returns:** `RootTransformsBuilder`

### origin

```java
public RootTransformsBuilder origin(Vector3f origin)
```

**Parameters:**

- `origin` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### origin

```java
public RootTransformsBuilder origin(TransformationHelper.TransformOrigin origin)
```

**Parameters:**

- `origin` (`TransformationHelper.TransformOrigin`)

**Returns:** `RootTransformsBuilder`

### end

```java
public ModelBuilder<T> end()
```

**Returns:** `ModelBuilder<T>`

### toJson

```java
public JsonObject toJson()
```

**Returns:** `public JsonObject`

### writeVec3

```java
private static JsonArray writeVec3(Vector3f vector)
```

**Parameters:**

- `vector` (`Vector3f`)

**Returns:** `private static JsonArray`

### writeQuaternion

```java
private static JsonArray writeQuaternion(Quaternionf quaternion)
```

**Parameters:**

- `quaternion` (`Quaternionf`)

**Returns:** `private static JsonArray`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ElementBuilder` | class |  |
| `FaceBuilder` | class |  |
| `RotationBuilder` | class |  |
| `FaceRotation` | enum |  |
| `TransformsBuilder` | class |  |
| `TransformVecBuilder` | class |  |
| `RootTransformsBuilder` | class |  |
