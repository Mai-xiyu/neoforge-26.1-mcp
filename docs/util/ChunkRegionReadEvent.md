# ChunkRegionReadEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ChunkRegionIoEvent`
**Annotations:** `@DontObfuscate`, `@Label("Region File Read")`, `@Name("minecraft.ChunkRegionRead")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ChunkRegionReadHandler {
    @SubscribeEvent
    public static void onChunkRegionRead(ChunkRegionReadEvent event) {
        // Handle event
    }
}
```
