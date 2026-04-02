# PacketSentEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `PacketEvent`
**Annotations:** `@DontObfuscate`, `@Label("Network Packet Sent")`, `@Name("minecraft.PacketSent")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `NAME` | `String` |  |
| `TYPE` | `EventType` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PacketSentHandler {
    @SubscribeEvent
    public static void onPacketSent(PacketSentEvent event) {
        // Handle event
    }
}
```
