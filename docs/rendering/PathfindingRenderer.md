# PathfindingRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### addPath

```java
public void addPath(int p_113612_, Path p_113613_, float p_113614_)
```

**Parameters:**

- `p_113612_` (`int`)
- `p_113613_` (`Path`)
- `p_113614_` (`float`)

**Returns:** `public void`

### render

```java
public void render(PoseStack p_113629_, MultiBufferSource p_113630_, double p_113631_, double p_113632_, double p_113633_)
```

**Parameters:**

- `p_113629_` (`PoseStack`)
- `p_113630_` (`MultiBufferSource`)
- `p_113631_` (`double`)
- `p_113632_` (`double`)
- `p_113633_` (`double`)

### renderPath

```java
 renderPath()
```

**Returns:** ``

### renderPath

```java
public static void renderPath(PoseStack p_270399_, MultiBufferSource p_270359_, Path p_270189_, float p_270841_, boolean p_270481_, boolean p_270748_, double p_270187_, double p_270252_, double p_270371_)
```

**Parameters:**

- `p_270399_` (`PoseStack`)
- `p_270359_` (`MultiBufferSource`)
- `p_270189_` (`Path`)
- `p_270841_` (`float`)
- `p_270481_` (`boolean`)
- `p_270748_` (`boolean`)
- `p_270187_` (`double`)
- `p_270252_` (`double`)
- `p_270371_` (`double`)

**Returns:** `public static void`

### renderPathLine

```java
public static void renderPathLine(PoseStack p_270666_, VertexConsumer p_270602_, Path p_270511_, double p_270524_, double p_270163_, double p_270176_)
```

**Parameters:**

- `p_270666_` (`PoseStack`)
- `p_270602_` (`VertexConsumer`)
- `p_270511_` (`Path`)
- `p_270524_` (`double`)
- `p_270163_` (`double`)
- `p_270176_` (`double`)

**Returns:** `public static void`

### distanceToCamera

```java
private static float distanceToCamera(BlockPos p_113635_, double p_113636_, double p_113637_, double p_113638_)
```

**Parameters:**

- `p_113635_` (`BlockPos`)
- `p_113636_` (`double`)
- `p_113637_` (`double`)
- `p_113638_` (`double`)

**Returns:** `private static float`
