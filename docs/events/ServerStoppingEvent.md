# ServerStoppingEvent

**Package:** `net.neoforged.neoforge.event.server`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ServerLifecycleEvent`

## Description

Called when the server begins an orderly shutdown, before `ServerStoppedEvent`.
@author cpw

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerStoppingHandler {
    @SubscribeEvent
    public static void onServerStopping(ServerStoppingEvent event) {
        // Handle event
    }
}
```
