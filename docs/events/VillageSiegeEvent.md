# VillageSiegeEvent

**Package:** `net.neoforged.neoforge.event.village`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

VillageSiegeEvent is fired just before a zombie siege finds a successful location in
`VillageSiege#tryToSetupSiege(ServerLevel)`, to give mods the chance to stop the siege.

This event is `ICancellableEvent`; canceling stops the siege.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `siege` | `public VillageSiege` |  |
| `level` | `public Level` |  |
| `player` | `public Player` |  |
| `attemptedSpawnPos` | `public Vec3` |  |

## Accessors

- `public VillageSiege getSiege()` 
- `public Level getLevel()` 
- `public Player getPlayer()` 
- `public Vec3 getAttemptedSpawnPos()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class VillageSiegeHandler {
    @SubscribeEvent
    public static void onVillageSiege(VillageSiegeEvent event) {
        // Handle event
    }
}
```
