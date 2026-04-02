# SweepAttackEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

The SweepAttackEvent is fired when a `Player` attacks a target, after the `CriticalHitEvent` has been fired.



This event can be used to force an attack to trigger a sweep, or to prevent a sweep from occurring.



This event is fired on both the logical client and logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `target` | `Entity` |  |
| `vanillaSweep` | `boolean` |  |
| `sweeping` | `boolean` |  |

## Accessors

- `public Entity getTarget()` 
- `public boolean isVanillaSweep()` 
- `public boolean isSweeping()` 
- `public void setSweeping(boolean sweep)` 
- `public void setCanceled(boolean canceled)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SweepAttackHandler {
    @SubscribeEvent
    public static void onSweepAttack(SweepAttackEvent event) {
        // Handle event
    }
}
```
