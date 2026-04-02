# ITransformationExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension interface for `Transformation`.

## Methods

### self

```java
private Transformation self()
```

**Returns:** `private Transformation`

### isIdentity

```java
default boolean isIdentity()
```

**Returns:** `boolean`

### transformPosition

```java
default void transformPosition(Vector4f position)
```

**Parameters:**

- `position` (`Vector4f`)

### transformNormal

```java
default void transformNormal(Vector3f normal)
```

**Parameters:**

- `normal` (`Vector3f`)

### rotateTransform

```java
default Direction rotateTransform(Direction facing)
```

**Parameters:**

- `facing` (`Direction`)

**Returns:** `Direction`

### blockCenterToCorner

```java
default Transformation blockCenterToCorner()
```

**Returns:** `Transformation`

### blockCornerToCenter

```java
default Transformation blockCornerToCenter()
```

**Returns:** `Transformation`

### applyOrigin

```java
default Transformation applyOrigin(Vector3f origin)
```

**Parameters:**

- `origin` (`Vector3f`)

**Returns:** `Transformation`

### Transformation

```java
return new Transformation()
```

**Returns:** `return new`
