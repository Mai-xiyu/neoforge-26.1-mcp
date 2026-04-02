# ResourceMetadata

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface
**Side:** 🖧 Server

## Methods

### getSection

```java
public <T> Optional<T> getSection(MetadataSectionSerializer<T> p_215584_)
```

**Parameters:**

- `p_215584_` (`MetadataSectionSerializer<T>`)

**Returns:** `Optional<T>`

### fromJsonStream

```java
static ResourceMetadata fromJsonStream(InputStream p_215581_)
```

**Parameters:**

- `p_215581_` (`InputStream`)

**Returns:** `static ResourceMetadata`

### getSection

```java
public <T> Optional<T> getSection(MetadataSectionSerializer<T> p_215589_)
```

**Parameters:**

- `p_215589_` (`MetadataSectionSerializer<T>`)

**Returns:** `Optional<T>`

### getSection

```java
<T> <T> Optional<T> getSection(MetadataSectionSerializer<T> p_215579_)
```

**Parameters:**

- `p_215579_` (`MetadataSectionSerializer<T>`)

**Returns:** `<T> Optional<T>`

### copySections

```java
default ResourceMetadata copySections(Collection<MetadataSectionSerializer<?>> p_295308_)
```

**Parameters:**

- `p_295308_` (`Collection<MetadataSectionSerializer<?>>`)

**Returns:** `default ResourceMetadata`

### copySection

```java
<T> private <T> void copySection(ResourceMetadata.Builder p_295962_, MetadataSectionSerializer<T> p_294347_)
```

**Parameters:**

- `p_295962_` (`ResourceMetadata.Builder`)
- `p_294347_` (`MetadataSectionSerializer<T>`)

**Returns:** `private <T> void`

### put

```java
<T> public <T> ResourceMetadata.Builder put(MetadataSectionSerializer<T> p_294292_, T p_294133_)
```

**Parameters:**

- `p_294292_` (`MetadataSectionSerializer<T>`)
- `p_294133_` (`T`)

**Returns:** `public <T> ResourceMetadata.Builder`

### build

```java
public ResourceMetadata build()
```

**Returns:** `public ResourceMetadata`

### getSection

```java
public <T> Optional<T> getSection(MetadataSectionSerializer<T> p_295383_)
```

**Parameters:**

- `p_295383_` (`MetadataSectionSerializer<T>`)

**Returns:** `Optional<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
