# ItemLayerModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Implements:** `IUnbakedGeometry<ItemLayerModel>`
**Side:** 🖥️ Client

## Description

Forge reimplementation of vanilla's `ItemModelGenerator`, i.e. builtin/generated models with some tweaks:
- Represented as `IUnbakedGeometry` so it can be baked as usual instead of being special-cased
- Not limited to an arbitrary number of layers (5)
- Support for per-layer render types

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `Loader` |  |

## Methods

### ItemLayerModel

```java
private ItemLayerModel(ImmutableList<Material> textures, Int2ObjectMap<ExtraFaceData> layerData, Int2ObjectMap<ResourceLocation> renderTypeNames)
```

**Parameters:**

- `textures` (`ImmutableList<Material>`)
- `layerData` (`Int2ObjectMap<ExtraFaceData>`)
- `renderTypeNames` (`Int2ObjectMap<ResourceLocation>`)

**Returns:** `private`

### bake

```java
public BakedModel bake(IGeometryBakingContext context, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState, ItemOverrides overrides)
```

**Parameters:**

- `context` (`IGeometryBakingContext`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)
- `overrides` (`ItemOverrides`)

**Returns:** `BakedModel`

### read

```java
public ItemLayerModel read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `ItemLayerModel`

### JsonParseException

```java
throw new JsonParseException("Registered duplicate render type for layer " + layer)
```

**Parameters:**

- `layer` (`"Registered duplicate render type for layer " +`)

**Returns:** `throw new`

### JsonParseException

```java
throw new JsonParseException("forge_data should be replaced by neoforge_data")
```

**Parameters:**

- `neoforge_data"` (`"forge_data should be replaced by`)

**Returns:** `throw new`

### readLayerData

```java
 readLayerData()
```

**Returns:** ``

### ItemLayerModel

```java
return new ItemLayerModel()
```

**Returns:** `return new`

### readLayerData

```java
protected void readLayerData(JsonObject jsonObject, String name, Int2ObjectOpenHashMap<ResourceLocation> renderTypeNames, Int2ObjectMap<ExtraFaceData> layerData, boolean logWarning)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `name` (`String`)
- `renderTypeNames` (`Int2ObjectOpenHashMap<ResourceLocation>`)
- `layerData` (`Int2ObjectMap<ExtraFaceData>`)
- `logWarning` (`boolean`)

**Returns:** `protected void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Loader` | class |  |
