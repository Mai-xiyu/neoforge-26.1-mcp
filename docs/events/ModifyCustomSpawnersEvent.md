# ModifyCustomSpawnersEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired on the net.neoforged.fml.LogicalSide#SERVER logical server when a `ServerLevel` is building its CustomSpawner custom spawners.



Subscribe to this event to add/remove CustomSpawner custom spawners for the level.



This event is not `net.neoforged.bus.api.ICancellableEvent cancellable` and does not have a result.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ServerLevel` |  |
| `customSpawners` | `List<CustomSpawner>` |  |

## Accessors

- `public ServerLevel getLevel()` 
- `public List<CustomSpawner> getCustomSpawners()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ModifyCustomSpawnersHandler {
    @SubscribeEvent
    public static void onModifyCustomSpawners(ModifyCustomSpawnersEvent event) {
        // Handle event
    }
}
```
