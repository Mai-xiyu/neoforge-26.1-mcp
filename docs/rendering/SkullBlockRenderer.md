# SkullBlockRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<SkullBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SKIN_BY_TYPE` | `Map<SkullBlock.Type, ResourceLocation>` |  |

## Methods

### createSkullRenderers

```java
public static Map<SkullBlock.Type, SkullModelBase> createSkullRenderers(EntityModelSet p_173662_)
```

**Parameters:**

- `p_173662_` (`EntityModelSet`)

**Returns:** `public static Map<SkullBlock.Type, SkullModelBase>`

### SkullBlockRenderer

```java
public SkullBlockRenderer(BlockEntityRendererProvider.Context p_173660_)
```

**Parameters:**

- `p_173660_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(SkullBlockEntity p_112534_, float p_112535_, PoseStack p_112536_, MultiBufferSource p_112537_, int p_112538_, int p_112539_)
```

**Parameters:**

- `p_112534_` (`SkullBlockEntity`)
- `p_112535_` (`float`)
- `p_112536_` (`PoseStack`)
- `p_112537_` (`MultiBufferSource`)
- `p_112538_` (`int`)
- `p_112539_` (`int`)

**Returns:** `public void`

### renderSkull

```java
 renderSkull()
```

**Returns:** ``

### renderSkull

```java
public static void renderSkull(Direction p_173664_, float p_173665_, float p_173666_, PoseStack p_173667_, MultiBufferSource p_173668_, int p_173669_, SkullModelBase p_173670_, RenderType p_173671_)
```

**Parameters:**

- `p_173664_` (`Direction`)
- `p_173665_` (`float`)
- `p_173666_` (`float`)
- `p_173667_` (`PoseStack`)
- `p_173668_` (`MultiBufferSource`)
- `p_173669_` (`int`)
- `p_173670_` (`SkullModelBase`)
- `p_173671_` (`RenderType`)

**Returns:** `public static void`

### getRenderType

```java
public static RenderType getRenderType(SkullBlock.Type p_112524_, ResolvableProfile p_332722_)
```

**Parameters:**

- `p_112524_` (`SkullBlock.Type`)
- `p_332722_` (`ResolvableProfile`)

**Returns:** `public static RenderType`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(SkullBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`SkullBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
