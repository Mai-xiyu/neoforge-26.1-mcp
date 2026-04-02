# ClientStoppingEvent

**Package:** `net.neoforged.neoforge.client.event.lifecycle`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ClientLifecycleEvent`

## Description

Called when the client begins an orderly shutdown, before `ClientStoppedEvent`.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientStoppingHandler {
    @SubscribeEvent
    public static void onClientStopping(ClientStoppingEvent event) {
        // Handle event
    }
}
```
