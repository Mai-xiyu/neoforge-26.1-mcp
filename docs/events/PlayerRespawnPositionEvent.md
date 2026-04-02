# PlayerRespawnPositionEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Fired by `PlayerList#respawn(ServerPlayer, boolean)` before the server respawns a player.
This may be used to change the `ServerLevel` the player respawns in, as well as their respawn position.
This event is fired after `BlockState#getRespawnPosition(EntityType, LevelReader, BlockPos, float, LivingEntity)` is called.



This event is only fired on the logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `dimensionTransition` | `DimensionTransition` |  |
| `originalDimensionTransition` | `DimensionTransition` |  |
| `fromEndFight` | `boolean` |  |

## Accessors

- `public DimensionTransition getDimensionTransition()` 
- `public void setDimensionTransition(DimensionTransition dimensionTransition)` 
- `public void setRespawnLevel(ResourceKey<Level> respawnLevelResourceKey)` 
- `public DimensionTransition getOriginalDimensionTransition()` 
- `public void setCopyOriginalSpawnPosition(boolean copyOriginalSpawnPosition)` 
- `public boolean isFromEndFight()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerRespawnPositionHandler {
    @SubscribeEvent
    public static void onPlayerRespawnPosition(PlayerRespawnPositionEvent event) {
        // Handle event
    }
}
```
