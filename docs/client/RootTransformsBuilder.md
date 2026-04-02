# RootTransformsBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.template`
**Type:** class
**Side:** 🖥️ Client

## Methods

### translation

```java
public RootTransformsBuilder translation(Vector3f translation)
```

**Parameters:**

- `translation` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### translation

```java
public RootTransformsBuilder translation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
public RootTransformsBuilder rotation(Quaternionf rotation)
```

**Parameters:**

- `rotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
public RootTransformsBuilder rotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### leftRotation

```java
public RootTransformsBuilder leftRotation(Quaternionf leftRotation)
```

**Parameters:**

- `leftRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rotation

```java
return rotation()
```

**Returns:** `return`

### leftRotation

```java
public RootTransformsBuilder leftRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
public RootTransformsBuilder rightRotation(Quaternionf rightRotation)
```

**Parameters:**

- `rightRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
public RootTransformsBuilder rightRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### postRotation

```java
public RootTransformsBuilder postRotation(Quaternionf postRotation)
```

**Parameters:**

- `postRotation` (`Quaternionf`)

**Returns:** `RootTransformsBuilder`

### rightRotation

```java
return rightRotation()
```

**Returns:** `return`

### postRotation

```java
public RootTransformsBuilder postRotation(float x, float y, float z, boolean isDegrees)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)
- `isDegrees` (`boolean`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(float scale)
```

**Parameters:**

- `scale` (`float`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(float xScale, float yScale, float zScale)
```

**Parameters:**

- `xScale` (`float`)
- `yScale` (`float`)
- `zScale` (`float`)

**Returns:** `RootTransformsBuilder`

### scale

```java
public RootTransformsBuilder scale(Vector3f scale)
```

**Parameters:**

- `scale` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### transform

```java
public RootTransformsBuilder transform(Transformation transformation)
```

**Parameters:**

- `transformation` (`Transformation`)

**Returns:** `RootTransformsBuilder`

### origin

```java
public RootTransformsBuilder origin(Vector3f origin)
```

**Parameters:**

- `origin` (`Vector3f`)

**Returns:** `RootTransformsBuilder`

### origin

```java
public RootTransformsBuilder origin(TransformationHelper.TransformOrigin origin)
```

**Parameters:**

- `origin` (`TransformationHelper.TransformOrigin`)

**Returns:** `RootTransformsBuilder`

### toJson

```java
JsonObject toJson()
```

**Returns:** `JsonObject`

### writeVec3

```java
private static JsonArray writeVec3(Vector3fc vector)
```

**Parameters:**

- `vector` (`Vector3fc`)

**Returns:** `private static JsonArray`

### writeQuaternion

```java
private static JsonArray writeQuaternion(Quaternionfc quaternion)
```

**Parameters:**

- `quaternion` (`Quaternionfc`)

**Returns:** `private static JsonArray`

### copyFrom

```java
void copyFrom(RootTransformsBuilder other)
```

**Parameters:**

- `other` (`RootTransformsBuilder`)
