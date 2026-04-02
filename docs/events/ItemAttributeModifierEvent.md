# ItemAttributeModifierEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🔧 MOD Event Bus
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired when the attributes for an item stack are queried (for any reason) through `ItemStack#getAttributeModifiers()`.

This event is fired regardless of if the stack has `DataComponents#ATTRIBUTE_MODIFIERS` or not. If your attribute should be
ignored when attributes are overridden, you can check for the presence of the component.



This event may be fired on both the logical server and logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `itemStack` | `ItemStack` |  |
| `defaultModifiers` | `ItemAttributeModifiers` |  |
| `modifiers` | `List<ItemAttributeModifiers.Entry>` |  |
| `builder` | `private ItemAttributeModifiersBuilder` |  |
| `entryView` | `List<ItemAttributeModifiers.Entry>` |  |

## Accessors

- `public ItemStack getItemStack()` 
- `public ItemAttributeModifiers getDefaultModifiers()` 
- `public List<ItemAttributeModifiers.Entry> getModifiers()` 
- `private private ItemAttributeModifiersBuilder getBuilder()` 
- `private static List<ItemAttributeModifiers.Entry> getEntryView()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod", bus = EventBusSubscriber.Bus.MOD)
public class ItemAttributeModifierHandler {
    @SubscribeEvent
    public static void onItemAttributeModifier(ItemAttributeModifierEvent event) {
        // Handle event
    }
}
```
