# FarmlandWaterManager

**Package:** `net.neoforged.neoforge.common`
**Type:** class

## Methods

### addCustomTicket

```java
public static <T extends SimpleTicket<Vec3>> T addCustomTicket(Level level, T ticket, ChunkPos masterChunk, ChunkPos[]... additionalChunks)
```

**Parameters:**

- `level` (`Level`)
- `ticket` (`T`)
- `masterChunk` (`ChunkPos`)
- `additionalChunks` (`ChunkPos[]...`)

**Returns:** `<T extends SimpleTicket<Vec3>> T`

### addAABBTicket

```java
public static AABBTicket addAABBTicket(Level level, AABB aabb)
```

**Parameters:**

- `level` (`Level`)
- `aabb` (`AABB`)

**Returns:** `AABBTicket`

### getDistanceSq

```java
private static double getDistanceSq(ChunkPos pos, Vec3 vec3d)
```

**Parameters:**

- `pos` (`ChunkPos`)
- `vec3d` (`Vec3`)

**Returns:** `private static double`

### hasBlockWaterTicket

```java
public static boolean hasBlockWaterTicket(LevelReader level, BlockPos pos)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### removeTickets

```java
static void removeTickets(ChunkAccess chunk)
```

**Parameters:**

- `chunk` (`ChunkAccess`)

**Returns:** `static void`

### getTicketManager

```java
private static ChunkTicketManager<Vec3> getTicketManager(ChunkPos pos, LevelReader level)
```

**Parameters:**

- `pos` (`ChunkPos`)
- `level` (`LevelReader`)

**Returns:** `private static ChunkTicketManager<Vec3>`
