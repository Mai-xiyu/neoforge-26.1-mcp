# FolderRepositorySource

**Package:** `net.minecraft.server.packs.repository`
**Type:** class
**Implements:** `RepositorySource`
**Side:** 🖧 Server

## Methods

### FolderRepositorySource

```java
public FolderRepositorySource(Path p_251796_, PackType p_251664_, PackSource p_250854_, DirectoryValidator p_296354_)
```

**Parameters:**

- `p_251796_` (`Path`)
- `p_251664_` (`PackType`)
- `p_250854_` (`PackSource`)
- `p_296354_` (`DirectoryValidator`)

**Returns:** `public`

### nameFromPath

```java
private static String nameFromPath(Path p_248745_)
```

**Parameters:**

- `p_248745_` (`Path`)

**Returns:** `private static String`

### loadPacks

```java
public void loadPacks(Consumer<Pack> p_250965_)
```

**Parameters:**

- `p_250965_` (`Consumer<Pack>`)

### createDiscoveredFilePackInfo

```java
private PackLocationInfo createDiscoveredFilePackInfo(Path p_326163_)
```

**Parameters:**

- `p_326163_` (`Path`)

**Returns:** `private PackLocationInfo`

### discoverPacks

```java
public static void discoverPacks(Path p_248794_, DirectoryValidator p_294483_, BiConsumer<Path, Pack.ResourcesSupplier> p_248580_)
```

**Parameters:**

- `p_248794_` (`Path`)
- `p_294483_` (`DirectoryValidator`)
- `p_248580_` (`BiConsumer<Path, Pack.ResourcesSupplier>`)

**Returns:** `public static void`

### FolderPackDetector

```java
protected FolderPackDetector(DirectoryValidator p_296420_)
```

**Parameters:**

- `p_296420_` (`DirectoryValidator`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### createZipPack

```java
protected Pack.ResourcesSupplier createZipPack(Path p_294522_)
```

**Parameters:**

- `p_294522_` (`Path`)

**Returns:** `Pack.ResourcesSupplier`

### createDirectoryPack

```java
protected Pack.ResourcesSupplier createDirectoryPack(Path p_295493_)
```

**Parameters:**

- `p_295493_` (`Path`)

**Returns:** `protected Pack.ResourcesSupplier`
