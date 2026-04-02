# LivingHealEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingHealEvent is fired when an Entity is set to be healed. 
This event is fired whenever an Entity is healed in `LivingEntity#heal(float)`

This event is fired via the `EventHooks#onLivingHeal(LivingEntity, float)`.

`#amount` contains the amount of healing done to the Entity that was healed. 

This event is `net.neoforged.bus.api.ICancellableEvent`.
If this event is canceled, the Entity is not healed.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `amount` | `public float` |  |

## Accessors

- `public float getAmount()` 
- `public void setAmount(float amount)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingHealHandler {
    @SubscribeEvent
    public static void onLivingHeal(LivingHealEvent event) {
        // Handle event
    }
}
```
