# ResourceProvider

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface
**Side:** 🖧 Server
**Annotations:** `@FunctionalInterface`

## Methods

### getResource

```java
Optional<Resource> getResource(ResourceLocation p_215592_)
```

**Parameters:**

- `p_215592_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

### getResourceOrThrow

```java
default Resource getResourceOrThrow(ResourceLocation p_215594_)
```

**Parameters:**

- `p_215594_` (`ResourceLocation`)

**Returns:** `default Resource`

### open

```java
default InputStream open(ResourceLocation p_215596_)
```

**Parameters:**

- `p_215596_` (`ResourceLocation`)

**Returns:** `default InputStream`

### openAsReader

```java
default BufferedReader openAsReader(ResourceLocation p_215598_)
```

**Parameters:**

- `p_215598_` (`ResourceLocation`)

**Returns:** `default BufferedReader`

### fromMap

```java
static ResourceProvider fromMap(Map<ResourceLocation, Resource> p_251819_)
```

**Parameters:**

- `p_251819_` (`Map<ResourceLocation, Resource>`)

**Returns:** `static ResourceProvider`
