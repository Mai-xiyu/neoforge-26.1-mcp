# BlockModel

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Implements:** `UnbakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PARTICLE_TEXTURE_REFERENCE` | `String` |  |
| `name` | `String` |  |
| `customData` | `net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext` |  |

## Methods

### fromStream

```java
public static BlockModel fromStream(Reader p_111462_)
```

**Parameters:**

- `p_111462_` (`Reader`)

**Returns:** `public static BlockModel`

### fromString

```java
public static BlockModel fromString(String p_111464_)
```

**Parameters:**

- `p_111464_` (`String`)

**Returns:** `public static BlockModel`

### BlockModel

```java
public BlockModel(ResourceLocation p_273263_, List<BlockElement> p_272668_, Map<String, Either<Material, String>> p_272821_, Boolean p_272676_, BlockModel.GuiLight p_273072_, ItemTransforms p_273480_, List<ItemOverride> p_273099_)
```

**Parameters:**

- `p_273263_` (`ResourceLocation`)
- `p_272668_` (`List<BlockElement>`)
- `p_272821_` (`Map<String, Either<Material, String>>`)
- `p_272676_` (`Boolean`)
- `p_273072_` (`BlockModel.GuiLight`)
- `p_273480_` (`ItemTransforms`)
- `p_273099_` (`List<ItemOverride>`)

**Returns:** `public`

### getElements

```java
public List<BlockElement> getElements()
```

**Returns:** `List<BlockElement>`

### getParentLocation

```java
public ResourceLocation getParentLocation()
```

**Returns:** `ResourceLocation`

### hasAmbientOcclusion

```java
public boolean hasAmbientOcclusion()
```

**Returns:** `public boolean`

### getGuiLight

```java
public BlockModel.GuiLight getGuiLight()
```

**Returns:** `public BlockModel.GuiLight`

### isResolved

```java
public boolean isResolved()
```

**Returns:** `public boolean`

### getOverrides

```java
public List<ItemOverride> getOverrides()
```

**Returns:** `public List<ItemOverride>`

### getItemOverrides

```java
private ItemOverrides getItemOverrides(ModelBaker p_250138_, BlockModel p_251800_)
```

**Parameters:**

- `p_250138_` (`ModelBaker`)
- `p_251800_` (`BlockModel`)

**Returns:** `private ItemOverrides`

### getOverrides

```java
public ItemOverrides getOverrides(ModelBaker p_250138_, BlockModel p_251800_, Function<Material, TextureAtlasSprite> spriteGetter)
```

**Parameters:**

- `p_250138_` (`ModelBaker`)
- `p_251800_` (`BlockModel`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)

**Returns:** `public ItemOverrides`

### getDependencies

```java
public Collection<ResourceLocation> getDependencies()
```

**Returns:** `Collection<ResourceLocation>`

### resolveParents

```java
public void resolveParents(Function<ResourceLocation, UnbakedModel> p_249059_)
```

**Parameters:**

- `p_249059_` (`Function<ResourceLocation, UnbakedModel>`)

### IllegalStateException

```java
throw new IllegalStateException("BlockModel parent has to be a block model.")
```

**Parameters:**

- `model."` (`"BlockModel parent has to be a block`)

**Returns:** `throw new`

### bake

```java
public BakedModel bake(ModelBaker p_252120_, Function<Material, TextureAtlasSprite> p_250023_, ModelState p_251130_)
```

**Parameters:**

- `p_252120_` (`ModelBaker`)
- `p_250023_` (`Function<Material, TextureAtlasSprite>`)
- `p_251130_` (`ModelState`)

**Returns:** `BakedModel`

### bake

```java
public BakedModel bake(ModelBaker p_249720_, BlockModel p_111451_, Function<Material, TextureAtlasSprite> p_111452_, ModelState p_111453_, boolean p_111455_)
```

**Parameters:**

- `p_249720_` (`ModelBaker`)
- `p_111451_` (`BlockModel`)
- `p_111452_` (`Function<Material, TextureAtlasSprite>`)
- `p_111453_` (`ModelState`)
- `p_111455_` (`boolean`)

**Returns:** `public BakedModel`

### bakeVanilla

```java
public BakedModel bakeVanilla(ModelBaker p_249720_, BlockModel p_111451_, Function<Material, TextureAtlasSprite> p_111452_, ModelState p_111453_, boolean p_111455_)
```

**Parameters:**

- `p_249720_` (`ModelBaker`)
- `p_111451_` (`BlockModel`)
- `p_111452_` (`Function<Material, TextureAtlasSprite>`)
- `p_111453_` (`ModelState`)
- `p_111455_` (`boolean`)

**Returns:** `public BakedModel`

