# ItemFishedEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

This event is called when a player fishes an item.
This event is `net.neoforged.bus.api.ICancellableEvent`
Canceling the event will cause the player to receive no items at all.
The hook will still take the damage specified

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `rodDamage` | `int` |  |
| `drops` | `NonNullList<ItemStack>` |  |
| `hookEntity` | `FishingHook` |  |

## Accessors

- `public int getRodDamage()` 
- `public NonNullList<ItemStack> getDrops()` 
- `public FishingHook getHookEntity()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ItemFishedHandler {
    @SubscribeEvent
    public static void onItemFished(ItemFishedEvent event) {
        // Handle event
    }
}
```
