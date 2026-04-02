# ModelManager

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `PreparableReloadListener`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ModelManager

```java
public ModelManager(TextureManager p_119406_, BlockColors p_119407_, int p_119408_)
```

**Parameters:**

- `p_119406_` (`TextureManager`)
- `p_119407_` (`BlockColors`)
- `p_119408_` (`int`)

**Returns:** `public`

### getModel

```java
public BakedModel getModel(ModelResourceLocation p_119423_)
```

**Parameters:**

- `p_119423_` (`ModelResourceLocation`)

**Returns:** `public BakedModel`

### getMissingModel

```java
public BakedModel getMissingModel()
```

**Returns:** `public BakedModel`

### getBlockModelShaper

```java
public BlockModelShaper getBlockModelShaper()
```

**Returns:** `public BlockModelShaper`

### reload

```java
public final CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_249079_, ResourceManager p_251134_, ProfilerFiller p_250336_, ProfilerFiller p_252324_, Executor p_250550_, Executor p_249221_)
```

**Parameters:**

- `p_249079_` (`PreparableReloadListener.PreparationBarrier`)
- `p_251134_` (`ResourceManager`)
- `p_250336_` (`ProfilerFiller`)
- `p_252324_` (`ProfilerFiller`)
- `p_250550_` (`Executor`)
- `p_249221_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### loadBlockModels

```java
private static CompletableFuture<Map<ResourceLocation, BlockModel>> loadBlockModels(ResourceManager p_251361_, Executor p_252189_)
```

**Parameters:**

- `p_251361_` (`ResourceManager`)
- `p_252189_` (`Executor`)

**Returns:** `private static CompletableFuture<Map<ResourceLocation, BlockModel>>`

### loadBlockStates

```java
private static CompletableFuture<Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>>> loadBlockStates(ResourceManager p_252084_, Executor p_249943_)
```

**Parameters:**

- `p_252084_` (`ResourceManager`)
- `p_249943_` (`Executor`)

**Returns:** `private static CompletableFuture<Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>>>`

### loadModels

```java
private ModelManager.ReloadState loadModels(ProfilerFiller p_252136_, Map<ResourceLocation, AtlasSet.StitchResult> p_250646_, ModelBakery p_248945_)
```

**Parameters:**

- `p_252136_` (`ProfilerFiller`)
- `p_250646_` (`Map<ResourceLocation, AtlasSet.StitchResult>`)
- `p_248945_` (`ModelBakery`)

**Returns:** `private ModelManager.ReloadState`

### apply

```java
private void apply(ModelManager.ReloadState p_248996_, ProfilerFiller p_251960_)
```

**Parameters:**

- `p_248996_` (`ModelManager.ReloadState`)
- `p_251960_` (`ProfilerFiller`)

**Returns:** `private void`

### requiresRender

```java
public boolean requiresRender(BlockState p_119416_, BlockState p_119417_)
```

**Parameters:**

- `p_119416_` (`BlockState`)
- `p_119417_` (`BlockState`)

**Returns:** `public boolean`

### getAtlas

```java
public TextureAtlas getAtlas(ResourceLocation p_119429_)
```

**Parameters:**

- `p_119429_` (`ResourceLocation`)

**Returns:** `public TextureAtlas`

### RuntimeException

```java
throw new RuntimeException("getAtlasTexture called too early!")
```

**Parameters:**

- `early!"` (`"getAtlasTexture called too`)

**Returns:** `throw new`

### close

```java
public void close()
```

### updateMaxMipLevel

```java
public void updateMaxMipLevel(int p_119411_)
```

**Parameters:**

- `p_119411_` (`int`)

**Returns:** `public void`

### getModelBakery

```java
public ModelBakery getModelBakery()
```

**Returns:** `public ModelBakery`

### ReloadState

```java
static record ReloadState(ModelBakery modelBakery, BakedModel missingModel, Map<BlockState, BakedModel> modelCache, Map<ResourceLocation, AtlasSet.StitchResult> atlasPreparations, CompletableFuture<Void> readyForUpload)
```

**Parameters:**

- `modelBakery` (`ModelBakery`)
- `missingModel` (`BakedModel`)
- `modelCache` (`Map<BlockState, BakedModel>`)
- `atlasPreparations` (`Map<ResourceLocation, AtlasSet.StitchResult>`)
- `readyForUpload` (`CompletableFuture<Void>`)

**Returns:** `record`
