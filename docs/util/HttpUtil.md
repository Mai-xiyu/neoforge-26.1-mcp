# HttpUtil

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### HttpUtil

```java
private HttpUtil()
```

**Returns:** `private`

### downloadFile

```java
public static Path downloadFile(Path p_314509_, URL p_314583_, Map<String, String> p_314414_, HashFunction p_314462_, HashCode p_314495_, int p_314514_, Proxy p_314631_, HttpUtil.DownloadProgressListener p_314610_)
```

**Parameters:**

- `p_314509_` (`Path`)
- `p_314583_` (`URL`)
- `p_314414_` (`Map<String, String>`)
- `p_314462_` (`HashFunction`)
- `p_314495_` (`HashCode`)
- `p_314514_` (`int`)
- `p_314631_` (`Proxy`)
- `p_314610_` (`HttpUtil.DownloadProgressListener`)

**Returns:** `public static Path`

### updateModificationTime

```java
 updateModificationTime()
```

**Returns:** ``

### UncheckedIOException

```java
throw new UncheckedIOException("Failed to remove existing file " + path)
```

**Parameters:**

- `path` (`"Failed to remove existing file " +`)

**Returns:** `throw new`

### updateModificationTime

```java
 updateModificationTime()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Failed to download file " + p_314583_)
```

**Parameters:**

- `p_314583_` (`"Failed to download file " +`)

**Returns:** `throw new`

### updateModificationTime

```java
private static void updateModificationTime(Path p_314996_)
```

**Parameters:**

- `p_314996_` (`Path`)

**Returns:** `private static void`

### hashFile

```java
private static HashCode hashFile(Path p_314478_, HashFunction p_314630_)
```

**Parameters:**

- `p_314478_` (`Path`)
- `p_314630_` (`HashFunction`)

**Returns:** `private static HashCode`

### try

```java
 try(OutputStream outputstream = Funnels.asOutputStream(hasher)
```

**Parameters:**

- `Funnels.asOutputStream(hasher` (`OutputStream outputstream =`)

**Returns:** ``

### checkExistingFile

```java
private static boolean checkExistingFile(Path p_314420_, HashFunction p_314503_, HashCode p_314584_)
```

**Parameters:**

- `p_314420_` (`Path`)
- `p_314503_` (`HashFunction`)
- `p_314584_` (`HashCode`)

**Returns:** `private static boolean`

### cachedFilePath

```java
private static Path cachedFilePath(Path p_314479_, HashCode p_314627_)
```

**Parameters:**

- `p_314479_` (`Path`)
- `p_314627_` (`HashCode`)

**Returns:** `private static Path`

### downloadAndHash

```java
private static HashCode downloadAndHash(HashFunction p_314429_, int p_314497_, HttpUtil.DownloadProgressListener p_314419_, InputStream p_314557_, Path p_314618_)
```

**Parameters:**

- `p_314429_` (`HashFunction`)
- `p_314497_` (`int`)
- `p_314419_` (`HttpUtil.DownloadProgressListener`)
- `p_314557_` (`InputStream`)
- `p_314618_` (`Path`)

**Returns:** `private static HashCode`

### IOException

```java
throw new IOException("Download interrupted")
```

**Parameters:**

- `interrupted"` (`"Download`)

**Returns:** `throw new`

### getAvailablePort

```java
public static int getAvailablePort()
```

**Returns:** `public static int`

### isPortAvailable

```java
public static boolean isPortAvailable(int p_259872_)
```

**Parameters:**

- `p_259872_` (`int`)

**Returns:** `public static boolean`

### requestStart

```java
void requestStart()
```

### downloadStart

```java
void downloadStart(OptionalLong p_314436_)
```

**Parameters:**

- `p_314436_` (`OptionalLong`)

### downloadedBytes

```java
void downloadedBytes(long p_314605_)
```

**Parameters:**

- `p_314605_` (`long`)

### requestFinished

```java
void requestFinished(boolean p_314958_)
```

**Parameters:**

- `p_314958_` (`boolean`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DownloadProgressListener` | interface |  |
