# EntitySectionStorage

**Package:** `net.minecraft.world.level.entity`
**Type:** class<T extends EntityAccess>

## Methods

### EntitySectionStorage

```java
public EntitySectionStorage(Class<T> p_156855_, Long2ObjectFunction<Visibility> p_156856_)
```

**Parameters:**

- `p_156855_` (`Class<T>`)
- `p_156856_` (`Long2ObjectFunction<Visibility>`)

**Returns:** `public`

### forEachAccessibleNonEmptySection

```java
public void forEachAccessibleNonEmptySection(AABB p_188363_, AbortableIterationConsumer<EntitySection<T>> p_261588_)
```

**Parameters:**

- `p_188363_` (`AABB`)
- `p_261588_` (`AbortableIterationConsumer<EntitySection<T>>`)

**Returns:** `public void`

### getExistingSectionPositionsInChunk

```java
public LongStream getExistingSectionPositionsInChunk(long p_156862_)
```

**Parameters:**

- `p_156862_` (`long`)

**Returns:** `public LongStream`

### getChunkSections

```java
private LongSortedSet getChunkSections(int p_156859_, int p_156860_)
```

**Parameters:**

- `p_156859_` (`int`)
- `p_156860_` (`int`)

**Returns:** `private LongSortedSet`

### getExistingSectionsInChunk

```java
public Stream<EntitySection<T>> getExistingSectionsInChunk(long p_156889_)
```

**Parameters:**

- `p_156889_` (`long`)

**Returns:** `public Stream<EntitySection<T>>`

### getChunkKeyFromSectionKey

```java
private static long getChunkKeyFromSectionKey(long p_156900_)
```

**Parameters:**

- `p_156900_` (`long`)

**Returns:** `private static long`

### getOrCreateSection

```java
public EntitySection<T> getOrCreateSection(long p_156894_)
```

**Parameters:**

- `p_156894_` (`long`)

**Returns:** `public EntitySection<T>`

### getSection

```java
public EntitySection<T> getSection(long p_156896_)
```

**Parameters:**

- `p_156896_` (`long`)

**Returns:** `EntitySection<T>`

### createSection

```java
private EntitySection<T> createSection(long p_156902_)
```

**Parameters:**

- `p_156902_` (`long`)

**Returns:** `private EntitySection<T>`

### getAllChunksWithExistingSections

```java
public LongSet getAllChunksWithExistingSections()
```

**Returns:** `public LongSet`

### getEntities

```java
public void getEntities(AABB p_261820_, AbortableIterationConsumer<T> p_261992_)
```

**Parameters:**

- `p_261820_` (`AABB`)
- `p_261992_` (`AbortableIterationConsumer<T>`)

**Returns:** `public void`

### getEntities

```java
<U extends T> public <U extends T> void getEntities(EntityTypeTest<T, U> p_261630_, AABB p_261843_, AbortableIterationConsumer<U> p_261742_)
```

**Parameters:**

- `p_261630_` (`EntityTypeTest<T, U>`)
- `p_261843_` (`AABB`)
- `p_261742_` (`AbortableIterationConsumer<U>`)

**Returns:** `public <U extends T> void`

### remove

```java
public void remove(long p_156898_)
```

**Parameters:**

- `p_156898_` (`long`)

**Returns:** `public void`

### count

```java
public int count()
```

**Returns:** `int`