### bakeFace

```java
public static BakedQuad bakeFace(BlockElement p_111438_, BlockElementFace p_111439_, TextureAtlasSprite p_111440_, Direction p_111441_, ModelState p_111442_)
```

**Parameters:**

- `p_111438_` (`BlockElement`)
- `p_111439_` (`BlockElementFace`)
- `p_111440_` (`TextureAtlasSprite`)
- `p_111441_` (`Direction`)
- `p_111442_` (`ModelState`)

**Returns:** `public static BakedQuad`

### hasTexture

```java
public boolean hasTexture(String p_111478_)
```

**Parameters:**

- `p_111478_` (`String`)

**Returns:** `public boolean`

### getMaterial

```java
public Material getMaterial(String p_111481_)
```

**Parameters:**

- `p_111481_` (`String`)

**Returns:** `public Material`

### findTextureEntry

```java
private Either<Material, String> findTextureEntry(String p_111486_)
```

**Parameters:**

- `p_111486_` (`String`)

**Returns:** `private Either<Material, String>`

### isTextureReference

```java
static boolean isTextureReference(String p_111489_)
```

**Parameters:**

- `p_111489_` (`String`)

**Returns:** `static boolean`

### getRootModel

```java
public BlockModel getRootModel()
```

**Returns:** `public BlockModel`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `public ItemTransforms`

### getTransform

```java
private ItemTransform getTransform(ItemDisplayContext p_270662_)
```

**Parameters:**

- `p_270662_` (`ItemDisplayContext`)

**Returns:** `private ItemTransform`

### toString

```java
public String toString()
```

**Returns:** `String`

### deserialize

```java
public BlockModel deserialize(JsonElement p_111498_, Type p_111499_, JsonDeserializationContext p_111500_)
```

**Parameters:**

- `p_111498_` (`JsonElement`)
- `p_111499_` (`Type`)
- `p_111500_` (`JsonDeserializationContext`)

**Returns:** `public BlockModel`

### BlockModel

```java
return new BlockModel()
```

**Returns:** `return new`

### getOverrides

```java
protected List<ItemOverride> getOverrides(JsonDeserializationContext p_111495_, JsonObject p_111496_)
```

**Parameters:**

- `p_111495_` (`JsonDeserializationContext`)
- `p_111496_` (`JsonObject`)

**Returns:** `protected List<ItemOverride>`

### getTextureMap

```java
private Map<String, Either<Material, String>> getTextureMap(JsonObject p_111510_)
```

**Parameters:**

- `p_111510_` (`JsonObject`)

**Returns:** `private Map<String, Either<Material, String>>`

### parseTextureLocationOrReference

```java
private static Either<Material, String> parseTextureLocationOrReference(ResourceLocation p_111504_, String p_111505_)
```

**Parameters:**

- `p_111504_` (`ResourceLocation`)
- `p_111505_` (`String`)

**Returns:** `private static Either<Material, String>`

### JsonParseException

```java
throw new JsonParseException(p_111505_ + " is not valid resource location")
```

**Parameters:**

- `location"` (`p_111505_ + " is not valid resource`)

**Returns:** `throw new`

### getParentName

```java
private String getParentName(JsonObject p_111512_)
```

**Parameters:**

- `p_111512_` (`JsonObject`)

**Returns:** `private String`

### getAmbientOcclusion

```java
protected Boolean getAmbientOcclusion(JsonObject p_273052_)
```

**Parameters:**

- `p_273052_` (`JsonObject`)

**Returns:** `Boolean`

### getElements

```java
protected List<BlockElement> getElements(JsonDeserializationContext p_111507_, JsonObject p_111508_)
```

**Parameters:**

- `p_111507_` (`JsonDeserializationContext`)
- `p_111508_` (`JsonObject`)

**Returns:** `protected List<BlockElement>`

### SIDE

```java
, SIDE()
```

**Returns:** `,`

### GuiLight

```java
private GuiLight(String p_111525_)
```

**Parameters:**

- `p_111525_` (`String`)

**Returns:** `private`

### getByName

```java
public static BlockModel.GuiLight getByName(String p_111528_)
```

**Parameters:**

- `p_111528_` (`String`)

**Returns:** `public static BlockModel.GuiLight`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid gui light: " + p_111528_)
```

**Parameters:**

- `p_111528_` (`"Invalid gui light: " +`)

**Returns:** `throw new`

### lightLikeBlock

```java
public boolean lightLikeBlock()
```

**Returns:** `public boolean`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `public String`

### LoopException

```java
public LoopException(String p_173424_)
```

**Parameters:**

- `p_173424_` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
| `GuiLight` | enum |  |
| `LoopException` | class |  |
