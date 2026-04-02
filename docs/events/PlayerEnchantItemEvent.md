# PlayerEnchantItemEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

This event fires when a player enchants an item, after `IItemExtension#applyEnchantments` has been called.



This event is only fired on the logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `enchantedItem` | `ItemStack` |  |
| `enchantments` | `List<EnchantmentInstance>` |  |

## Accessors

- `public ItemStack getEnchantedItem()` 
- `public List<EnchantmentInstance> getEnchantments()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerEnchantItemHandler {
    @SubscribeEvent
    public static void onPlayerEnchantItem(PlayerEnchantItemEvent event) {
        // Handle event
    }
}
```
