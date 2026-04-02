# EntityMobGriefingEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `EntityEvent`

## Description

EntityMobGriefingEvent is fired when mob griefing is about to occur and allows an event listener to specify whether it should or not.
This event is fired when ever the GameRules#RULE_MOBGRIEFING mob griefing game rule is checked.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `mobGriefingEnabled` | `boolean` |  |

## Accessors

- `public boolean isMobGriefingEnabled()` 
- `public void setCanGrief(boolean canGrief)` 
- `public boolean canGrief()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityMobGriefingHandler {
    @SubscribeEvent
    public static void onEntityMobGriefing(EntityMobGriefingEvent event) {
        // Handle event
    }
}
```
