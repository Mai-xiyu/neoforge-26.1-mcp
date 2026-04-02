# LivingShieldBlockEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingShieldBlockEvent is fired when an entity is hurt and vanilla checks if the entity is attempting
to block with a shield.
Cancelling this event will have the same impact as if the shield was not eligible to block.
The damage blocked cannot be set lower than zero or greater than the original value.
Note: This event fires whether the player is actively using a shield or not. Vanilla shield
blocking logic is captured and passed into the event via `#getOriginalBlock()`. If this is
true, The shield item stack "should" be available from `LivingEntity#getUseItem()` at least
for players.
@see DamageContainer for more information on the damage sequence

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `damageContainer` | `public DamageContainer` |  |
| `damageSource` | `DamageSource` |  |
| `originalBlockedDamage` | `float` |  |
| `blockedDamage` | `float` |  |
| `originalBlock` | `boolean` |  |
| `blocked` | `boolean` |  |

## Accessors

- `public DamageContainer getDamageContainer()` 
- `public DamageSource getDamageSource()` 
- `public float getOriginalBlockedDamage()` 
- `public float getBlockedDamage()` 
- `public void setBlockedDamage(float blocked)` 
- `public void setShieldDamage(float damage)` 
- `public boolean getOriginalBlock()` 
- `public boolean getBlocked()` 
- `public void setBlocked(boolean isBlocked)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingShieldBlockHandler {
    @SubscribeEvent
    public static void onLivingShieldBlock(LivingShieldBlockEvent event) {
        // Handle event
    }
}
```
