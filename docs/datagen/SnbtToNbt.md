# SnbtToNbt

**Package:** `net.minecraft.data.structures`
**Type:** class
**Implements:** `DataProvider`

## Methods

### SnbtToNbt

```java
public SnbtToNbt(PackOutput p_249104_, Iterable<Path> p_249523_)
```

**Parameters:**

- `p_249104_` (`PackOutput`)
- `p_249523_` (`Iterable<Path>`)

**Returns:** `public`

### addFilter

```java
public SnbtToNbt addFilter(SnbtToNbt.Filter p_126476_)
```

**Parameters:**

- `p_126476_` (`SnbtToNbt.Filter`)

**Returns:** `public SnbtToNbt`

### applyFilters

```java
private CompoundTag applyFilters(String p_126461_, CompoundTag p_126462_)
```

**Parameters:**

- `p_126461_` (`String`)
- `p_126462_` (`CompoundTag`)

**Returns:** `private CompoundTag`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254336_)
```

**Parameters:**

- `p_254336_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### RuntimeException

```java
throw new RuntimeException("Failed to read structure input directory)
```

**Parameters:**

- `directory` (`"Failed to read structure input`)

**Returns:** `throw new`

### getName

```java
public final String getName()
```

**Returns:** `String`

### getName

```java
private String getName(Path p_126469_, Path p_126470_)
```

**Parameters:**

- `p_126469_` (`Path`)
- `p_126470_` (`Path`)

**Returns:** `private String`

### readStructure

```java
private SnbtToNbt.TaskResult readStructure(Path p_126466_, String p_126467_)
```

**Parameters:**

- `p_126466_` (`Path`)
- `p_126467_` (`String`)

**Returns:** `private SnbtToNbt.TaskResult`

### storeStructureIfChanged

```java
private void storeStructureIfChanged(CachedOutput p_236394_, SnbtToNbt.TaskResult p_236395_, Path p_236396_)
```

**Parameters:**

- `p_236394_` (`CachedOutput`)
- `p_236395_` (`SnbtToNbt.TaskResult`)
- `p_236396_` (`Path`)

**Returns:** `private void`

### apply

```java
CompoundTag apply(String p_126480_, CompoundTag p_126481_)
```

**Parameters:**

- `p_126480_` (`String`)
- `p_126481_` (`CompoundTag`)

**Returns:** `CompoundTag`

### StructureConversionException

```java
public StructureConversionException(Path p_176820_, Throwable p_176821_)
```

**Parameters:**

- `p_176820_` (`Path`)
- `p_176821_` (`Throwable`)

**Returns:** `public`

### TaskResult

```java
static record TaskResult(String name, byte[] payload, HashCode hash)
```

**Parameters:**

- `name` (`String`)
- `payload` (`byte[]`)
- `hash` (`HashCode`)

**Returns:** `static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Filter` | interface |  |
