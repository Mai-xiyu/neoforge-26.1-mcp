# ChunkTicketLevelUpdatedEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired whenever a chunk has its ticket level changed via the server's ChunkMap.



This event does not fire if the new ticket level is the same as the old level, or if both the
new AND old ticket levels represent values past the max chunk distance.



Due to how vanilla processes ticket level changes this event may be fired "twice" in one tick for the same chunk.
The scenario where this happens is when increasing the level from say 31 (ticking) to 32, the way vanilla does it
is by first changing it from 31 to 46, and then queuing the update from 46 to 32. However, when going from 32 to 31,
vanilla is able to go directly.



This event is not ICancellableEvent cancellable and does not HasResult have a result.



This event is fired on the NeoForge#EVENT_BUS main Forge event bus
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ServerLevel` |  |
| `chunkPos` | `long` |  |
| `oldTicketLevel` | `int` |  |
| `newTicketLevel` | `int` |  |
| `chunkHolder` | `ChunkHolder` |  |

## Accessors

- `public ServerLevel getLevel()` 
- `public long getChunkPos()` 
- `public int getOldTicketLevel()` 
- `public int getNewTicketLevel()` 
- `public ChunkHolder getChunkHolder()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ChunkTicketLevelUpdatedHandler {
    @SubscribeEvent
    public static void onChunkTicketLevelUpdated(ChunkTicketLevelUpdatedEvent event) {
        // Handle event
    }
}
```
