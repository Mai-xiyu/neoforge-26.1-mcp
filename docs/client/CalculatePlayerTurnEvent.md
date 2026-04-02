# CalculatePlayerTurnEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired in MouseHandler#turnPlayer() MouseHandler#turnPlayer() when retrieving the values of Options#sensitivity() mouse sensitivity and Options#smoothCamera cinematic camera, prior to running calculations on these values.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `mouseSensitivity` | `double` |  |
| `cinematicCameraEnabled` | `boolean` |  |

## Accessors

- ` setMouseSensitivity()` 
- ` setCinematicCameraEnabled()` 
- `public double getMouseSensitivity()` 
- `public void setMouseSensitivity(double mouseSensitivity)` 
- `public boolean getCinematicCameraEnabled()` 
- `public void setCinematicCameraEnabled(boolean cinematicCameraEnabled)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CalculatePlayerTurnHandler {
    @SubscribeEvent
    public static void onCalculatePlayerTurn(CalculatePlayerTurnEvent event) {
        // Handle event
    }
}
```
