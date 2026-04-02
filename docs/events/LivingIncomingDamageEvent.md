# LivingIncomingDamageEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingIncomingDamageEvent is fired when a LivingEntity is about to receive damage.

This event is fired in `LivingEntity#hurt(DamageSource, float)`
after invulnerability checks but before any damage processing/mitigation.

For custom posting of this event, the event expects to be fired before any
damage reductions have been calculated. This event expects a mutable `DamageContainer`.

This event is fired via the `CommonHooks#onEntityIncomingDamage(LivingEntity, DamageContainer)`.
@see DamageContainer for more information on the damage sequence

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `container` | `DamageContainer` |  |
| `source` | `DamageSource` |  |
| `amount` | `float` |  |
| `originalAmount` | `float` |  |

## Accessors

- `public DamageContainer getContainer()` 
- `public DamageSource getSource()` 
- `public float getAmount()` 
- `public float getOriginalAmount()` 
- `public void setAmount(float newDamage)` 
- `public void setInvulnerabilityTicks(int ticks)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingIncomingDamageHandler {
    @SubscribeEvent
    public static void onLivingIncomingDamage(LivingIncomingDamageEvent event) {
        // Handle event
    }
}
```
