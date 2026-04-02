# VertexConsumer

**Package:** `com.mojang.blaze3d.vertex`
**Type:** interface
**Extends:** `net.neoforged.neoforge.client.extensions.IVertexConsumerExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### addVertex

```java
VertexConsumer addVertex(float p_350761_, float p_350704_, float p_350711_)
```

**Parameters:**

- `p_350761_` (`float`)
- `p_350704_` (`float`)
- `p_350711_` (`float`)

**Returns:** `VertexConsumer`

### setColor

```java
VertexConsumer setColor(int p_350535_, int p_350875_, int p_350886_, int p_350775_)
```

**Parameters:**

- `p_350535_` (`int`)
- `p_350875_` (`int`)
- `p_350886_` (`int`)
- `p_350775_` (`int`)

**Returns:** `VertexConsumer`

### setUv

```java
VertexConsumer setUv(float p_350572_, float p_350917_)
```

**Parameters:**

- `p_350572_` (`float`)
- `p_350917_` (`float`)

**Returns:** `VertexConsumer`

### setUv1

```java
VertexConsumer setUv1(int p_350815_, int p_350629_)
```

**Parameters:**

- `p_350815_` (`int`)
- `p_350629_` (`int`)

**Returns:** `VertexConsumer`

### setUv2

```java
VertexConsumer setUv2(int p_350859_, int p_351004_)
```

**Parameters:**

- `p_350859_` (`int`)
- `p_351004_` (`int`)

**Returns:** `VertexConsumer`

### setNormal

```java
VertexConsumer setNormal(float p_350429_, float p_350286_, float p_350836_)
```

**Parameters:**

- `p_350429_` (`float`)
- `p_350286_` (`float`)
- `p_350836_` (`float`)

**Returns:** `VertexConsumer`

### addVertex

```java
default void addVertex(float p_351049_, float p_350528_, float p_351018_, int p_350427_, float p_350508_, float p_350864_, int p_350846_, int p_350731_, float p_350784_, float p_351051_, float p_350759_)
```

**Parameters:**

- `p_351049_` (`float`)
- `p_350528_` (`float`)
- `p_351018_` (`float`)
- `p_350427_` (`int`)
- `p_350508_` (`float`)
- `p_350864_` (`float`)
- `p_350846_` (`int`)
- `p_350731_` (`int`)
- `p_350784_` (`float`)
- `p_351051_` (`float`)
- `p_350759_` (`float`)

**Returns:** `default void`

### setColor

```java
default VertexConsumer setColor(float p_350350_, float p_350356_, float p_350623_, float p_350312_)
```

**Parameters:**

- `p_350350_` (`float`)
- `p_350356_` (`float`)
- `p_350623_` (`float`)
- `p_350312_` (`float`)

**Returns:** `default VertexConsumer`

### setColor

```java
default VertexConsumer setColor(int p_350809_)
```

**Parameters:**

- `p_350809_` (`int`)

**Returns:** `default VertexConsumer`

### setWhiteAlpha

```java
default VertexConsumer setWhiteAlpha(int p_350979_)
```

**Parameters:**

- `p_350979_` (`int`)

**Returns:** `default VertexConsumer`

### setLight

```java
default VertexConsumer setLight(int p_350855_)
```

**Parameters:**

- `p_350855_` (`int`)

**Returns:** `default VertexConsumer`

### setOverlay

```java
default VertexConsumer setOverlay(int p_350697_)
```

**Parameters:**

- `p_350697_` (`int`)

**Returns:** `default VertexConsumer`

### putBulkData

```java
default void putBulkData(PoseStack.Pose p_85996_, BakedQuad p_85997_, float p_85999_, float p_86000_, float p_86001_, float p_331520_, int p_86003_, int p_331548_)
```

**Parameters:**

- `p_85996_` (`PoseStack.Pose`)
- `p_85997_` (`BakedQuad`)
- `p_85999_` (`float`)
- `p_86000_` (`float`)
- `p_86001_` (`float`)
- `p_331520_` (`float`)
- `p_86003_` (`int`)
- `p_331548_` (`int`)

**Returns:** `default void`

### putBulkData

```java
default void putBulkData(PoseStack.Pose p_85988_, BakedQuad p_85989_, float[] p_331397_, float p_85990_, float p_85991_, float p_85992_, float p_331416_, int[] p_331378_, int p_85993_, boolean p_331268_)
```

**Parameters:**

- `p_85988_` (`PoseStack.Pose`)
- `p_85989_` (`BakedQuad`)
- `p_331397_` (`float[]`)
- `p_85990_` (`float`)
- `p_85991_` (`float`)
- `p_85992_` (`float`)
- `p_331416_` (`float`)
- `p_331378_` (`int[]`)
- `p_85993_` (`int`)
- `p_331268_` (`boolean`)

**Returns:** `default void`

### addVertex

```java
default VertexConsumer addVertex(Vector3f p_350685_)
```

**Parameters:**

- `p_350685_` (`Vector3f`)

**Returns:** `default VertexConsumer`

### addVertex

```java
default VertexConsumer addVertex(PoseStack.Pose p_352288_, Vector3f p_352298_)
```

**Parameters:**

- `p_352288_` (`PoseStack.Pose`)
- `p_352298_` (`Vector3f`)

**Returns:** `default VertexConsumer`

### addVertex

```java
default VertexConsumer addVertex(PoseStack.Pose p_350506_, float p_350934_, float p_350873_, float p_350981_)
```

**Parameters:**

- `p_350506_` (`PoseStack.Pose`)
- `p_350934_` (`float`)
- `p_350873_` (`float`)
- `p_350981_` (`float`)

**Returns:** `default VertexConsumer`

### addVertex

```java
default VertexConsumer addVertex(Matrix4f p_350929_, float p_350884_, float p_350885_, float p_350942_)
```

**Parameters:**

- `p_350929_` (`Matrix4f`)
- `p_350884_` (`float`)
- `p_350885_` (`float`)
- `p_350942_` (`float`)

**Returns:** `default VertexConsumer`

### setNormal

```java
default VertexConsumer setNormal(PoseStack.Pose p_350592_, float p_350534_, float p_350411_, float p_350441_)
```

**Parameters:**

- `p_350592_` (`PoseStack.Pose`)
- `p_350534_` (`float`)
- `p_350411_` (`float`)
- `p_350441_` (`float`)

**Returns:** `default VertexConsumer`
