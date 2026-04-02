# RegionFileVersion

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VERSION_GZIP` | `RegionFileVersion` |  |
| `VERSION_DEFLATE` | `RegionFileVersion` |  |
| `VERSION_NONE` | `RegionFileVersion` |  |
| `VERSION_LZ4` | `RegionFileVersion` |  |
| `VERSION_CUSTOM` | `RegionFileVersion` |  |
| `DEFAULT` | `RegionFileVersion` |  |

## Methods

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### RegionFileVersion

```java
private RegionFileVersion(int p_63752_, String p_321638_, RegionFileVersion.StreamWrapper<InputStream> p_63753_, RegionFileVersion.StreamWrapper<OutputStream> p_63754_)
```

**Parameters:**

- `p_63752_` (`int`)
- `p_321638_` (`String`)
- `p_63753_` (`RegionFileVersion.StreamWrapper<InputStream>`)
- `p_63754_` (`RegionFileVersion.StreamWrapper<OutputStream>`)

**Returns:** `private`

### register

```java
private static RegionFileVersion register(RegionFileVersion p_63759_)
```

**Parameters:**

- `p_63759_` (`RegionFileVersion`)

**Returns:** `private static RegionFileVersion`

### fromId

```java
public static RegionFileVersion fromId(int p_63757_)
```

**Parameters:**

- `p_63757_` (`int`)

**Returns:** `RegionFileVersion`

### configure

```java
public static void configure(String p_321707_)
```

**Parameters:**

- `p_321707_` (`String`)

**Returns:** `public static void`

### getSelected

```java
public static RegionFileVersion getSelected()
```

**Returns:** `public static RegionFileVersion`

### isValidVersion

```java
public static boolean isValidVersion(int p_63765_)
```

**Parameters:**

- `p_63765_` (`int`)

**Returns:** `public static boolean`

### getId

```java
public int getId()
```

**Returns:** `public int`

### wrap

```java
public OutputStream wrap(OutputStream p_63763_)
```

**Parameters:**

- `p_63763_` (`OutputStream`)

**Returns:** `public OutputStream`

### wrap

```java
public InputStream wrap(InputStream p_63761_)
```

**Parameters:**

- `p_63761_` (`InputStream`)

**Returns:** `public InputStream`

### wrap

```java
O wrap(O p_63771_)
```

**Parameters:**

- `p_63771_` (`O`)

**Returns:** `O`
