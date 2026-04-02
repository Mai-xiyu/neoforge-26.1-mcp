# WolfArmorLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class
**Extends:** `RenderLayer<Wolf, WolfModel<Wolf>>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WolfArmorLayer

```java
public WolfArmorLayer(RenderLayerParent<Wolf, WolfModel<Wolf>> p_316639_, EntityModelSet p_316756_)
```

**Parameters:**

- `p_316639_` (`RenderLayerParent<Wolf, WolfModel<Wolf>>`)
- `p_316756_` (`EntityModelSet`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(PoseStack p_316608_, MultiBufferSource p_316832_, int p_316312_, Wolf p_316642_, float p_316350_, float p_316147_, float p_316637_, float p_316734_, float p_316302_, float p_316605_)
```

**Parameters:**

- `p_316608_` (`PoseStack`)
- `p_316832_` (`MultiBufferSource`)
- `p_316312_` (`int`)
- `p_316642_` (`Wolf`)
- `p_316350_` (`float`)
- `p_316147_` (`float`)
- `p_316637_` (`float`)
- `p_316734_` (`float`)
- `p_316302_` (`float`)
- `p_316605_` (`float`)

**Returns:** `public void`

### maybeRenderColoredLayer

```java
private void maybeRenderColoredLayer(PoseStack p_330741_, MultiBufferSource p_330339_, int p_332179_, ItemStack p_331250_, AnimalArmorItem p_330867_)
```

**Parameters:**

- `p_330741_` (`PoseStack`)
- `p_330339_` (`MultiBufferSource`)
- `p_332179_` (`int`)
- `p_331250_` (`ItemStack`)
- `p_330867_` (`AnimalArmorItem`)

**Returns:** `private void`

### maybeRenderCracks

```java
private void maybeRenderCracks(PoseStack p_331222_, MultiBufferSource p_331637_, int p_330931_, ItemStack p_331187_)
```

**Parameters:**

- `p_331222_` (`PoseStack`)
- `p_331637_` (`MultiBufferSource`)
- `p_330931_` (`int`)
- `p_331187_` (`ItemStack`)

**Returns:** `private void`
