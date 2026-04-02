# LivingEquipmentChangeEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

`LivingEquipmentChangeEvent` is fired when the Equipment of a Entity changes. 
This event is fired whenever changes in Equipment are detected in `LivingEntity#tick()`. 
This also includes entities joining the World, as well as being cloned. 
This event is fired on server-side only. 

`#slot` contains the affected `EquipmentSlot`. 
`#from` contains the `ItemStack` that was equipped previously. 
`#to` contains the `ItemStack` that is equipped now. 

This event is not `ICancellableEvent`. 

This event does not have a result. `HasResult` 

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `slot` | `public EquipmentSlot` |  |
| `from` | `public ItemStack` |  |
| `to` | `public ItemStack` |  |

## Accessors

- `public EquipmentSlot getSlot()` 
- `public ItemStack getFrom()` 
- `public ItemStack getTo()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingEquipmentChangeHandler {
    @SubscribeEvent
    public static void onLivingEquipmentChange(LivingEquipmentChangeEvent event) {
        // Handle event
    }
}
```
