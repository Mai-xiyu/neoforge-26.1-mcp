# TransientEntitySectionManager

**Package:** `net.minecraft.world.level.entity`
**Type:** class<T extends EntityAccess>

## Methods

### TransientEntitySectionManager

```java
public TransientEntitySectionManager(Class<T> p_157643_, LevelCallback<T> p_157644_)
```

**Parameters:**

- `p_157643_` (`Class<T>`)
- `p_157644_` (`LevelCallback<T>`)

**Returns:** `public`

### startTicking

```java
public void startTicking(ChunkPos p_157652_)
```

**Parameters:**

- `p_157652_` (`ChunkPos`)

**Returns:** `public void`

### stopTicking

```java
public void stopTicking(ChunkPos p_157659_)
```

**Parameters:**

- `p_157659_` (`ChunkPos`)

**Returns:** `public void`

### getEntityGetter

```java
public LevelEntityGetter<T> getEntityGetter()
```

**Returns:** `public LevelEntityGetter<T>`

### addEntity

```java
public void addEntity(T p_157654_)
```

**Parameters:**

- `p_157654_` (`T`)

**Returns:** `public void`

### count

```java
public int count()
```

**Returns:** `int`

### removeSectionIfEmpty

```java
void removeSectionIfEmpty(long p_157649_, EntitySection<T> p_157650_)
```

**Parameters:**

- `p_157649_` (`long`)
- `p_157650_` (`EntitySection<T>`)

### gatherStats

```java
public String gatherStats()
```

**Returns:** `String`

### Callback

```java
 Callback(T p_157673_, long p_157674_, EntitySection<T> p_157675_)
```

**Parameters:**

- `p_157673_` (`T`)
- `p_157674_` (`long`)
- `p_157675_` (`EntitySection<T>`)

**Returns:** ``

### onMove

```java
public void onMove()
```

### onRemove

```java
public void onRemove(Entity.RemovalReason p_157678_)
```

**Parameters:**

- `p_157678_` (`Entity.RemovalReason`)
