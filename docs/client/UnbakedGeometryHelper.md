# UnbakedGeometryHelper

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** class
**Side:** 🖥️ Client

## Description

Helper for dealing with unbaked models and geometries.

## Methods

### bake

```java
.Internal
    public static BakedModel bake(BlockModel blockModel, ModelBaker modelBaker, BlockModel owner, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState, boolean guiLight3d)
```

**Parameters:**

- `blockModel` (`BlockModel`)
- `modelBaker` (`ModelBaker`)
- `owner` (`BlockModel`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)
- `guiLight3d` (`boolean`)

**Returns:** `.Internal
    public static BakedModel`

### createUnbakedItemElements

```java
public static List<BlockElement> createUnbakedItemElements(int layerIndex, TextureAtlasSprite sprite)
```

**Parameters:**

- `layerIndex` (`int`)
- `sprite` (`TextureAtlasSprite`)

**Returns:** `List<BlockElement>`

### createUnbakedItemElements

```java
return createUnbakedItemElements()
```

**Returns:** `return`

### createUnbakedItemElements

```java
public static List<BlockElement> createUnbakedItemElements(int layerIndex, TextureAtlasSprite sprite, ExtraFaceData faceData)
```

**Parameters:**

- `layerIndex` (`int`)
- `sprite` (`TextureAtlasSprite`)
- `faceData` (`ExtraFaceData`)

**Returns:** `List<BlockElement>`

### createUnbakedItemMaskElements

```java
public static List<BlockElement> createUnbakedItemMaskElements(int layerIndex, TextureAtlasSprite sprite)
```

**Parameters:**

- `layerIndex` (`int`)
- `sprite` (`TextureAtlasSprite`)

**Returns:** `List<BlockElement>`

### createUnbakedItemMaskElements

```java
return createUnbakedItemMaskElements()
```

**Returns:** `return`

### createUnbakedItemMaskElements

```java
public static List<BlockElement> createUnbakedItemMaskElements(int layerIndex, TextureAtlasSprite sprite, ExtraFaceData faceData)
```

**Parameters:**

- `layerIndex` (`int`)
- `sprite` (`TextureAtlasSprite`)
- `faceData` (`ExtraFaceData`)

**Returns:** `List<BlockElement>`

### bakeElements

```java
public static void bakeElements(IModelBuilder<?> builder, List<BlockElement> elements, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState)
```

**Parameters:**

- `builder` (`IModelBuilder<?>`)
- `elements` (`List<BlockElement>`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)

### bakeElements

```java
public static List<BakedQuad> bakeElements(List<BlockElement> elements, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState)
```

**Parameters:**

- `elements` (`List<BlockElement>`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)

**Returns:** `List<BakedQuad>`

### bakeElementFace

```java
public static BakedQuad bakeElementFace(BlockElement element, BlockElementFace face, TextureAtlasSprite sprite, Direction direction, ModelState state)
```

**Parameters:**

- `element` (`BlockElement`)
- `face` (`BlockElementFace`)
- `sprite` (`TextureAtlasSprite`)
- `direction` (`Direction`)
- `state` (`ModelState`)

**Returns:** `BakedQuad`

### applyRootTransform

```java
public static IQuadTransformer applyRootTransform(ModelState modelState, Transformation rootTransform)
```

**Parameters:**

- `modelState` (`ModelState`)
- `rootTransform` (`Transformation`)

**Returns:** `IQuadTransformer`

### composeRootTransformIntoModelState

```java
public static ModelState composeRootTransformIntoModelState(ModelState modelState, Transformation rootTransform)
```

**Parameters:**

- `modelState` (`ModelState`)
- `rootTransform` (`Transformation`)

**Returns:** `ModelState`
