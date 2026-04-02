# BlockEntityTypeAddBlocksEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🔧 MOD Event Bus
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows injecting new blocks into a block entity's `BlockEntityType#validBlocks` field in a safe manner.
The class of the newly injected block should share the highest common class that all existing blocks in the targeted validBlocks has.
Please use this event instead of manipulating `BlockEntityType` directly.



Example: If the valid blocks list has StandingSignBlock entry and WallSignBlock entry, the common class is SignBlock,
the given block must be a SignBlock or have `SignBlock` as a parent class in its hierarchy. Example:
{@snippet :
public static void onBlockEntityValidBlocks(BlockEntityTypeAddBlocksEvent event) {
event.modify(BlockEntityType.SIGN, MODDED_SIGN_BLOCK.get());
}
}

## Accessors

- `private private Class<?> getCommonSuperClassForExistingValidBlocks(Set<Block> validBlocks)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod", bus = EventBusSubscriber.Bus.MOD)
public class BlockEntityTypeAddBlocksHandler {
    @SubscribeEvent
    public static void onBlockEntityTypeAddBlocks(BlockEntityTypeAddBlocksEvent event) {
        // Handle event
    }
}
```
