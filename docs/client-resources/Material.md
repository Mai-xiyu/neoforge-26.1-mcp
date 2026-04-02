# Material

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `COMPARATOR` | `Comparator<Material>` |  |

## Methods

### Material

```java
public Material(ResourceLocation p_119191_, ResourceLocation p_119192_)
```

**Parameters:**

- `p_119191_` (`ResourceLocation`)
- `p_119192_` (`ResourceLocation`)

**Returns:** `public`

### atlasLocation

```java
public ResourceLocation atlasLocation()
```

**Returns:** `public ResourceLocation`

### texture

```java
public ResourceLocation texture()
```

**Returns:** `public ResourceLocation`

### sprite

```java
public TextureAtlasSprite sprite()
```

**Returns:** `public TextureAtlasSprite`

### renderType

```java
public RenderType renderType(Function<ResourceLocation, RenderType> p_119202_)
```

**Parameters:**

- `p_119202_` (`Function<ResourceLocation, RenderType>`)

**Returns:** `public RenderType`

### buffer

```java
public VertexConsumer buffer(MultiBufferSource p_119195_, Function<ResourceLocation, RenderType> p_119196_)
```

**Parameters:**

- `p_119195_` (`MultiBufferSource`)
- `p_119196_` (`Function<ResourceLocation, RenderType>`)

**Returns:** `public VertexConsumer`

### buffer

```java
public VertexConsumer buffer(MultiBufferSource p_119198_, Function<ResourceLocation, RenderType> p_119199_, boolean p_119200_)
```

**Parameters:**

- `p_119198_` (`MultiBufferSource`)
- `p_119199_` (`Function<ResourceLocation, RenderType>`)
- `p_119200_` (`boolean`)

**Returns:** `public VertexConsumer`

### equals

```java
public boolean equals(Object p_119206_)
```

**Parameters:**

- `p_119206_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
