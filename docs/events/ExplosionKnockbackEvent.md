# ExplosionKnockbackEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ExplosionEvent`

## Description

ExplosionKnockbackEvent is fired once the explosion has calculated the knockback velocity to add to the entity caught in blast.

This event is not `ICancellableEvent`.
This event does not use `HasResult`.
This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `affectedBlocks` | `List<BlockPos>` |  |
| `affectedEntity` | `Entity` |  |
| `knockbackVelocity` | `Vec3` |  |

## Accessors

- `public List<BlockPos> getAffectedBlocks()` 
- `public Entity getAffectedEntity()` 
- `public Vec3 getKnockbackVelocity()` 
- `public void setKnockbackVelocity(Vec3 newKnockbackVelocity)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ExplosionKnockbackHandler {
    @SubscribeEvent
    public static void onExplosionKnockback(ExplosionKnockbackEvent event) {
        // Handle event
    }
}
```
