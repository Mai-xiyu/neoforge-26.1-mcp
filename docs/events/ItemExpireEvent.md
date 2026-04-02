# ItemExpireEvent

**Package:** `net.neoforged.neoforge.event.entity.item`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `ItemEvent`

## Description

Event that is fired when an `ItemEntity`'s age has reached its maximum
lifespan. Adding extra life time will prevent the `ItemEntity` from being
flagged as dead, thus staying its removal from the world.



Note that using this event, you can ony extend the lifespan up to `Short#MAX_VALUE` - 1 ticks (27.5 minutes).
To extend an item's lifespan above that, use either `ItemEntity#setExtendedLifetime()`
or `ItemEntity#setUnlimitedLifetime`.



This event will only be fired server-side.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `extraLife` | `int` |  |

## Accessors

- `public int getExtraLife()` 
- `public void setExtraLife(int extraLife)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ItemExpireHandler {
    @SubscribeEvent
    public static void onItemExpire(ItemExpireEvent event) {
        // Handle event
    }
}
```
