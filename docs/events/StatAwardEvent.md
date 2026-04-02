# StatAwardEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `PlayerEvent`

## Description

Fired when a `Player` is awarded a `Stat`. This event is fired in `Player#awardStat(Stat, int)`



This event is `ICancellableEvent cancelable`.



This event does not have a result.



This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stat` | `Stat<?>` |  |
| `value` | `int` |  |

## Accessors

- `public Stat<?> getStat()` 
- `public void setStat(Stat<?> stat)` 
- `public int getValue()` 
- `public void setValue(int value)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class StatAwardHandler {
    @SubscribeEvent
    public static void onStatAward(StatAwardEvent event) {
        // Handle event
    }
}
```
