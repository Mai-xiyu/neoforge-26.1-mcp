# IVertexConsumerExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `VertexConsumer`.

## Methods

### self

```java
private VertexConsumer self()
```

**Returns:** `private VertexConsumer`

### misc

```java
default VertexConsumer misc(VertexFormatElement element, int[]... rawData)
```

**Parameters:**

- `element` (`VertexFormatElement`)
- `rawData` (`int[]...`)

**Returns:** `VertexConsumer`

### self

```java
return self()
```

**Returns:** `return`

### putBulkData

```java
default void putBulkData(PoseStack.Pose pose, BakedQuad bakedQuad, float red, float green, float blue, float alpha, int packedLight, int packedOverlay, boolean readExistingColor)
```

**Parameters:**

- `pose` (`PoseStack.Pose`)
- `bakedQuad` (`BakedQuad`)
- `red` (`float`)
- `green` (`float`)
- `blue` (`float`)
- `alpha` (`float`)
- `packedLight` (`int`)
- `packedOverlay` (`int`)
- `readExistingColor` (`boolean`)

### applyBakedLighting

```java
default int applyBakedLighting(int packedLight, ByteBuffer data)
```

**Parameters:**

- `packedLight` (`int`)
- `data` (`ByteBuffer`)

**Returns:** `default int`

### applyBakedNormals

```java
default void applyBakedNormals(Vector3f generated, ByteBuffer data, Matrix3f normalTransform)
```

**Parameters:**

- `generated` (`Vector3f`)
- `data` (`ByteBuffer`)
- `normalTransform` (`Matrix3f`)

**Returns:** `default void`
