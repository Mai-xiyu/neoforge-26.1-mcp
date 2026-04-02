# PlayerBrewedPotionEvent

**Package:** `net.neoforged.neoforge.event.brewing`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

This event is called when a player picks up a potion from a brewing stand.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stack` | `ItemStack` |  |

## Accessors

- `public ItemStack getStack()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerBrewedPotionHandler {
    @SubscribeEvent
    public static void onPlayerBrewedPotion(PlayerBrewedPotionEvent event) {
        // Handle event
    }
}
```
