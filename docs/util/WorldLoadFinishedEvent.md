# WorldLoadFinishedEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`
**Annotations:** `@DontObfuscate`, `@StackTrace(false)`, `@Category({"Minecraft", "World Generation"})`, `@Label("Create/Load World")`, `@Name("minecraft.LoadWorld")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class WorldLoadFinishedHandler {
    @SubscribeEvent
    public static void onWorldLoadFinished(WorldLoadFinishedEvent event) {
        // Handle event
    }
}
```
