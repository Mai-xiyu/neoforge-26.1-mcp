# RenderItemInFrameEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired before an item stack is rendered in an item frame.
This can be used to prevent normal rendering or add custom rendering.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, then the item stack will not be rendered


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see ItemFrameRenderer

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `itemStack` | `ItemStack` |  |
| `itemFrameEntity` | `ItemFrame` |  |
| `renderer` | `ItemFrameRenderer<?>` |  |
| `poseStack` | `PoseStack` |  |
| `multiBufferSource` | `MultiBufferSource` |  |
| `packedLight` | `int` |  |

## Accessors

- `public ItemStack getItemStack()` 
- `public ItemFrame getItemFrameEntity()` 
- `public ItemFrameRenderer<?> getRenderer()` 
- `public PoseStack getPoseStack()` 
- `public MultiBufferSource getMultiBufferSource()` 
- `public int getPackedLight()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderItemInFrameHandler {
    @SubscribeEvent
    public static void onRenderItemInFrame(RenderItemInFrameEvent event) {
        // Handle event
    }
}
```
