# ClientStoppedEvent

**Package:** `net.neoforged.neoforge.client.event.lifecycle`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ClientLifecycleEvent`

## Description

Called after `ClientStoppingEvent` when the client has completely shut down.
Called immediately before shutting down.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientStoppedHandler {
    @SubscribeEvent
    public static void onClientStopped(ClientStoppedEvent event) {
        // Handle event
    }
}
```
