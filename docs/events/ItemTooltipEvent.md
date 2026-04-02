# ItemTooltipEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `flags` | `TooltipFlag` |  |
| `itemStack` | `ItemStack` |  |
| `toolTip` | `List<Component>` |  |
| `entity` | `Player` |  |
| `context` | `TooltipContext` |  |

## Accessors

- `public TooltipFlag getFlags()` 
- `public ItemStack getItemStack()` 
- `public List<Component> getToolTip()` 
- `public Player getEntity()` 
- `public TooltipContext getContext()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ItemTooltipHandler {
    @SubscribeEvent
    public static void onItemTooltip(ItemTooltipEvent event) {
        // Handle event
    }
}
```
