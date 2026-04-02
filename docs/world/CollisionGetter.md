# CollisionGetter

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `BlockGetter`

## Methods

### getWorldBorder

```java
WorldBorder getWorldBorder()
```

**Returns:** `WorldBorder`

### getChunkForCollisions

```java
BlockGetter getChunkForCollisions(int p_45774_, int p_45775_)
```

**Parameters:**

- `p_45774_` (`int`)
- `p_45775_` (`int`)

**Returns:** `BlockGetter`

### isUnobstructed

```java
default boolean isUnobstructed(Entity p_45750_, VoxelShape p_45751_)
```

**Parameters:**

- `p_45750_` (`Entity`)
- `p_45751_` (`VoxelShape`)

**Returns:** `default boolean`

### isUnobstructed

```java
default boolean isUnobstructed(BlockState p_45753_, BlockPos p_45754_, CollisionContext p_45755_)
```

**Parameters:**

- `p_45753_` (`BlockState`)
- `p_45754_` (`BlockPos`)
- `p_45755_` (`CollisionContext`)

**Returns:** `default boolean`

### isUnobstructed

```java
default boolean isUnobstructed(Entity p_45785_)
```

**Parameters:**

- `p_45785_` (`Entity`)

**Returns:** `default boolean`

### noCollision

```java
default boolean noCollision(AABB p_45773_)
```

**Parameters:**

- `p_45773_` (`AABB`)

**Returns:** `default boolean`

### noCollision

```java
default boolean noCollision(Entity p_45787_)
```

**Parameters:**

- `p_45787_` (`Entity`)

**Returns:** `default boolean`

### noCollision

```java
default boolean noCollision(Entity p_45757_, AABB p_45758_)
```

**Parameters:**

- `p_45757_` (`Entity`)
- `p_45758_` (`AABB`)

**Returns:** `default boolean`

### noBlockCollision

```java
default boolean noBlockCollision(Entity p_295728_, AABB p_294209_)
```

**Parameters:**

- `p_295728_` (`Entity`)
- `p_294209_` (`AABB`)

**Returns:** `default boolean`

### getEntityCollisions

```java
List<VoxelShape> getEntityCollisions(Entity p_186427_, AABB p_186428_)
```

**Parameters:**

- `p_186427_` (`Entity`)
- `p_186428_` (`AABB`)

**Returns:** `List<VoxelShape>`

### getCollisions

```java
default Iterable<VoxelShape> getCollisions(Entity p_186432_, AABB p_186433_)
```

**Parameters:**

- `p_186432_` (`Entity`)
- `p_186433_` (`AABB`)

**Returns:** `default Iterable<VoxelShape>`

### getBlockCollisions

```java
default Iterable<VoxelShape> getBlockCollisions(Entity p_186435_, AABB p_186436_)
```

**Parameters:**

- `p_186435_` (`Entity`)
- `p_186436_` (`AABB`)

**Returns:** `default Iterable<VoxelShape>`

### collidesWithSuffocatingBlock

```java
default boolean collidesWithSuffocatingBlock(Entity p_186438_, AABB p_186439_)
```

**Parameters:**

- `p_186438_` (`Entity`)
- `p_186439_` (`AABB`)

**Returns:** `default boolean`

### findSupportingBlock

```java
default Optional<BlockPos> findSupportingBlock(Entity p_286468_, AABB p_286792_)
```

**Parameters:**

- `p_286468_` (`Entity`)
- `p_286792_` (`AABB`)

**Returns:** `default Optional<BlockPos>`

### findFreePosition

```java
default Optional<Vec3> findFreePosition(Entity p_151419_, VoxelShape p_151420_, Vec3 p_151421_, double p_151422_, double p_151423_, double p_151424_)
```

**Parameters:**

- `p_151419_` (`Entity`)
- `p_151420_` (`VoxelShape`)
- `p_151421_` (`Vec3`)
- `p_151422_` (`double`)
- `p_151423_` (`double`)
- `p_151424_` (`double`)

**Returns:** `default Optional<Vec3>`
