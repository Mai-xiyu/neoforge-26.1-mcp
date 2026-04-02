# FinalizeSpawnEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `MobSpawnEvent`

## Description

This event is fired before `Mob#finalizeSpawn` is called.
This allows mods to control mob initialization.
In vanilla code, this event is injected by a transformer and not via patch, so calls cannot be traced via call hierarchy (it is not source-visible).



Canceling this event will result in `Mob#finalizeSpawn` not being called, and the returned value always being null, instead of propagating the SpawnGroupData.
The entity will still be spawned. If you want to prevent the spawn, use `FinalizeSpawnEvent#setSpawnCancelled`, which will cause Forge to prevent the spawn.



This event is fired on `NeoForge#EVENT_BUS`, and is only fired on the logical server.
@see EventHooks#onFinalizeSpawn
@apiNote Callers do not need to check if the entity's spawn was cancelled, as the spawn will be blocked by Forge.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `difficulty` | `DifficultyInstance` |  |
| `spawnType` | `MobSpawnType` |  |
| `spawnData` | `SpawnGroupData` |  |
| `spawner` | `Either<BlockEntity, Entity>` |  |
| `spawnCancelled` | `boolean` |  |

## Accessors

- `public DifficultyInstance getDifficulty()` 
- `public void setDifficulty(DifficultyInstance inst)` 
- `public MobSpawnType getSpawnType()` 
- `public SpawnGroupData getSpawnData()` 
- `public void setSpawnData(SpawnGroupData data)` 
- `public Either<BlockEntity, Entity> getSpawner()` 
- `public void setSpawnCancelled(boolean cancel)` 
- `public boolean isSpawnCancelled()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class FinalizeSpawnHandler {
    @SubscribeEvent
    public static void onFinalizeSpawn(FinalizeSpawnEvent event) {
        // Handle event
    }
}
```
