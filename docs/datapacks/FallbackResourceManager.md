# FallbackResourceManager

**Package:** `net.minecraft.server.packs.resources`
**Type:** class
**Implements:** `ResourceManager`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `fallbacks` | `List<FallbackResourceManager.PackEntry>` |  |

## Methods

### FallbackResourceManager

```java
public FallbackResourceManager(PackType p_10605_, String p_10606_)
```

**Parameters:**

- `p_10605_` (`PackType`)
- `p_10606_` (`String`)

**Returns:** `public`

### push

```java
public void push(PackResources p_215378_)
```

**Parameters:**

- `p_215378_` (`PackResources`)

**Returns:** `public void`

### push

```java
public void push(PackResources p_215383_, Predicate<ResourceLocation> p_215384_)
```

**Parameters:**

- `p_215383_` (`PackResources`)
- `p_215384_` (`Predicate<ResourceLocation>`)

**Returns:** `public void`

### pushFilterOnly

```java
public void pushFilterOnly(String p_215400_, Predicate<ResourceLocation> p_215401_)
```

**Parameters:**

- `p_215400_` (`String`)
- `p_215401_` (`Predicate<ResourceLocation>`)

**Returns:** `public void`

### pushInternal

```java
private void pushInternal(String p_215396_, PackResources p_215397_, Predicate<ResourceLocation> p_215398_)
```

**Parameters:**

- `p_215396_` (`String`)
- `p_215397_` (`PackResources`)
- `p_215398_` (`Predicate<ResourceLocation>`)

**Returns:** `private void`

### getNamespaces

```java
public Set<String> getNamespaces()
```

**Returns:** `Set<String>`

### getResource

```java
public Optional<Resource> getResource(ResourceLocation p_215419_)
```

**Parameters:**

- `p_215419_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

### createResource

```java
private static Resource createResource(PackResources p_249946_, ResourceLocation p_250632_, IoSupplier<InputStream> p_250514_, IoSupplier<ResourceMetadata> p_251676_)
```

**Parameters:**

- `p_249946_` (`PackResources`)
- `p_250632_` (`ResourceLocation`)
- `p_250514_` (`IoSupplier<InputStream>`)
- `p_251676_` (`IoSupplier<ResourceMetadata>`)

**Returns:** `private static Resource`

### wrapForDebug

```java
private static IoSupplier<InputStream> wrapForDebug(ResourceLocation p_248639_, PackResources p_251740_, IoSupplier<InputStream> p_249116_)
```

**Parameters:**

- `p_248639_` (`ResourceLocation`)
- `p_251740_` (`PackResources`)
- `p_249116_` (`IoSupplier<InputStream>`)

**Returns:** `private static IoSupplier<InputStream>`

### getResourceStack

```java
public List<Resource> getResourceStack(ResourceLocation p_215367_)
```

**Parameters:**

- `p_215367_` (`ResourceLocation`)

**Returns:** `List<Resource>`

### isMetadata

```java
private static boolean isMetadata(ResourceLocation p_249381_)
```

**Parameters:**

- `p_249381_` (`ResourceLocation`)

**Returns:** `private static boolean`

### getResourceLocationFromMetadata

```java
private static ResourceLocation getResourceLocationFromMetadata(ResourceLocation p_249669_)
```

**Parameters:**

- `p_249669_` (`ResourceLocation`)

**Returns:** `private static ResourceLocation`

### getMetadataLocation

```java
static ResourceLocation getMetadataLocation(ResourceLocation p_10625_)
```

**Parameters:**

- `p_10625_` (`ResourceLocation`)

**Returns:** `static ResourceLocation`

### listResources

```java
public Map<ResourceLocation, Resource> listResources(String p_215413_, Predicate<ResourceLocation> p_215414_)
```

**Parameters:**

- `p_215413_` (`String`)
- `p_215414_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, Resource>`

### ResourceWithSourceAndIndex

```java
record ResourceWithSourceAndIndex(PackResources packResources, IoSupplier<InputStream> resource, int packIndex)
```

**Parameters:**

- `packResources` (`PackResources`)
- `resource` (`IoSupplier<InputStream>`)
- `packIndex` (`int`)

**Returns:** `record`

### createStackMetadataFinder

```java
private IoSupplier<ResourceMetadata> createStackMetadataFinder(ResourceLocation p_215369_, int p_215370_)
```

**Parameters:**

- `p_215369_` (`ResourceLocation`)
- `p_215370_` (`int`)

**Returns:** `private IoSupplier<ResourceMetadata>`

### parseMetadata

```java
return parseMetadata()
```

**Returns:** `return`

### convertToMetadata

```java
private static IoSupplier<ResourceMetadata> convertToMetadata(IoSupplier<InputStream> p_250827_)
```

**Parameters:**

- `p_250827_` (`IoSupplier<InputStream>`)

**Returns:** `private static IoSupplier<ResourceMetadata>`

### parseMetadata

```java
> parseMetadata()
```

**Returns:** `>`

### parseMetadata

```java
private static ResourceMetadata parseMetadata(IoSupplier<InputStream> p_250103_)
```

**Parameters:**

- `p_250103_` (`IoSupplier<InputStream>`)

**Returns:** `private static ResourceMetadata`

### applyPackFiltersToExistingResources

```java
private static void applyPackFiltersToExistingResources(FallbackResourceManager.PackEntry p_215393_, Map<ResourceLocation, FallbackResourceManager.EntryStack> p_215394_)
```

**Parameters:**

- `p_215393_` (`FallbackResourceManager.PackEntry`)
- `p_215394_` (`Map<ResourceLocation, FallbackResourceManager.EntryStack>`)

**Returns:** `private static void`

### listPackResources

```java
private void listPackResources(FallbackResourceManager.PackEntry p_215388_, String p_215389_, Predicate<ResourceLocation> p_215390_, Map<ResourceLocation, FallbackResourceManager.EntryStack> p_215391_)
```

**Parameters:**

- `p_215388_` (`FallbackResourceManager.PackEntry`)
- `p_215389_` (`String`)
- `p_215390_` (`Predicate<ResourceLocation>`)
- `p_215391_` (`Map<ResourceLocation, FallbackResourceManager.EntryStack>`)

**Returns:** `private void`

### listResourceStacks

```java
public Map<ResourceLocation, List<Resource>> listResourceStacks(String p_215416_, Predicate<ResourceLocation> p_215417_)
```

**Parameters:**

- `p_215416_` (`String`)
- `p_215417_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, List<Resource>>`

### applyPackFiltersToExistingResources

```java
 applyPackFiltersToExistingResources()
