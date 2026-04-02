# BlockTintCache

**Package:** `net.minecraft.client.color.block`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BlockTintCache

```java
public BlockTintCache(ToIntFunction<BlockPos> p_193811_)
```

**Parameters:**

- `p_193811_` (`ToIntFunction<BlockPos>`)

**Returns:** `public`

### getColor

```java
public int getColor(BlockPos p_193813_)
```

**Parameters:**

- `p_193813_` (`BlockPos`)

**Returns:** `public int`

### invalidateForChunk

```java
public void invalidateForChunk(int p_92656_, int p_92657_)
```

**Parameters:**

- `p_92656_` (`int`)
- `p_92657_` (`int`)

**Returns:** `public void`

### invalidateAll

```java
public void invalidateAll()
```

**Returns:** `public void`

### findOrCreateChunkCache

```java
private BlockTintCache.CacheData findOrCreateChunkCache(int p_193815_, int p_193816_)
```

**Parameters:**

- `p_193815_` (`int`)
- `p_193816_` (`int`)

**Returns:** `private BlockTintCache.CacheData`

### getLayer

```java
public int[] getLayer(int p_193824_)
```

**Parameters:**

- `p_193824_` (`int`)

**Returns:** `public int[]`

### allocateLayer

```java
private int[] allocateLayer()
```

**Returns:** `private int[]`

### isInvalidated

```java
public boolean isInvalidated()
```

**Returns:** `public boolean`

### invalidate

```java
public void invalidate()
```

**Returns:** `public void`

### LatestCacheInfo

```java
private LatestCacheInfo()
```

**Returns:** `private`
