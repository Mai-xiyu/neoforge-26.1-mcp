# EntityLeaveLevelEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `EntityEvent`

## Description

This event is fired whenever an `Entity` leaves a `Level`.
This event is fired whenever an entity is removed from the level in `LevelCallback#onTrackingEnd(Object)`.



This event is not ICancellableEvent cancellable and does not net.neoforged.bus.api.Event.HasResult have a result.



This event is fired on the NeoForge#EVENT_BUS main Forge event bus
on both logical sides.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `Level` |  |

## Accessors

- `public Level getLevel()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityLeaveLevelHandler {
    @SubscribeEvent
    public static void onEntityLeaveLevel(EntityLeaveLevelEvent event) {
        // Handle event
    }
}
```
