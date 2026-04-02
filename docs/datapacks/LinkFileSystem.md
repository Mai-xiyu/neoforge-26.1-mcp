# LinkFileSystem

**Package:** `net.minecraft.server.packs.linkfs`
**Type:** class
**Extends:** `FileSystem`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PATH_SEPARATOR` | `String` |  |

## Methods

### LinkFileSystem

```java
 LinkFileSystem(String p_251238_, LinkFileSystem.DirectoryEntry p_248738_)
```

**Parameters:**

- `p_251238_` (`String`)
- `p_248738_` (`LinkFileSystem.DirectoryEntry`)

**Returns:** ``

### buildPath

```java
private static LinkFSPath buildPath(LinkFileSystem.DirectoryEntry p_250914_, LinkFileSystem p_248904_, String p_248935_, LinkFSPath p_250296_)
```

**Parameters:**

- `p_250914_` (`LinkFileSystem.DirectoryEntry`)
- `p_248904_` (`LinkFileSystem`)
- `p_248935_` (`String`)
- `p_250296_` (`LinkFSPath`)

**Returns:** `private static LinkFSPath`

### provider

```java
public FileSystemProvider provider()
```

**Returns:** `FileSystemProvider`

### close

```java
public void close()
```

### isOpen

```java
public boolean isOpen()
```

**Returns:** `boolean`

### isReadOnly

```java
public boolean isReadOnly()
```

**Returns:** `boolean`

### getSeparator

```java
public String getSeparator()
```

**Returns:** `String`

### getRootDirectories

```java
public Iterable<Path> getRootDirectories()
```

**Returns:** `Iterable<Path>`

### getFileStores

```java
public Iterable<FileStore> getFileStores()
```

**Returns:** `Iterable<FileStore>`

### supportedFileAttributeViews

```java
public Set<String> supportedFileAttributeViews()
```

**Returns:** `Set<String>`

### getPath

```java
public Path getPath(String p_250018_, String[]... p_252159_)
```

**Parameters:**

- `p_250018_` (`String`)
- `p_252159_` (`String[]...`)

**Returns:** `Path`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty paths not allowed")
```

**Parameters:**

- `allowed"` (`"Empty paths not`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty paths not allowed")
```

**Parameters:**

- `allowed"` (`"Empty paths not`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty paths not allowed")
```

**Parameters:**

- `allowed"` (`"Empty paths not`)

**Returns:** `throw new`

### getPathMatcher

```java
public PathMatcher getPathMatcher(String p_250757_)
```

**Parameters:**

- `p_250757_` (`String`)

**Returns:** `PathMatcher`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### getUserPrincipalLookupService

```java
public UserPrincipalLookupService getUserPrincipalLookupService()
```

**Returns:** `UserPrincipalLookupService`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### newWatchService

```java
public WatchService newWatchService()
```

**Returns:** `WatchService`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### store

```java
public FileStore store()
```

**Returns:** `public FileStore`

### rootPath

```java
public LinkFSPath rootPath()
```

**Returns:** `public LinkFSPath`

### builder

```java
public static LinkFileSystem.Builder builder()
```

**Returns:** `public static LinkFileSystem.Builder`

### put

```java
public LinkFileSystem.Builder put(List<String> p_249758_, String p_251234_, Path p_248766_)
```

**Parameters:**

- `p_249758_` (`List<String>`)
- `p_251234_` (`String`)
- `p_248766_` (`Path`)

**Returns:** `public LinkFileSystem.Builder`

### put

```java
public LinkFileSystem.Builder put(List<String> p_250158_, Path p_250483_)
```

**Parameters:**

- `p_250158_` (`List<String>`)
- `p_250483_` (`Path`)

**Returns:** `public LinkFileSystem.Builder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Path can't be empty")
```

**Parameters:**

- `empty"` (`"Path can't be`)

**Returns:** `throw new`

### build

```java
public FileSystem build(String p_251975_)
```

**Parameters:**

- `p_251975_` (`String`)

**Returns:** `public FileSystem`

### LinkFileSystem

```java
return new LinkFileSystem()
```

**Returns:** `return new`

### DirectoryEntry

```java
static record DirectoryEntry(Map<String, LinkFileSystem.DirectoryEntry> children, Map<String, Path> files)
```

**Parameters:**

- `children` (`Map<String, LinkFileSystem.DirectoryEntry>`)
- `files` (`Map<String, Path>`)

**Returns:** `static record`

### DirectoryEntry

```java
public DirectoryEntry()
```

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
