# TurtleModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Turtle> extends QuadrupedModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TurtleModel

```java
public TurtleModel(ModelPart p_171042_)
```

**Parameters:**

- `p_171042_` (`ModelPart`)

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

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### setupAnim

```java
public void setupAnim(T p_103994_, float p_103995_, float p_103996_, float p_103997_, float p_103998_, float p_103999_)
```

**Parameters:**

- `p_103994_` (`T`)
- `p_103995_` (`float`)
- `p_103996_` (`float`)
- `p_103997_` (`float`)
- `p_103998_` (`float`)
- `p_103999_` (`float`)

**Returns:** `public void`

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_104001_, VertexConsumer p_104002_, int p_104003_, int p_104004_, int p_351030_)
```

**Parameters:**

- `p_104001_` (`PoseStack`)
- `p_104002_` (`VertexConsumer`)
- `p_104003_` (`int`)
- `p_104004_` (`int`)
- `p_351030_` (`int`)
