# ServerStartingEvent

**Package:** `net.neoforged.neoforge.event.server`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ServerLifecycleEvent`

## Description

Called after `ServerAboutToStartEvent` and before `ServerStartedEvent`.
This event allows for customizations of the server.
If you need to add commands use `RegisterCommandsEvent`.
@author cpw

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerStartingHandler {
    @SubscribeEvent
    public static void onServerStarting(ServerStartingEvent event) {
        // Handle event
    }
}
```
