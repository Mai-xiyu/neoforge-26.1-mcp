# PlayerDestroyItemEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

PlayerDestroyItemEvent is fired when a player destroys an item.
This event is fired whenever a player destroys an item in
`MultiPlayerGameMode#destroyBlock(BlockPos)`,
`MultiPlayerGameMode#useItem(Player, InteractionHand)`,
`MultiPlayerGameMode#useItemOn(LocalPlayer, InteractionHand, BlockHitResult)` ,
`Player#attack(Entity)`,
`Player#hurtCurrentlyUsedShield(float)`,
`Player#interactOn(Entity, InteractionHand)`,
`CommonHooks#getCraftingRemainingItem(ItemStack)`,
`ServerPlayerGameMode#useItem(ServerPlayer, Level, ItemStack, InteractionHand)` ,
`ServerPlayerGameMode#useItemOn(ServerPlayer, Level, ItemStack, InteractionHand, BlockHitResult)`
and `ServerPlayerGameMode#destroyBlock(BlockPos)`.

`#original` contains the original ItemStack before the item was destroyed. 
(@link #hand) contains the hand that the current item was held in.

This event is not `ICancellableEvent`.

This event does not have a result. `HasResult`

This event is fired from `EventHooks#onPlayerDestroyItem(Player, ItemStack, InteractionHand)`.
This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `original` | `public ItemStack` |  |
| `hand` | `InteractionHand` |  |

## Accessors

- `public ItemStack getOriginal()` 
- `public InteractionHand getHand()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerDestroyItemHandler {
    @SubscribeEvent
    public static void onPlayerDestroyItem(PlayerDestroyItemEvent event) {
        // Handle event
    }
}
```
