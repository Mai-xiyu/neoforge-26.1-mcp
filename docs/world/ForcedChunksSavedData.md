# ForcedChunksSavedData

**Package:** `net.minecraft.world.level`
**Type:** class
**Extends:** `SavedData`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FILE_ID` | `String` |  |

## Methods

### factory

```java
public static SavedData.Factory<ForcedChunksSavedData> factory()
```

**Returns:** `public static SavedData.Factory<ForcedChunksSavedData>`

### ForcedChunksSavedData

```java
private ForcedChunksSavedData(LongSet p_151482_)
```

**Parameters:**

- `p_151482_` (`LongSet`)

**Returns:** `private`

### ForcedChunksSavedData

```java
public ForcedChunksSavedData()
```

**Returns:** `public`

### load

```java
public static ForcedChunksSavedData load(CompoundTag p_151484_, HolderLookup.Provider p_323940_)
```

**Parameters:**

- `p_151484_` (`CompoundTag`)
- `p_323940_` (`HolderLookup.Provider`)

**Returns:** `public static ForcedChunksSavedData`

### save

```java
public CompoundTag save(CompoundTag p_46120_, HolderLookup.Provider p_324573_)
```

**Parameters:**

- `p_46120_` (`CompoundTag`)
- `p_324573_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getChunks

```java
public LongSet getChunks()
```

**Returns:** `public LongSet`

### getBlockForcedChunks

```java
public net.neoforged.neoforge.common.world.chunk.ForcedChunkManager.TicketTracker<net.minecraft.core.BlockPos> getBlockForcedChunks()
```

**Returns:** `public net.neoforged.neoforge.common.world.chunk.ForcedChunkManager.TicketTracker<net.minecraft.core.BlockPos>`

### getEntityForcedChunks

```java
public net.neoforged.neoforge.common.world.chunk.ForcedChunkManager.TicketTracker<java.util.UUID> getEntityForcedChunks()
```

**Returns:** `public net.neoforged.neoforge.common.world.chunk.ForcedChunkManager.TicketTracker<java.util.UUID>`
