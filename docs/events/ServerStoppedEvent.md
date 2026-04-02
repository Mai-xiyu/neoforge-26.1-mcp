# ServerStoppedEvent

**Package:** `net.neoforged.neoforge.event.server`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ServerLifecycleEvent`

## Description

Called after `ServerStoppingEvent` when the server has completely shut down.
Called immediately before shutting down, on the dedicated server, and before returning
to the main menu on the client.
@author cpw

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerStoppedHandler {
    @SubscribeEvent
    public static void onServerStopped(ServerStoppedEvent event) {
        // Handle event
    }
}
```
