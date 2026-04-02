# SpawnPlacements

**Package:** `net.minecraft.world.entity`
**Type:** class

## Methods

### getPlacementType

```java
public static SpawnPlacementType getPlacementType(EntityType<?> p_21753_)
```

**Parameters:**

- `p_21753_` (`EntityType<?>`)

**Returns:** `public static SpawnPlacementType`

### isSpawnPositionOk

```java
public static boolean isSpawnPositionOk(EntityType<?> p_321531_, LevelReader p_321599_, BlockPos p_321663_)
```

**Parameters:**

- `p_321531_` (`EntityType<?>`)
- `p_321599_` (`LevelReader`)
- `p_321663_` (`BlockPos`)

**Returns:** `public static boolean`

### getHeightmapType

```java
public static Heightmap.Types getHeightmapType(EntityType<?> p_21766_)
```

**Parameters:**

- `p_21766_` (`EntityType<?>`)

**Returns:** `public static Heightmap.Types`

### checkSpawnRules

```java
<T extends Entity> public static <T extends Entity> boolean checkSpawnRules(EntityType<T> p_217075_, ServerLevelAccessor p_217076_, MobSpawnType p_217077_, BlockPos p_217078_, RandomSource p_217079_)
```

**Parameters:**

- `p_217075_` (`EntityType<T>`)
- `p_217076_` (`ServerLevelAccessor`)
- `p_217077_` (`MobSpawnType`)
- `p_217078_` (`BlockPos`)
- `p_217079_` (`RandomSource`)

**Returns:** `public static <T extends Entity> boolean`

### hasPlacement

```java
Added to allow for checking if an entity has a spawn placement
    public static boolean hasPlacement(EntityType<?> type)
```

**Parameters:**

- `type` (`EntityType<?>`)

**Returns:** `Added to allow for checking if an entity has a spawn placement
    public static boolean`

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### Data

```java
static record Data(Heightmap.Types heightMap, SpawnPlacementType placement, SpawnPlacements.SpawnPredicate<?> predicate)
```

**Parameters:**

- `heightMap` (`Heightmap.Types`)
- `placement` (`SpawnPlacementType`)
- `predicate` (`SpawnPlacements.SpawnPredicate<?>`)

**Returns:** `static record`

### test

```java
boolean test(EntityType<T> p_217081_, ServerLevelAccessor p_217082_, MobSpawnType p_217083_, BlockPos p_217084_, RandomSource p_217085_)
```

**Parameters:**

- `p_217081_` (`EntityType<T>`)
- `p_217082_` (`ServerLevelAccessor`)
- `p_217083_` (`MobSpawnType`)
- `p_217084_` (`BlockPos`)
- `p_217085_` (`RandomSource`)

**Returns:** `boolean`

### fireSpawnPlacementEvent

```java
.jetbrains.annotations.ApiStatus.Internal
    public static void fireSpawnPlacementEvent()
```

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SpawnPredicate` | interface |  |
