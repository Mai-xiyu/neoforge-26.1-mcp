# SleepFinishedTimeEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LevelEvent`

## Description

This event is fired when all players are asleep and the time should be set to day.
setWakeUpTime(wakeUpTime) sets a new time that will be added to the dayTime.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `newTime` | `long` |  |

## Accessors

- `public long getNewTime()` 
- `public boolean setTimeAddition(long newTimeIn)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SleepFinishedTimeHandler {
    @SubscribeEvent
    public static void onSleepFinishedTime(SleepFinishedTimeEvent event) {
        // Handle event
    }
}
```
