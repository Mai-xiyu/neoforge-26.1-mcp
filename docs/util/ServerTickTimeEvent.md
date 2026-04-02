# ServerTickTimeEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`
**Annotations:** `@DontObfuscate`, `@Period("1 s")`, `@StackTrace(false)`, `@Category({"Minecraft", "Ticking"})`, `@Label("Server Tick Time")`, `@Name("minecraft.ServerTickTime")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |
| `averageTickDurationNanos` | `long` |  |
| `AVERAGE_TICK_DURATION` | `String` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerTickTimeHandler {
    @SubscribeEvent
    public static void onServerTickTime(ServerTickTimeEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Fields
