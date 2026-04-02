# FluidTooltipEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `flags` | `TooltipFlag` |  |
| `fluidStack` | `FluidStack` |  |
| `toolTip` | `List<Component>` |  |
| `entity` | `Player` |  |
| `context` | `TooltipContext` |  |

## Accessors

- `public TooltipFlag getFlags()` 
- `public FluidStack getFluidStack()` 
- `public List<Component> getToolTip()` 
- `public Player getEntity()` 
- `public TooltipContext getContext()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class FluidTooltipHandler {
    @SubscribeEvent
    public static void onFluidTooltip(FluidTooltipEvent event) {
        // Handle event
    }
}
```
