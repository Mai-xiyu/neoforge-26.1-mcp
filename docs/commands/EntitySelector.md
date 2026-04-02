# EntitySelector

**Package:** `net.minecraft.commands.arguments.selector`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INFINITE` | `int` |  |
| `ORDER_ARBITRARY` | `BiConsumer<Vec3, List<? extends Entity>>` |  |

## Methods

### tryCast

```java
public Entity tryCast(Entity p_175109_)
```

**Parameters:**

- `p_175109_` (`Entity`)

**Returns:** `public Entity`

### getBaseClass

```java
public Class<? extends Entity> getBaseClass()
```

**Returns:** `Class<? extends Entity>`

### EntitySelector

```java
public EntitySelector(int p_121125_, boolean p_121126_, boolean p_121127_, List<Predicate<Entity>> p_352913_, MinMaxBounds.Doubles p_121129_, Function<Vec3, Vec3> p_121130_, AABB p_121131_, BiConsumer<Vec3, List<? extends Entity>> p_121132_, boolean p_121133_, String p_121134_, UUID p_121135_, EntityType<?> p_121136_, boolean p_121137_)
```

**Parameters:**

- `p_121125_` (`int`)
- `p_121126_` (`boolean`)
- `p_121127_` (`boolean`)
- `p_352913_` (`List<Predicate<Entity>>`)
- `p_121129_` (`MinMaxBounds.Doubles`)
- `p_121130_` (`Function<Vec3, Vec3>`)
- `p_121131_` (`AABB`)
- `p_121132_` (`BiConsumer<Vec3, List<? extends Entity>>`)
- `p_121133_` (`boolean`)
- `p_121134_` (`String`)
- `p_121135_` (`UUID`)
- `p_121136_` (`EntityType<?>`)
- `p_121137_` (`boolean`)

**Returns:** `public`

### getMaxResults

```java
public int getMaxResults()
```

**Returns:** `public int`

### includesEntities

```java
public boolean includesEntities()
```

**Returns:** `public boolean`

### isSelfSelector

```java
public boolean isSelfSelector()
```

**Returns:** `public boolean`

### isWorldLimited

```java
public boolean isWorldLimited()
```

**Returns:** `public boolean`

### usesSelector

```java
public boolean usesSelector()
```

**Returns:** `public boolean`

### checkPermissions

```java
private void checkPermissions(CommandSourceStack p_121169_)
```

**Parameters:**

- `p_121169_` (`CommandSourceStack`)

**Returns:** `private void`

### findSingleEntity

```java
public Entity findSingleEntity(CommandSourceStack p_121140_)
```

**Parameters:**

- `p_121140_` (`CommandSourceStack`)

**Returns:** `public Entity`

### findEntities

```java
public List<? extends Entity> findEntities(CommandSourceStack p_121161_)
```

**Parameters:**

- `p_121161_` (`CommandSourceStack`)

**Returns:** `public List<? extends Entity>`

### addEntities

```java
private void addEntities(List<Entity> p_121155_, ServerLevel p_121156_, AABB p_352947_, Predicate<Entity> p_121158_)
```

**Parameters:**

- `p_121155_` (`List<Entity>`)
- `p_121156_` (`ServerLevel`)
- `p_352947_` (`AABB`)
- `p_121158_` (`Predicate<Entity>`)

**Returns:** `private void`

### getResultLimit

```java
private int getResultLimit()
```

**Returns:** `private int`

### findSinglePlayer

```java
public ServerPlayer findSinglePlayer(CommandSourceStack p_121164_)
```

**Parameters:**

- `p_121164_` (`CommandSourceStack`)

**Returns:** `public ServerPlayer`

### findPlayers

```java
public List<ServerPlayer> findPlayers(CommandSourceStack p_121167_)
```

**Parameters:**

- `p_121167_` (`CommandSourceStack`)

**Returns:** `public List<ServerPlayer>`

### getPredicate

```java
private Predicate<Entity> getPredicate(Vec3 p_121145_, AABB p_352908_, FeatureFlagSet p_352911_)
```

**Parameters:**

- `p_121145_` (`Vec3`)
- `p_352908_` (`AABB`)
- `p_352911_` (`FeatureFlagSet`)

**Returns:** `private Predicate<Entity>`

### sortAndLimit

```java
<T extends Entity> private <T extends Entity> List<T> sortAndLimit(Vec3 p_121150_, List<T> p_121151_)
```

**Parameters:**

- `p_121150_` (`Vec3`)
- `p_121151_` (`List<T>`)

**Returns:** `private <T extends Entity> List<T>`

### joinNames

```java
public static Component joinNames(List<? extends Entity> p_175104_)
```

**Parameters:**

- `p_175104_` (`List<? extends Entity>`)

**Returns:** `public static Component`
