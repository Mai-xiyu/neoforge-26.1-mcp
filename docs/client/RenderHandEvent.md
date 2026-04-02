# RenderHandEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired before a hand is rendered in the first person view.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If this event is cancelled, then the hand will not be rendered.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see RenderArmEvent

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `hand` | `InteractionHand` |  |
| `poseStack` | `PoseStack` |  |
| `multiBufferSource` | `MultiBufferSource` |  |
| `packedLight` | `int` |  |
| `partialTick` | `float` |  |
| `interpolatedPitch` | `float` |  |
| `swingProgress` | `float` |  |
| `equipProgress` | `float` |  |
| `itemStack` | `ItemStack` |  |

## Accessors

- `public InteractionHand getHand()` 
- `public PoseStack getPoseStack()` 
- `public MultiBufferSource getMultiBufferSource()` 
- `public int getPackedLight()` 
- `public float getPartialTick()` 
- `public float getInterpolatedPitch()` 
- `public float getSwingProgress()` 
- `public float getEquipProgress()` 
- `public ItemStack getItemStack()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderHandHandler {
    @SubscribeEvent
    public static void onRenderHand(RenderHandEvent event) {
        // Handle event
    }
}
```
