# UseItemOnBlockEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fires on both the client and server thread when a player interacts with a block.


The event fires in three phases, corresponding with the three interaction behaviors:
`IItemExtension#onItemUseFirst`,
`BlockBehaviour#useItemOn`,
and `Item#useOn`.


The event fires after the interaction logic decides to run the particular interaction behavior,
as opposed to `net.neoforged.neoforge.event.entity.player.PlayerInteractEvent.RightClickBlock`
which fires once-per-right-click, before the behavior-choosing logic.


If the event is cancelled via `#cancelWithResult`,
then the normal interaction behavior for that phase will not run,
and the specified `InteractionResult` will be returned instead.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |
| `hand` | `InteractionHand` |  |
| `itemStack` | `ItemStack` |  |
| `pos` | `BlockPos` |  |
| `face` | `Direction` |  |
| `level` | `Level` |  |
| `useOnContext` | `UseOnContext` |  |
| `usePhase` | `UsePhase` |  |
| `side` | `LogicalSide` |  |
| `cancellationResult` | `ItemInteractionResult` |  |

## Accessors

- `public Player getPlayer()` 
- `public InteractionHand getHand()` 
- `public ItemStack getItemStack()` 
- `public BlockPos getPos()` 
- `public Direction getFace()` 
- `public Level getLevel()` 
- `public UseOnContext getUseOnContext()` 
- `public UsePhase getUsePhase()` 
- `public LogicalSide getSide()` 
- `public void cancelWithResult(ItemInteractionResult result)` 
- `public ItemInteractionResult getCancellationResult()` 
- `public void setCancellationResult(ItemInteractionResult result)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class UseItemOnBlockHandler {
    @SubscribeEvent
    public static void onUseItemOnBlock(UseItemOnBlockEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### UsePhase
