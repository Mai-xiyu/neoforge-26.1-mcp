# LocalCoordinates

**Package:** `net.minecraft.commands.arguments.coordinates`
**Type:** class
**Implements:** `Coordinates`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PREFIX_LOCAL_COORDINATE` | `char` |  |

## Methods

### LocalCoordinates

```java
public LocalCoordinates(double p_119902_, double p_119903_, double p_119904_)
```

**Parameters:**

- `p_119902_` (`double`)
- `p_119903_` (`double`)
- `p_119904_` (`double`)

**Returns:** `public`

### getPosition

```java
public Vec3 getPosition(CommandSourceStack p_119912_)
```

**Parameters:**

- `p_119912_` (`CommandSourceStack`)

**Returns:** `Vec3`

### Vec3

```java
return new Vec3(vec3.x + d0, vec3.y + d1, vec3.z + d2)
```

**Parameters:**

- `d0` (`vec3.x +`)
- `d1` (`vec3.y +`)
- `d2` (`vec3.z +`)

**Returns:** `return new`

### getRotation

```java
public Vec2 getRotation(CommandSourceStack p_119915_)
```

**Parameters:**

- `p_119915_` (`CommandSourceStack`)

**Returns:** `Vec2`

### isXRelative

```java
public boolean isXRelative()
```

**Returns:** `boolean`

### isYRelative

```java
public boolean isYRelative()
```

**Returns:** `boolean`

### isZRelative

```java
public boolean isZRelative()
```

**Returns:** `boolean`

### parse

```java
public static LocalCoordinates parse(StringReader p_119907_)
```

**Parameters:**

- `p_119907_` (`StringReader`)

**Returns:** `public static LocalCoordinates`

### LocalCoordinates

```java
return new LocalCoordinates()
```

**Returns:** `return new`

### readDouble

```java
private static double readDouble(StringReader p_119909_, int p_119910_)
```

**Parameters:**

- `p_119909_` (`StringReader`)
- `p_119910_` (`int`)

**Returns:** `private static double`

### equals

```java
public boolean equals(Object p_119918_)
```

**Parameters:**

- `p_119918_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
