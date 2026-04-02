# ResourceManager

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface
**Extends:** `ResourceProvider`
**Side:** 🖧 Server

## Methods

### getNamespaces

```java
Set<String> getNamespaces()
```

**Returns:** `Set<String>`

### getResourceStack

```java
List<Resource> getResourceStack(ResourceLocation p_215562_)
```

**Parameters:**

- `p_215562_` (`ResourceLocation`)

**Returns:** `List<Resource>`

### listResources

```java
Map<ResourceLocation, Resource> listResources(String p_215563_, Predicate<ResourceLocation> p_215564_)
```

**Parameters:**

- `p_215563_` (`String`)
- `p_215564_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, Resource>`

### listResourceStacks

```java
Map<ResourceLocation, List<Resource>> listResourceStacks(String p_215565_, Predicate<ResourceLocation> p_215566_)
```

**Parameters:**

- `p_215565_` (`String`)
- `p_215566_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, List<Resource>>`

### listPacks

```java
Stream<PackResources> listPacks()
```

**Returns:** `Stream<PackResources>`

### getNamespaces

```java
public Set<String> getNamespaces()
```

**Returns:** `Set<String>`

### getResource

```java
public Optional<Resource> getResource(ResourceLocation p_215576_)
```

**Parameters:**

- `p_215576_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

### getResourceStack

```java
public List<Resource> getResourceStack(ResourceLocation p_215568_)
```

**Parameters:**

- `p_215568_` (`ResourceLocation`)

**Returns:** `List<Resource>`

### listResources

```java
public Map<ResourceLocation, Resource> listResources(String p_215570_, Predicate<ResourceLocation> p_215571_)
```

**Parameters:**

- `p_215570_` (`String`)
- `p_215571_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, Resource>`

### listResourceStacks

```java
public Map<ResourceLocation, List<Resource>> listResourceStacks(String p_215573_, Predicate<ResourceLocation> p_215574_)
```

**Parameters:**

- `p_215573_` (`String`)
- `p_215574_` (`Predicate<ResourceLocation>`)

**Returns:** `Map<ResourceLocation, List<Resource>>`

### listPacks

```java
public Stream<PackResources> listPacks()
```

**Returns:** `Stream<PackResources>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Empty` | enum |  |
