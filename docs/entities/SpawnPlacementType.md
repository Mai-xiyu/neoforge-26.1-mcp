# SpawnPlacementType

**Package:** `net.minecraft.world.entity`
**Type:** interface

## Methods

### isSpawnPositionOk

```java
boolean isSpawnPositionOk(LevelReader p_321641_, BlockPos p_321773_, EntityType<?> p_321744_)
```

**Parameters:**

- `p_321641_` (`LevelReader`)
- `p_321773_` (`BlockPos`)
- `p_321744_` (`EntityType<?>`)

**Returns:** `boolean`

### adjustSpawnPosition

```java
default BlockPos adjustSpawnPosition(LevelReader p_321714_, BlockPos p_321542_)
```

**Parameters:**

- `p_321714_` (`LevelReader`)
- `p_321542_` (`BlockPos`)

**Returns:** `default BlockPos`
