# ComputeFovModifierEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired after the field of vision (FOV) modifier for the player is calculated to allow developers to adjust it further.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see ViewportEvent.ComputeFov

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |
| `fovModifier` | `float` |  |
| `newFovModifier` | `float` |  |

## Accessors

- `public Player getPlayer()` 
- `public float getFovModifier()` 
- `public float getNewFovModifier()` 
- `public void setNewFovModifier(float newFovModifier)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ComputeFovModifierHandler {
    @SubscribeEvent
    public static void onComputeFovModifier(ComputeFovModifierEvent event) {
        // Handle event
    }
}
```
