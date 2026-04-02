# CapabilityListenerHolder

**Package:** `net.neoforged.neoforge.capabilities`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### invalidatePos

```java
public void invalidatePos(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

### invalidateList

```java
 invalidateList()
```

**Returns:** ``

### invalidateChunk

```java
public void invalidateChunk(ChunkPos chunkPos)
```

**Parameters:**

- `chunkPos` (`ChunkPos`)

### invalidateList

```java
 invalidateList()
```

**Returns:** ``

### invalidateList

```java
private void invalidateList(Set<ListenerReference> caches)
```

**Parameters:**

- `caches` (`Set<ListenerReference>`)

**Returns:** `private void`

### clean

```java
public void clean()
```

### ListenerReference

```java
private ListenerReference(ReferenceQueue<ICapabilityInvalidationListener> queue, BlockPos pos, ICapabilityInvalidationListener listener)
```

**Parameters:**

- `queue` (`ReferenceQueue<ICapabilityInvalidationListener>`)
- `pos` (`BlockPos`)
- `listener` (`ICapabilityInvalidationListener`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
