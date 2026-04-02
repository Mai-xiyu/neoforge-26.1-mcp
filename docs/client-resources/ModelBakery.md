# ModelBakery

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FIRE_0` | `Material` |  |
| `FIRE_1` | `Material` |  |
| `LAVA_FLOW` | `Material` |  |
| `WATER_FLOW` | `Material` |  |
| `WATER_OVERLAY` | `Material` |  |
| `BANNER_BASE` | `Material` |  |
| `SHIELD_BASE` | `Material` |  |
| `NO_PATTERN_SHIELD` | `Material` |  |
| `DESTROY_STAGE_COUNT` | `int` |  |
| `DESTROY_STAGES` | `List<ResourceLocation>` |  |
| `BREAKING_LOCATIONS` | `List<ResourceLocation>` |  |
| `DESTROY_TYPES` | `List<RenderType>` |  |
| `MISSING_MODEL_LOCATION` | `ResourceLocation` |  |
| `MISSING_MODEL_VARIANT` | `ModelResourceLocation` |  |
| `MODEL_LISTER` | `FileToIdConverter` |  |
| `GENERATION_MARKER` | `BlockModel` |  |
| `BLOCK_ENTITY_MARKER` | `BlockModel` |  |

## Methods

### ModelBakery

```java
public ModelBakery(BlockColors p_249183_, ProfilerFiller p_252014_, Map<ResourceLocation, BlockModel> p_251087_, Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>> p_250416_)
```

**Parameters:**

- `p_249183_` (`BlockColors`)
- `p_252014_` (`ProfilerFiller`)
- `p_251087_` (`Map<ResourceLocation, BlockModel>`)
- `p_250416_` (`Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>>`)

**Returns:** `public`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### bakeModels

```java
public void bakeModels(ModelBakery.TextureGetter p_352431_)
```

**Parameters:**

- `p_352431_` (`ModelBakery.TextureGetter`)

**Returns:** `public void`

### getModel

```java
UnbakedModel getModel(ResourceLocation p_119342_)
```

**Parameters:**

- `p_119342_` (`ResourceLocation`)

**Returns:** `UnbakedModel`

### IllegalStateException

```java
throw new IllegalStateException("Circular reference while loading " + p_119342_)
```

**Parameters:**

- `p_119342_` (`"Circular reference while loading " +`)

**Returns:** `throw new`

### loadItemModelAndDependencies

```java
private void loadItemModelAndDependencies(ResourceLocation p_352200_)
```

**Parameters:**

- `p_352200_` (`ResourceLocation`)

**Returns:** `private void`

### loadSpecialItemModelAndDependencies

```java
private void loadSpecialItemModelAndDependencies(ModelResourceLocation p_352247_)
```

**Parameters:**

- `p_352247_` (`ModelResourceLocation`)

**Returns:** `private void`

### registerModelAndLoadDependencies

```java
private void registerModelAndLoadDependencies(ModelResourceLocation p_352435_, UnbakedModel p_352250_)
```

**Parameters:**

- `p_352435_` (`ModelResourceLocation`)
- `p_352250_` (`UnbakedModel`)

**Returns:** `private void`

### registerModel

```java
private void registerModel(ModelResourceLocation p_352067_, UnbakedModel p_352146_)
```

**Parameters:**

- `p_352067_` (`ModelResourceLocation`)
- `p_352146_` (`UnbakedModel`)

**Returns:** `private void`

### loadBlockModel

```java
private BlockModel loadBlockModel(ResourceLocation p_119365_)
```

**Parameters:**

- `p_119365_` (`ResourceLocation`)

**Returns:** `private BlockModel`

### getBakedTopLevelModels

```java
public Map<ModelResourceLocation, BakedModel> getBakedTopLevelModels()
```

**Returns:** `public Map<ModelResourceLocation, BakedModel>`

### getModelGroups

```java
public Object2IntMap<BlockState> getModelGroups()
```

**Returns:** `public Object2IntMap<BlockState>`

### BakedCacheKey

```java
static record BakedCacheKey(ResourceLocation id, Transformation transformation, boolean isUvLocked)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `transformation` (`Transformation`)
- `isUvLocked` (`boolean`)

**Returns:** `record`

### ModelBakerImpl

```java
 ModelBakerImpl(ModelBakery.TextureGetter p_352124_, ModelResourceLocation p_352126_)
```

**Parameters:**

- `p_352124_` (`ModelBakery.TextureGetter`)
- `p_352126_` (`ModelResourceLocation`)

**Returns:** ``

### getModel

```java
public UnbakedModel getModel(ResourceLocation p_248568_)
```

**Parameters:**

- `p_248568_` (`ResourceLocation`)

**Returns:** `UnbakedModel`

### getTopLevelModel

```java
public UnbakedModel getTopLevelModel(ModelResourceLocation location)
```

**Parameters:**

- `location` (`ModelResourceLocation`)

**Returns:** `UnbakedModel`

### getModelTextureGetter

```java
public Function<Material, TextureAtlasSprite> getModelTextureGetter()
```

**Returns:** `Function<Material, TextureAtlasSprite>`

### bake

```java
public BakedModel bake(ResourceLocation p_252176_, ModelState p_249765_)
```

**Parameters:**

- `p_252176_` (`ResourceLocation`)
- `p_249765_` (`ModelState`)

**Returns:** `BakedModel`

### bake

```java
return bake()
```

**Returns:** `return`

### bake

```java
public BakedModel bake(ResourceLocation p_252176_, ModelState p_249765_, Function<Material, TextureAtlasSprite> sprites)
```

**Parameters:**

- `p_252176_` (`ResourceLocation`)
- `p_249765_` (`ModelState`)
- `sprites` (`Function<Material, TextureAtlasSprite>`)

**Returns:** `BakedModel`

### bakeUncached

```java
BakedModel bakeUncached(UnbakedModel p_352386_, ModelState p_352194_)
```

**Parameters:**

- `p_352386_` (`UnbakedModel`)
- `p_352194_` (`ModelState`)

**Returns:** `BakedModel`

### bakeUncached

```java
return bakeUncached()
```

**Returns:** `return`

### bakeUncached

```java
public BakedModel bakeUncached(UnbakedModel p_352386_, ModelState p_352194_, Function<Material, TextureAtlasSprite> sprites)
```

**Parameters:**

- `p_352386_` (`UnbakedModel`)
- `p_352194_` (`ModelState`)
- `sprites` (`Function<Material, TextureAtlasSprite>`)

**Returns:** `BakedModel`

### get

```java
TextureAtlasSprite get(ModelResourceLocation p_352455_, Material p_352128_)
```

**Parameters:**

- `p_352455_` (`ModelResourceLocation`)
- `p_352128_` (`Material`)

**Returns:** `TextureAtlasSprite`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TextureGetter` | interface |  |
