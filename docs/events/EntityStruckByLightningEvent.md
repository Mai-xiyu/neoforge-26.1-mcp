# EntityStruckByLightningEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

EntityStruckByLightningEvent is fired when an Entity is about to be struck by lightening.
This event is fired whenever an EntityLightningBolt is updated to strike an Entity in
`LightningBolt#tick()` via `EventHooks#onEntityStruckByLightning(Entity, LightningBolt)`.

`#lightning` contains the instance of EntityLightningBolt attempting to strike an entity.

This event is `ICancellableEvent`.
If this event is canceled, the Entity is not struck by the lightening.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `lightning` | `public LightningBolt` |  |

## Accessors

- `public LightningBolt getLightning()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityStruckByLightningHandler {
    @SubscribeEvent
    public static void onEntityStruckByLightning(EntityStruckByLightningEvent event) {
        // Handle event
    }
}
```
