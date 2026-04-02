# CalculateDetachedCameraDistanceEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for hooking the maximum distance from the player to the camera in third-person view.
The ray-cast that reduces this distance based on the blocks around the player is invoked after this event is fired.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `camera` | `Camera` |  |
| `cameraFlipped` | `boolean` |  |
| `entityScalingFactor` | `float` |  |
| `distance` | `float` |  |

## Accessors

- `public Camera getCamera()` 
- `public boolean isCameraFlipped()` 
- `public float getEntityScalingFactor()` 
- `public float getDistance()` 
- `public void setDistance(float distance)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CalculateDetachedCameraDistanceHandler {
    @SubscribeEvent
    public static void onCalculateDetachedCameraDistance(CalculateDetachedCameraDistanceEvent event) {
        // Handle event
    }
}
```
