# SpawnClusterSizeEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

This event is fired from `NaturalSpawner#spawnCategoryForPosition` when the spawning
system determines the maximum amount of the selected entity that can spawn at the same time.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `size` | `int` |  |
| `entity` | `Mob` |  |

## Accessors

- `public int getSize()` 
- `public void setSize(int size)` 
- `public Mob getEntity()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SpawnClusterSizeHandler {
    @SubscribeEvent
    public static void onSpawnClusterSize(SpawnClusterSizeEvent event) {
        // Handle event
    }
}
```
