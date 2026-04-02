# EntitySection

**Package:** `net.minecraft.world.level.entity`
**Type:** class<T extends EntityAccess>

## Methods

### EntitySection

```java
public EntitySection(Class<T> p_156831_, Visibility p_156832_)
```

**Parameters:**

- `p_156831_` (`Class<T>`)
- `p_156832_` (`Visibility`)

**Returns:** `public`

### add

```java
public void add(T p_188347_)
```

**Parameters:**

- `p_188347_` (`T`)

**Returns:** `public void`

### remove

```java
public boolean remove(T p_188356_)
```

**Parameters:**

- `p_188356_` (`T`)

**Returns:** `public boolean`

### getEntities

```java
public AbortableIterationConsumer.Continuation getEntities(AABB p_262016_, AbortableIterationConsumer<T> p_261863_)
```

**Parameters:**

- `p_262016_` (`AABB`)
- `p_261863_` (`AbortableIterationConsumer<T>`)

**Returns:** `public AbortableIterationConsumer.Continuation`

### getEntities

```java
<U extends T> public <U extends T> AbortableIterationConsumer.Continuation getEntities(EntityTypeTest<T, U> p_188349_, AABB p_188350_, AbortableIterationConsumer<? super U> p_261535_)
```

**Parameters:**

- `p_188349_` (`EntityTypeTest<T, U>`)
- `p_188350_` (`AABB`)
- `p_261535_` (`AbortableIterationConsumer<? super U>`)

**Returns:** `public <U extends T> AbortableIterationConsumer.Continuation`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getEntities

```java
public Stream<T> getEntities()
```

**Returns:** `public Stream<T>`

### getStatus

```java
public Visibility getStatus()
```

**Returns:** `public Visibility`

### updateChunkStatus

```java
public Visibility updateChunkStatus(Visibility p_156839_)
```

**Parameters:**

- `p_156839_` (`Visibility`)

**Returns:** `public Visibility`

### size

```java
public int size()
```

**Returns:** `int`
