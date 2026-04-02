# LivingFallEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingFallEvent is fired when an Entity is set to be falling.
This event is fired whenever an Entity is set to fall in
`LivingEntity#causeFallDamage(float, float, DamageSource)`.

This event is fired via the `CommonHooks#onLivingFall(LivingEntity, float, float)`.

`#distance` contains the distance the Entity is to fall. If this event is canceled, this value is set to 0.0F.

This event is `net.neoforged.bus.api.ICancellableEvent`.
If this event is canceled, the Entity does not fall.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `distance` | `public float` |  |
| `damageMultiplier` | `public float` |  |

## Accessors

- `public float getDistance()` 
- `public void setDistance(float distance)` 
- `public float getDamageMultiplier()` 
- `public void setDamageMultiplier(float damageMultiplier)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingFallHandler {
    @SubscribeEvent
    public static void onLivingFall(LivingFallEvent event) {
        // Handle event
    }
}
```
