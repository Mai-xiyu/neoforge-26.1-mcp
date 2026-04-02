# BannerRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<BannerBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLAG` | `String` |  |

## Methods

### BannerRenderer

```java
public BannerRenderer(BlockEntityRendererProvider.Context p_173521_)
```

**Parameters:**

- `p_173521_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(BannerBlockEntity p_112052_, float p_112053_, PoseStack p_112054_, MultiBufferSource p_112055_, int p_112056_, int p_112057_)
```

**Parameters:**

- `p_112052_` (`BannerBlockEntity`)
- `p_112053_` (`float`)
- `p_112054_` (`PoseStack`)
- `p_112055_` (`MultiBufferSource`)
- `p_112056_` (`int`)
- `p_112057_` (`int`)

**Returns:** `public void`

### renderPatterns

```java
public static void renderPatterns(PoseStack p_112066_, MultiBufferSource p_112067_, int p_112068_, int p_112069_, ModelPart p_112070_, Material p_112071_, boolean p_112072_, DyeColor p_332660_, BannerPatternLayers p_330986_)
```

**Parameters:**

- `p_112066_` (`PoseStack`)
- `p_112067_` (`MultiBufferSource`)
- `p_112068_` (`int`)
- `p_112069_` (`int`)
- `p_112070_` (`ModelPart`)
- `p_112071_` (`Material`)
- `p_112072_` (`boolean`)
- `p_332660_` (`DyeColor`)
- `p_330986_` (`BannerPatternLayers`)

**Returns:** `public static void`

### renderPatterns

```java
 renderPatterns()
```

**Returns:** ``

### renderPatterns

```java
public static void renderPatterns(PoseStack p_112075_, MultiBufferSource p_112076_, int p_112077_, int p_112078_, ModelPart p_112079_, Material p_112080_, boolean p_112081_, DyeColor p_332652_, BannerPatternLayers p_331851_, boolean p_332823_)
```

**Parameters:**

- `p_112075_` (`PoseStack`)
- `p_112076_` (`MultiBufferSource`)
- `p_112077_` (`int`)
- `p_112078_` (`int`)
- `p_112079_` (`ModelPart`)
- `p_112080_` (`Material`)
- `p_112081_` (`boolean`)
- `p_332652_` (`DyeColor`)
- `p_331851_` (`BannerPatternLayers`)
- `p_332823_` (`boolean`)

**Returns:** `public static void`

### renderPatternLayer

```java
 renderPatternLayer(p_112081_ ? Sheets.BANNER_BASE : Sheets.SHIELD_BASE)
```

**Parameters:**

- `Sheets.SHIELD_BASE` (`p_112081_ ? Sheets.BANNER_BASE :`)

**Returns:** ``

### renderPatternLayer

```java
private static void renderPatternLayer(PoseStack p_332737_, MultiBufferSource p_332758_, int p_332821_, int p_332828_, ModelPart p_332732_, Material p_332704_, DyeColor p_332728_)
```

**Parameters:**

- `p_332737_` (`PoseStack`)
- `p_332758_` (`MultiBufferSource`)
- `p_332821_` (`int`)
- `p_332828_` (`int`)
- `p_332732_` (`ModelPart`)
- `p_332704_` (`Material`)
- `p_332728_` (`DyeColor`)

**Returns:** `private static void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(BannerBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`BannerBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
