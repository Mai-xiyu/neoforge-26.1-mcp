# AttackEntityEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

AttackEntityEvent is fired when a player attacks an Entity.
This event is fired whenever a player attacks an Entity in
`Player#attack(Entity)`.

`#target` contains the Entity that was damaged by the player. 

This event is `ICancellableEvent`.
If this event is canceled, the player does not attack the Entity.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `target` | `public Entity` |  |

## Accessors

- `public Entity getTarget()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AttackEntityHandler {
    @SubscribeEvent
    public static void onAttackEntity(AttackEntityEvent event) {
        // Handle event
    }
}
```
