# BabyEntitySpawnEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `net.neoforged.bus.api.Event`

## Description

BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned. 
Parents will have disengaged their relationship. `ICancellableEvent` 
It is possible to change the child completely by using `#setChild(AgeableMob)` 
This event is fired from `Animal#spawnChildFromBreeding(ServerLevel, Animal)` and
`Fox#spawnChildFromBreeding(ServerLevel, Animal)` 

`#parentA` contains the initiating parent entity.
`#parentB` contains the secondary parent entity.
`#causedByPlayer` contains the player responsible for the breading (if applicable).
`#child` contains the child that will be spawned.

This event is `ICancellableEvent`.
If this event is canceled, the child Entity is not added to the world, and the parents 
will no longer attempt to mate.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `parentA` | `public Mob` |  |
| `parentB` | `public Mob` |  |
| `causedByPlayer` | `Player` |  |
| `child` | `AgeableMob` |  |

## Accessors

- `public Mob getParentA()` 
- `public Mob getParentB()` 
- `public Player getCausedByPlayer()` 
- `public AgeableMob getChild()` 
- `public void setChild(AgeableMob proposedChild)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class BabyEntitySpawnHandler {
    @SubscribeEvent
    public static void onBabyEntitySpawn(BabyEntitySpawnEvent event) {
        // Handle event
    }
}
```
