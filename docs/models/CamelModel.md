# CamelModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Camel> extends HierarchicalModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CamelModel

```java
public CamelModel(ModelPart p_251834_)
```

**Parameters:**

- `p_251834_` (`ModelPart`)

**Returns:** `public`

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### setupAnim

```java
public void setupAnim(T p_250657_, float p_250501_, float p_249554_, float p_249527_, float p_248774_, float p_250710_)
```

**Parameters:**

- `p_250657_` (`T`)
- `p_250501_` (`float`)
- `p_249554_` (`float`)
- `p_249527_` (`float`)
- `p_248774_` (`float`)
- `p_250710_` (`float`)

**Returns:** `public void`

### applyHeadRotation

```java
private void applyHeadRotation(T p_250436_, float p_249176_, float p_251814_, float p_248796_)
```

**Parameters:**

- `p_250436_` (`T`)
- `p_249176_` (`float`)
- `p_251814_` (`float`)
- `p_248796_` (`float`)

**Returns:** `private void`

### toggleInvisibleParts

```java
private void toggleInvisibleParts(T p_251765_)
```

**Parameters:**

- `p_251765_` (`T`)

**Returns:** `private void`

### renderToBuffer

```java
public void renderToBuffer(PoseStack p_250278_, VertexConsumer p_251678_, int p_249298_, int p_251841_, int p_350307_)
```

**Parameters:**

- `p_250278_` (`PoseStack`)
- `p_251678_` (`VertexConsumer`)
- `p_249298_` (`int`)
- `p_251841_` (`int`)
- `p_350307_` (`int`)

### root

```java
public ModelPart root()
```

**Returns:** `ModelPart`
