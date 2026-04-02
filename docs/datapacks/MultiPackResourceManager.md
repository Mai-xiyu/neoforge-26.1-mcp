# MultiPackResourceManager

**Package:** `net.minecraft.server.packs.resources`
**Type:** class
**Implements:** `CloseableResourceManager`
**Side:** 🖧 Server

## Methods

### MultiPackResourceManager

```java
public MultiPackResourceManager(PackType p_203797_, List<PackResources> p_203798_)
```

**Parameters:**

- `p_203797_` (`PackType`)
- `p_203798_` (`List<PackResources>`)

**Returns:** `public`

### getNamespaces

```java
public Set<String> getNamespaces()
```

**Returns:** `Set<String>`

### getResource

```java
public Optional<Resource> getResource(ResourceLocation p_215482_)
```

**Parameters:**

- `p_215482_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

### getResourceStack

```java
public List<Resource> getResourceStack(ResourceLocation p_215466_)
```

**Parameters:**

- `p_215466_` (`ResourceLocation`)

**Returns:** `List<Resource>`

### listResources

```java
public Map<ResourceLocation, Resource> listResources(String p_215476_, Predicate<ResourceLocation> p_215477_)
```

**Parameters:**

- `p_215476_` (`String`)
- `p_215477_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, Resource>`

### checkTrailingDirectoryPath

```java
 checkTrailingDirectoryPath()
```

**Returns:** ``

### listResourceStacks

```java
public Map<ResourceLocation, List<Resource>> listResourceStacks(String p_215479_, Predicate<ResourceLocation> p_215480_)
```

**Parameters:**

- `p_215479_` (`String`)
- `p_215480_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, List<Resource>>`

### checkTrailingDirectoryPath

```java
 checkTrailingDirectoryPath()
```

**Returns:** ``

### checkTrailingDirectoryPath

```java
private static void checkTrailingDirectoryPath(String p_249608_)
```

**Parameters:**

- `p_249608_` (`String`)

**Returns:** `private static void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Trailing slash in path " + p_249608_)
```

**Parameters:**

- `p_249608_` (`"Trailing slash in path " +`)

**Returns:** `throw new`

### listPacks

```java
public Stream<PackResources> listPacks()
```

**Returns:** `Stream<PackResources>`

### close

```java
public void close()
```
