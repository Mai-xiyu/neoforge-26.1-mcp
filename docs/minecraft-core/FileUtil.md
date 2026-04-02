# FileUtil

**Package:** `net.minecraft`
**Type:** class

## Methods

### sanitizeName

```java
public static String sanitizeName(String p_352262_)
```

**Parameters:**

- `p_352262_` (`String`)

**Returns:** `public static String`

### findAvailableName

```java
public static String findAvailableName(Path p_133731_, String p_133732_, String p_133733_)
```

**Parameters:**

- `p_133731_` (`Path`)
- `p_133732_` (`String`)
- `p_133733_` (`String`)

**Returns:** `public static String`

### isPathNormalized

```java
public static boolean isPathNormalized(Path p_133729_)
```

**Parameters:**

- `p_133729_` (`Path`)

**Returns:** `public static boolean`

### isPathPortable

```java
public static boolean isPathPortable(Path p_133735_)
```

**Parameters:**

- `p_133735_` (`Path`)

**Returns:** `public static boolean`

### createPathToResource

```java
public static Path createPathToResource(Path p_133737_, String p_133738_, String p_133739_)
```

**Parameters:**

- `p_133737_` (`Path`)
- `p_133738_` (`String`)
- `p_133739_` (`String`)

**Returns:** `public static Path`

### InvalidPathException

```java
throw new InvalidPathException("empty resource name")
```

**Parameters:**

- `name"` (`"empty resource`)

**Returns:** `throw new`

### getFullResourcePath

```java
public static String getFullResourcePath(String p_179923_)
```

**Parameters:**

- `p_179923_` (`String`)

**Returns:** `public static String`

### normalizeResourcePath

```java
public static String normalizeResourcePath(String p_179925_)
```

**Parameters:**

- `p_179925_` (`String`)

**Returns:** `public static String`

### decomposePath

```java
public static DataResult<List<String>> decomposePath(String p_248866_)
```

**Parameters:**

- `p_248866_` (`String`)

**Returns:** `public static DataResult<List<String>>`

### resolvePath

```java
public static Path resolvePath(Path p_251522_, List<String> p_251495_)
```

**Parameters:**

- `p_251522_` (`Path`)
- `p_251495_` (`List<String>`)

**Returns:** `public static Path`

### isValidStrictPathSegment

```java
public static boolean isValidStrictPathSegment(String p_249814_)
```

**Parameters:**

- `p_249814_` (`String`)

**Returns:** `public static boolean`

### validatePath

```java
public static void validatePath(String[]... p_249502_)
```

**Parameters:**

- `p_249502_` (`String[]...`)

**Returns:** `public static void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Path must have at least one element")
```

**Parameters:**

- `element"` (`"Path must have at least one`)

**Returns:** `throw new`

### createDirectoriesSafe

```java
public static void createDirectoriesSafe(Path p_259902_)
```

**Parameters:**

- `p_259902_` (`Path`)

**Returns:** `public static void`
