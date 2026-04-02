# Frustum

**Package:** `net.minecraft.client.renderer.culling`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `OFFSET_STEP` | `int` |  |

## Methods

### Frustum

```java
public Frustum(Matrix4f p_254207_, Matrix4f p_254535_)
```

**Parameters:**

- `p_254207_` (`Matrix4f`)
- `p_254535_` (`Matrix4f`)

**Returns:** `public`

### Frustum

```java
public Frustum(Frustum p_194440_)
```

**Parameters:**

- `p_194440_` (`Frustum`)

**Returns:** `public`

### offsetToFullyIncludeCameraCube

```java
public Frustum offsetToFullyIncludeCameraCube(int p_194442_)
```

**Parameters:**

- `p_194442_` (`int`)

**Returns:** `public Frustum`

### prepare

```java
public void prepare(double p_113003_, double p_113004_, double p_113005_)
```

**Parameters:**

- `p_113003_` (`double`)
- `p_113004_` (`double`)
- `p_113005_` (`double`)

**Returns:** `public void`

### calculateFrustum

```java
private void calculateFrustum(Matrix4f p_253909_, Matrix4f p_254521_)
```

**Parameters:**

- `p_253909_` (`Matrix4f`)
- `p_254521_` (`Matrix4f`)

**Returns:** `private void`

### isVisible

```java
public boolean isVisible(AABB p_113030_)
```

**Parameters:**

- `p_113030_` (`AABB`)

**Returns:** `public boolean`

### cubeInFrustum

```java
private boolean cubeInFrustum(double p_113007_, double p_113008_, double p_113009_, double p_113010_, double p_113011_, double p_113012_)
```

**Parameters:**

- `p_113007_` (`double`)
- `p_113008_` (`double`)
- `p_113009_` (`double`)
- `p_113010_` (`double`)
- `p_113011_` (`double`)
- `p_113012_` (`double`)

**Returns:** `private boolean`
