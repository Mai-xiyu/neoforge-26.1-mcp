# BlockDropsEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `BlockEvent`

## Description

Fired when a block is broken and the drops have been determined, but before they have been added to the world. This event can be used to manipulate the dropped items and experience.



No guarantees can be made about the block. It will either have already been removed from the world, or will be removed after the event terminates.



If you wish to edit the state of the block in-world, use `BreakEvent`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `drops` | `List<ItemEntity>` |  |
| `blockEntity` | `BlockEntity` |  |
| `breaker` | `Entity` |  |
| `tool` | `ItemStack` |  |
| `level` | `ServerLevel` |  |
| `droppedExperience` | `int` |  |

## Accessors

- `public List<ItemEntity> getDrops()` 
- `public BlockEntity getBlockEntity()` 
- `public Entity getBreaker()` 
- `public ItemStack getTool()` 
- `public void setCanceled(boolean canceled)` 
- `public ServerLevel getLevel()` 
- `public int getDroppedExperience()` 
- `public void setDroppedExperience(int experience)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class BlockDropsHandler {
    @SubscribeEvent
    public static void onBlockDrops(BlockDropsEvent event) {
        // Handle event
    }
}
```
