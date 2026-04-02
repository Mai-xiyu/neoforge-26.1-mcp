# PlayerWakeUpEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

This event is fired when the player is waking up.
This is merely for purposes of listening for this to happen.
There is nothing that can be manipulated with this event.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerWakeUpHandler {
    @SubscribeEvent
    public static void onPlayerWakeUp(PlayerWakeUpEvent event) {
        // Handle event
    }
}
```
