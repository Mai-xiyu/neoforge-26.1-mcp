# ItemTossEvent

**Package:** `net.neoforged.neoforge.event.entity.item`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `ItemEvent`

## Description

Event that is fired whenever a player tosses (Q) an item or drag-n-drops a
stack of items outside the inventory GUI screens. Canceling the event will
stop the items from entering the world, but will not prevent them being
removed from the inventory - and thus removed from the system.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |

## Accessors

- `public Player getPlayer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ItemTossHandler {
    @SubscribeEvent
    public static void onItemToss(ItemTossEvent event) {
        // Handle event
    }
}
```
