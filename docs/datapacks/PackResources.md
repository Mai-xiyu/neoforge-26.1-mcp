# PackResources

**Package:** `net.minecraft.server.packs`
**Type:** interface
**Extends:** `AutoCloseable, net.neoforged.neoforge.common.extensions.IPackResourcesExtension`
**Side:** 🖧 Server

## Methods

### getRootResource

```java
IoSupplier<InputStream> getRootResource(String[]... p_252049_)
```

**Parameters:**

- `p_252049_` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
IoSupplier<InputStream> getResource(PackType p_215339_, ResourceLocation p_249034_)
```

**Parameters:**

- `p_215339_` (`PackType`)
- `p_249034_` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### listResources

```java
void listResources(PackType p_10289_, String p_251379_, String p_251932_, PackResources.ResourceOutput p_249347_)
```

**Parameters:**

- `p_10289_` (`PackType`)
- `p_251379_` (`String`)
- `p_251932_` (`String`)
- `p_249347_` (`PackResources.ResourceOutput`)

### getNamespaces

```java
Set<String> getNamespaces(PackType p_10283_)
```

**Parameters:**

- `p_10283_` (`PackType`)

**Returns:** `Set<String>`

### getMetadataSection

```java
<T> T getMetadataSection(MetadataSectionSerializer<T> p_10291_)
```

**Parameters:**

- `p_10291_` (`MetadataSectionSerializer<T>`)

**Returns:** `T`

### location

```java
PackLocationInfo location()
```

**Returns:** `PackLocationInfo`

### packId

```java
default String packId()
```

**Returns:** `default String`

### knownPackInfo

```java
default Optional<KnownPack> knownPackInfo()
```

**Returns:** `default Optional<KnownPack>`

### close

```java
void close()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ResourceOutput` | interface |  |
