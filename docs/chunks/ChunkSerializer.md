# ChunkSerializer

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `X_POS_TAG` | `String` |  |
| `Z_POS_TAG` | `String` |  |
| `HEIGHTMAPS_TAG` | `String` |  |
| `IS_LIGHT_ON_TAG` | `String` |  |
| `SECTIONS_TAG` | `String` |  |
| `BLOCK_LIGHT_TAG` | `String` |  |
| `SKY_LIGHT_TAG` | `String` |  |

## Methods

### read

```java
public static ProtoChunk read(ServerLevel p_188231_, PoiManager p_188232_, RegionStorageInfo p_352213_, ChunkPos p_188233_, CompoundTag p_188234_)
```

**Parameters:**

- `p_188231_` (`ServerLevel`)
- `p_188232_` (`PoiManager`)
- `p_352213_` (`RegionStorageInfo`)
- `p_188233_` (`ChunkPos`)
- `p_188234_` (`CompoundTag`)

**Returns:** `public static ProtoChunk`

### logErrors

```java
private static void logErrors(ChunkPos p_188240_, int p_188241_, String p_188242_)
```

**Parameters:**

- `p_188240_` (`ChunkPos`)
- `p_188241_` (`int`)
- `p_188242_` (`String`)

**Returns:** `private static void`

### makeBiomeCodec

```java
private static Codec<PalettedContainerRO<Holder<Biome>>> makeBiomeCodec(Registry<Biome> p_188261_)
```

**Parameters:**

- `p_188261_` (`Registry<Biome>`)

**Returns:** `private static Codec<PalettedContainerRO<Holder<Biome>>>`

### write

```java
public static CompoundTag write(ServerLevel p_63455_, ChunkAccess p_63456_)
```

**Parameters:**

- `p_63455_` (`ServerLevel`)
- `p_63456_` (`ChunkAccess`)

**Returns:** `public static CompoundTag`

### saveTicks

```java
private static void saveTicks(ServerLevel p_188236_, CompoundTag p_188237_, ChunkAccess.TicksToSave p_188238_)
```

**Parameters:**

- `p_188236_` (`ServerLevel`)
- `p_188237_` (`CompoundTag`)
- `p_188238_` (`ChunkAccess.TicksToSave`)

**Returns:** `private static void`

### getChunkTypeFromTag

```java
public static ChunkType getChunkTypeFromTag(CompoundTag p_63486_)
```

**Parameters:**

- `p_63486_` (`CompoundTag`)

**Returns:** `public static ChunkType`

### packStructureData

```java
private static CompoundTag packStructureData(StructurePieceSerializationContext p_188250_, ChunkPos p_188251_, Map<Structure, StructureStart> p_188252_, Map<Structure, LongSet> p_188253_)
```

**Parameters:**

- `p_188250_` (`StructurePieceSerializationContext`)
- `p_188251_` (`ChunkPos`)
- `p_188252_` (`Map<Structure, StructureStart>`)
- `p_188253_` (`Map<Structure, LongSet>`)

**Returns:** `private static CompoundTag`

### unpackStructureStart

```java
private static Map<Structure, StructureStart> unpackStructureStart(StructurePieceSerializationContext p_188255_, CompoundTag p_188256_, long p_188257_)
```

**Parameters:**

- `p_188255_` (`StructurePieceSerializationContext`)
- `p_188256_` (`CompoundTag`)
- `p_188257_` (`long`)

**Returns:** `private static Map<Structure, StructureStart>`

### unpackStructureReferences

```java
private static Map<Structure, LongSet> unpackStructureReferences(RegistryAccess p_208155_, ChunkPos p_208156_, CompoundTag p_208157_)
```

**Parameters:**

- `p_208155_` (`RegistryAccess`)
- `p_208156_` (`ChunkPos`)
- `p_208157_` (`CompoundTag`)

**Returns:** `private static Map<Structure, LongSet>`

### packOffsets

```java
public static ListTag packOffsets(ShortList[] p_63491_)
```

**Parameters:**

- `p_63491_` (`ShortList[]`)

**Returns:** `public static ListTag`

### ChunkReadException

```java
public ChunkReadException(String p_331759_)
```

**Parameters:**

- `p_331759_` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChunkReadException` | class |  |
