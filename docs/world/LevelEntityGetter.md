# LevelEntityGetter

**Package:** `net.minecraft.world.level.entity`
**Type:** interface<T extends EntityAccess>

## Methods

### get

```java
T get(int p_156931_)
```

**Parameters:**

- `p_156931_` (`int`)

**Returns:** `T`

### get

```java
T get(UUID p_156939_)
```

**Parameters:**

- `p_156939_` (`UUID`)

**Returns:** `T`

### getAll

```java
Iterable<T> getAll()
```

**Returns:** `Iterable<T>`

### get

```java
<U extends T> <U extends T> void get(EntityTypeTest<T, U> p_156935_, AbortableIterationConsumer<U> p_261602_)
```

**Parameters:**

- `p_156935_` (`EntityTypeTest<T, U>`)
- `p_261602_` (`AbortableIterationConsumer<U>`)

**Returns:** `<U extends T> void`

### get

```java
void get(AABB p_156937_, Consumer<T> p_156938_)
```

**Parameters:**

- `p_156937_` (`AABB`)
- `p_156938_` (`Consumer<T>`)

### get

```java
<U extends T> <U extends T> void get(EntityTypeTest<T, U> p_156932_, AABB p_156933_, AbortableIterationConsumer<U> p_261542_)
```

**Parameters:**

- `p_156932_` (`EntityTypeTest<T, U>`)
- `p_156933_` (`AABB`)
- `p_261542_` (`AbortableIterationConsumer<U>`)

**Returns:** `<U extends T> void`
