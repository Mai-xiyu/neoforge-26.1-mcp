# SimpleBakedModel

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `BakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `unculledFaces` | `List<BakedQuad>` |  |
| `culledFaces` | `Map<Direction, List<BakedQuad>>` |  |
| `hasAmbientOcclusion` | `boolean` |  |
| `isGui3d` | `boolean` |  |
| `usesBlockLight` | `boolean` |  |
| `particleIcon` | `TextureAtlasSprite` |  |
| `transforms` | `ItemTransforms` |  |
| `overrides` | `ItemOverrides` |  |
| `blockRenderTypes` | `net.neoforged.neoforge.client.ChunkRenderTypeSet` |  |
| `itemRenderTypes` | `List<net.minecraft.client.renderer.RenderType>` |  |
| `fabulousItemRenderTypes` | `List<net.minecraft.client.renderer.RenderType>` |  |

## Methods

### SimpleBakedModel

```java
public public SimpleBakedModel(List<BakedQuad> p_119489_, Map<Direction, List<BakedQuad>> p_119490_, boolean p_119491_, boolean p_119492_, boolean p_119493_, TextureAtlasSprite p_119494_, ItemTransforms p_119495_, ItemOverrides p_119496_)
```

**Parameters:**

- `p_119489_` (`List<BakedQuad>`)
- `p_119490_` (`Map<Direction, List<BakedQuad>>`)
- `p_119491_` (`boolean`)
- `p_119492_` (`boolean`)
- `p_119493_` (`boolean`)
- `p_119494_` (`TextureAtlasSprite`)
- `p_119495_` (`ItemTransforms`)
- `p_119496_` (`ItemOverrides`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SimpleBakedModel

```java
public SimpleBakedModel(List<BakedQuad> p_119489_, Map<Direction, List<BakedQuad>> p_119490_, boolean p_119491_, boolean p_119492_, boolean p_119493_, TextureAtlasSprite p_119494_, ItemTransforms p_119495_, ItemOverrides p_119496_, net.neoforged.neoforge.client.RenderTypeGroup renderTypes)
```

**Parameters:**

- `p_119489_` (`List<BakedQuad>`)
- `p_119490_` (`Map<Direction, List<BakedQuad>>`)
- `p_119491_` (`boolean`)
- `p_119492_` (`boolean`)
- `p_119493_` (`boolean`)
- `p_119494_` (`TextureAtlasSprite`)
- `p_119495_` (`ItemTransforms`)
- `p_119496_` (`ItemOverrides`)
- `renderTypes` (`net.neoforged.neoforge.client.RenderTypeGroup`)

**Returns:** `public`

### getQuads

```java
public List<BakedQuad> getQuads(BlockState p_235054_, Direction p_235055_, RandomSource p_235056_)
```

**Parameters:**

- `p_235054_` (`BlockState`)
- `p_235055_` (`Direction`)
- `p_235056_` (`RandomSource`)

**Returns:** `List<BakedQuad>`

### useAmbientOcclusion

```java
public boolean useAmbientOcclusion()
```

**Returns:** `boolean`

### isGui3d

```java
public boolean isGui3d()
```

**Returns:** `boolean`

### usesBlockLight

```java
public boolean usesBlockLight()
```

**Returns:** `boolean`

### isCustomRenderer

```java
public boolean isCustomRenderer()
```

**Returns:** `boolean`

### getParticleIcon

```java
public TextureAtlasSprite getParticleIcon()
```

**Returns:** `TextureAtlasSprite`

### getTransforms

```java
public ItemTransforms getTransforms()
```

**Returns:** `ItemTransforms`

### getOverrides

```java
public ItemOverrides getOverrides()
```

**Returns:** `ItemOverrides`

### getRenderTypes

```java
public net.neoforged.neoforge.client.ChunkRenderTypeSet getRenderTypes(.jetbrains.annotations.NotNull BlockState state, .jetbrains.annotations.NotNull RandomSource rand, .jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData data)
```

**Parameters:**

- `state` (`.jetbrains.annotations.NotNull BlockState`)
- `rand` (`.jetbrains.annotations.NotNull RandomSource`)
- `data` (`.jetbrains.annotations.NotNull net.neoforged.neoforge.client.model.data.ModelData`)

**Returns:** `net.neoforged.neoforge.client.ChunkRenderTypeSet`

### getRenderTypes

```java
public List<net.minecraft.client.renderer.RenderType> getRenderTypes(net.minecraft.world.item.ItemStack itemStack, boolean fabulous)
```

**Parameters:**

- `itemStack` (`net.minecraft.world.item.ItemStack`)
- `fabulous` (`boolean`)

**Returns:** `List<net.minecraft.client.renderer.RenderType>`

### Builder

```java
public Builder(BlockModel p_119517_, ItemOverrides p_119518_, boolean p_119519_)
```

**Parameters:**

- `p_119517_` (`BlockModel`)
- `p_119518_` (`ItemOverrides`)
- `p_119519_` (`boolean`)

**Returns:** `public`

### Builder

```java
public Builder(boolean p_119521_, boolean p_119522_, boolean p_119523_, ItemTransforms p_119524_, ItemOverrides p_119525_)
```

**Parameters:**

- `p_119521_` (`boolean`)
- `p_119522_` (`boolean`)
- `p_119523_` (`boolean`)
- `p_119524_` (`ItemTransforms`)
- `p_119525_` (`ItemOverrides`)

**Returns:** `public`

### addCulledFace

```java
public SimpleBakedModel.Builder addCulledFace(Direction p_119531_, BakedQuad p_119532_)
```

**Parameters:**

- `p_119531_` (`Direction`)
- `p_119532_` (`BakedQuad`)

**Returns:** `public SimpleBakedModel.Builder`

### addUnculledFace

```java
public SimpleBakedModel.Builder addUnculledFace(BakedQuad p_119527_)
```

**Parameters:**

- `p_119527_` (`BakedQuad`)

**Returns:** `public SimpleBakedModel.Builder`

### particle

```java
public SimpleBakedModel.Builder particle(TextureAtlasSprite p_119529_)
```

**Parameters:**

- `p_119529_` (`TextureAtlasSprite`)

**Returns:** `public SimpleBakedModel.Builder`

### item

```java
public SimpleBakedModel.Builder item()
```

**Returns:** `public SimpleBakedModel.Builder`

### build

```java
public BakedModel build()
```

**Returns:** `BakedModel`

### build

```java
return build()
```

**Returns:** `return`

### build

```java
public BakedModel build(net.neoforged.neoforge.client.RenderTypeGroup renderTypes)
```

**Parameters:**

- `renderTypes` (`net.neoforged.neoforge.client.RenderTypeGroup`)

**Returns:** `public BakedModel`

### RuntimeException

```java
throw new RuntimeException("Missing particle!")
```

**Parameters:**

- `particle!"` (`"Missing`)

**Returns:** `throw new`

### SimpleBakedModel

```java
return new SimpleBakedModel()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
