# BonemealEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

This event is called when a player attempts to use bone meal on a block.



This event can be cancelled, preventing vanilla handling from occurring.
If you want to perform custom logic, cancel the event and perform your own handling.
Use `#setSuccessful(boolean)` to control if handling should believe bone meal was used.



This event is fired on both client and server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |
| `level` | `Level` |  |
| `pos` | `BlockPos` |  |
| `state` | `BlockState` |  |
| `stack` | `ItemStack` |  |
| `validBonemealTarget` | `boolean` |  |
| `successful` | `boolean` |  |

## Accessors

- `public Player getPlayer()` 
- `public Level getLevel()` 
- `public BlockPos getPos()` 
- `public BlockState getState()` 
- `public ItemStack getStack()` 
- `public boolean isValidBonemealTarget()` 
- `public void setSuccessful(boolean success)` 
- `public boolean isSuccessful()` 
- `public void setCanceled(boolean canceled)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class BonemealHandler {
    @SubscribeEvent
    public static void onBonemeal(BonemealEvent event) {
        // Handle event
    }
}
```
