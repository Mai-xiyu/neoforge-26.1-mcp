# MobDespawnEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `MobSpawnEvent`

## Description

This event is fired from `Mob#checkDespawn()`.
It fires once per tick per mob that is attempting to despawn.



It is fired for all entities, including Mob#isPersistenceRequired() persistent entities.
Additionally, it may be used to keep mobs from despawning in peaceful mode.



This event is only fired on the logical server.
@see Mob#checkDespawn()

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `result` | `Result` |  |

## Accessors

- `public void setResult(Result result)` 
- `public Result getResult()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class MobDespawnHandler {
    @SubscribeEvent
    public static void onMobDespawn(MobDespawnEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Result
