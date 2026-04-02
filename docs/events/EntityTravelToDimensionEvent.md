# EntityTravelToDimensionEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

EntityTravelToDimensionEvent is fired before an Entity travels to a dimension.

`#dimension` contains the id of the dimension the entity is traveling to.

This event is `net.neoforged.bus.api.ICancellableEvent`.
If this event is canceled, the Entity does not travel to the dimension.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `dimension` | `public ResourceKey<Level>` |  |

## Accessors

- `public ResourceKey<Level> getDimension()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityTravelToDimensionHandler {
    @SubscribeEvent
    public static void onEntityTravelToDimension(EntityTravelToDimensionEvent event) {
        // Handle event
    }
}
```
