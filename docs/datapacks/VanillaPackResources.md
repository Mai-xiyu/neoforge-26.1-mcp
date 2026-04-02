# VanillaPackResources

**Package:** `net.minecraft.server.packs`
**Type:** class
**Implements:** `PackResources`
**Side:** 🖧 Server

## Methods

### VanillaPackResources

```java
 VanillaPackResources(PackLocationInfo p_326444_, BuiltInMetadata p_249743_, Set<String> p_250468_, List<Path> p_248798_, Map<PackType, List<Path>> p_251106_)
```

**Parameters:**

- `p_326444_` (`PackLocationInfo`)
- `p_249743_` (`BuiltInMetadata`)
- `p_250468_` (`Set<String>`)
- `p_248798_` (`List<Path>`)
- `p_251106_` (`Map<PackType, List<Path>>`)

**Returns:** ``

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... p_250530_)
```

**Parameters:**

- `p_250530_` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### listRawPaths

```java
public void listRawPaths(PackType p_252103_, ResourceLocation p_250441_, Consumer<Path> p_251968_)
```

**Parameters:**

- `p_252103_` (`PackType`)
- `p_250441_` (`ResourceLocation`)
- `p_251968_` (`Consumer<Path>`)

**Returns:** `public void`

### listResources

```java
public void listResources(PackType p_248974_, String p_248703_, String p_250848_, PackResources.ResourceOutput p_249668_)
```

**Parameters:**

- `p_248974_` (`PackType`)
- `p_248703_` (`String`)
- `p_250848_` (`String`)
- `p_249668_` (`PackResources.ResourceOutput`)

### getResources

```java
private static void getResources(PackResources.ResourceOutput p_249662_, String p_251249_, Path p_251290_, List<String> p_250451_)
```

**Parameters:**

- `p_249662_` (`PackResources.ResourceOutput`)
- `p_251249_` (`String`)
- `p_251290_` (`Path`)
- `p_250451_` (`List<String>`)

**Returns:** `private static void`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType p_250512_, ResourceLocation p_251554_)
```

**Parameters:**

- `p_250512_` (`PackType`)
- `p_251554_` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### getNamespaces

```java
public Set<String> getNamespaces(PackType p_10322_)
```

**Parameters:**

- `p_10322_` (`PackType`)

**Returns:** `Set<String>`

### getMetadataSection

```java
public <T> T getMetadataSection(MetadataSectionSerializer<T> p_10333_)
```

**Parameters:**

- `p_10333_` (`MetadataSectionSerializer<T>`)

**Returns:** `T`

### location

```java
public PackLocationInfo location()
```

**Returns:** `PackLocationInfo`

### close

```java
public void close()
```

### asProvider

```java
public ResourceProvider asProvider()
```

**Returns:** `public ResourceProvider`
