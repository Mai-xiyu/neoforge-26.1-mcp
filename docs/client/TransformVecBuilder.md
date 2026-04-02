# TransformVecBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.template`
**Type:** class
**Side:** 🖥️ Client

## Methods

### TransformVecBuilder

```java
 TransformVecBuilder(ItemDisplayContext type)
```

**Parameters:**

- `type` (`ItemDisplayContext`)

**Returns:** ``

### rotation

```java
public TransformVecBuilder rotation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `TransformVecBuilder`

### translation

```java
public TransformVecBuilder translation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `TransformVecBuilder`

### scale

```java
public TransformVecBuilder scale(float sc)
```

**Parameters:**

- `sc` (`float`)

**Returns:** `TransformVecBuilder`

### scale

```java
return scale()
```

**Returns:** `return`

### scale

```java
public TransformVecBuilder scale(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `TransformVecBuilder`

### rightRotation

```java
public TransformVecBuilder rightRotation(float x, float y, float z)
```

**Parameters:**

- `x` (`float`)
- `y` (`float`)
- `z` (`float`)

**Returns:** `TransformVecBuilder`

### build

```java
ItemTransform build()
```

**Returns:** `ItemTransform`

### ItemTransform

```java
return new ItemTransform()
```

**Returns:** `return new`

### copy

```java
TransformVecBuilder copy()
```

**Returns:** `TransformVecBuilder`
