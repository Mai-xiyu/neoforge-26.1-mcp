# PlayerFlyableFallEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Occurs when a player falls, but is able to fly. Doesn't need to be cancelable, this is mainly for notification purposes.
@author Mithion

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `distance` | `public float` |  |
| `multiplier` | `public float` |  |

## Accessors

- `public float getDistance()` 
- `public void setDistance(float distance)` 
- `public float getMultiplier()` 
- `public void setMultiplier(float multiplier)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerFlyableFallHandler {
    @SubscribeEvent
    public static void onPlayerFlyableFall(PlayerFlyableFallEvent event) {
        // Handle event
    }
}
```
