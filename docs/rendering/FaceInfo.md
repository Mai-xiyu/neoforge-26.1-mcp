# FaceInfo

**Package:** `net.minecraft.client.renderer`
**Type:** enum
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_Z` | `int` |  |
| `MAX_Y` | `int` |  |
| `MAX_X` | `int` |  |
| `MIN_Z` | `int` |  |
| `MIN_Y` | `int` |  |
| `MIN_X` | `int` |  |
| `xFace` | `int` |  |
| `yFace` | `int` |  |
| `zFace` | `int` |  |

## Methods

### fromFacing

```java
public static FaceInfo fromFacing(Direction p_108985_)
```

**Parameters:**

- `p_108985_` (`Direction`)

**Returns:** `public static FaceInfo`

### FaceInfo

```java
private FaceInfo(FaceInfo.VertexInfo[]... p_108981_)
```

**Parameters:**

- `p_108981_` (`FaceInfo.VertexInfo[]...`)

**Returns:** `private`

### getVertexInfo

```java
public FaceInfo.VertexInfo getVertexInfo(int p_108983_)
```

**Parameters:**

- `p_108983_` (`int`)

**Returns:** `public FaceInfo.VertexInfo`

### VertexInfo

```java
 VertexInfo(int p_109002_, int p_109003_, int p_109004_)
```

**Parameters:**

- `p_109002_` (`int`)
- `p_109003_` (`int`)
- `p_109004_` (`int`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Constants` | class |  |
| `VertexInfo` | class |  |
