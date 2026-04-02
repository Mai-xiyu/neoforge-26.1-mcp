# ItemStackedOnOtherEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

This event provides the functionality of the pair of functions used for the Bundle, in one event:

`Item#overrideOtherStackedOnMe(ItemStack, ItemStack, Slot, ClickAction, Player, SlotAccess)`
`Item#overrideStackedOnOther(ItemStack, Slot, ClickAction, Player)`

This event is fired before either of the above are called, when a carried item is clicked on top of another in a GUI slot.
This event (and items stacking on others in general) is fired on both LogicalSide sides, but only on LogicalSide#CLIENT the client in the creative menu.
Practically, that means that listeners of this event should require the player to be in survival mode if using capabilities that are not synced.



This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the container's logic halts, the carried item and the slot will not be swapped, and handling is assumed to have been done by the mod.
This also means that the two vanilla checks described above will not be called.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `carriedItem` | `ItemStack` |  |
| `stackedOnItem` | `ItemStack` |  |
| `slot` | `Slot` |  |
| `clickAction` | `ClickAction` |  |
| `player` | `Player` |  |
| `carriedSlotAccess` | `SlotAccess` |  |

## Accessors

- `public ItemStack getCarriedItem()` 
- `public ItemStack getStackedOnItem()` 
- `public Slot getSlot()` 
- `public ClickAction getClickAction()` 
- `public Player getPlayer()` 
- `public SlotAccess getCarriedSlotAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ItemStackedOnOtherHandler {
    @SubscribeEvent
    public static void onItemStackedOnOther(ItemStackedOnOtherEvent event) {
        // Handle event
    }
}
```
