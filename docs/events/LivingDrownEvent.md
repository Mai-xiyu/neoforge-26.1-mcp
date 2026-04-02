# LivingDrownEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingDrownEvent is fired whenever a living entity can't breathe and its air supply is less than or equal to zero.



This event is fired via `CommonHooks#onLivingBreathe(LivingEntity, int, int)`.



This event is `ICancellableEvent`. Effects of cancellation are noted in `#setCanceled(boolean)`.



This event does not HasResult have a result.
This event is fired on `NeoForge#EVENT_BUS`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `drowning` | `boolean` |  |
| `damageAmount` | `float` |  |
| `bubbleCount` | `int` |  |

## Accessors

- `public boolean isDrowning()` 
- `public void setDrowning(boolean isDrowning)` 
- `public float getDamageAmount()` 
- `public void setDamageAmount(float damageAmount)` 
- `public int getBubbleCount()` 
- `public void setBubbleCount(int bubbleCount)` 
- `public void setCanceled(boolean cancel)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingDrownHandler {
    @SubscribeEvent
    public static void onLivingDrown(LivingDrownEvent event) {
        // Handle event
    }
}
```
