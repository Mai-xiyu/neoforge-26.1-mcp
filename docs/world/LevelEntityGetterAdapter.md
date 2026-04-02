# LevelEntityGetterAdapter

**Package:** `net.minecraft.world.level.entity`
**Type:** class<T extends EntityAccess> implements LevelEntityGetter<T>

## Methods

### LevelEntityGetterAdapter

```java
public LevelEntityGetterAdapter(EntityLookup<T> p_156943_, EntitySectionStorage<T> p_156944_)
```

**Parameters:**

- `p_156943_` (`EntityLookup<T>`)
- `p_156944_` (`EntitySectionStorage<T>`)

**Returns:** `public`

### get

```java
public T get(int p_156947_)
```

**Parameters:**

- `p_156947_` (`int`)

**Returns:** `T`

### get

```java
public T get(UUID p_156959_)
```

**Parameters:**

- `p_156959_` (`UUID`)

**Returns:** `T`

### getAll

```java
public Iterable<T> getAll()
```

**Returns:** `Iterable<T>`

### get

```java
public <U extends T> void get(EntityTypeTest<T, U> p_261718_, AbortableIterationConsumer<U> p_262009_)
```

**Parameters:**

- `p_261718_` (`EntityTypeTest<T, U>`)
- `p_262009_` (`AbortableIterationConsumer<U>`)

### get

```java
public void get(AABB p_156956_, Consumer<T> p_156957_)
```

**Parameters:**

- `p_156956_` (`AABB`)
- `p_156957_` (`Consumer<T>`)

### get

```java
public <U extends T> void get(EntityTypeTest<T, U> p_261696_, AABB p_261693_, AbortableIterationConsumer<U> p_261719_)
```

**Parameters:**

- `p_261696_` (`EntityTypeTest<T, U>`)
- `p_261693_` (`AABB`)
- `p_261719_` (`AbortableIterationConsumer<U>`)
