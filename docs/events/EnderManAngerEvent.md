# EnderManAngerEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

This event is fired on the forge bus before an Enderman detects that a player is looking at them.
It will not be fired if the detection is already prevented by `IItemExtension#isEnderMask`



This event is `ICancellableEvent`.
If this event is canceled, the Enderman will not target the player.



This event does not have a `Result`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |
| `entity` | `EnderMan` |  |

## Accessors

- `public Player getPlayer()` 
- `public EnderMan getEntity()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EnderManAngerHandler {
    @SubscribeEvent
    public static void onEnderManAnger(EnderManAngerEvent event) {
        // Handle event
    }
}
```
