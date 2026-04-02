# UVTransform

**Package:** `net.neoforged.neoforge.client.model.quad`
**Type:** class
**Side:** 🖥️ Client

## Fields

| Name | Type | Description |
|------|------|-------------|
| `IDENTITY` | `UVTransform` |  |

## Methods

### UVTransform

```java
private UVTransform(Quadrant rotation, boolean flipU, boolean flipV)
```

**Parameters:**

- `rotation` (`Quadrant`)
- `flipU` (`boolean`)
- `flipV` (`boolean`)

**Returns:** `private`

### isIdentity

```java
public boolean isIdentity()
```

**Returns:** `public boolean`

### of

```java
public static UVTransform of(Quadrant rotation, boolean flipU, boolean flipV)
```

**Parameters:**

- `rotation` (`Quadrant`)
- `flipU` (`boolean`)
- `flipV` (`boolean`)

**Returns:** `public static UVTransform`

### transformPacked

```java
public long transformPacked(long packedUv)
```

**Parameters:**

- `packedUv` (`long`)

**Returns:** `public long`

### createTransforms

```java
private static UVTransform[] createTransforms()
```

**Returns:** `private static UVTransform[]`

### makeIndex

```java
private static int makeIndex(int rotation, boolean flipU, boolean flipV)
```

**Parameters:**

- `rotation` (`int`)
- `flipU` (`boolean`)
- `flipV` (`boolean`)

**Returns:** `private static int`
