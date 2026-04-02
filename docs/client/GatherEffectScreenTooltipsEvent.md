# GatherEffectScreenTooltipsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is called when an `EffectRenderingInventoryScreen` draws the tooltip lines for a hovered `MobEffectInstance`.
It can be used to modify the tooltip.



This event is only fired on the Dist#CLIENT physical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `screen` | `EffectRenderingInventoryScreen<?>` |  |
| `effectInst` | `MobEffectInstance` |  |
| `tooltip` | `List<Component>` |  |
| `effectInstance` | `MobEffectInstance` |  |

## Accessors

- `public EffectRenderingInventoryScreen<?> getScreen()` 
- `public MobEffectInstance getEffectInstance()` 
- `public List<Component> getTooltip()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GatherEffectScreenTooltipsHandler {
    @SubscribeEvent
    public static void onGatherEffectScreenTooltips(GatherEffectScreenTooltipsEvent event) {
        // Handle event
    }
}
```
