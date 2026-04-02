# LivingDeathEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingDeathEvent is fired when an Entity dies. 
This event is fired whenever an Entity dies in
`LivingEntity#die(DamageSource)`,
`Player#die(DamageSource)`, and
`ServerPlayer#die(DamageSource)`. 

This event is fired via the `CommonHooks#onLivingDeath(LivingEntity, DamageSource)`.

`#source` contains the DamageSource that caused the entity to die. 

This event is `ICancellableEvent`.
If this event is canceled, the Entity does not die.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | `public DamageSource` |  |

## Accessors

- `public DamageSource getSource()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingDeathHandler {
    @SubscribeEvent
    public static void onLivingDeath(LivingDeathEvent event) {
        // Handle event
    }
}
```
