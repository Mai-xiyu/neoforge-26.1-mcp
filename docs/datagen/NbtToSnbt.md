# NbtToSnbt

**Package:** `net.minecraft.data.structures`
**Type:** class
**Implements:** `DataProvider`

## Methods

### NbtToSnbt

```java
public NbtToSnbt(PackOutput p_250442_, Collection<Path> p_249158_)
```

**Parameters:**

- `p_250442_` (`PackOutput`)
- `p_249158_` (`Collection<Path>`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254274_)
```

**Parameters:**

- `p_254274_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### getName

```java
public final String getName()
```

**Returns:** `String`

### getName

```java
private static String getName(Path p_126436_, Path p_126437_)
```

**Parameters:**

- `p_126436_` (`Path`)
- `p_126437_` (`Path`)

**Returns:** `private static String`

### convertStructure

```java
public static Path convertStructure(CachedOutput p_236382_, Path p_236383_, String p_236384_, Path p_236385_)
```

**Parameters:**

- `p_236382_` (`CachedOutput`)
- `p_236383_` (`Path`)
- `p_236384_` (`String`)
- `p_236385_` (`Path`)

**Returns:** `Path`

### try

```java
 try(InputStream inputstream = Files.newInputStream(p_236383_)
```

**Parameters:**

- `Files.newInputStream(p_236383_` (`InputStream inputstream =`)

**Returns:** ``

### writeSnbt

```java
public static void writeSnbt(CachedOutput p_236378_, Path p_236379_, String p_236380_)
```

**Parameters:**

- `p_236378_` (`CachedOutput`)
- `p_236379_` (`Path`)
- `p_236380_` (`String`)

**Returns:** `public static void`
