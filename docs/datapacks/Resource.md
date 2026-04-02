# Resource

**Package:** `net.minecraft.server.packs.resources`
**Type:** class
**Side:** 🖧 Server

## Methods

### Resource

```java
public Resource(PackResources p_250802_, IoSupplier<InputStream> p_248585_, IoSupplier<ResourceMetadata> p_250094_)
```

**Parameters:**

- `p_250802_` (`PackResources`)
- `p_248585_` (`IoSupplier<InputStream>`)
- `p_250094_` (`IoSupplier<ResourceMetadata>`)

**Returns:** `public`

### Resource

```java
public Resource(PackResources p_250372_, IoSupplier<InputStream> p_248749_)
```

**Parameters:**

- `p_250372_` (`PackResources`)
- `p_248749_` (`IoSupplier<InputStream>`)

**Returns:** `public`

### source

```java
public PackResources source()
```

**Returns:** `public PackResources`

### sourcePackId

```java
public String sourcePackId()
```

**Returns:** `public String`

### knownPackInfo

```java
public Optional<KnownPack> knownPackInfo()
```

**Returns:** `public Optional<KnownPack>`

### open

```java
public InputStream open()
```

**Returns:** `public InputStream`

### openAsReader

```java
public BufferedReader openAsReader()
```

**Returns:** `public BufferedReader`

### metadata

```java
public ResourceMetadata metadata()
```

**Returns:** `public ResourceMetadata`
