# ChunkGenerationEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`
**Annotations:** `@DontObfuscate`, `@Enabled(false)`, `@StackTrace(false)`, `@Category({"Minecraft", "World Generation"})`, `@Label("Chunk Generation")`, `@Name("minecraft.ChunkGeneration")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |
| `worldPosX` | `int` |  |
| `worldPosZ` | `int` |  |
| `chunkPosX` | `int` |  |
| `chunkPosZ` | `int` |  |
| `targetStatus` | `String` |  |
| `level` | `String` |  |
| `WORLD_POS_X` | `String` |  |
| `WORLD_POS_Z` | `String` |  |
| `CHUNK_POS_X` | `String` |  |
| `CHUNK_POS_Z` | `String` |  |
| `STATUS` | `String` |  |
| `LEVEL` | `String` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ChunkGenerationHandler {
    @SubscribeEvent
    public static void onChunkGeneration(ChunkGenerationEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Fields
