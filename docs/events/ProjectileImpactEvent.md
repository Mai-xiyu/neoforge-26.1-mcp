# ProjectileImpactEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

This event is fired on the `NeoForge#EVENT_BUS`.
This event is fired when a projectile entity impacts something.
This event is fired via `EventHooks#onProjectileImpact(Projectile, HitResult)`
This event is fired for all vanilla projectiles by Forge,
custom projectiles should fire this event and check the result in a similar fashion.
This event is cancelable. When canceled, the impact will not be processed and the projectile will continue flying.
Killing or other handling of the entity after event cancellation is up to the modder.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `rayTraceResult` | `public HitResult` |  |
| `projectile` | `public Projectile` |  |

## Accessors

- `public HitResult getRayTraceResult()` 
- `public Projectile getProjectile()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ProjectileImpactHandler {
    @SubscribeEvent
    public static void onProjectileImpact(ProjectileImpactEvent event) {
        // Handle event
    }
}
```