```

**Returns:** ``

### listPacks

```java
public Stream<PackResources> listPacks()
```

**Returns:** `Stream<PackResources>`

### EntryStack

```java
static record EntryStack(ResourceLocation fileLocation, ResourceLocation metadataLocation, List<FallbackResourceManager.ResourceWithSource> fileSources, Map<PackResources, IoSupplier<InputStream>> metaSources)
```

**Parameters:**

- `fileLocation` (`ResourceLocation`)
- `metadataLocation` (`ResourceLocation`)
- `fileSources` (`List<FallbackResourceManager.ResourceWithSource>`)
- `metaSources` (`Map<PackResources, IoSupplier<InputStream>>`)

**Returns:** `static record`

### EntryStack

```java
 EntryStack(ResourceLocation p_251350_)
```

**Parameters:**

- `p_251350_` (`ResourceLocation`)

**Returns:** ``

### LeakedResourceWarningInputStream

```java
public LeakedResourceWarningInputStream(InputStream p_10633_, ResourceLocation p_10634_, String p_10635_)
```

**Parameters:**

- `p_10633_` (`InputStream`)
- `p_10634_` (`ResourceLocation`)
- `p_10635_` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### close

```java
public void close()
```

### finalize

```java
protected void finalize()
```

### PackEntry

```java
static record PackEntry(String name, PackResources resources, Predicate<ResourceLocation> filter)
```

**Parameters:**

- `name` (`String`)
- `resources` (`PackResources`)
- `filter` (`Predicate<ResourceLocation>`)

**Returns:** `static record`

### filterAll

```java
public void filterAll(Collection<ResourceLocation> p_215443_)
```

**Parameters:**

- `p_215443_` (`Collection<ResourceLocation>`)

**Returns:** `public void`

### isFiltered

```java
public boolean isFiltered(ResourceLocation p_215441_)
```

**Parameters:**

- `p_215441_` (`ResourceLocation`)

**Returns:** `public boolean`

### ResourceWithSource

```java
static record ResourceWithSource(PackResources source, IoSupplier<InputStream> resource)
```

**Parameters:**

- `source` (`PackResources`)
- `resource` (`IoSupplier<InputStream>`)

**Returns:** `static record`
