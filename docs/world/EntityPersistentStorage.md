# EntityPersistentStorage

**Package:** `net.minecraft.world.level.entity`
**Type:** interface<T>
**Extends:** `AutoCloseable`

## Methods

### loadEntities

```java
CompletableFuture<ChunkEntities<T>> loadEntities(ChunkPos p_156824_)
```

**Parameters:**

- `p_156824_` (`ChunkPos`)

**Returns:** `CompletableFuture<ChunkEntities<T>>`

### storeEntities

```java
void storeEntities(ChunkEntities<T> p_156825_)
```

**Parameters:**

- `p_156825_` (`ChunkEntities<T>`)

### flush

```java
void flush(boolean p_182503_)
```

**Parameters:**

- `p_182503_` (`boolean`)

### close

```java
default void close()
```
