# RenderArmEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired before the player's arm is rendered in first person. This is a more targeted version of `RenderHandEvent`,
and can be used to replace the rendering of the player's arm, such as for rendering armor on the arm or outright
replacing the arm with armor.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If this event is cancelled, then the arm will not be rendered.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `arm` | `HumanoidArm` |  |
| `poseStack` | `PoseStack` |  |
| `multiBufferSource` | `MultiBufferSource` |  |
| `packedLight` | `int` |  |
| `player` | `AbstractClientPlayer` |  |

## Accessors

- `public HumanoidArm getArm()` 
- `public PoseStack getPoseStack()` 
- `public MultiBufferSource getMultiBufferSource()` 
- `public int getPackedLight()` 
- `public AbstractClientPlayer getPlayer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderArmHandler {
    @SubscribeEvent
    public static void onRenderArm(RenderArmEvent event) {
        // Handle event
    }
}
```
