# PlayerHeartTypeEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Fired by `Gui.HeartType#forPlayer` to allow mods to change the heart sprite which is displayed in the player's
health bar.



This event is fired only on the client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `originalType` | `Gui.HeartType` |  |
| `type` | `Gui.HeartType` |  |

## Accessors

- `public Gui.HeartType getOriginalType()` 
- `public Gui.HeartType getType()` 
- `public void setType(Gui.HeartType type)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerHeartTypeHandler {
    @SubscribeEvent
    public static void onPlayerHeartType(PlayerHeartTypeEvent event) {
        // Handle event
    }
}
```
