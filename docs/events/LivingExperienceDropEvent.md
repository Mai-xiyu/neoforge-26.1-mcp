# LivingExperienceDropEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

Event for when an entity drops experience on its death, can be used to change
the amount of experience points dropped or completely prevent dropping of experience
by canceling the event.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `droppedExperience` | `public int` |  |
| `attackingPlayer` | `Player` |  |
| `originalExperience` | `public int` |  |

## Accessors

- `public int getDroppedExperience()` 
- `public void setDroppedExperience(int droppedExperience)` 
- `public Player getAttackingPlayer()` 
- `public int getOriginalExperience()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingExperienceDropHandler {
    @SubscribeEvent
    public static void onLivingExperienceDrop(LivingExperienceDropEvent event) {
        // Handle event
    }
}
```
