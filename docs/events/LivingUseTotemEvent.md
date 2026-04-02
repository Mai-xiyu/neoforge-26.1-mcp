# LivingUseTotemEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

Fired when an Entity attempts to use a totem to prevent its death.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If this event is cancelled, the totem will not prevent the entity's death.


This event is fired on the NeoForge#EVENT_BUS Forge event bus,
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | `DamageSource` |  |
| `totem` | `ItemStack` |  |
| `handHolding` | `InteractionHand` |  |

## Accessors

- `public DamageSource getSource()` 
- `public ItemStack getTotem()` 
- `public InteractionHand getHandHolding()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingUseTotemHandler {
    @SubscribeEvent
    public static void onLivingUseTotem(LivingUseTotemEvent event) {
        // Handle event
    }
}
```
