# ForcedChunkManager

**Package:** `net.neoforged.neoforge.common.world.chunk`
**Type:** class
**Annotations:** `@ParametersAreNonnullByDefault`

## Methods

### init

```java
.Internal
    public static synchronized void init()
```

**Returns:** `.Internal
    public static synchronized void`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot init ticket controllers multiple times!")
```

**Parameters:**

- `times!"` (`"Cannot init ticket controllers multiple`)

**Returns:** `throw new`

### hasForcedChunks

```java
public static boolean hasForcedChunks(ServerLevel level)
```

**Parameters:**

- `level` (`ServerLevel`)

**Returns:** `boolean`

### forceChunk

```java
static <T extends Comparable<? super T>> boolean forceChunk(ServerLevel level, ResourceLocation id, T owner, int chunkX, int chunkZ, boolean add, boolean ticking, TicketType<TicketOwner<T>> type, Function<ForcedChunksSavedData, TicketTracker<T>> ticketGetter)
```

**Parameters:**

- `level` (`ServerLevel`)
- `id` (`ResourceLocation`)
- `owner` (`T`)
- `chunkX` (`int`)
- `chunkZ` (`int`)
- `add` (`boolean`)
- `ticking` (`boolean`)
- `type` (`TicketType<TicketOwner<T>>`)
- `ticketGetter` (`Function<ForcedChunksSavedData, TicketTracker<T>>`)

**Returns:** `<T extends Comparable<? super T>> boolean`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Controller with ID " + id + " is not registered!")
```

**Parameters:**

- `registered!"` (`"Controller with ID " + id + " is not`)

**Returns:** `throw new`

### forceChunk

```java
 forceChunk()
```

**Returns:** ``

### reinstatePersistentChunks

```java
.Internal
    public static void reinstatePersistentChunks(ServerLevel level, ForcedChunksSavedData saveData)
```

**Parameters:**

- `level` (`ServerLevel`)
- `saveData` (`ForcedChunksSavedData`)

**Returns:** `.Internal
    public static void`

### gatherTicketsById

```java
 gatherTicketsById()
```

**Returns:** ``

### gatherTicketsById

```java
 gatherTicketsById()
```

**Returns:** ``

### writeModForcedChunks

```java
.Internal
    public static void writeModForcedChunks(CompoundTag nbt, TicketTracker<BlockPos> blockForcedChunks, TicketTracker<UUID> entityForcedChunks)
```

**Parameters:**

- `nbt` (`CompoundTag`)
- `blockForcedChunks` (`TicketTracker<BlockPos>`)
- `entityForcedChunks` (`TicketTracker<UUID>`)

**Returns:** `.Internal
    public static void`

### writeForcedChunkOwners

```java
private static <T extends Comparable<? super T>> void writeForcedChunkOwners(Map<ResourceLocation, Long2ObjectMap<CompoundTag>> forcedEntries, TicketTracker<T> tracker, String listKey, int listType, BiConsumer<T, ListTag> ownerWriter)
```

**Parameters:**

- `forcedEntries` (`Map<ResourceLocation, Long2ObjectMap<CompoundTag>>`)
- `tracker` (`TicketTracker<T>`)
- `listKey` (`String`)
- `listType` (`int`)
- `ownerWriter` (`BiConsumer<T, ListTag>`)

**Returns:** `private static <T extends Comparable<? super T>> void`

### writeForcedChunkOwners

```java
 writeForcedChunkOwners()
```

**Returns:** ``

### writeForcedChunkOwners

```java
 writeForcedChunkOwners("Ticking" + listKey)
```

**Parameters:**

- `listKey` (`"Ticking" +`)

**Returns:** ``

### writeForcedChunkOwners

```java
private static <T extends Comparable<? super T>> void writeForcedChunkOwners(Map<ResourceLocation, Long2ObjectMap<CompoundTag>> forcedEntries, Map<TicketOwner<T>, LongSet> forcedChunks, String listKey, int listType, BiConsumer<T, ListTag> ownerWriter)
```

**Parameters:**

- `forcedEntries` (`Map<ResourceLocation, Long2ObjectMap<CompoundTag>>`)
- `forcedChunks` (`Map<TicketOwner<T>, LongSet>`)
- `listKey` (`String`)
- `listType` (`int`)
- `ownerWriter` (`BiConsumer<T, ListTag>`)

**Returns:** `private static <T extends Comparable<? super T>> void`

### readModForcedChunks

```java
.Internal
    public static void readModForcedChunks(CompoundTag nbt, TicketTracker<BlockPos> blockForcedChunks, TicketTracker<UUID> entityForcedChunks)
```

**Parameters:**

- `nbt` (`CompoundTag`)
- `blockForcedChunks` (`TicketTracker<BlockPos>`)
- `entityForcedChunks` (`TicketTracker<UUID>`)

**Returns:** `.Internal
    public static void`

### readBlockForcedChunks

```java
 readBlockForcedChunks()
```

**Returns:** ``

### readBlockForcedChunks

```java
 readBlockForcedChunks()
```

**Returns:** ``

### readEntityForcedChunks

```java
 readEntityForcedChunks()
```

**Returns:** ``

### readEntityForcedChunks

```java
 readEntityForcedChunks()
```

**Returns:** ``

### readBlockPos

```java
private static BlockPos readBlockPos(CompoundTag compoundtag)
```

**Parameters:**

- `compoundtag` (`CompoundTag`)

**Returns:** `private static BlockPos`

### writeBlockPos

```java
public static CompoundTag writeBlockPos(BlockPos blockpos)
```

**Parameters:**

- `blockpos` (`BlockPos`)

**Returns:** `public static CompoundTag`

### getChunks

```java
static Map<TicketOwner<T>, LongSet> getChunks()
```

**Returns:** `Map<TicketOwner<T>, LongSet>`

### getTickingChunks

```java
public Map<TicketOwner<T>, LongSet> getTickingChunks()
```

**Returns:** `Map<TicketOwner<T>, LongSet>`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getTickets

```java
private Map<TicketOwner<T>, LongSet> getTickets(boolean ticking)
```

**Parameters:**

- `ticking` (`boolean`)

**Returns:** `private Map<TicketOwner<T>, LongSet>`

### remove

```java
public boolean remove(TicketOwner<T> owner, long chunk, boolean ticking)
```

**Parameters:**

- `owner` (`TicketOwner<T>`)
- `chunk` (`long`)
- `ticking` (`boolean`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TicketTracker` | class |  |
