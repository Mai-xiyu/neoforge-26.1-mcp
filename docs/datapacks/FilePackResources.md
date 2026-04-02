# FilePackResources

**Package:** `net.minecraft.server.packs`
**Type:** class
**Extends:** `AbstractPackResources`
**Side:** 🖧 Server

## Methods

### FilePackResources

```java
public FilePackResources(PackLocationInfo p_326506_, FilePackResources.SharedZipFileAccess p_296014_, String p_256076_)
```

**Parameters:**

- `p_326506_` (`PackLocationInfo`)
- `p_296014_` (`FilePackResources.SharedZipFileAccess`)
- `p_256076_` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getPathFromLocation

```java
private static String getPathFromLocation(PackType p_250585_, ResourceLocation p_251470_)
```

**Parameters:**

- `p_250585_` (`PackType`)
- `p_251470_` (`ResourceLocation`)

**Returns:** `private static String`

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... p_248514_)
```

**Parameters:**

- `p_248514_` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType p_249605_, ResourceLocation p_252147_)
```

**Parameters:**

- `p_249605_` (`PackType`)
- `p_252147_` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### addPrefix

```java
private String addPrefix(String p_295349_)
```

**Parameters:**

- `p_295349_` (`String`)

**Returns:** `private String`

### getNamespaces

```java
public Set<String> getNamespaces(PackType p_10238_)
```

**Parameters:**

- `p_10238_` (`PackType`)

**Returns:** `Set<String>`

### extractNamespace

```java
public static String extractNamespace(String p_294953_, String p_294476_)
```

**Parameters:**

- `p_294953_` (`String`)
- `p_294476_` (`String`)

**Returns:** `String`

### close

```java
public void close()
```

### listResources

```java
public void listResources(PackType p_250500_, String p_249598_, String p_251613_, PackResources.ResourceOutput p_250655_)
```

**Parameters:**

- `p_250500_` (`PackType`)
- `p_249598_` (`String`)
- `p_251613_` (`String`)
- `p_250655_` (`PackResources.ResourceOutput`)

### FileResourcesSupplier

```java
public FileResourcesSupplier(Path p_326243_)
```

**Parameters:**

- `p_326243_` (`Path`)

**Returns:** `public`

### FileResourcesSupplier

```java
public FileResourcesSupplier(File p_326453_)
```

**Parameters:**

- `p_326453_` (`File`)

**Returns:** `public`

### openPrimary

```java
public PackResources openPrimary(PackLocationInfo p_326493_)
```

**Parameters:**

- `p_326493_` (`PackLocationInfo`)

**Returns:** `PackResources`

### FilePackResources

```java
return new FilePackResources()
```

**Returns:** `return new`

### openFull

```java
public PackResources openFull(PackLocationInfo p_326484_, Pack.Metadata p_326165_)
```

**Parameters:**

- `p_326484_` (`PackLocationInfo`)
- `p_326165_` (`Pack.Metadata`)

**Returns:** `PackResources`

### CompositePackResources

```java
return new CompositePackResources()
```

**Returns:** `return new`

### SharedZipFileAccess

```java
public SharedZipFileAccess(File p_294132_)
```

**Parameters:**

- `p_294132_` (`File`)

**Returns:** `public`

### getOrCreateZipFile

```java
ZipFile getOrCreateZipFile()
```

**Returns:** `ZipFile`

### close

```java
public void close()
```

### finalize

```java
protected void finalize()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FileResourcesSupplier` | class |  |
| `SharedZipFileAccess` | class |  |
