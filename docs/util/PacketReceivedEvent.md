# PacketReceivedEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `PacketEvent`
**Annotations:** `@DontObfuscate`, `@Label("Network Packet Received")`, `@Name("minecraft.PacketReceived")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `NAME` | `String` |  |
| `TYPE` | `EventType` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PacketReceivedHandler {
    @SubscribeEvent
    public static void onPacketReceived(PacketReceivedEvent event) {
        // Handle event
    }
}
```
