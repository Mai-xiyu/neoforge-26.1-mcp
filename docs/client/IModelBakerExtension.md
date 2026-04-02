# IModelBakerExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### getTopLevelModel

```java
UnbakedModel getTopLevelModel(ModelResourceLocation location)
```

**Parameters:**

- `location` (`ModelResourceLocation`)

**Returns:** `UnbakedModel`

### bake

```java
BakedModel bake(ResourceLocation location, ModelState state, Function<Material, TextureAtlasSprite> sprites)
```

**Parameters:**

- `location` (`ResourceLocation`)
- `state` (`ModelState`)
- `sprites` (`Function<Material, TextureAtlasSprite>`)

**Returns:** `BakedModel`

### bakeUncached

```java
BakedModel bakeUncached(UnbakedModel model, ModelState state, Function<Material, TextureAtlasSprite> sprites)
```

**Parameters:**

- `model` (`UnbakedModel`)
- `state` (`ModelState`)
- `sprites` (`Function<Material, TextureAtlasSprite>`)

**Returns:** `BakedModel`

### getModelTextureGetter

```java
Function<Material, TextureAtlasSprite> getModelTextureGetter()
```

**Returns:** `Function<Material, TextureAtlasSprite>`
