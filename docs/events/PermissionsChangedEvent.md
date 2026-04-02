# PermissionsChangedEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

This event will fire when the player is opped or deopped.



This event is cancelable which will stop the op or deop from happening.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `newLevel` | `int` |  |
| `oldLevel` | `int` |  |

## Accessors

- `public int getNewLevel()` 
- `public int getOldLevel()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PermissionsChangedHandler {
    @SubscribeEvent
    public static void onPermissionsChanged(PermissionsChangedEvent event) {
        // Handle event
    }
}
```
