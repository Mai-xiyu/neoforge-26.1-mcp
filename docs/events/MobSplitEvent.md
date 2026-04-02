# MobSplitEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

This event is fired whenever a mob is removed and splits into multiple children. It only fires on the logical server.



In vanilla, this event is fired by Slimes and Magma Cubes on death, from `Slime#remove(RemovalReason)`.



Mods may elect to fire this event for any mob that splits on removal.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `parent` | `Mob` |  |
| `children` | `List<Mob>` |  |

## Accessors

- `public Mob getParent()` 
- `public List<Mob> getChildren()` 
- `public void setCanceled(boolean canceled)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class MobSplitHandler {
    @SubscribeEvent
    public static void onMobSplit(MobSplitEvent event) {
        // Handle event
    }
}
```
