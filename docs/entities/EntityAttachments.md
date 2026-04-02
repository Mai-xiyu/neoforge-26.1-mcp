# EntityAttachments

**Package:** `net.minecraft.world.entity`
**Type:** class

## Methods

### EntityAttachments

```java
 EntityAttachments(Map<EntityAttachment, List<Vec3>> p_316675_)
```

**Parameters:**

- `p_316675_` (`Map<EntityAttachment, List<Vec3>>`)

**Returns:** ``

### createDefault

```java
public static EntityAttachments createDefault(float p_316906_, float p_316905_)
```

**Parameters:**

- `p_316906_` (`float`)
- `p_316905_` (`float`)

**Returns:** `public static EntityAttachments`

### builder

```java
public static EntityAttachments.Builder builder()
```

**Returns:** `public static EntityAttachments.Builder`

### scale

```java
public EntityAttachments scale(float p_316378_, float p_316683_, float p_316463_)
```

**Parameters:**

- `p_316378_` (`float`)
- `p_316683_` (`float`)
- `p_316463_` (`float`)

**Returns:** `public EntityAttachments`

### EntityAttachments

```java
return new EntityAttachments()
```

**Returns:** `return new`

### scalePoints

```java
private static List<Vec3> scalePoints(List<Vec3> p_316879_, float p_316759_, float p_316371_, float p_316711_)
```

**Parameters:**

- `p_316879_` (`List<Vec3>`)
- `p_316759_` (`float`)
- `p_316371_` (`float`)
- `p_316711_` (`float`)

**Returns:** `private static List<Vec3>`

### getNullable

```java
public Vec3 getNullable(EntityAttachment p_316263_, int p_316709_, float p_316113_)
```

**Parameters:**

- `p_316263_` (`EntityAttachment`)
- `p_316709_` (`int`)
- `p_316113_` (`float`)

**Returns:** `Vec3`

### get

```java
public Vec3 get(EntityAttachment p_316290_, int p_316517_, float p_316296_)
```

**Parameters:**

- `p_316290_` (`EntityAttachment`)
- `p_316517_` (`int`)
- `p_316296_` (`float`)

**Returns:** `public Vec3`

### IllegalStateException

```java
throw new IllegalStateException("Had no attachment point of type: " + p_316290_ + " for index: " + p_316517_)
```

**Parameters:**

- `p_316517_` (`"Had no attachment point of type: " + p_316290_ + " for index: " +`)

**Returns:** `throw new`

### getClamped

```java
public Vec3 getClamped(EntityAttachment p_316117_, int p_316379_, float p_316900_)
```

**Parameters:**

- `p_316117_` (`EntityAttachment`)
- `p_316379_` (`int`)
- `p_316900_` (`float`)

**Returns:** `public Vec3`

### IllegalStateException

```java
throw new IllegalStateException("Had no attachment points of type: " + p_316117_)
```

**Parameters:**

- `p_316117_` (`"Had no attachment points of type: " +`)

**Returns:** `throw new`

### transformPoint

```java
return transformPoint()
```

**Returns:** `return`

### transformPoint

```java
private static Vec3 transformPoint(Vec3 p_316742_, float p_316708_)
```

**Parameters:**

- `p_316742_` (`Vec3`)
- `p_316708_` (`float`)

**Returns:** `private static Vec3`

### Builder

```java
 Builder()
```

**Returns:** ``

### attach

```java
public EntityAttachments.Builder attach(EntityAttachment p_316395_, float p_316627_, float p_316510_, float p_316313_)
```

**Parameters:**

- `p_316395_` (`EntityAttachment`)
- `p_316627_` (`float`)
- `p_316510_` (`float`)
- `p_316313_` (`float`)

**Returns:** `public EntityAttachments.Builder`

### attach

```java
public EntityAttachments.Builder attach(EntityAttachment p_316903_, Vec3 p_316337_)
```

**Parameters:**

- `p_316903_` (`EntityAttachment`)
- `p_316337_` (`Vec3`)

**Returns:** `public EntityAttachments.Builder`

### build

```java
public EntityAttachments build(float p_316746_, float p_316254_)
```

**Parameters:**

- `p_316746_` (`float`)
- `p_316254_` (`float`)

**Returns:** `public EntityAttachments`

### EntityAttachments

```java
return new EntityAttachments()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
