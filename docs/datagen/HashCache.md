# HashCache

**Package:** `net.minecraft.data`
**Type:** class

## Methods

### getProviderCachePath

```java
private Path getProviderCachePath(String p_254395_)
```

**Parameters:**

- `p_254395_` (`String`)

**Returns:** `private Path`

### HashCache

```java
public HashCache(Path p_236087_, Collection<String> p_253748_, WorldVersion p_236089_)
```

**Parameters:**

- `p_236087_` (`Path`)
- `p_253748_` (`Collection<String>`)
- `p_236089_` (`WorldVersion`)

**Returns:** `public`

### readCache

```java
private static HashCache.ProviderCache readCache(Path p_236093_, Path p_236094_)
```

**Parameters:**

- `p_236093_` (`Path`)
- `p_236094_` (`Path`)

**Returns:** `private static HashCache.ProviderCache`

### shouldRunInThisVersion

```java
public boolean shouldRunInThisVersion(String p_254319_)
```

**Parameters:**

- `p_254319_` (`String`)

**Returns:** `public boolean`

### generateUpdate

```java
public CompletableFuture<HashCache.UpdateResult> generateUpdate(String p_253944_, HashCache.UpdateFunction p_254321_)
```

**Parameters:**

- `p_253944_` (`String`)
- `p_254321_` (`HashCache.UpdateFunction`)

**Returns:** `public CompletableFuture<HashCache.UpdateResult>`

### IllegalStateException

```java
throw new IllegalStateException("Provider not registered: " + p_253944_)
```

**Parameters:**

- `p_253944_` (`"Provider not registered: " +`)

**Returns:** `throw new`

### applyUpdate

```java
public void applyUpdate(HashCache.UpdateResult p_253725_)
```

**Parameters:**

- `p_253725_` (`HashCache.UpdateResult`)

**Returns:** `public void`

### purgeStaleAndWrite

```java
public void purgeStaleAndWrite()
```

**Returns:** `public void`

### visitFile

```java
public FileVisitResult visitFile(Path p_320355_, BasicFileAttributes p_320633_)
```

**Parameters:**

- `p_320355_` (`Path`)
- `p_320633_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`

### CacheUpdater

```java
 CacheUpdater(String p_253971_, String p_254002_, HashCache.ProviderCache p_254244_)
```

**Parameters:**

- `p_253971_` (`String`)
- `p_254002_` (`String`)
- `p_254244_` (`HashCache.ProviderCache`)

**Returns:** ``

### shouldWrite

```java
private boolean shouldWrite(Path p_236120_, HashCode p_236121_)
```

**Parameters:**

- `p_236120_` (`Path`)
- `p_236121_` (`HashCode`)

**Returns:** `private boolean`

### writeIfNeeded

```java
public void writeIfNeeded(Path p_236123_, byte[] p_236124_, HashCode p_236125_)
```

**Parameters:**

- `p_236123_` (`Path`)
- `p_236124_` (`byte[]`)
- `p_236125_` (`HashCode`)

### IllegalStateException

```java
throw new IllegalStateException("Cannot write to cache as it has already been closed")
```

**Parameters:**

- `closed"` (`"Cannot write to cache as it has already been`)

**Returns:** `throw new`

### close

```java
public HashCache.UpdateResult close()
```

**Returns:** `public HashCache.UpdateResult`

### ProviderCache

```java
static record ProviderCache(String version, ImmutableMap<Path, HashCode> data)
```

**Parameters:**

- `version` (`String`)
- `data` (`ImmutableMap<Path, HashCode>`)

**Returns:** `static record`

### get

```java
public HashCode get(Path p_236135_)
```

**Parameters:**

- `p_236135_` (`Path`)

**Returns:** `HashCode`

### count

```java
public int count()
```

**Returns:** `public int`

### load

```java
public static HashCache.ProviderCache load(Path p_236140_, Path p_236141_)
```

**Parameters:**

- `p_236140_` (`Path`)
- `p_236141_` (`Path`)

**Returns:** `public static HashCache.ProviderCache`

### IllegalStateException

```java
throw new IllegalStateException("Missing cache file header")
```

**Parameters:**

- `header"` (`"Missing cache file`)

**Returns:** `throw new`

### save

```java
public void save(Path p_236143_, Path p_236144_, String p_236145_)
```

**Parameters:**

- `p_236143_` (`Path`)
- `p_236144_` (`Path`)
- `p_236145_` (`String`)

**Returns:** `public void`

### ProviderCacheBuilder

```java
static record ProviderCacheBuilder(String version, ConcurrentMap<Path, HashCode> data)
```

**Parameters:**

- `version` (`String`)
- `data` (`ConcurrentMap<Path, HashCode>`)

**Returns:** `static record`

### ProviderCacheBuilder

```java
 ProviderCacheBuilder(String p_254186_)
```

**Parameters:**

- `p_254186_` (`String`)

**Returns:** ``

### put

```java
public void put(Path p_254121_, HashCode p_254288_)
```

**Parameters:**

- `p_254121_` (`Path`)
- `p_254288_` (`HashCode`)

**Returns:** `public void`

### build

```java
public HashCache.ProviderCache build()
```

**Returns:** `public HashCache.ProviderCache`

### update

```java
CompletableFuture<?> update(CachedOutput p_253936_)
```

**Parameters:**

- `p_253936_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### UpdateResult

```java
public static record UpdateResult(String providerId, HashCache.ProviderCache cache, int writes)
```

**Parameters:**

- `providerId` (`String`)
- `cache` (`HashCache.ProviderCache`)
- `writes` (`int`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `UpdateFunction` | interface |  |
| `UpdateResult` | record |  |
