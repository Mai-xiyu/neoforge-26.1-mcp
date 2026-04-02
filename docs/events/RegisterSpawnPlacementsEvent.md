# RegisterSpawnPlacementsEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event allows each `EntityType` to have a `SpawnPlacements.SpawnPredicate` registered or modified.
Spawn Predicates are checked whenever an `Entity` of the given `EntityType` spawns in the world naturally.
If registering your own entity's spawn placements, you should use `RegisterSpawnPlacementsEvent#register(EntityType, SpawnPlacementType, Heightmap.Types, SpawnPlacements.SpawnPredicate, Operation)`
So that you ensure that your entity has a heightmap type and placement type registered.
If modifying vanilla or another mod's spawn placements, you can use three operations:
REPLACE: checked first, the last mod to replace the predicate wipes out all other predicates. Listen with a low `EventPriority` if you need to do this.
OR: checked second, only one of these predicates must pass along with the original predicate
AND: checked third, these predicates must all pass along with the original predicate



This event is not ICancellableEvent cancellable and does not Event.HasResult have a result.



Fired on the Mod bus `IModBusEvent`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `spawnType` | `public SpawnPlacementType` |  |
| `heightmapType` | `public Heightmap.Types` |  |

## Accessors

- `public SpawnPlacementType getSpawnType()` 
- `public Heightmap.Types getHeightmapType()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterSpawnPlacementsHandler {
    @SubscribeEvent
    public static void onRegisterSpawnPlacements(RegisterSpawnPlacementsEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Operation

### MergedSpawnPredicate
