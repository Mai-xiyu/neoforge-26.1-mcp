# PlayerSetSpawnEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

This event is fired when a player's spawn point is set or reset.
The event can be canceled, which will prevent the spawn point from being changed.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `forced` | `public boolean` |  |
| `newSpawn` | `BlockPos` |  |
| `spawnLevel` | `public ResourceKey<Level>` |  |

## Accessors

- `public boolean isForced()` 
- `public BlockPos getNewSpawn()` 
- `public ResourceKey<Level> getSpawnLevel()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerSetSpawnHandler {
    @SubscribeEvent
    public static void onPlayerSetSpawn(PlayerSetSpawnEvent event) {
        // Handle event
    }
}
```
