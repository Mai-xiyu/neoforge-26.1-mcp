# EnderDragonRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `EntityRenderer<EnderDragon>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CRYSTAL_BEAM_LOCATION` | `ResourceLocation` |  |

## Methods

### EnderDragonRenderer

```java
public EnderDragonRenderer(EntityRendererProvider.Context p_173973_)
```

**Parameters:**

- `p_173973_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(EnderDragon p_114208_, float p_114209_, float p_114210_, PoseStack p_114211_, MultiBufferSource p_114212_, int p_114213_)
```

**Parameters:**

- `p_114208_` (`EnderDragon`)
- `p_114209_` (`float`)
- `p_114210_` (`float`)
- `p_114211_` (`PoseStack`)
- `p_114212_` (`MultiBufferSource`)
- `p_114213_` (`int`)

**Returns:** `public void`

### renderRays

```java
private static void renderRays(PoseStack p_352922_, float p_352903_, VertexConsumer p_352894_)
```

**Parameters:**

- `p_352922_` (`PoseStack`)
- `p_352903_` (`float`)
- `p_352894_` (`VertexConsumer`)

**Returns:** `private static void`

### renderCrystalBeams

```java
public static void renderCrystalBeams(float p_114188_, float p_114189_, float p_114190_, float p_114191_, int p_114192_, PoseStack p_114193_, MultiBufferSource p_114194_, int p_114195_)
```

**Parameters:**

- `p_114188_` (`float`)
- `p_114189_` (`float`)
- `p_114190_` (`float`)
- `p_114191_` (`float`)
- `p_114192_` (`int`)
- `p_114193_` (`PoseStack`)
- `p_114194_` (`MultiBufferSource`)
- `p_114195_` (`int`)

**Returns:** `public static void`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(EnderDragon p_114206_)
```

**Parameters:**

- `p_114206_` (`EnderDragon`)

**Returns:** `public ResourceLocation`

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### DragonModel

```java
public DragonModel(ModelPart p_173976_)
```

**Parameters:**

- `p_173976_` (`ModelPart`)

**Returns:** `public`

### prepareMobModel

```java
public void prepareMobModel(EnderDragon p_114269_, float p_114270_, float p_114271_, float p_114272_)
```

**Parameters:**

- `p_114269_` (`EnderDragon`)
- `p_114270_` (`float`)
- `p_114271_` (`float`)
- `p_114272_` (`float`)

**Returns:** `public void`

### setupAnim

```java
public void setupAnim(EnderDragon p_114274_, float p_114275_, float p_114276_, float p_114277_, float p_114278_, float p_114279_)
```

**Parameters:**

- `p_114274_` (`EnderDragon`)
- `p_114275_` (`float`)
- `p_114276_` (`float`)
- `p_114277_` (`float`)
- `p_114278_` (`float`)
- `p_114279_` (`float`)

**Returns:** `public void`

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_114281_, VertexConsumer p_114282_, int p_114283_, int p_114284_, int p_350827_)
```

**Parameters:**

- `p_114281_` (`PoseStack`)
- `p_114282_` (`VertexConsumer`)
- `p_114283_` (`int`)
- `p_114284_` (`int`)
- `p_350827_` (`int`)

### renderSide

```java
private void renderSide(PoseStack p_173978_, VertexConsumer p_173979_, int p_173980_, int p_173981_, float p_173982_, ModelPart p_173983_, ModelPart p_173984_, ModelPart p_173985_, ModelPart p_173986_, ModelPart p_173987_, ModelPart p_173988_, ModelPart p_173989_, int p_350327_)
```

**Parameters:**

- `p_173978_` (`PoseStack`)
- `p_173979_` (`VertexConsumer`)
- `p_173980_` (`int`)
- `p_173981_` (`int`)
- `p_173982_` (`float`)
- `p_173983_` (`ModelPart`)
- `p_173984_` (`ModelPart`)
- `p_173985_` (`ModelPart`)
- `p_173986_` (`ModelPart`)
- `p_173987_` (`ModelPart`)
- `p_173988_` (`ModelPart`)
- `p_173989_` (`ModelPart`)
- `p_350327_` (`int`)

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DragonModel` | class |  |
