# PaintingRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `EntityRenderer<Painting>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PaintingRenderer

```java
public PaintingRenderer(EntityRendererProvider.Context p_174332_)
```

**Parameters:**

- `p_174332_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(Painting p_115552_, float p_115553_, float p_115554_, PoseStack p_115555_, MultiBufferSource p_115556_, int p_115557_)
```

**Parameters:**

- `p_115552_` (`Painting`)
- `p_115553_` (`float`)
- `p_115554_` (`float`)
- `p_115555_` (`PoseStack`)
- `p_115556_` (`MultiBufferSource`)
- `p_115557_` (`int`)

**Returns:** `public void`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(Painting p_115550_)
```

**Parameters:**

- `p_115550_` (`Painting`)

**Returns:** `public ResourceLocation`

### renderPainting

```java
private void renderPainting(PoseStack p_115559_, VertexConsumer p_115560_, Painting p_115561_, int p_115562_, int p_115563_, TextureAtlasSprite p_115564_, TextureAtlasSprite p_115565_)
```

**Parameters:**

- `p_115559_` (`PoseStack`)
- `p_115560_` (`VertexConsumer`)
- `p_115561_` (`Painting`)
- `p_115562_` (`int`)
- `p_115563_` (`int`)
- `p_115564_` (`TextureAtlasSprite`)
- `p_115565_` (`TextureAtlasSprite`)

**Returns:** `private void`

### vertex

```java
private void vertex(PoseStack.Pose p_323991_, VertexConsumer p_254114_, float p_254164_, float p_254459_, float p_254183_, float p_253615_, float p_254448_, int p_253660_, int p_254342_, int p_253757_, int p_254101_)
```

**Parameters:**

- `p_323991_` (`PoseStack.Pose`)
- `p_254114_` (`VertexConsumer`)
- `p_254164_` (`float`)
- `p_254459_` (`float`)
- `p_254183_` (`float`)
- `p_253615_` (`float`)
- `p_254448_` (`float`)
- `p_253660_` (`int`)
- `p_254342_` (`int`)
- `p_253757_` (`int`)
- `p_254101_` (`int`)

**Returns:** `private void`
