# LivingKnockBackEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingKnockBackEvent is fired when a living entity is about to be knocked back. 
This event is fired whenever an Entity is knocked back in
`LivingEntity#hurt(DamageSource, float)`,
`LivingEntity#blockUsingShield(LivingEntity)`,
`Mob#doHurtTarget(Entity)` and
`Player#attack(Entity)` 

This event is fired via `CommonHooks#onLivingKnockBack(LivingEntity, float, double, double)` .

`#strength` contains the strength of the knock back. 
`#ratioX` contains the x ratio of the knock back. 
`#ratioZ` contains the z ratio of the knock back. 

This event is `ICancellableEvent`.
If this event is canceled, the entity is not knocked back.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `strength` | `float` |  |
| `ratioZ` | `double ratioX,` |  |
| `originalStrength` | `float` |  |
| `originalRatioZ` | `double originalRatioX,` |  |
| `ratioX` | `public double` |  |
| `originalRatioX` | `public double` |  |

## Accessors

- `public float getStrength()` 
- `public double getRatioX()` 
- `public double getRatioZ()` 
- `public float getOriginalStrength()` 
- `public double getOriginalRatioX()` 
- `public double getOriginalRatioZ()` 
- `public void setStrength(float strength)` 
- `public void setRatioX(double ratioX)` 
- `public void setRatioZ(double ratioZ)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingKnockBackHandler {
    @SubscribeEvent
    public static void onLivingKnockBack(LivingKnockBackEvent event) {
        // Handle event
    }
}
```
