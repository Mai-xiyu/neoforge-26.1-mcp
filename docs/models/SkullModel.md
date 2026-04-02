# SkullModel

**Package:** `net.minecraft.client.model`
**Type:** class
**Extends:** `SkullModelBase`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `head` | `ModelPart` |  |

## Methods

### SkullModel

```java
public SkullModel(ModelPart p_170945_)
```

**Parameters:**

- `p_170945_` (`ModelPart`)

**Returns:** `public`

### createHeadModel

```java
public static MeshDefinition createHeadModel()
```

**Returns:** `public static MeshDefinition`

### createHumanoidHeadLayer

```java
public static LayerDefinition createHumanoidHeadLayer()
```

**Returns:** `public static LayerDefinition`

### createMobHeadLayer

```java
public static LayerDefinition createMobHeadLayer()
```

**Returns:** `public static LayerDefinition`

### setupAnim

```java
public void setupAnim(float p_103811_, float p_103812_, float p_103813_)
```

**Parameters:**

- `p_103811_` (`float`)
- `p_103812_` (`float`)
- `p_103813_` (`float`)

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_103815_, VertexConsumer p_103816_, int p_103817_, int p_103818_, int p_350840_)
```

**Parameters:**

- `p_103815_` (`PoseStack`)
- `p_103816_` (`VertexConsumer`)
- `p_103817_` (`int`)
- `p_103818_` (`int`)
- `p_350840_` (`int`)
