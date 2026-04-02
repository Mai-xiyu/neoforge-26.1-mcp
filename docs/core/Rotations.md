# Rotations

**Package:** `net.minecraft.core`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<ByteBuf, Rotations>` |  |
| `x` | `float` |  |
| `y` | `float` |  |
| `z` | `float` |  |

## Methods

### decode

```java
public Rotations decode(ByteBuf p_320504_)
```

**Parameters:**

- `p_320504_` (`ByteBuf`)

**Returns:** `public Rotations`

### encode

```java
public void encode(ByteBuf p_320561_, Rotations p_320041_)
```

**Parameters:**

- `p_320561_` (`ByteBuf`)
- `p_320041_` (`Rotations`)

**Returns:** `public void`

### Rotations

```java
public Rotations(float p_123150_, float p_123151_, float p_123152_)
```

**Parameters:**

- `p_123150_` (`float`)
- `p_123151_` (`float`)
- `p_123152_` (`float`)

**Returns:** `public`

### Rotations

```java
public Rotations(ListTag p_123154_)
```

**Parameters:**

- `p_123154_` (`ListTag`)

**Returns:** `public`

### save

```java
public ListTag save()
```

**Returns:** `public ListTag`

### equals

```java
public boolean equals(Object p_123160_)
```

**Parameters:**

- `p_123160_` (`Object`)

**Returns:** `boolean`

### getX

```java
public float getX()
```

**Returns:** `public float`

### getY

```java
public float getY()
```

**Returns:** `public float`

### getZ

```java
public float getZ()
```

**Returns:** `public float`

### getWrappedX

```java
public float getWrappedX()
```

**Returns:** `public float`

### getWrappedY

```java
public float getWrappedY()
```

**Returns:** `public float`

### getWrappedZ

```java
public float getWrappedZ()
```

**Returns:** `public float`
