# ItemRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Implements:** `ResourceManagerReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ENCHANTED_GLINT_ENTITY` | `ResourceLocation` |  |
| `ENCHANTED_GLINT_ITEM` | `ResourceLocation` |  |
| `GUI_SLOT_CENTER_X` | `int` |  |
| `GUI_SLOT_CENTER_Y` | `int` |  |
| `ITEM_COUNT_BLIT_OFFSET` | `int` |  |
| `COMPASS_FOIL_UI_SCALE` | `float` |  |
| `COMPASS_FOIL_FIRST_PERSON_SCALE` | `float` |  |
| `COMPASS_FOIL_TEXTURE_SCALE` | `float` |  |
| `TRIDENT_IN_HAND_MODEL` | `ModelResourceLocation` |  |
| `SPYGLASS_IN_HAND_MODEL` | `ModelResourceLocation` |  |

## Methods

### ItemRenderer

```java
public ItemRenderer(Minecraft p_266926_, TextureManager p_266774_, ModelManager p_266850_, ItemColors p_267016_, BlockEntityWithoutLevelRenderer p_267049_)
```

**Parameters:**

- `p_266926_` (`Minecraft`)
- `p_266774_` (`TextureManager`)
- `p_266850_` (`ModelManager`)
- `p_267016_` (`ItemColors`)
- `p_267049_` (`BlockEntityWithoutLevelRenderer`)

**Returns:** `public`

### getItemModelShaper

```java
public ItemModelShaper getItemModelShaper()
```

**Returns:** `public ItemModelShaper`

### renderModelLists

```java
public void renderModelLists(BakedModel p_115190_, ItemStack p_115191_, int p_115192_, int p_115193_, PoseStack p_115194_, VertexConsumer p_115195_)
```

**Parameters:**

- `p_115190_` (`BakedModel`)
- `p_115191_` (`ItemStack`)
- `p_115192_` (`int`)
- `p_115193_` (`int`)
- `p_115194_` (`PoseStack`)
- `p_115195_` (`VertexConsumer`)

**Returns:** `public void`

### render

```java
public void render(ItemStack p_115144_, ItemDisplayContext p_270188_, boolean p_115146_, PoseStack p_115147_, MultiBufferSource p_115148_, int p_115149_, int p_115150_, BakedModel p_115151_)
```

**Parameters:**

- `p_115144_` (`ItemStack`)
- `p_270188_` (`ItemDisplayContext`)
- `p_115146_` (`boolean`)
- `p_115147_` (`PoseStack`)
- `p_115148_` (`MultiBufferSource`)
- `p_115149_` (`int`)
- `p_115150_` (`int`)
- `p_115151_` (`BakedModel`)

**Returns:** `public void`

### hasAnimatedTexture

```java
private static boolean hasAnimatedTexture(ItemStack p_286353_)
```

**Parameters:**

- `p_286353_` (`ItemStack`)

**Returns:** `private static boolean`

### getArmorFoilBuffer

```java
public static VertexConsumer getArmorFoilBuffer(MultiBufferSource p_115185_, RenderType p_115186_, boolean p_115187_)
```

**Parameters:**

- `p_115185_` (`MultiBufferSource`)
- `p_115186_` (`RenderType`)
- `p_115187_` (`boolean`)

**Returns:** `public static VertexConsumer`

### getCompassFoilBuffer

```java
public static VertexConsumer getCompassFoilBuffer(MultiBufferSource p_115181_, RenderType p_115182_, PoseStack.Pose p_115183_)
```

**Parameters:**

- `p_115181_` (`MultiBufferSource`)
- `p_115182_` (`RenderType`)
- `p_115183_` (`PoseStack.Pose`)

**Returns:** `public static VertexConsumer`

### getFoilBuffer

```java
public static VertexConsumer getFoilBuffer(MultiBufferSource p_115212_, RenderType p_115213_, boolean p_115214_, boolean p_115215_)
```

**Parameters:**

- `p_115212_` (`MultiBufferSource`)
- `p_115213_` (`RenderType`)
- `p_115214_` (`boolean`)
- `p_115215_` (`boolean`)

**Returns:** `public static VertexConsumer`

### getFoilBufferDirect

```java
public static VertexConsumer getFoilBufferDirect(MultiBufferSource p_115223_, RenderType p_115224_, boolean p_115225_, boolean p_115226_)
```

**Parameters:**

- `p_115223_` (`MultiBufferSource`)
- `p_115224_` (`RenderType`)
- `p_115225_` (`boolean`)
- `p_115226_` (`boolean`)

**Returns:** `public static VertexConsumer`

### renderQuadList

```java
public void renderQuadList(PoseStack p_115163_, VertexConsumer p_115164_, List<BakedQuad> p_115165_, ItemStack p_115166_, int p_115167_, int p_115168_)
```

**Parameters:**

- `p_115163_` (`PoseStack`)
- `p_115164_` (`VertexConsumer`)
- `p_115165_` (`List<BakedQuad>`)
- `p_115166_` (`ItemStack`)
- `p_115167_` (`int`)
- `p_115168_` (`int`)

**Returns:** `public void`

### getModel

```java
public BakedModel getModel(ItemStack p_174265_, Level p_174266_, LivingEntity p_174267_, int p_174268_)
```

**Parameters:**

- `p_174265_` (`ItemStack`)
- `p_174266_` (`Level`)
- `p_174267_` (`LivingEntity`)
- `p_174268_` (`int`)

**Returns:** `public BakedModel`

### renderStatic

```java
public void renderStatic(ItemStack p_270761_, ItemDisplayContext p_270648_, int p_270410_, int p_270894_, PoseStack p_270430_, MultiBufferSource p_270457_, Level p_270149_, int p_270509_)
```

**Parameters:**

- `p_270761_` (`ItemStack`)
- `p_270648_` (`ItemDisplayContext`)
- `p_270410_` (`int`)
- `p_270894_` (`int`)
- `p_270430_` (`PoseStack`)
- `p_270457_` (`MultiBufferSource`)
- `p_270149_` (`Level`)
- `p_270509_` (`int`)

**Returns:** `public void`

### renderStatic

```java
public void renderStatic(LivingEntity p_270101_, ItemStack p_270637_, ItemDisplayContext p_270437_, boolean p_270434_, PoseStack p_270230_, MultiBufferSource p_270411_, Level p_270641_, int p_270595_, int p_270927_, int p_270845_)
```

**Parameters:**

- `p_270101_` (`LivingEntity`)
- `p_270637_` (`ItemStack`)
- `p_270437_` (`ItemDisplayContext`)
- `p_270434_` (`boolean`)
- `p_270230_` (`PoseStack`)
- `p_270411_` (`MultiBufferSource`)
- `p_270641_` (`Level`)
- `p_270595_` (`int`)
- `p_270927_` (`int`)
- `p_270845_` (`int`)

**Returns:** `public void`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_115105_)
```

**Parameters:**

- `p_115105_` (`ResourceManager`)

### getBlockEntityRenderer

```java
public BlockEntityWithoutLevelRenderer getBlockEntityRenderer()
```

**Returns:** `public BlockEntityWithoutLevelRenderer`
