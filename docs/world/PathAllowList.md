# PathAllowList

**Package:** `net.minecraft.world.level.validation`
**Type:** class
**Implements:** `PathMatcher`

## Methods

### PathAllowList

```java
public PathAllowList(List<PathAllowList.ConfigEntry> p_289956_)
```

**Parameters:**

- `p_289956_` (`List<PathAllowList.ConfigEntry>`)

**Returns:** `public`

### getForFileSystem

```java
public PathMatcher getForFileSystem(FileSystem p_289975_)
```

**Parameters:**

- `p_289975_` (`FileSystem`)

**Returns:** `public PathMatcher`

### matches

```java
public boolean matches(Path p_289964_)
```

**Parameters:**

- `p_289964_` (`Path`)

**Returns:** `boolean`

### readPlain

```java
public static PathAllowList readPlain(BufferedReader p_289921_)
```

**Parameters:**

- `p_289921_` (`BufferedReader`)

**Returns:** `public static PathAllowList`

### ConfigEntry

```java
public static record ConfigEntry(PathAllowList.EntryType type, String pattern)
```

**Parameters:**

- `type` (`PathAllowList.EntryType`)
- `pattern` (`String`)

**Returns:** `public static record`

### compile

```java
public PathMatcher compile(FileSystem p_289936_)
```

**Parameters:**

- `p_289936_` (`FileSystem`)

**Returns:** `public PathMatcher`

### parse

```java
static Optional<PathAllowList.ConfigEntry> parse(String p_289947_)
```

**Parameters:**

- `p_289947_` (`String`)

**Returns:** `static Optional<PathAllowList.ConfigEntry>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unterminated type in line '" + p_289947_ + "'")
```

**Parameters:**

- `"'"` (`"Unterminated type in line '" + p_289947_ +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
> throw new IllegalArgumentException("Unsupported definition type in line '" + p_289947_ + "'")
```

**Parameters:**

- `"'"` (`"Unsupported definition type in line '" + p_289947_ +`)

**Returns:** `> throw new`

### glob

```java
static PathAllowList.ConfigEntry glob(String p_289983_)
```

**Parameters:**

- `p_289983_` (`String`)

**Returns:** `static PathAllowList.ConfigEntry`

### regex

```java
static PathAllowList.ConfigEntry regex(String p_289944_)
```

**Parameters:**

- `p_289944_` (`String`)

**Returns:** `static PathAllowList.ConfigEntry`

### prefix

```java
static PathAllowList.ConfigEntry prefix(String p_289918_)
```

**Parameters:**

- `p_289918_` (`String`)

**Returns:** `static PathAllowList.ConfigEntry`

### compile

```java
PathMatcher compile(FileSystem p_289924_, String p_289948_)
```

**Parameters:**

- `p_289924_` (`FileSystem`)
- `p_289948_` (`String`)

**Returns:** `PathMatcher`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ConfigEntry` | record |  |
| `EntryType` | interface |  |
