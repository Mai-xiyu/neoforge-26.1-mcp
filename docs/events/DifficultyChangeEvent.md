# DifficultyChangeEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

DifficultyChangeEvent is fired when difficulty is changing. 

This event is fired via the `CommonHooks#onDifficultyChange(Difficulty, Difficulty)`.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `difficulty` | `public Difficulty` |  |
| `oldDifficulty` | `public Difficulty` |  |

## Accessors

- `public Difficulty getDifficulty()` 
- `public Difficulty getOldDifficulty()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class DifficultyChangeHandler {
    @SubscribeEvent
    public static void onDifficultyChange(DifficultyChangeEvent event) {
        // Handle event
    }
}
```
