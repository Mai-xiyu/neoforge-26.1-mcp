# DownloadQueue

**Package:** `net.minecraft.server.packs`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<DownloadQueue.FileInfoEntry>` |  |

## Methods

### DownloadQueue

```java
public DownloadQueue(Path p_314439_)
```

**Parameters:**

- `p_314439_` (`Path`)

**Returns:** `public`

### runDownload

```java
private DownloadQueue.BatchResult runDownload(DownloadQueue.BatchConfig p_314482_, Map<UUID, DownloadQueue.DownloadRequest> p_314452_)
```

**Parameters:**

- `p_314482_` (`DownloadQueue.BatchConfig`)
- `p_314452_` (`Map<UUID, DownloadQueue.DownloadRequest>`)

**Returns:** `private DownloadQueue.BatchResult`

### getFileInfo

```java
private Either<String, DownloadQueue.FileInfoEntry> getFileInfo(Path p_314601_)
```

**Parameters:**

- `p_314601_` (`Path`)

**Returns:** `private Either<String, DownloadQueue.FileInfoEntry>`

### downloadBatch

```java
public CompletableFuture<DownloadQueue.BatchResult> downloadBatch(DownloadQueue.BatchConfig p_314536_, Map<UUID, DownloadQueue.DownloadRequest> p_314654_)
```

**Parameters:**

- `p_314536_` (`DownloadQueue.BatchConfig`)
- `p_314654_` (`Map<UUID, DownloadQueue.DownloadRequest>`)

**Returns:** `public CompletableFuture<DownloadQueue.BatchResult>`

### close

```java
public void close()
```

### BatchConfig

```java
public static record BatchConfig(HashFunction hashFunction, int maxSize, Map<String, String> headers, Proxy proxy, HttpUtil.DownloadProgressListener listener)
```

**Parameters:**

- `hashFunction` (`HashFunction`)
- `maxSize` (`int`)
- `headers` (`Map<String, String>`)
- `proxy` (`Proxy`)
- `listener` (`HttpUtil.DownloadProgressListener`)

**Returns:** `public static record`

### BatchResult

```java
public static record BatchResult(Map<UUID, Path> downloaded, Set<UUID> failed)
```

**Parameters:**

- `downloaded` (`Map<UUID, Path>`)
- `failed` (`Set<UUID>`)

**Returns:** `public static record`

### BatchResult

```java
public BatchResult()
```

**Returns:** `public`

### DownloadRequest

```java
public static record DownloadRequest(URL url, HashCode hash)
```

**Parameters:**

- `url` (`URL`)
- `hash` (`HashCode`)

**Returns:** `public static record`

### FileInfoEntry

```java
static record FileInfoEntry(String name, long size)
```

**Parameters:**

- `name` (`String`)
- `size` (`long`)

**Returns:** `static record`

### LogEntry

```java
static record LogEntry(UUID id, String url, Instant time, Optional<String> hash, Either<String, DownloadQueue.FileInfoEntry> errorOrFileInfo)
```

**Parameters:**

- `id` (`UUID`)
- `url` (`String`)
- `time` (`Instant`)
- `hash` (`Optional<String>`)
- `errorOrFileInfo` (`Either<String, DownloadQueue.FileInfoEntry>`)

**Returns:** `static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BatchConfig` | record |  |
| `BatchResult` | record |  |
| `DownloadRequest` | record |  |
