# PlayerSpawnPhantomsEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

This event is fired from `PhantomSpawner#tick` when phantoms would attempt to be spawned, with one event fired per player.
It allows controlling if a spawn attempt will be made for the particular player, but cannot guarantee that a Phantom will be spawned.



This event is only fired on the logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `phantomsToSpawn` | `int` |  |
| `result` | `Result` |  |

## Accessors

- `public int getPhantomsToSpawn()` 
- `public void setPhantomsToSpawn(int phantomsToSpawn)` 
- `public void setResult(Result result)` 
- `public Result getResult()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerSpawnPhantomsHandler {
    @SubscribeEvent
    public static void onPlayerSpawnPhantoms(PlayerSpawnPhantomsEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Result
