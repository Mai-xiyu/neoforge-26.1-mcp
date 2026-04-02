# ArrowNockEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

ArrowNockEvent is fired when a player begins using a bow.
This event is fired whenever a player begins using a bow in
`BowItem#use(Level, Player, InteractionHand)`.

This event is `ICancellableEvent`.
Cancelling the event causes the action to fail with `net.minecraft.world.InteractionResult#FAIL`.



This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `bow` | `public ItemStack` |  |
| `level` | `public Level` |  |
| `hand` | `public InteractionHand` |  |
| `action` | `public InteractionResultHolder<ItemStack>` |  |

## Accessors

- `public ItemStack getBow()` 
- `public Level getLevel()` 
- `public InteractionHand getHand()` 
- `public InteractionResultHolder<ItemStack> getAction()` 
- `public void setAction(InteractionResultHolder<ItemStack> action)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ArrowNockHandler {
    @SubscribeEvent
    public static void onArrowNock(ArrowNockEvent event) {
        // Handle event
    }
}
```
