# PathPackResources

**Package:** `net.minecraft.server.packs`
**Type:** class
**Extends:** `AbstractPackResources`
**Side:** 🖧 Server

## Methods

### PathPackResources

```java
public PathPackResources(PackLocationInfo p_326080_, Path p_256025_)
```

**Parameters:**

- `p_326080_` (`PackLocationInfo`)
- `p_256025_` (`Path`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRootResource

```java
public IoSupplier<InputStream> getRootResource(String[]... p_249041_)
```

**Parameters:**

- `p_249041_` (`String[]...`)

**Returns:** `IoSupplier<InputStream>`

### validatePath

```java
public static boolean validatePath(Path p_249579_)
```

**Parameters:**

- `p_249579_` (`Path`)

**Returns:** `public static boolean`

### getResource

```java
public IoSupplier<InputStream> getResource(PackType p_249352_, ResourceLocation p_251715_)
```

**Parameters:**

- `p_249352_` (`PackType`)
- `p_251715_` (`ResourceLocation`)

**Returns:** `IoSupplier<InputStream>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getResource

```java
public static IoSupplier<InputStream> getResource(ResourceLocation p_250145_, Path p_251046_)
```

**Parameters:**

- `p_250145_` (`ResourceLocation`)
- `p_251046_` (`Path`)

**Returns:** `IoSupplier<InputStream>`

### returnFileIfExists

```java
return returnFileIfExists()
```

**Returns:** `return`

### listResources

```java
public void listResources(PackType p_251452_, String p_249854_, String p_248650_, PackResources.ResourceOutput p_248572_)
```

**Parameters:**

- `p_251452_` (`PackType`)
- `p_249854_` (`String`)
- `p_248650_` (`String`)
- `p_248572_` (`PackResources.ResourceOutput`)

### listPath

```java
public static void listPath(String p_249455_, Path p_249514_, List<String> p_251918_, PackResources.ResourceOutput p_249964_)
```

**Parameters:**

- `p_249455_` (`String`)
- `p_249514_` (`Path`)
- `p_251918_` (`List<String>`)
- `p_249964_` (`PackResources.ResourceOutput`)

**Returns:** `public static void`

### getNamespaces

```java
public Set<String> getNamespaces(PackType p_251896_)
```

**Parameters:**

- `p_251896_` (`PackType`)

**Returns:** `Set<String>`

### close

```java
public void close()
```

### PathResourcesSupplier

```java
public PathResourcesSupplier(Path p_294512_)
```

**Parameters:**

- `p_294512_` (`Path`)

**Returns:** `public`

### openPrimary

```java
public PackResources openPrimary(PackLocationInfo p_325962_)
```

**Parameters:**

- `p_325962_` (`PackLocationInfo`)

**Returns:** `PackResources`

### PathPackResources

```java
return new PathPackResources()
```

**Returns:** `return new`

### openFull

```java
public PackResources openFull(PackLocationInfo p_326066_, Pack.Metadata p_326237_)
```

**Parameters:**

- `p_326066_` (`PackLocationInfo`)
- `p_326237_` (`Pack.Metadata`)

**Returns:** `PackResources`

### CompositePackResources

```java
return new CompositePackResources()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PathResourcesSupplier` | class |  |
