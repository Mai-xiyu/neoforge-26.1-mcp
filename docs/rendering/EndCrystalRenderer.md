# EndCrystalRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `EntityRenderer<EndCrystal>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### EndCrystalRenderer

```java
public EndCrystalRenderer(EntityRendererProvider.Context p_173970_)
```

**Parameters:**

- `p_173970_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(EndCrystal p_114162_, float p_114163_, float p_114164_, PoseStack p_114165_, MultiBufferSource p_114166_, int p_114167_)
```

**Parameters:**

- `p_114162_` (`EndCrystal`)
- `p_114163_` (`float`)
- `p_114164_` (`float`)
- `p_114165_` (`PoseStack`)
- `p_114166_` (`MultiBufferSource`)
- `p_114167_` (`int`)

**Returns:** `public void`

### getY

```java
public static float getY(EndCrystal p_114159_, float p_114160_)
```

**Parameters:**

- `p_114159_` (`EndCrystal`)
- `p_114160_` (`float`)

**Returns:** `public static float`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(EndCrystal p_114157_)
```

**Parameters:**

- `p_114157_` (`EndCrystal`)

**Returns:** `public ResourceLocation`

### shouldRender

```java
public boolean shouldRender(EndCrystal p_114169_, Frustum p_114170_, double p_114171_, double p_114172_, double p_114173_)
```

**Parameters:**

- `p_114169_` (`EndCrystal`)
- `p_114170_` (`Frustum`)
- `p_114171_` (`double`)
- `p_114172_` (`double`)
- `p_114173_` (`double`)

**Returns:** `public boolean`
