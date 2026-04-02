# NearestVisibleLivingEntities

**Package:** `net.minecraft.world.entity.ai.memory`
**Type:** class

## Methods

### NearestVisibleLivingEntities

```java
private NearestVisibleLivingEntities()
```

**Returns:** `private`

### NearestVisibleLivingEntities

```java
public NearestVisibleLivingEntities(LivingEntity p_186104_, List<LivingEntity> p_186105_)
```

**Parameters:**

- `p_186104_` (`LivingEntity`)
- `p_186105_` (`List<LivingEntity>`)

**Returns:** `public`

### empty

```java
public static NearestVisibleLivingEntities empty()
```

**Returns:** `public static NearestVisibleLivingEntities`

### findClosest

```java
public Optional<LivingEntity> findClosest(Predicate<LivingEntity> p_186117_)
```

**Parameters:**

- `p_186117_` (`Predicate<LivingEntity>`)

**Returns:** `public Optional<LivingEntity>`

### findAll

```java
public Iterable<LivingEntity> findAll(Predicate<LivingEntity> p_186124_)
```

**Parameters:**

- `p_186124_` (`Predicate<LivingEntity>`)

**Returns:** `public Iterable<LivingEntity>`

### find

```java
public Stream<LivingEntity> find(Predicate<LivingEntity> p_186129_)
```

**Parameters:**

- `p_186129_` (`Predicate<LivingEntity>`)

**Returns:** `public Stream<LivingEntity>`

### contains

```java
public boolean contains(LivingEntity p_186108_)
```

**Parameters:**

- `p_186108_` (`LivingEntity`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(Predicate<LivingEntity> p_186131_)
```

**Parameters:**

- `p_186131_` (`Predicate<LivingEntity>`)

**Returns:** `public boolean`
