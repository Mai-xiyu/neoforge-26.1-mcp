# ExistingFileHelper

**Package:** `net.neoforged.neoforge.common.data`
**Type:** class

## Description

Enables data providers to check if other data files currently exist. The
instance provided in the `GatherDataEvent` utilizes the standard
resources (via `VanillaPackResources`), forge's resources, as well as any
extra resource packs passed in via the `--existing` argument,
or mod resources via the `--existing-mod` argument.

## Methods

### getPackType

```java
PackType getPackType()
```

**Returns:** `PackType`

### getSuffix

```java
String getSuffix()
```

**Returns:** `String`

### getPrefix

```java
String getPrefix()
```

**Returns:** `String`

### ResourceType

```java
public ResourceType(PackType type, String suffix, String prefix)
```

**Parameters:**

- `type` (`PackType`)
- `suffix` (`String`)
- `prefix` (`String`)

**Returns:** `public`

### getPackType

```java
public PackType getPackType()
```

**Returns:** `PackType`

### getSuffix

```java
public String getSuffix()
```

**Returns:** `String`

### getPrefix

```java
public String getPrefix()
```

**Returns:** `String`

### ExistingFileHelper

```java
public public ExistingFileHelper(Collection<Path> existingPacks, Set<String> existingMods, boolean enable, String assetIndex, File assetsDir)
```

**Parameters:**

- `existingPacks` (`Collection<Path>`)
- `existingMods` (`Set<String>`)
- `enable` (`boolean`)
- `assetIndex` (`String`)
- `assetsDir` (`File`)

**Returns:** `public`

### getManager

```java
private ResourceManager getManager(PackType packType)
```

**Parameters:**

- `packType` (`PackType`)

**Returns:** `private ResourceManager`

### getLocation

```java
private ResourceLocation getLocation(ResourceLocation base, String suffix, String prefix)
```

**Parameters:**

- `base` (`ResourceLocation`)
- `suffix` (`String`)
- `prefix` (`String`)

**Returns:** `private ResourceLocation`

### exists

```java
public boolean exists(ResourceLocation loc, PackType packType)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)

**Returns:** `boolean`

### exists

```java
public boolean exists(ResourceLocation loc, IResourceType type)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `type` (`IResourceType`)

**Returns:** `boolean`

### exists

```java
public boolean exists(ResourceLocation loc, PackType packType, String pathSuffix, String pathPrefix)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)
- `pathSuffix` (`String`)
- `pathPrefix` (`String`)

**Returns:** `boolean`

### trackGenerated

```java
public void trackGenerated(ResourceLocation loc, IResourceType type)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `type` (`IResourceType`)

### trackGenerated

```java
public void trackGenerated(ResourceLocation loc, PackType packType, String pathSuffix, String pathPrefix)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)
- `pathSuffix` (`String`)
- `pathPrefix` (`String`)

### getResource

```java
public Resource getResource(ResourceLocation loc, PackType packType, String pathSuffix, String pathPrefix)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)
- `pathSuffix` (`String`)
- `pathPrefix` (`String`)

**Returns:** `Resource`

### getResource

```java
public Resource getResource(ResourceLocation loc, PackType packType)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)

**Returns:** `Resource`

### getResourceStack

```java
public List<Resource> getResourceStack(ResourceLocation loc, PackType packType)
```

**Parameters:**

- `loc` (`ResourceLocation`)
- `packType` (`PackType`)

**Returns:** `List<Resource>`

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `IResourceType` | interface |  |
| `ResourceType` | class |  |
