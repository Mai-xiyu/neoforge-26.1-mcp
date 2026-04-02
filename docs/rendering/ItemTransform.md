# ItemTransform

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_TRANSFORM` | `ItemTransform` |  |
| `rotation` | `Vector3f` |  |
| `translation` | `Vector3f` |  |
| `scale` | `Vector3f` |  |
| `rightRotation` | `Vector3f` |  |
| `DEFAULT_ROTATION` | `Vector3f` |  |
| `DEFAULT_TRANSLATION` | `Vector3f` |  |
| `DEFAULT_SCALE` | `Vector3f` |  |
| `MAX_TRANSLATION` | `float` |  |
| `MAX_SCALE` | `float` |  |

## Methods

### ItemTransform

```java
public ItemTransform(Vector3f p_254427_, Vector3f p_254496_, Vector3f p_254022_)
```

**Parameters:**

- `p_254427_` (`Vector3f`)
- `p_254496_` (`Vector3f`)
- `p_254022_` (`Vector3f`)

**Returns:** `public`

### ItemTransform

```java
public ItemTransform(Vector3f p_254427_, Vector3f p_254496_, Vector3f p_254022_, Vector3f rightRotation)
```

**Parameters:**

- `p_254427_` (`Vector3f`)
- `p_254496_` (`Vector3f`)
- `p_254022_` (`Vector3f`)
- `rightRotation` (`Vector3f`)

**Returns:** `public`

### apply

```java
public void apply(boolean p_111764_, PoseStack p_111765_)
```

**Parameters:**

- `p_111764_` (`boolean`)
- `p_111765_` (`PoseStack`)

**Returns:** `public void`

### equals

```java
public boolean equals(Object p_111767_)
```

**Parameters:**

- `p_111767_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### deserialize

```java
public ItemTransform deserialize(JsonElement p_111775_, Type p_111776_, JsonDeserializationContext p_111777_)
```

**Parameters:**

- `p_111775_` (`JsonElement`)
- `p_111776_` (`Type`)
- `p_111777_` (`JsonDeserializationContext`)

**Returns:** `public ItemTransform`

### ItemTransform

```java
return new ItemTransform()
```

**Returns:** `return new`

### getVector3f

```java
private Vector3f getVector3f(JsonObject p_111779_, String p_111780_, Vector3f p_253777_)
```

**Parameters:**

- `p_111779_` (`JsonObject`)
- `p_111780_` (`String`)
- `p_253777_` (`Vector3f`)

**Returns:** `private Vector3f`

### Vector3f

```java
return new Vector3f()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
