# XpOrbTargetingEvent

**Package:** `net.neoforged.neoforge.entity`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event to determine which player an XP Orb should follow.



This is fired once a second when an XP Orbit find itself without a player to move toward.



The default (nearest player within `#getScanDistance()`) can be overridden with
either a new (Fake)Player or null to cancel the attraction.



Note that providing a player that is more than 8 blocks away does work, but it will
cause this event to be fired again after 20 ticks.



See also: `PlayerXpEvent.PickupXp` for cancelling the pickup.



This event is fired on both server and client on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `xpOrb` | `ExperienceOrb` |  |
| `scanDistance` | `double` |  |

## Accessors

- `public void setFollowingPlayer(Player newFollowingPlayer)` 
- `public ExperienceOrb getXpOrb()` 
- `public double getScanDistance()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class XpOrbTargetingHandler {
    @SubscribeEvent
    public static void onXpOrbTargeting(XpOrbTargetingEvent event) {
        // Handle event
    }
}
```
