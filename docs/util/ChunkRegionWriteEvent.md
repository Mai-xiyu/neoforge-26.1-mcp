# ChunkRegionWriteEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ChunkRegionIoEvent`
**Annotations:** `@DontObfuscate`, `@Label("Region File Write")`, `@Name("minecraft.ChunkRegionWrite")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ChunkRegionWriteHandler {
    @SubscribeEvent
    public static void onChunkRegionWrite(ChunkRegionWriteEvent event) {
        // Handle event
    }
}
```
