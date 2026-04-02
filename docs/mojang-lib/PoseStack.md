# PoseStack

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Implements:** `net.neoforged.neoforge.client.extensions.IPoseStackExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### translate

```java
public void translate(double p_85838_, double p_85839_, double p_85840_)
```

**Parameters:**

- `p_85838_` (`double`)
- `p_85839_` (`double`)
- `p_85840_` (`double`)

**Returns:** `public void`

### translate

```java
public void translate(float p_254202_, float p_253782_, float p_254238_)
```

**Parameters:**

- `p_254202_` (`float`)
- `p_253782_` (`float`)
- `p_254238_` (`float`)

**Returns:** `public void`

### scale

```java
public void scale(float p_85842_, float p_85843_, float p_85844_)
```

**Parameters:**

- `p_85842_` (`float`)
- `p_85843_` (`float`)
- `p_85844_` (`float`)

**Returns:** `public void`

### mulPose

```java
public void mulPose(Quaternionf p_254385_)
```

**Parameters:**

- `p_254385_` (`Quaternionf`)

**Returns:** `public void`

### rotateAround

```java
public void rotateAround(Quaternionf p_272904_, float p_273581_, float p_272655_, float p_273275_)
```

**Parameters:**

- `p_272904_` (`Quaternionf`)
- `p_273581_` (`float`)
- `p_272655_` (`float`)
- `p_273275_` (`float`)

**Returns:** `public void`

### pushPose

```java
public void pushPose()
```

**Returns:** `public void`

### popPose

```java
public void popPose()
```

**Returns:** `public void`

### last

```java
public PoseStack.Pose last()
```

**Returns:** `public PoseStack.Pose`

### clear

```java
public boolean clear()
```

**Returns:** `public boolean`

### setIdentity

```java
public void setIdentity()
```

**Returns:** `public void`

### mulPose

```java
public void mulPose(Matrix4f p_324519_)
```

**Parameters:**

- `p_324519_` (`Matrix4f`)

**Returns:** `public void`

### Pose

```java
 Pose(Matrix4f p_254509_, Matrix3f p_254348_)
```

**Parameters:**

- `p_254509_` (`Matrix4f`)
- `p_254348_` (`Matrix3f`)

**Returns:** ``

### Pose

```java
 Pose(PoseStack.Pose p_324130_)
```

**Parameters:**

- `p_324130_` (`PoseStack.Pose`)

**Returns:** ``

### computeNormalMatrix

```java
void computeNormalMatrix()
```

### pose

```java
public Matrix4f pose()
```

**Returns:** `public Matrix4f`

### normal

```java
public Matrix3f normal()
```

**Returns:** `public Matrix3f`

### transformNormal

```java
public Vector3f transformNormal(Vector3f p_324099_, Vector3f p_323689_)
```

**Parameters:**

- `p_324099_` (`Vector3f`)
- `p_323689_` (`Vector3f`)

**Returns:** `public Vector3f`

### transformNormal

```java
public Vector3f transformNormal(float p_324226_, float p_324133_, float p_323766_, Vector3f p_324001_)
```

**Parameters:**

- `p_324226_` (`float`)
- `p_324133_` (`float`)
- `p_323766_` (`float`)
- `p_324001_` (`Vector3f`)

**Returns:** `public Vector3f`

### copy

```java
public PoseStack.Pose copy()
```

**Returns:** `public PoseStack.Pose`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Pose` | class |  |
