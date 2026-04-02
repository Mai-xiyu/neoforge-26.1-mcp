# CanContinueSleepingEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

This event is fired when the game checks if a sleeping entity may continue sleeping.



It can be used to overwrite the vanilla check, forcing the entity to continue or stop sleeping.



This event is only fired on the logical server.
@see `CanPlayerSleepEvent` for when a player starts sleeping.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `problem` | `BedSleepingProblem` |  |
| `mayContinueSleeping` | `boolean` |  |
| `sleepingPos` | `Optional<BlockPos>` |  |

## Accessors

- `Optional<BlockPos> getSleepingPos()` 
- `public BedSleepingProblem getProblem()` 
- `public void setContinueSleeping(boolean sleeping)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CanContinueSleepingHandler {
    @SubscribeEvent
    public static void onCanContinueSleeping(CanContinueSleepingEvent event) {
        // Handle event
    }
}
```
