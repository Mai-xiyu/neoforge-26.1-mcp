# MinecartRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class<T extends AbstractMinecart> extends EntityRenderer<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `model` | `EntityModel<T>` |  |

## Methods

### MinecartRenderer

```java
public MinecartRenderer(EntityRendererProvider.Context p_174300_, ModelLayerLocation p_174301_)
```

**Parameters:**

- `p_174300_` (`EntityRendererProvider.Context`)
- `p_174301_` (`ModelLayerLocation`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(T p_115418_, float p_115419_, float p_115420_, PoseStack p_115421_, MultiBufferSource p_115422_, int p_115423_)
```

**Parameters:**

- `p_115418_` (`T`)
- `p_115419_` (`float`)
- `p_115420_` (`float`)
- `p_115421_` (`PoseStack`)
- `p_115422_` (`MultiBufferSource`)
- `p_115423_` (`int`)

**Returns:** `public void`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(T p_115416_)
```

**Parameters:**

- `p_115416_` (`T`)

**Returns:** `public ResourceLocation`

### renderMinecartContents

```java
protected void renderMinecartContents(T p_115424_, float p_115425_, BlockState p_115426_, PoseStack p_115427_, MultiBufferSource p_115428_, int p_115429_)
```

**Parameters:**

- `p_115424_` (`T`)
- `p_115425_` (`float`)
- `p_115426_` (`BlockState`)
- `p_115427_` (`PoseStack`)
- `p_115428_` (`MultiBufferSource`)
- `p_115429_` (`int`)

**Returns:** `protected void`
