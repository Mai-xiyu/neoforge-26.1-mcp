# RegisterClientTooltipComponentFactoriesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows users to register custom `net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent`
factories for their `net.minecraft.world.inventory.tooltip.TooltipComponent` types.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterClientTooltipComponentFactoriesHandler {
    @SubscribeEvent
    public static void onRegisterClientTooltipComponentFactories(RegisterClientTooltipComponentFactoriesEvent event) {
        // Handle event
    }
}
```
