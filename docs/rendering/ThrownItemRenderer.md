# ThrownItemRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class<T extends Entity & ItemSupplier> extends EntityRenderer<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ThrownItemRenderer

```java
public ThrownItemRenderer(EntityRendererProvider.Context p_174416_, float p_174417_, boolean p_174418_)
```

**Parameters:**

- `p_174416_` (`EntityRendererProvider.Context`)
- `p_174417_` (`float`)
- `p_174418_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ThrownItemRenderer

```java
public ThrownItemRenderer(EntityRendererProvider.Context p_174414_)
```

**Parameters:**

- `p_174414_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getBlockLightLevel

```java
protected int getBlockLightLevel(T p_116092_, BlockPos p_116093_)
```

**Parameters:**

- `p_116092_` (`T`)
- `p_116093_` (`BlockPos`)

**Returns:** `int`

### render

```java
public void render(T p_116085_, float p_116086_, float p_116087_, PoseStack p_116088_, MultiBufferSource p_116089_, int p_116090_)
```

**Parameters:**

- `p_116085_` (`T`)
- `p_116086_` (`float`)
- `p_116087_` (`float`)
- `p_116088_` (`PoseStack`)
- `p_116089_` (`MultiBufferSource`)
- `p_116090_` (`int`)

### getTextureLocation

```java
public ResourceLocation getTextureLocation(Entity p_116083_)
```

**Parameters:**

- `p_116083_` (`Entity`)

**Returns:** `ResourceLocation`
