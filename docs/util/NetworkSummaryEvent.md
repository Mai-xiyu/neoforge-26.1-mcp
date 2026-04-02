# NetworkSummaryEvent

**Package:** `net.minecraft.util.profiling.jfr.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`
**Annotations:** `@DontObfuscate`, `@Period("10 s")`, `@StackTrace(false)`, `@Category({"Minecraft", "Network"})`, `@Label("Network Summary")`, `@Name("minecraft.NetworkSummary")`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `EVENT_NAME` | `String` |  |
| `TYPE` | `EventType` |  |
| `remoteAddress` | `String` |  |
| `sentBytes` | `long` |  |
| `sentPackets` | `int` |  |
| `receivedBytes` | `long` |  |
| `receivedPackets` | `int` |  |
| `REMOTE_ADDRESS` | `String` |  |
| `SENT_BYTES` | `String` |  |
| `RECEIVED_BYTES` | `String` |  |

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class NetworkSummaryHandler {
    @SubscribeEvent
    public static void onNetworkSummary(NetworkSummaryEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Fields

### SumAggregation
