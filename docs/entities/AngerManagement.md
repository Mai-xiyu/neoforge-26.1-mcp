# AngerManagement

**Package:** `net.minecraft.world.entity.monster.warden`
**Type:** class

## Methods

### codec

```java
public static Codec<AngerManagement> codec(Predicate<Entity> p_219278_)
```

**Parameters:**

- `p_219278_` (`Predicate<Entity>`)

**Returns:** `public static Codec<AngerManagement>`

### AngerManagement

```java
public AngerManagement(Predicate<Entity> p_219254_, List<Pair<UUID, Integer>> p_219255_)
```

**Parameters:**

- `p_219254_` (`Predicate<Entity>`)
- `p_219255_` (`List<Pair<UUID, Integer>>`)

**Returns:** `public`

### createUuidAngerPairs

```java
private List<Pair<UUID, Integer>> createUuidAngerPairs()
```

**Returns:** `private List<Pair<UUID, Integer>>`

### tick

```java
public void tick(ServerLevel p_219264_, Predicate<Entity> p_219265_)
```

**Parameters:**

- `p_219264_` (`ServerLevel`)
- `p_219265_` (`Predicate<Entity>`)

**Returns:** `public void`

### sortAndUpdateHighestAnger

```java
private void sortAndUpdateHighestAnger()
```

**Returns:** `private void`

### convertFromUuids

```java
private void convertFromUuids(ServerLevel p_219262_)
```

**Parameters:**

- `p_219262_` (`ServerLevel`)

**Returns:** `private void`

### increaseAnger

```java
public int increaseAnger(Entity p_219269_, int p_219270_)
```

**Parameters:**

- `p_219269_` (`Entity`)
- `p_219270_` (`int`)

**Returns:** `public int`

### clearAnger

```java
public void clearAnger(Entity p_219267_)
```

**Parameters:**

- `p_219267_` (`Entity`)

**Returns:** `public void`

### getActiveAnger

```java
public int getActiveAnger(Entity p_219287_)
```

**Parameters:**

- `p_219287_` (`Entity`)

**Returns:** `public int`

### getActiveEntity

```java
public Optional<LivingEntity> getActiveEntity()
```

**Returns:** `public Optional<LivingEntity>`

### compare

```java
public int compare(Entity p_219303_, Entity p_219304_)
```

**Parameters:**

- `p_219303_` (`Entity`)
- `p_219304_` (`Entity`)

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Sorter` | record |  |
