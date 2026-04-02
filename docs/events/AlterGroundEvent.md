# AlterGroundEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired when `AlterGroundDecorator#placeBlockAt(TreeDecorator.Context, BlockPos)` attempts to alter a ground block when generating a feature.
An example of this would be large spruce trees converting grass blocks into podzol.



This event is not ICancellableEvent cancellable.



This event is fired on the NeoForge#EVENT_BUS main Forge event bus only on the net.neoforged.fml.LogicalSide#SERVER logical server.



This event is fired on worker threads, meaning it is unsafe to access external global state.
Doing so may induce `ConcurrentModificationException` or deadlocks.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `context` | `TreeDecorator.Context` |  |
| `positions` | `List<BlockPos>` |  |
| `stateProvider` | `StateProvider` |  |

## Accessors

- `public TreeDecorator.Context getContext()` 
- `public List<BlockPos> getPositions()` 
- `public StateProvider getStateProvider()` 
- `public void setStateProvider(StateProvider provider)` 
- `BlockState getState(RandomSource random, BlockPos state)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AlterGroundHandler {
    @SubscribeEvent
    public static void onAlterGround(AlterGroundEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### StateProvider
