# ClientStartedEvent

**Package:** `net.neoforged.neoforge.client.event.lifecycle`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ClientLifecycleEvent`

## Description

Emitted right before the client ticks for the first time.



The loading overlay will still be showing and the resource reload is likely still going on.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientStartedHandler {
    @SubscribeEvent
    public static void onClientStarted(ClientStartedEvent event) {
        // Handle event
    }
}
```
