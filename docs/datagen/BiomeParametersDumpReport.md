# BiomeParametersDumpReport

**Package:** `net.minecraft.data.info`
**Type:** class
**Implements:** `DataProvider`

## Methods

### BiomeParametersDumpReport

```java
public BiomeParametersDumpReport(PackOutput p_256322_, CompletableFuture<HolderLookup.Provider> p_256222_)
```

**Parameters:**

- `p_256322_` (`PackOutput`)
- `p_256222_` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254091_)
```

**Parameters:**

- `p_254091_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### dumpValue

```java
<E> private static <E> CompletableFuture<?> dumpValue(Path p_254407_, CachedOutput p_254093_, DynamicOps<JsonElement> p_253788_, Encoder<E> p_254276_, E p_254073_)
```

**Parameters:**

- `p_254407_` (`Path`)
- `p_254093_` (`CachedOutput`)
- `p_253788_` (`DynamicOps<JsonElement>`)
- `p_254276_` (`Encoder<E>`)
- `p_254073_` (`E`)

**Returns:** `private static <E> CompletableFuture<?>`

### createPath

```java
private Path createPath(ResourceLocation p_236179_)
```

**Parameters:**

- `p_236179_` (`ResourceLocation`)

**Returns:** `private Path`

### getName

```java
public final String getName()
```

**Returns:** `String`
