# CanPlayerSleepEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Called from `ServerPlayer#startSleepInBed(BlockPos)` when a player attempts to sleep.



This event receives the result of vanilla checking if the sleep attempt is valid, and permits overriding it.



This event is only fired on the logical server.
@see `CanContinueSleepingEvent` for per-tick sleeping checks.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `entity` | `ServerPlayer` |  |
| `level` | `public Level` |  |
| `pos` | `public BlockPos` |  |
| `state` | `public BlockState` |  |
| `problem` | `BedSleepingProblem` |  |
| `vanillaProblem` | `BedSleepingProblem` |  |

## Accessors

- `public ServerPlayer getEntity()` 
- `public Level getLevel()` 
- `public BlockPos getPos()` 
- `public BlockState getState()` 
- `public BedSleepingProblem getProblem()` 
- `public void setProblem(BedSleepingProblem problem)` 
- `public BedSleepingProblem getVanillaProblem()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CanPlayerSleepHandler {
    @SubscribeEvent
    public static void onCanPlayerSleep(CanPlayerSleepEvent event) {
        // Handle event
    }
}
```
