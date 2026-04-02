# ServerAboutToStartEvent

**Package:** `net.neoforged.neoforge.event.server`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ServerLifecycleEvent`

## Description

Called before the server begins loading anything. Called after `InterModProcessEvent` on the dedicated
server, and after the player has hit "Play Selected World" in the client. Called before `ServerStartingEvent`.
You can obtain a reference to the server with this event.
@author cpw

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerAboutToStartHandler {
    @SubscribeEvent
    public static void onServerAboutToStart(ServerAboutToStartEvent event) {
        // Handle event
    }
}
```
