# EnchantmentLevelSetEvent

**Package:** `net.neoforged.neoforge.event.enchanting`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `net.neoforged.bus.api.Event`

## Description

Fired when the enchantment level is set for each of the three potential enchantments in the enchanting table.
The `#level` is set to the vanilla value and can be modified by this event handler.
The `#enchantRow` is used to determine which enchantment level is being set, 1, 2, or 3. The `#power` is a number
from 0-15 and indicates how many bookshelves surround the enchanting table. The `#itemStack` representing the item being
enchanted is also available.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `Level` |  |
| `pos` | `BlockPos` |  |
| `enchantRow` | `int` |  |
| `power` | `int` |  |
| `item` | `ItemStack` |  |
| `originalLevel` | `int` |  |
| `enchantLevel` | `int` |  |

## Accessors

- `public Level getLevel()` 
- `public BlockPos getPos()` 
- `public int getEnchantRow()` 
- `public int getPower()` 
- `public ItemStack getItem()` 
- `public int getOriginalLevel()` 
- `public int getEnchantLevel()` 
- `public void setEnchantLevel(int level)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EnchantmentLevelSetHandler {
    @SubscribeEvent
    public static void onEnchantmentLevelSet(EnchantmentLevelSetEvent event) {
        // Handle event
    }
}
```
