# GameShuttingDownEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

A simple marker event that notifies when the game is about to close.
Fires once on the physical client and physical server.
Does not fire for the Integrated Server on a physical Client.
On the client, the GL Context is still valid when the event is fired.
Fired on the FORGE event bus.
@author Curle

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GameShuttingDownHandler {
    @SubscribeEvent
    public static void onGameShuttingDown(GameShuttingDownEvent event) {
        // Handle event
    }
}
```
