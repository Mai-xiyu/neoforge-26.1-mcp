# ModelDataManager

**Package:** `net.neoforged.neoforge.model.data`
**Type:** class
**Annotations:** `@EventBusSubscriber(modid = "neoforge", value = Dist.CLIENT)`

## Description

A manager for the lifecycle of all the `ModelData` instances in a `Level`.
Users should not instantiate this unless they know what they are doing. The manager is also not thread-safe,
it should only be interacted with on the main client thread.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY_SNAPSHOT` | `Long2ObjectFunction<ModelData>` |  |

## Methods

### ModelDataManager

```java
public ModelDataManager(Level level)
```

**Parameters:**

- `level` (`Level`)

**Returns:** `public`

### requestRefresh

```java
public void requestRefresh(BlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`BlockEntity`)

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot request ModelData refresh outside the owning thread: " + owningThread)
```

**Parameters:**

- `owningThread` (`"Cannot request ModelData refresh outside the owning thread: " +`)

**Returns:** `throw new`

### getAt

```java
public Long2ObjectMap<ModelData> getAt(SectionPos pos)
```

**Parameters:**

- `pos` (`SectionPos`)

**Returns:** `Long2ObjectMap<ModelData>`

### refreshAt

```java
 refreshAt()
```

**Returns:** ``

### getAt

```java
public ModelData getAt(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

**Returns:** `ModelData`

### refreshAt

```java
 refreshAt()
```

**Returns:** ``

### snapshotSectionRegion

```java
public Long2ObjectFunction<ModelData> snapshotSectionRegion(int sectionMinX, int sectionMinY, int sectionMinZ, int sectionMaxX, int sectionMaxY, int sectionMaxZ)
```

**Parameters:**

- `sectionMinX` (`int`)
- `sectionMinY` (`int`)
- `sectionMinZ` (`int`)
- `sectionMaxX` (`int`)
- `sectionMaxY` (`int`)
- `sectionMaxZ` (`int`)

**Returns:** `Long2ObjectFunction<ModelData>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot snapshot active manager outside the owning thread: " + owningThread)
```

**Parameters:**

- `owningThread` (`"Cannot snapshot active manager outside the owning thread: " +`)

**Returns:** `throw new`

### refreshAt

```java
 refreshAt()
```

**Returns:** ``

### refreshAt

```java
private void refreshAt(long section)
```

**Parameters:**

- `section` (`long`)

**Returns:** `private void`

### isOtherThread

```java
private boolean isOtherThread()
```

**Returns:** `private boolean`

### onChunkUnload

```java
public static void onChunkUnload(ChunkEvent.Unload event)
```

**Parameters:**

- `event` (`ChunkEvent.Unload`)
