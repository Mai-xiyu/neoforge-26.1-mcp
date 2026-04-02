# ArrowLooseEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

ArrowLooseEvent is fired when a player stops using a bow.
This event is fired whenever a player stops using a bow in
`BowItem#releaseUsing(ItemStack, Level, LivingEntity, int)`.

`#bow` contains the ItemBow ItemStack that was used in this event.
`#charge` contains the value for how much the player had charged before stopping the shot.

This event is `ICancellableEvent`.
If this event is canceled, the player does not stop using the bow.
For crossbows, the charge will always be 1; Set it to -1 in order to prevent firing the arrow. 

This event does not have a result. `Event.HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `bow` | `public ItemStack` |  |
| `level` | `public Level` |  |
| `charge` | `public int` |  |

## Accessors

- `public ItemStack getBow()` 
- `public Level getLevel()` 
- `public int getCharge()` 
- `public void setCharge(int charge)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ArrowLooseHandler {
    @SubscribeEvent
    public static void onArrowLoose(ArrowLooseEvent event) {
        // Handle event
    }
}
```
