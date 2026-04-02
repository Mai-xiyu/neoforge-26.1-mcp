# LivingDestroyBlockEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

Fired when the ender dragon or wither attempts to destroy a block and when ever a zombie attempts to break a door. Basically a event version of `Block#canEntityDestroy(BlockState, BlockGetter, BlockPos, Entity)`

This event is `ICancellableEvent`.
If this event is canceled, the block will not be destroyed.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `state` | `public BlockState` |  |
| `pos` | `public BlockPos` |  |

## Accessors

- `public BlockState getState()` 
- `public BlockPos getPos()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingDestroyBlockHandler {
    @SubscribeEvent
    public static void onLivingDestroyBlock(LivingDestroyBlockEvent event) {
        // Handle event
    }
}
```
