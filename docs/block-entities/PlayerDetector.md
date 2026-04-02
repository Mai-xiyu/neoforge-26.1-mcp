# PlayerDetector

**Package:** `net.minecraft.world.level.block.entity.trialspawner`
**Type:** interface

## Methods

### detect

```java
List<UUID> detect(ServerLevel p_312124_, PlayerDetector.EntitySelector p_323893_, BlockPos p_312149_, double p_324310_, boolean p_338443_)
```

**Parameters:**

- `p_312124_` (`ServerLevel`)
- `p_323893_` (`PlayerDetector.EntitySelector`)
- `p_312149_` (`BlockPos`)
- `p_324310_` (`double`)
- `p_338443_` (`boolean`)

**Returns:** `List<UUID>`

### inLineOfSight

```java
private static boolean inLineOfSight(Level p_338760_, Vec3 p_338259_, Vec3 p_338810_)
```

**Parameters:**

- `p_338760_` (`Level`)
- `p_338259_` (`Vec3`)
- `p_338810_` (`Vec3`)

**Returns:** `private static boolean`

### getPlayers

```java
public List<ServerPlayer> getPlayers(ServerLevel p_323695_, Predicate<? super Player> p_324206_)
```

**Parameters:**

- `p_323695_` (`ServerLevel`)
- `p_324206_` (`Predicate<? super Player>`)

**Returns:** `List<ServerPlayer>`

### getEntities

```java
public <T extends Entity> List<T> getEntities(ServerLevel p_324491_, EntityTypeTest<Entity, T> p_323728_, AABB p_324572_, Predicate<? super T> p_323881_)
```

**Parameters:**

- `p_324491_` (`ServerLevel`)
- `p_323728_` (`EntityTypeTest<Entity, T>`)
- `p_324572_` (`AABB`)
- `p_323881_` (`Predicate<? super T>`)

**Returns:** `List<T>`

### getPlayers

```java
List<? extends Player> getPlayers(ServerLevel p_323807_, Predicate<? super Player> p_324034_)
```

**Parameters:**

- `p_323807_` (`ServerLevel`)
- `p_324034_` (`Predicate<? super Player>`)

**Returns:** `List<? extends Player>`

### getEntities

```java
<T extends Entity> <T extends Entity> List<T> getEntities(ServerLevel p_324233_, EntityTypeTest<Entity, T> p_324216_, AABB p_324151_, Predicate<? super T> p_323700_)
```

**Parameters:**

- `p_324233_` (`ServerLevel`)
- `p_324216_` (`EntityTypeTest<Entity, T>`)
- `p_324151_` (`AABB`)
- `p_323700_` (`Predicate<? super T>`)

**Returns:** `<T extends Entity> List<T>`

### onlySelectPlayer

```java
static PlayerDetector.EntitySelector onlySelectPlayer(Player p_324540_)
```

**Parameters:**

- `p_324540_` (`Player`)

**Returns:** `static PlayerDetector.EntitySelector`

### onlySelectPlayers

```java
static PlayerDetector.EntitySelector onlySelectPlayers(List<Player> p_323995_)
```

**Parameters:**

- `p_323995_` (`List<Player>`)

**Returns:** `static PlayerDetector.EntitySelector`

### getPlayers

```java
public List<Player> getPlayers(ServerLevel p_323585_, Predicate<? super Player> p_323950_)
```

**Parameters:**

- `p_323585_` (`ServerLevel`)
- `p_323950_` (`Predicate<? super Player>`)

**Returns:** `List<Player>`

### getEntities

```java
public <T extends Entity> List<T> getEntities(ServerLevel p_324352_, EntityTypeTest<Entity, T> p_323526_, AABB p_324544_, Predicate<? super T> p_323570_)
```

**Parameters:**

- `p_324352_` (`ServerLevel`)
- `p_323526_` (`EntityTypeTest<Entity, T>`)
- `p_324544_` (`AABB`)
- `p_323570_` (`Predicate<? super T>`)

**Returns:** `List<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntitySelector` | interface |  |
