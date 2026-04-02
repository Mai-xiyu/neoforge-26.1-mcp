# CommonLevelAccessor

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `EntityGetter, LevelReader, LevelSimulatedRW`

## Methods

### getBlockEntity

```java
default <T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151452_, BlockEntityType<T> p_151453_)
```

**Parameters:**

- `p_151452_` (`BlockPos`)
- `p_151453_` (`BlockEntityType<T>`)

**Returns:** `Optional<T>`

### getEntityCollisions

```java
default List<VoxelShape> getEntityCollisions(Entity p_186447_, AABB p_186448_)
```

**Parameters:**

- `p_186447_` (`Entity`)
- `p_186448_` (`AABB`)

**Returns:** `List<VoxelShape>`

### isUnobstructed

```java
default boolean isUnobstructed(Entity p_45828_, VoxelShape p_45829_)
```

**Parameters:**

- `p_45828_` (`Entity`)
- `p_45829_` (`VoxelShape`)

**Returns:** `boolean`

### getHeightmapPos

```java
default BlockPos getHeightmapPos(Heightmap.Types p_45831_, BlockPos p_45832_)
```

**Parameters:**

- `p_45831_` (`Heightmap.Types`)
- `p_45832_` (`BlockPos`)

**Returns:** `BlockPos`
