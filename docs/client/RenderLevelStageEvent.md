# RenderLevelStageEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fires at various times during LevelRenderer.renderLevel.
Check `#getStage` to render during the appropriate time for your use case.


This event is not ICancellableEvent cancellable, and does not HasResult have a result. 


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client. 

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `AFTER_SKY` | `Stage` |  |
| `AFTER_SOLID_BLOCKS` | `Stage` |  |
| `AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS` | `Stage` |  |
| `AFTER_CUTOUT_BLOCKS` | `Stage` |  |
| `AFTER_ENTITIES` | `Stage` |  |
| `stage` | `Stage` |  |
| `levelRenderer` | `LevelRenderer` |  |
| `poseStack` | `PoseStack` |  |
| `modelViewMatrix` | `Matrix4f` |  |
| `projectionMatrix` | `Matrix4f` |  |
| `renderTick` | `int` |  |
| `partialTick` | `DeltaTracker` |  |
| `camera` | `Camera` |  |
| `frustum` | `Frustum` |  |

## Accessors

- `public Stage getStage()` 
- `public LevelRenderer getLevelRenderer()` 
- `public PoseStack getPoseStack()` 
- `public Matrix4f getModelViewMatrix()` 
- `public Matrix4f getProjectionMatrix()` 
- `public int getRenderTick()` 
- `public DeltaTracker getPartialTick()` 
- `public Camera getCamera()` 
- `public Frustum getFrustum()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderLevelStageHandler {
    @SubscribeEvent
    public static void onRenderLevelStage(RenderLevelStageEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### RegisterStageEvent

### Stage
