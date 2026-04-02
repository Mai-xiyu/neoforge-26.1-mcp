# VanillaGameEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

VanillaGameEvent is fired on the server whenever one of Vanilla's `GameEvent GameEvents` fire. 

This allows for listening to Vanilla's events in a more structured and global way that is not tied to needing a block entity listener. 

This event is fired on the `NeoForge#EVENT_BUS`. 

Cancel this event to prevent Vanilla from posting the `GameEvent` to all nearby `net.minecraft.world.level.gameevent.GameEventListener GameEventListeners`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `Level` |  |
| `cause` | `Entity` |  |
| `vanillaEvent` | `Holder<GameEvent>` |  |
| `eventPosition` | `Vec3` |  |
| `context` | `GameEvent.Context` |  |

## Accessors

- `public Level getLevel()` 
- `public Entity getCause()` 
- `public Holder<GameEvent> getVanillaEvent()` 
- `public Vec3 getEventPosition()` 
- `public GameEvent.Context getContext()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class VanillaGameHandler {
    @SubscribeEvent
    public static void onVanillaGame(VanillaGameEvent event) {
        // Handle event
    }
}
```
