# TheEndPortalRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class<T extends TheEndPortalBlockEntity> implements BlockEntityRenderer<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `END_SKY_LOCATION` | `ResourceLocation` |  |
| `END_PORTAL_LOCATION` | `ResourceLocation` |  |

## Methods

### TheEndPortalRenderer

```java
public TheEndPortalRenderer(BlockEntityRendererProvider.Context p_173689_)
```

**Parameters:**

- `p_173689_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(T p_112650_, float p_112651_, PoseStack p_112652_, MultiBufferSource p_112653_, int p_112654_, int p_112655_)
```

**Parameters:**

- `p_112650_` (`T`)
- `p_112651_` (`float`)
- `p_112652_` (`PoseStack`)
- `p_112653_` (`MultiBufferSource`)
- `p_112654_` (`int`)
- `p_112655_` (`int`)

**Returns:** `public void`

### renderCube

```java
private void renderCube(T p_173691_, Matrix4f p_254024_, VertexConsumer p_173693_)
```

**Parameters:**

- `p_173691_` (`T`)
- `p_254024_` (`Matrix4f`)
- `p_173693_` (`VertexConsumer`)

**Returns:** `private void`

### renderFace

```java
private void renderFace(T p_253949_, Matrix4f p_254247_, VertexConsumer p_254390_, float p_254147_, float p_253639_, float p_254107_, float p_254109_, float p_254021_, float p_254458_, float p_254086_, float p_254310_, Direction p_253619_)
```

**Parameters:**

- `p_253949_` (`T`)
- `p_254247_` (`Matrix4f`)
- `p_254390_` (`VertexConsumer`)
- `p_254147_` (`float`)
- `p_253639_` (`float`)
- `p_254107_` (`float`)
- `p_254109_` (`float`)
- `p_254021_` (`float`)
- `p_254458_` (`float`)
- `p_254086_` (`float`)
- `p_254310_` (`float`)
- `p_253619_` (`Direction`)

**Returns:** `private void`

### getOffsetUp

```java
protected float getOffsetUp()
```

**Returns:** `protected float`

### getOffsetDown

```java
protected float getOffsetDown()
```

**Returns:** `protected float`

### renderType

```java
protected RenderType renderType()
```

**Returns:** `protected RenderType`
