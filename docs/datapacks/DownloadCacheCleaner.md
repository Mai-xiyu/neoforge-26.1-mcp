# DownloadCacheCleaner

**Package:** `net.minecraft.server.packs`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HIGHEST_PRIORITY_FIRST` | `Comparator<DownloadCacheCleaner.PathAndPriority>` |  |
| `NEWEST_FIRST` | `Comparator<DownloadCacheCleaner.PathAndTime>` |  |

## Methods

### vacuumCacheDir

```java
public static void vacuumCacheDir(Path p_314919_, int p_314928_)
```

**Parameters:**

- `p_314919_` (`Path`)
- `p_314928_` (`int`)

**Returns:** `public static void`

### listFilesWithModificationTimes

```java
private static List<DownloadCacheCleaner.PathAndTime> listFilesWithModificationTimes(Path p_314985_)
```

**Parameters:**

- `p_314985_` (`Path`)

**Returns:** `private static List<DownloadCacheCleaner.PathAndTime>`

### visitFile

```java
public FileVisitResult visitFile(Path p_314922_, BasicFileAttributes p_315004_)
```

**Parameters:**

- `p_314922_` (`Path`)
- `p_315004_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`

### prioritizeFilesInDirs

```java
private static List<DownloadCacheCleaner.PathAndPriority> prioritizeFilesInDirs(List<DownloadCacheCleaner.PathAndTime> p_314924_)
```

**Parameters:**

- `p_314924_` (`List<DownloadCacheCleaner.PathAndTime>`)

**Returns:** `private static List<DownloadCacheCleaner.PathAndPriority>`

### PathAndPriority

```java
static record PathAndPriority(Path path, int removalPriority)
```

**Parameters:**

- `path` (`Path`)
- `removalPriority` (`int`)

**Returns:** `static record`

### PathAndTime

```java
static record PathAndTime(Path path, FileTime modifiedTime)
```

**Parameters:**

- `path` (`Path`)
- `modifiedTime` (`FileTime`)

**Returns:** `static record`
