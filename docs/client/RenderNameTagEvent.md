# RenderNameTagEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `EntityEvent`

## Description

This event is fired before an entity renderer renders the nameplate of an entity.
It allows reacting to the render and controlling if the name plate will be rendered, as well as changing the rendered name.



This event is only fired on the logical client.
@see EntityRenderer

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `content` | `Component` |  |
| `originalContent` | `Component` |  |
| `entityRenderer` | `EntityRenderer<?>` |  |
| `poseStack` | `PoseStack` |  |
| `multiBufferSource` | `MultiBufferSource` |  |
| `packedLight` | `int` |  |
| `partialTick` | `float` |  |

## Accessors

- `public void setCanRender(TriState canRender)` 
- `public TriState canRender()` 
- `public void setContent(Component contents)` 
- `public Component getContent()` 
- `public Component getOriginalContent()` 
- `public EntityRenderer<?> getEntityRenderer()` 
- `public PoseStack getPoseStack()` 
- `public MultiBufferSource getMultiBufferSource()` 
- `public int getPackedLight()` 
- `public float getPartialTick()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderNameTagHandler {
    @SubscribeEvent
    public static void onRenderNameTag(RenderNameTagEvent event) {
        // Handle event
    }
}
```
