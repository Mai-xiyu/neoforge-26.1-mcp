# EmptyPackResources

**Package:** `net.neoforged.neoforge.resource`
**Type:** class
**Extends:** `AbstractPackResources`

## Methods

### EmptyPackResources

```java
public EmptyPackResources(PackLocationInfo packId, PackMetadataSection packMeta)
```

**Parameters:**

- `packId` (`PackLocationInfo`)
- `packMeta` (`PackMetadataSection`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getMetadataSection

```java
public <T> T getMetadataSection(MetadataSectionSerializer<T> deserializer)
```

**Parameters:**

- `deserializer` (`MetadataSectionSerializer<T>`)

**Returns:** `T`

### close

```java
public void close()
```

### listResources

```java
public void listResources(PackType type, String resourceNamespace, String paths, ResourceOutput resourceOutput)
```

**Parameters:**

- `type` (`PackType`)
- `resourceNamespace` (`String`)
- `paths` (`String`)
- `resourceOutput` (`ResourceOutput`)

### getNamespaces

```java
public Set<String> getNamespaces(PackType type)
```

**Parameters:**

- `type` (`PackType`)

**Returns:** `Set<String>`

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... paths)
```

**Parameters:**

- `paths` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType type, ResourceLocation location)
```

**Parameters:**

- `type` (`PackType`)
- `location` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### EmptyResourcesSupplier

```java
public EmptyResourcesSupplier(PackMetadataSection packMeta)
```

**Parameters:**

- `packMeta` (`PackMetadataSection`)

**Returns:** `public`

### openPrimary

```java
public PackResources openPrimary(PackLocationInfo id)
```

**Parameters:**

- `id` (`PackLocationInfo`)

**Returns:** `PackResources`

### EmptyPackResources

```java
return new EmptyPackResources()
```

**Returns:** `return new`

### openFull

```java
public PackResources openFull(PackLocationInfo id, Pack.Metadata info)
```

**Parameters:**

- `id` (`PackLocationInfo`)
- `info` (`Pack.Metadata`)

**Returns:** `PackResources`

### openPrimary

```java
return openPrimary()
```

**Returns:** `return`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EmptyResourcesSupplier` | class |  |
