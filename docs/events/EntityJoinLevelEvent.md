# EntityJoinLevelEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

This event is fired whenever an `Entity` joins a `Level`.
This event is fired whenever an entity is added to a level in `Level#addFreshEntity(Entity)`
and `PersistentEntitySectionManager#addNewEntity(Entity, boolean)`.



Note: This event may be called before the underlying `LevelChunk` is promoted to `ChunkStatus#FULL`.
You will cause chunk loading deadlocks if you do not delay your world interactions.



This event is ICancellableEvent cancellable and does not HasResult have a result.
If the event is canceled, the entity will not be added to the level.



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
public class EntityJoinLevelHandler {
    @SubscribeEvent
    public static void onEntityJoinLevel(EntityJoinLevelEvent event) {
        // Handle event
    }
}
```
