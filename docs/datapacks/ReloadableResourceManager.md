# ReloadableResourceManager

**Package:** `net.minecraft.server.packs.resources`
**Type:** class
**Implements:** `ResourceManager`, `AutoCloseable`
**Side:** 🖧 Server

## Methods

### ReloadableResourceManager

```java
public ReloadableResourceManager(PackType p_203820_)
```

**Parameters:**

- `p_203820_` (`PackType`)

**Returns:** `public`

### close

```java
public void close()
```

### registerReloadListener

```java
public void registerReloadListener(PreparableReloadListener p_10714_)
```

**Parameters:**

- `p_10714_` (`PreparableReloadListener`)

**Returns:** `public void`

### createReload

```java
public ReloadInstance createReload(Executor p_143930_, Executor p_143931_, CompletableFuture<Unit> p_143932_, List<PackResources> p_143933_)
```

**Parameters:**

- `p_143930_` (`Executor`)
- `p_143931_` (`Executor`)
- `p_143932_` (`CompletableFuture<Unit>`)
- `p_143933_` (`List<PackResources>`)

**Returns:** `public ReloadInstance`

### getResource

```java
public Optional<Resource> getResource(ResourceLocation p_215494_)
```

**Parameters:**

- `p_215494_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

### getNamespaces

```java
public Set<String> getNamespaces()
```

**Returns:** `Set<String>`

### getResourceStack

```java
public List<Resource> getResourceStack(ResourceLocation p_215486_)
```

**Parameters:**

- `p_215486_` (`ResourceLocation`)

**Returns:** `List<Resource>`

### listResources

```java
public Map<ResourceLocation, Resource> listResources(String p_215488_, Predicate<ResourceLocation> p_215489_)
```

**Parameters:**

- `p_215488_` (`String`)
- `p_215489_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, Resource>`

### listResourceStacks

```java
public Map<ResourceLocation, List<Resource>> listResourceStacks(String p_215491_, Predicate<ResourceLocation> p_215492_)
```

**Parameters:**

- `p_215491_` (`String`)
- `p_215492_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, List<Resource>>`

### listPacks

```java
public Stream<PackResources> listPacks()
```

**Returns:** `Stream<PackResources>`

### registerReloadListenerIfNotPresent

```java
public void registerReloadListenerIfNotPresent(PreparableReloadListener listener)
```

**Parameters:**

- `listener` (`PreparableReloadListener`)

**Returns:** `public void`
