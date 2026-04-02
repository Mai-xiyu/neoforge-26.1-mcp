# BreezeDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BreezeDebugRenderer

```java
public BreezeDebugRenderer(Minecraft p_312380_)
```

**Parameters:**

- `p_312380_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(PoseStack p_312334_, MultiBufferSource p_312422_, double p_312916_, double p_312212_, double p_312705_)
```

**Parameters:**

- `p_312334_` (`PoseStack`)
- `p_312422_` (`MultiBufferSource`)
- `p_312916_` (`double`)
- `p_312212_` (`double`)
- `p_312705_` (`double`)

**Returns:** `public void`

### drawLine

```java
private static void drawLine(PoseStack p_311968_, MultiBufferSource p_312154_, double p_312731_, double p_312933_, double p_312347_, Vec3 p_312653_, Vec3 p_312341_, int p_311785_)
```

**Parameters:**

- `p_311968_` (`PoseStack`)
- `p_312154_` (`MultiBufferSource`)
- `p_312731_` (`double`)
- `p_312933_` (`double`)
- `p_312347_` (`double`)
- `p_312653_` (`Vec3`)
- `p_312341_` (`Vec3`)
- `p_311785_` (`int`)

**Returns:** `private static void`

### drawCircle

```java
private static void drawCircle(Matrix4f p_312289_, double p_312777_, double p_312720_, double p_312378_, VertexConsumer p_312840_, Vec3 p_312033_, float p_312193_, int p_312116_)
```

**Parameters:**

- `p_312289_` (`Matrix4f`)
- `p_312777_` (`double`)
- `p_312720_` (`double`)
- `p_312378_` (`double`)
- `p_312840_` (`VertexConsumer`)
- `p_312033_` (`Vec3`)
- `p_312193_` (`float`)
- `p_312116_` (`int`)

**Returns:** `private static void`

### drawCircleVertex

```java
 drawCircleVertex()
```

**Returns:** ``

### drawCircleVertex

```java
 drawCircleVertex()
```

**Returns:** ``

### drawCircleVertex

```java
private static void drawCircleVertex(int p_312234_, Matrix4f p_312568_, double p_312049_, double p_312421_, double p_311755_, VertexConsumer p_311778_, Vec3 p_312214_, float p_312646_, int p_312055_)
```

**Parameters:**

- `p_312234_` (`int`)
- `p_312568_` (`Matrix4f`)
- `p_312049_` (`double`)
- `p_312421_` (`double`)
- `p_311755_` (`double`)
- `p_311778_` (`VertexConsumer`)
- `p_312214_` (`Vec3`)
- `p_312646_` (`float`)
- `p_312055_` (`int`)

**Returns:** `private static void`

### clear

```java
public void clear()
```

**Returns:** `public void`

### add

```java
public void add(BreezeDebugPayload.BreezeInfo p_312506_)
```

**Parameters:**

- `p_312506_` (`BreezeDebugPayload.BreezeInfo`)

**Returns:** `public void`
