# FurnaceFuelBurnTimeEvent

**Package:** `net.neoforged.neoforge.event.furnace`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

`FurnaceFuelBurnTimeEvent` is fired when determining the fuel value for an ItemStack. 

To set the burn time of your own item, use `Item#getBurnTime(ItemStack, RecipeType)` instead.

This event is fired from `EventHooks#getItemBurnTime(ItemStack, int, RecipeType)`.

This event is `ICancellableEvent` to prevent later handlers from changing the value.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `itemStack` | `ItemStack` |  |
| `recipeType` | `RecipeType<?>` |  |
| `burnTime` | `int` |  |

## Accessors

- `public ItemStack getItemStack()` 
- `public RecipeType<?> getRecipeType()` 
- `public void setBurnTime(int burnTime)` 
- ` setCanceled()` 
- `public int getBurnTime()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class FurnaceFuelBurnTimeHandler {
    @SubscribeEvent
    public static void onFurnaceFuelBurnTime(FurnaceFuelBurnTimeEvent event) {
        // Handle event
    }
}
```
