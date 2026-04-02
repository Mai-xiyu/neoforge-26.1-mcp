# VanillaPackResourcesBuilder

**Package:** `net.minecraft.server.packs`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `developmentConfig` | `Consumer<VanillaPackResourcesBuilder>` |  |

## Methods

### synchronized

```java
 synchronized()
```

**Returns:** ``

### safeGetPath

```java
private static Path safeGetPath(URI p_248652_)
```

**Parameters:**

- `p_248652_` (`URI`)

**Returns:** `private static Path`

### validateDirPath

```java
private boolean validateDirPath(Path p_249112_)
```

**Parameters:**

- `p_249112_` (`Path`)

**Returns:** `private boolean`

### pushRootPath

```java
private void pushRootPath(Path p_251084_)
```

**Parameters:**

- `p_251084_` (`Path`)

**Returns:** `private void`

### pushPathForType

```java
private void pushPathForType(PackType p_250073_, Path p_252259_)
```

**Parameters:**

- `p_250073_` (`PackType`)
- `p_252259_` (`Path`)

**Returns:** `private void`

### pushJarResources

```java
public VanillaPackResourcesBuilder pushJarResources()
```

**Returns:** `public VanillaPackResourcesBuilder`

### pushClasspathResources

```java
public VanillaPackResourcesBuilder pushClasspathResources(PackType p_251987_, Class<?> p_249062_)
```

**Parameters:**

- `p_251987_` (`PackType`)
- `p_249062_` (`Class<?>`)

**Returns:** `public VanillaPackResourcesBuilder`

### applyDevelopmentConfig

```java
public VanillaPackResourcesBuilder applyDevelopmentConfig()
```

**Returns:** `public VanillaPackResourcesBuilder`

### pushUniversalPath

```java
public VanillaPackResourcesBuilder pushUniversalPath(Path p_249464_)
```

**Parameters:**

- `p_249464_` (`Path`)

**Returns:** `public VanillaPackResourcesBuilder`

### pushAssetPath

```java
public VanillaPackResourcesBuilder pushAssetPath(PackType p_248623_, Path p_250065_)
```

**Parameters:**

- `p_248623_` (`PackType`)
- `p_250065_` (`Path`)

**Returns:** `public VanillaPackResourcesBuilder`

### setMetadata

```java
public VanillaPackResourcesBuilder setMetadata(BuiltInMetadata p_249597_)
```

**Parameters:**

- `p_249597_` (`BuiltInMetadata`)

**Returns:** `public VanillaPackResourcesBuilder`

### exposeNamespace

```java
public VanillaPackResourcesBuilder exposeNamespace(String[]... p_250838_)
```

**Parameters:**

- `p_250838_` (`String[]...`)

**Returns:** `public VanillaPackResourcesBuilder`

### build

```java
public VanillaPackResources build(PackLocationInfo p_326441_)
```

**Parameters:**

- `p_326441_` (`PackLocationInfo`)

**Returns:** `public VanillaPackResources`

### copyAndReverse

```java
private static List<Path> copyAndReverse(Collection<Path> p_252072_)
```

**Parameters:**

- `p_252072_` (`Collection<Path>`)

**Returns:** `private static List<Path>`
