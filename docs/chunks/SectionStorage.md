# SectionStorage

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class<R>
**Implements:** `AutoCloseable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `levelHeightAccessor` | `LevelHeightAccessor` |  |

## Methods

### SectionStorage

```java
public SectionStorage(SimpleRegionStorage p_321814_, Function<Runnable, Codec<R>> p_223510_, Function<Runnable, R> p_223511_, RegistryAccess p_223515_, ChunkIOErrorReporter p_352357_, LevelHeightAccessor p_223516_)
```

**Parameters:**

- `p_321814_` (`SimpleRegionStorage`)
- `p_223510_` (`Function<Runnable, Codec<R>>`)
- `p_223511_` (`Function<Runnable, R>`)
- `p_223515_` (`RegistryAccess`)
- `p_352357_` (`ChunkIOErrorReporter`)
- `p_223516_` (`LevelHeightAccessor`)

**Returns:** `public`

### tick

```java
protected void tick(BooleanSupplier p_63812_)
```

**Parameters:**

- `p_63812_` (`BooleanSupplier`)

**Returns:** `protected void`

### hasWork

```java
public boolean hasWork()
```

**Returns:** `public boolean`

### get

```java
protected Optional<R> get(long p_63819_)
```

**Parameters:**

- `p_63819_` (`long`)

**Returns:** `Optional<R>`

### getOrLoad

```java
protected Optional<R> getOrLoad(long p_63824_)
```

**Parameters:**

- `p_63824_` (`long`)

**Returns:** `protected Optional<R>`

### outsideStoredRange

```java
protected boolean outsideStoredRange(long p_156631_)
```

**Parameters:**

- `p_156631_` (`long`)

**Returns:** `protected boolean`

### getOrCreate

```java
protected R getOrCreate(long p_63828_)
```

**Parameters:**

- `p_63828_` (`long`)

**Returns:** `protected R`

### readColumn

```java
private void readColumn(ChunkPos p_63815_)
```

**Parameters:**

- `p_63815_` (`ChunkPos`)

**Returns:** `private void`

### tryRead

```java
private CompletableFuture<Optional<CompoundTag>> tryRead(ChunkPos p_223533_)
```

**Parameters:**

- `p_223533_` (`ChunkPos`)

**Returns:** `private CompletableFuture<Optional<CompoundTag>>`

### CompletionException

```java
throw new CompletionException()
```

**Returns:** `throw new`

### readColumn

```java
private void readColumn(ChunkPos p_63802_, RegistryOps<Tag> p_321830_, CompoundTag p_321530_)
```

**Parameters:**

- `p_63802_` (`ChunkPos`)
- `p_321830_` (`RegistryOps<Tag>`)
- `p_321530_` (`CompoundTag`)

**Returns:** `private void`

### writeColumn

```java
private void writeColumn(ChunkPos p_63826_)
```

**Parameters:**

- `p_63826_` (`ChunkPos`)

**Returns:** `private void`

### writeColumn

```java
<T> private <T> Dynamic<T> writeColumn(ChunkPos p_63799_, DynamicOps<T> p_63800_)
```

**Parameters:**

- `p_63799_` (`ChunkPos`)
- `p_63800_` (`DynamicOps<T>`)

**Returns:** `private <T> Dynamic<T>`

### getKey

```java
private static long getKey(ChunkPos p_156628_, int p_156629_)
```

**Parameters:**

- `p_156628_` (`ChunkPos`)
- `p_156629_` (`int`)

**Returns:** `private static long`

### onSectionLoad

```java
protected void onSectionLoad(long p_63813_)
```

**Parameters:**

- `p_63813_` (`long`)

**Returns:** `protected void`

### setDirty

```java
protected void setDirty(long p_63788_)
```

**Parameters:**

- `p_63788_` (`long`)

**Returns:** `protected void`

### getVersion

```java
private static int getVersion(Dynamic<?> p_63806_)
```

**Parameters:**

- `p_63806_` (`Dynamic<?>`)

**Returns:** `private static int`

### flush

```java
public void flush(ChunkPos p_63797_)
```

**Parameters:**

- `p_63797_` (`ChunkPos`)

**Returns:** `public void`

### close

```java
public void close()
```

### remove

```java
public void remove(long sectionPosAsLong)
```

**Parameters:**

- `sectionPosAsLong` (`long`)
