# BlockFaceUV

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `uvs` | `float[]` |  |
| `rotation` | `int` |  |

## Methods

### BlockFaceUV

```java
public BlockFaceUV(float[] p_111390_, int p_111391_)
```

**Parameters:**

- `p_111390_` (`float[]`)
- `p_111391_` (`int`)

**Returns:** `public`

### getU

```java
public float getU(int p_111393_)
```

**Parameters:**

- `p_111393_` (`int`)

**Returns:** `public float`

### NullPointerException

```java
throw new NullPointerException()
```

**Returns:** `throw new`

### getV

```java
public float getV(int p_111397_)
```

**Parameters:**

- `p_111397_` (`int`)

**Returns:** `public float`

### NullPointerException

```java
throw new NullPointerException()
```

**Returns:** `throw new`

### getShiftedIndex

```java
private int getShiftedIndex(int p_111401_)
```

**Parameters:**

- `p_111401_` (`int`)

**Returns:** `private int`

### getReverseIndex

```java
public int getReverseIndex(int p_111399_)
```

**Parameters:**

- `p_111399_` (`int`)

**Returns:** `public int`

### setMissingUv

```java
public void setMissingUv(float[] p_111395_)
```

**Parameters:**

- `p_111395_` (`float[]`)

**Returns:** `public void`

### deserialize

```java
public BlockFaceUV deserialize(JsonElement p_111404_, Type p_111405_, JsonDeserializationContext p_111406_)
```

**Parameters:**

- `p_111404_` (`JsonElement`)
- `p_111405_` (`Type`)
- `p_111406_` (`JsonDeserializationContext`)

**Returns:** `public BlockFaceUV`

### BlockFaceUV

```java
return new BlockFaceUV()
```

**Returns:** `return new`

### getRotation

```java
protected int getRotation(JsonObject p_111408_)
```

**Parameters:**

- `p_111408_` (`JsonObject`)

**Returns:** `protected int`

### JsonParseException

```java
throw new JsonParseException("Invalid rotation " + i + " found, only 0/90/180/270 allowed")
```

**Parameters:**

- `found` (`"Invalid rotation " + i + "`)
- `allowed"` (`only 0/90/180/270`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
