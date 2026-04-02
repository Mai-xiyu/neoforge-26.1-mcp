# CompositePackResources

**Package:** `net.minecraft.server.packs`
**Type:** class
**Implements:** `PackResources`
**Side:** 🖧 Server

## Methods

### CompositePackResources

```java
public CompositePackResources(PackResources p_296246_, List<PackResources> p_294643_)
```

**Parameters:**

- `p_296246_` (`PackResources`)
- `p_294643_` (`List<PackResources>`)

**Returns:** `public`

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... p_295316_)
```

**Parameters:**

- `p_295316_` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType p_295406_, ResourceLocation p_296382_)
```

**Parameters:**

- `p_295406_` (`PackType`)
- `p_296382_` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### listResources

```java
public void listResources(PackType p_295490_, String p_296164_, String p_294691_, PackResources.ResourceOutput p_295313_)
```

**Parameters:**

- `p_295490_` (`PackType`)
- `p_296164_` (`String`)
- `p_294691_` (`String`)
- `p_295313_` (`PackResources.ResourceOutput`)

### getNamespaces

```java
public Set<String> getNamespaces(PackType p_294708_)
```

**Parameters:**

- `p_294708_` (`PackType`)

**Returns:** `Set<String>`

### getMetadataSection

```java
public <T> T getMetadataSection(MetadataSectionSerializer<T> p_295061_)
```

**Parameters:**

- `p_295061_` (`MetadataSectionSerializer<T>`)

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
