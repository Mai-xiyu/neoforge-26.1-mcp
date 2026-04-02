# GatherSkippedAttributeTooltipsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is used to collect the IDs of attribute modifiers that will not be displayed in item tooltips.



It allows hiding some (or all) of the modifiers, potentially for displaying them in an alternative way (or for hiding information from the player).



This event may be fired on both the logical client and logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stack` | `ItemStack` |  |
| `ctx` | `AttributeTooltipContext` |  |
| `context` | `AttributeTooltipContext` |  |
| `skippingAll` | `boolean` |  |
| `skippedIds` | `Set<ResourceLocation>` |  |
| `skippedGroups` | `Set<EquipmentSlotGroup>` |  |

## Accessors

- `public AttributeTooltipContext getContext()` 
- `public ItemStack getStack()` 
- `public boolean isSkipped(ResourceLocation id)` 
- `public boolean isSkipped(EquipmentSlotGroup group)` 
- `public void setSkipAll(boolean skip)` 
- `public boolean isSkippingAll()` 
- `protected Set<ResourceLocation> getSkippedIds()` 
- `protected Set<EquipmentSlotGroup> getSkippedGroups()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GatherSkippedAttributeTooltipsHandler {
    @SubscribeEvent
    public static void onGatherSkippedAttributeTooltips(GatherSkippedAttributeTooltipsEvent event) {
        // Handle event
    }
}
```
