# SpawnUtil

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### trySpawnMob

```java
<T extends Mob> public static <T extends Mob> Optional<T> trySpawnMob(EntityType<T> p_216404_, MobSpawnType p_216405_, ServerLevel p_216406_, BlockPos p_216407_, int p_216408_, int p_216409_, int p_216410_, SpawnUtil.Strategy p_216411_)
```

**Parameters:**

- `p_216404_` (`EntityType<T>`)
- `p_216405_` (`MobSpawnType`)
- `p_216406_` (`ServerLevel`)
- `p_216407_` (`BlockPos`)
- `p_216408_` (`int`)
- `p_216409_` (`int`)
- `p_216410_` (`int`)
- `p_216411_` (`SpawnUtil.Strategy`)

**Returns:** `public static <T extends Mob> Optional<T>`

### moveToPossibleSpawnPosition

```java
private static boolean moveToPossibleSpawnPosition(ServerLevel p_216399_, int p_216400_, BlockPos.MutableBlockPos p_216401_, SpawnUtil.Strategy p_216402_)
```

**Parameters:**

- `p_216399_` (`ServerLevel`)
- `p_216400_` (`int`)
- `p_216401_` (`BlockPos.MutableBlockPos`)
- `p_216402_` (`SpawnUtil.Strategy`)

**Returns:** `private static boolean`

### canSpawnOn

```java
boolean canSpawnOn(ServerLevel p_216428_, BlockPos p_216429_, BlockState p_216430_, BlockPos p_216431_, BlockState p_216432_)
```

**Parameters:**

- `p_216428_` (`ServerLevel`)
- `p_216429_` (`BlockPos`)
- `p_216430_` (`BlockState`)
- `p_216431_` (`BlockPos`)
- `p_216432_` (`BlockState`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Strategy` | interface |  |
