# EntityGetter

**Package:** `net.minecraft.world.level`
**Type:** interface

## Methods

### getEntities

```java
List<Entity> getEntities(Entity p_45936_, AABB p_45937_, Predicate<? super Entity> p_45938_)
```

**Parameters:**

- `p_45936_` (`Entity`)
- `p_45937_` (`AABB`)
- `p_45938_` (`Predicate<? super Entity>`)

**Returns:** `List<Entity>`

### getEntities

```java
<T extends Entity> <T extends Entity> List<T> getEntities(EntityTypeTest<Entity, T> p_151464_, AABB p_151465_, Predicate<? super T> p_151466_)
```

**Parameters:**

- `p_151464_` (`EntityTypeTest<Entity, T>`)
- `p_151465_` (`AABB`)
- `p_151466_` (`Predicate<? super T>`)

**Returns:** `<T extends Entity> List<T>`

### getEntitiesOfClass

```java
<T extends Entity> default <T extends Entity> List<T> getEntitiesOfClass(Class<T> p_45979_, AABB p_45980_, Predicate<? super T> p_45981_)
```

**Parameters:**

- `p_45979_` (`Class<T>`)
- `p_45980_` (`AABB`)
- `p_45981_` (`Predicate<? super T>`)

**Returns:** `default <T extends Entity> List<T>`

### players

```java
List<? extends Player> players()
```

**Returns:** `List<? extends Player>`

### getEntities

```java
default List<Entity> getEntities(Entity p_45934_, AABB p_45935_)
```

**Parameters:**

- `p_45934_` (`Entity`)
- `p_45935_` (`AABB`)

**Returns:** `default List<Entity>`

### isUnobstructed

```java
default boolean isUnobstructed(Entity p_45939_, VoxelShape p_45940_)
```

**Parameters:**

- `p_45939_` (`Entity`)
- `p_45940_` (`VoxelShape`)

**Returns:** `default boolean`

### getEntitiesOfClass

```java
<T extends Entity> default <T extends Entity> List<T> getEntitiesOfClass(Class<T> p_45977_, AABB p_45978_)
```

**Parameters:**

- `p_45977_` (`Class<T>`)
- `p_45978_` (`AABB`)

**Returns:** `default <T extends Entity> List<T>`

### getEntityCollisions

```java
default List<VoxelShape> getEntityCollisions(Entity p_186451_, AABB p_186452_)
```

**Parameters:**

- `p_186451_` (`Entity`)
- `p_186452_` (`AABB`)

**Returns:** `default List<VoxelShape>`

### getNearestPlayer

```java
default Player getNearestPlayer(double p_45919_, double p_45920_, double p_45921_, double p_45922_, Predicate<Entity> p_45923_)
```

**Parameters:**

- `p_45919_` (`double`)
- `p_45920_` (`double`)
- `p_45921_` (`double`)
- `p_45922_` (`double`)
- `p_45923_` (`Predicate<Entity>`)

**Returns:** `Player`

### getNearestPlayer

```java
default Player getNearestPlayer(Entity p_45931_, double p_45932_)
```

**Parameters:**

- `p_45931_` (`Entity`)
- `p_45932_` (`double`)

**Returns:** `Player`

### getNearestPlayer

```java
default Player getNearestPlayer(double p_45925_, double p_45926_, double p_45927_, double p_45928_, boolean p_45929_)
```

**Parameters:**

- `p_45925_` (`double`)
- `p_45926_` (`double`)
- `p_45927_` (`double`)
- `p_45928_` (`double`)
- `p_45929_` (`boolean`)

**Returns:** `Player`

### hasNearbyAlivePlayer

```java
default boolean hasNearbyAlivePlayer(double p_45915_, double p_45916_, double p_45917_, double p_45918_)
```

**Parameters:**

- `p_45915_` (`double`)
- `p_45916_` (`double`)
- `p_45917_` (`double`)
- `p_45918_` (`double`)

**Returns:** `default boolean`

### getNearestPlayer

```java
default Player getNearestPlayer(TargetingConditions p_45947_, LivingEntity p_45948_)
```

**Parameters:**

- `p_45947_` (`TargetingConditions`)
- `p_45948_` (`LivingEntity`)

**Returns:** `Player`

### getNearestPlayer

```java
default Player getNearestPlayer(TargetingConditions p_45950_, LivingEntity p_45951_, double p_45952_, double p_45953_, double p_45954_)
```

**Parameters:**

- `p_45950_` (`TargetingConditions`)
- `p_45951_` (`LivingEntity`)
- `p_45952_` (`double`)
- `p_45953_` (`double`)
- `p_45954_` (`double`)

**Returns:** `Player`

### getNearestPlayer

```java
default Player getNearestPlayer(TargetingConditions p_45942_, double p_45943_, double p_45944_, double p_45945_)
```

**Parameters:**

- `p_45942_` (`TargetingConditions`)
- `p_45943_` (`double`)
- `p_45944_` (`double`)
- `p_45945_` (`double`)

**Returns:** `Player`

### getNearestEntity

```java
default <T extends LivingEntity> T getNearestEntity(Class<? extends T> p_45964_, TargetingConditions p_45965_, LivingEntity p_45966_, double p_45967_, double p_45968_, double p_45969_, AABB p_45970_)
```

**Parameters:**

- `p_45964_` (`Class<? extends T>`)
- `p_45965_` (`TargetingConditions`)
- `p_45966_` (`LivingEntity`)
- `p_45967_` (`double`)
- `p_45968_` (`double`)
- `p_45969_` (`double`)
- `p_45970_` (`AABB`)

**Returns:** `T`

### getNearestEntity

```java
default <T extends LivingEntity> T getNearestEntity(List<? extends T> p_45983_, TargetingConditions p_45984_, LivingEntity p_45985_, double p_45986_, double p_45987_, double p_45988_)
```

**Parameters:**

- `p_45983_` (`List<? extends T>`)
- `p_45984_` (`TargetingConditions`)
- `p_45985_` (`LivingEntity`)
- `p_45986_` (`double`)
- `p_45987_` (`double`)
- `p_45988_` (`double`)

**Returns:** `T`

### getNearbyPlayers

```java
default List<Player> getNearbyPlayers(TargetingConditions p_45956_, LivingEntity p_45957_, AABB p_45958_)
```

**Parameters:**

- `p_45956_` (`TargetingConditions`)
- `p_45957_` (`LivingEntity`)
- `p_45958_` (`AABB`)

**Returns:** `default List<Player>`

### getNearbyEntities

```java
<T extends LivingEntity> default <T extends LivingEntity> List<T> getNearbyEntities(Class<T> p_45972_, TargetingConditions p_45973_, LivingEntity p_45974_, AABB p_45975_)
```

**Parameters:**

- `p_45972_` (`Class<T>`)
- `p_45973_` (`TargetingConditions`)
- `p_45974_` (`LivingEntity`)
- `p_45975_` (`AABB`)

**Returns:** `default <T extends LivingEntity> List<T>`

### getPlayerByUUID

```java
default Player getPlayerByUUID(UUID p_46004_)
```

**Parameters:**

- `p_46004_` (`UUID`)

**Returns:** `Player`
