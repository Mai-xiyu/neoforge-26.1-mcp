# CriticalHitEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

This event is fired when a player attacks an entity in `Player#attack(Entity)`.



It can be used to change the critical hit status and the critical damage multiplier.
Additionally, this event allows controlling if the critical hit will impact sweep conditions.



This event is fired on both the logical client and logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `target` | `Entity` |  |
| `damageMultiplier` | `float` |  |
| `criticalHit` | `boolean` |  |
| `vanillaMultiplier` | `float` |  |
| `vanillaCritical` | `boolean` |  |

## Accessors

- `public Entity getTarget()` 
- `public float getDamageMultiplier()` 
- `public void setDamageMultiplier(float dmgMultiplier)` 
- `public boolean isCriticalHit()` 
- `public void setCriticalHit(boolean isCriticalHit)` 
- `public float getVanillaMultiplier()` 
- `public boolean isVanillaCritical()` 
- `public void setDisableSweep(boolean disableSweep)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CriticalHitHandler {
    @SubscribeEvent
    public static void onCriticalHit(CriticalHitEvent event) {
        // Handle event
    }
}
```
