# LivingBreatheEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

LivingBreatheEvent is fired whenever a living entity ticks.

This event is fired via `CommonHooks#onLivingBreathe(LivingEntity, int, int)`.

This event is not `ICancellableEvent`.

This event does not have a result. `HasResult`

This event is fired on `NeoForge#EVENT_BUS`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `consumeAirAmount` | `int` |  |
| `refillAirAmount` | `int` |  |

## Accessors

- `public boolean canBreathe()` 
- `public void setCanBreathe(boolean canBreathe)` 
- `public int getConsumeAirAmount()` 
- `public void setConsumeAirAmount(int consumeAirAmount)` 
- `public int getRefillAirAmount()` 
- `public void setRefillAirAmount(int refillAirAmount)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingBreatheHandler {
    @SubscribeEvent
    public static void onLivingBreathe(LivingBreatheEvent event) {
        // Handle event
    }
}
```
