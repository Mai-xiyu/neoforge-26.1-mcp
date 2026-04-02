# ServerStartedEvent

**Package:** `net.neoforged.neoforge.event.server`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ServerLifecycleEvent`

## Description

Called after `ServerStartingEvent` when the server is available and ready to play.
@author cpw

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerStartedHandler {
    @SubscribeEvent
    public static void onServerStarted(ServerStartedEvent event) {
        // Handle event
    }
}
```
