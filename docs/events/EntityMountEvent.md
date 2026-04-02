# EntityMountEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

This event gets fired whenever a entity mounts/dismounts another entity.
entityBeingMounted can be null, be sure to check for that.


This event is `net.neoforged.bus.api.ICancellableEvent`.
If this event is canceled, the entity does not mount/dismount the other entity.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `mounting` | `public boolean` |  |
| `dismounting` | `public boolean` |  |
| `entityMounting` | `public Entity` |  |
| `entityBeingMounted` | `public Entity` |  |
| `level` | `public Level` |  |

## Accessors

- `public boolean isMounting()` 
- `public boolean isDismounting()` 
- `public Entity getEntityMounting()` 
- `public Entity getEntityBeingMounted()` 
- `public Level getLevel()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityMountHandler {
    @SubscribeEvent
    public static void onEntityMount(EntityMountEvent event) {
        // Handle event
    }
}
```
