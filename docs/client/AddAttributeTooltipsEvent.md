# AddAttributeTooltipsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired after attribute tooltip lines have been added to an item stack's tooltip in `AttributeUtil#addAttributeTooltips`.



It can be used to add additional tooltip lines adjacent to the attribute lines without having to manually locate the inject point.



This event may be fired on both the logical client and logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stack` | `ItemStack` |  |
| `tooltip` | `Consumer<Component>` |  |
| `ctx` | `AttributeTooltipContext` |  |
| `context` | `AttributeTooltipContext` |  |

## Accessors

- `public AttributeTooltipContext getContext()` 
- `public ItemStack getStack()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddAttributeTooltipsHandler {
    @SubscribeEvent
    public static void onAddAttributeTooltips(AddAttributeTooltipsEvent event) {
        // Handle event
    }
}
```
