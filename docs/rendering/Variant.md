# Variant

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Implements:** `ModelState`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Variant

```java
public Variant(ResourceLocation p_111879_, Transformation p_111880_, boolean p_111881_, int p_111882_)
```

**Parameters:**

- `p_111879_` (`ResourceLocation`)
- `p_111880_` (`Transformation`)
- `p_111881_` (`boolean`)
- `p_111882_` (`int`)

**Returns:** `public`

### getModelLocation

```java
public ResourceLocation getModelLocation()
```

**Returns:** `public ResourceLocation`

### getRotation

```java
public Transformation getRotation()
```

**Returns:** `Transformation`

### isUvLocked

```java
public boolean isUvLocked()
```

**Returns:** `boolean`

### getWeight

```java
public int getWeight()
```

**Returns:** `public int`

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object p_111888_)
```

**Parameters:**

- `p_111888_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### deserialize

```java
public Variant deserialize(JsonElement p_111893_, Type p_111894_, JsonDeserializationContext p_111895_)
```

**Parameters:**

- `p_111893_` (`JsonElement`)
- `p_111894_` (`Type`)
- `p_111895_` (`JsonDeserializationContext`)

**Returns:** `public Variant`

### getUvLock

```java
private boolean getUvLock(JsonObject p_111903_)
```

**Parameters:**

- `p_111903_` (`JsonObject`)

**Returns:** `private boolean`

### getBlockRotation

```java
protected BlockModelRotation getBlockRotation(JsonObject p_111897_)
```

**Parameters:**

- `p_111897_` (`JsonObject`)

**Returns:** `protected BlockModelRotation`

### JsonParseException

```java
throw new JsonParseException("Invalid BlockModelRotation x: " + i + ", y: " + j)
```

**Parameters:**

- `"` (`"Invalid BlockModelRotation x: " + i +`)
- `j` (`y: " +`)

**Returns:** `throw new`

### getModel

```java
protected ResourceLocation getModel(JsonObject p_111899_)
```

**Parameters:**

- `p_111899_` (`JsonObject`)

**Returns:** `protected ResourceLocation`

### getWeight

```java
protected int getWeight(JsonObject p_111901_)
```

**Parameters:**

- `p_111901_` (`JsonObject`)

**Returns:** `protected int`

### JsonParseException

```java
throw new JsonParseException("Invalid weight " + i + " found, expected integer >= 1")
```

**Parameters:**

- `found` (`"Invalid weight " + i + "`)
- `1"` (`expected integer >=`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
