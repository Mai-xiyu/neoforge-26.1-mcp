# BlockElement

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `from` | `Vector3f` |  |
| `to` | `Vector3f` |  |
| `faces` | `Map<Direction, BlockElementFace>` |  |
| `rotation` | `BlockElementRotation` |  |
| `shade` | `boolean` |  |

## Methods

### BlockElement

```java
public BlockElement(Vector3f p_253626_, Vector3f p_254426_, Map<Direction, BlockElementFace> p_254454_, BlockElementRotation p_254229_, boolean p_253661_)
```

**Parameters:**

- `p_253626_` (`Vector3f`)
- `p_254426_` (`Vector3f`)
- `p_254454_` (`Map<Direction, BlockElementFace>`)
- `p_254229_` (`BlockElementRotation`)
- `p_253661_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### BlockElement

```java
public BlockElement(Vector3f p_253626_, Vector3f p_254426_, Map<Direction, BlockElementFace> p_254454_, BlockElementRotation p_254229_, boolean p_253661_, net.neoforged.neoforge.client.model.ExtraFaceData faceData)
```

**Parameters:**

- `p_253626_` (`Vector3f`)
- `p_254426_` (`Vector3f`)
- `p_254454_` (`Map<Direction, BlockElementFace>`)
- `p_254229_` (`BlockElementRotation`)
- `p_253661_` (`boolean`)
- `faceData` (`net.neoforged.neoforge.client.model.ExtraFaceData`)

**Returns:** `public`

### fillUvs

```java
private void fillUvs()
```

**Returns:** `private void`

### uvsByFace

```java
public float[] uvsByFace(Direction p_111321_)
```

**Parameters:**

- `p_111321_` (`Direction`)

**Returns:** `public float[]`

### deserialize

```java
public BlockElement deserialize(JsonElement p_111329_, Type p_111330_, JsonDeserializationContext p_111331_)
```

**Parameters:**

- `p_111329_` (`JsonElement`)
- `p_111330_` (`Type`)
- `p_111331_` (`JsonDeserializationContext`)

**Returns:** `public BlockElement`

### JsonParseException

```java
throw new JsonParseException("Expected shade to be a Boolean")
```

**Parameters:**

- `Boolean"` (`"Expected shade to be a`)

**Returns:** `throw new`

### JsonParseException

```java
throw new JsonParseException("forge_data should be replaced by neoforge_data")
```

**Parameters:**

- `neoforge_data"` (`"forge_data should be replaced by`)

**Returns:** `throw new`

### BlockElement

```java
return new BlockElement()
```

**Returns:** `return new`

### getAngle

```java
private float getAngle(JsonObject p_111343_)
```

**Parameters:**

- `p_111343_` (`JsonObject`)

**Returns:** `private float`

### JsonParseException

```java
throw new JsonParseException("Invalid rotation " + f + " found, only -45/-22.5/0/22.5/45 allowed")
```

**Parameters:**

- `found` (`"Invalid rotation " + f + "`)
- `allowed"` (`only -45/-22.5/0/22.5/45`)

**Returns:** `throw new`

### getAxis

```java
private Direction.Axis getAxis(JsonObject p_111345_)
```

**Parameters:**

- `p_111345_` (`JsonObject`)

**Returns:** `private Direction.Axis`

### JsonParseException

```java
throw new JsonParseException("Invalid rotation axis: " + s)
```

**Parameters:**

- `s` (`"Invalid rotation axis: " +`)

**Returns:** `throw new`

### getFaces

```java
private Map<Direction, BlockElementFace> getFaces(JsonDeserializationContext p_111326_, JsonObject p_111327_)
```

**Parameters:**

- `p_111326_` (`JsonDeserializationContext`)
- `p_111327_` (`JsonObject`)

**Returns:** `private Map<Direction, BlockElementFace>`

### JsonParseException

```java
throw new JsonParseException("Expected between 1 and 6 unique faces, got 0")
```

**Parameters:**

- `faces` (`"Expected between 1 and 6 unique`)
- `0"` (`got`)

**Returns:** `throw new`

### filterNullFromFaces

```java
private Map<Direction, BlockElementFace> filterNullFromFaces(JsonDeserializationContext p_111340_, JsonObject p_111341_)
```

**Parameters:**

- `p_111340_` (`JsonDeserializationContext`)
- `p_111341_` (`JsonObject`)

**Returns:** `private Map<Direction, BlockElementFace>`

### getFacing

```java
private Direction getFacing(String p_111338_)
```

**Parameters:**

- `p_111338_` (`String`)

**Returns:** `private Direction`

### JsonParseException

```java
throw new JsonParseException("Unknown facing: " + p_111338_)
```

**Parameters:**

- `p_111338_` (`"Unknown facing: " +`)

**Returns:** `throw new`

### getTo

```java
private Vector3f getTo(JsonObject p_111353_)
```

**Parameters:**

- `p_111353_` (`JsonObject`)

**Returns:** `private Vector3f`

### JsonParseException

```java
throw new JsonParseException("'to' specifier exceeds the allowed boundaries: " + vector3f)
```

**Parameters:**

- `vector3f` (`"'to' specifier exceeds the allowed boundaries: " +`)

**Returns:** `throw new`

### getFrom

```java
private Vector3f getFrom(JsonObject p_111347_)
```

**Parameters:**

- `p_111347_` (`JsonObject`)

**Returns:** `private Vector3f`

### JsonParseException

```java
throw new JsonParseException("'from' specifier exceeds the allowed boundaries: " + vector3f)
```

**Parameters:**

- `vector3f` (`"'from' specifier exceeds the allowed boundaries: " +`)

**Returns:** `throw new`

### getVector3f

```java
private Vector3f getVector3f(JsonObject p_111335_, String p_111336_)
```

**Parameters:**

- `p_111335_` (`JsonObject`)
- `p_111336_` (`String`)

**Returns:** `private Vector3f`

### Vector3f

```java
return new Vector3f()
```

**Returns:** `return new`

### getFaceData

```java
public net.neoforged.neoforge.client.model.ExtraFaceData getFaceData()
```

**Returns:** `public net.neoforged.neoforge.client.model.ExtraFaceData`

### setFaceData

```java
public void setFaceData(net.neoforged.neoforge.client.model.ExtraFaceData faceData)
```

**Parameters:**

- `faceData` (`net.neoforged.neoforge.client.model.ExtraFaceData`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
