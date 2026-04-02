# PackMetadataGenerator

**Package:** `net.minecraft.data.metadata`
**Type:** class
**Implements:** `DataProvider`

## Methods

### PackMetadataGenerator

```java
public PackMetadataGenerator(PackOutput p_254070_)
```

**Parameters:**

- `p_254070_` (`PackOutput`)

**Returns:** `public`

### add

```java
<T> public <T> PackMetadataGenerator add(MetadataSectionType<T> p_252067_, T p_249511_)
```

**Parameters:**

- `p_252067_` (`MetadataSectionType<T>`)
- `p_249511_` (`T`)

**Returns:** `public <T> PackMetadataGenerator`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254137_)
```

**Parameters:**

- `p_254137_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### getName

```java
public final String getName()
```

**Returns:** `String`

### forFeaturePack

```java
public static PackMetadataGenerator forFeaturePack(PackOutput p_256281_, Component p_255661_)
```

**Parameters:**

- `p_256281_` (`PackOutput`)
- `p_255661_` (`Component`)

**Returns:** `public static PackMetadataGenerator`

### forFeaturePack

```java
public static PackMetadataGenerator forFeaturePack(PackOutput p_253903_, Component p_254497_, FeatureFlagSet p_253848_)
```

**Parameters:**

- `p_253903_` (`PackOutput`)
- `p_254497_` (`Component`)
- `p_253848_` (`FeatureFlagSet`)

**Returns:** `public static PackMetadataGenerator`
