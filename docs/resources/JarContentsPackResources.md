# JarContentsPackResources

**Package:** `net.neoforged.neoforge.resource`
**Type:** class
**Extends:** `AbstractPackResources`
**Annotations:** `@ApiStatus`

## Description

Exposes the content of an arbitrary `JarContents` as data/resource pack resources.


In general, you should use the factory `ResourcePackLoader#createPackForJarContents(JarContents)` instead,
since it will try to create a more optimal implementation based on the actual underlying Jar storage.

## Methods

### JarContentsPackResources

```java
public JarContentsPackResources(PackLocationInfo locationInfo, JarContents contents, String prefix)
```

**Parameters:**

- `locationInfo` (`PackLocationInfo`)
- `contents` (`JarContents`)
- `prefix` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getPathFromLocation

```java
private static String getPathFromLocation(PackType packType, Identifier location)
```

**Parameters:**

- `packType` (`PackType`)
- `location` (`Identifier`)

**Returns:** `private static String`

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... pathSegments)
```

**Parameters:**

- `pathSegments` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType packType, Identifier location)
```

**Parameters:**

- `packType` (`PackType`)
- `location` (`Identifier`)

**Returns:** `IoSupplier<InputStream>`

### addPrefix

```java
private String addPrefix(String location)
```

**Parameters:**

- `location` (`String`)

**Returns:** `private String`

### getNamespaces

```java
public Set<String> getNamespaces(PackType packType)
```

**Parameters:**

- `packType` (`PackType`)

**Returns:** `Set<String>`

### IllegalStateException

```java
throw new IllegalStateException("Path received from visitContent doesn't start with prefix '" + prefix + "': " + relativePath)
```

**Parameters:**

- `relativePath` (`"Path received from visitContent doesn't start with prefix '" + prefix + "': " +`)

**Returns:** `throw new`

### close

```java
public void close()
```

### listResources

```java
public void listResources(PackType packType, String namespace, String prefix, PackResources.ResourceOutput output)
```

**Parameters:**

- `packType` (`PackType`)
- `namespace` (`String`)
- `prefix` (`String`)
- `output` (`PackResources.ResourceOutput`)

### JarContentsResourcesSupplier

```java
public JarContentsResourcesSupplier(JarContents contents)
```

**Parameters:**

- `contents` (`JarContents`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### JarContentsResourcesSupplier

```java
public JarContentsResourcesSupplier(JarContents contents, String prefix)
```

**Parameters:**

- `contents` (`JarContents`)
- `prefix` (`String`)

**Returns:** `public`

### openPrimary

```java
public PackResources openPrimary(PackLocationInfo locationInfo)
```

**Parameters:**

- `locationInfo` (`PackLocationInfo`)

**Returns:** `PackResources`

### JarContentsPackResources

```java
return new JarContentsPackResources()
```

**Returns:** `return new`

### openFull

```java
public PackResources openFull(PackLocationInfo locationInfo, Pack.Metadata metadata)
```

**Parameters:**

- `locationInfo` (`PackLocationInfo`)
- `metadata` (`Pack.Metadata`)

**Returns:** `PackResources`

### CompositePackResources

```java
return new CompositePackResources()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `JarContentsResourcesSupplier` | class |  |
