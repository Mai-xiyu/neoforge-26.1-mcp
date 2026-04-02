# AddSectionGeometryEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event can be used to add static geometry to chunk sections. The event is fired on the main client thread
whenever a section is queued for (re)building. A rebuild can be triggered manually using e.g.
`net.minecraft.client.renderer.LevelRenderer#setSectionDirty(int, int, int)`.
While the event itself is fired on the main client thread, the renderers registered using
`net.neoforged.neoforge.client.event.AddSectionGeometryEvent#addRenderer(net.neoforged.neoforge.client.event.AddSectionGeometryEvent.AdditionalSectionRenderer)`
while be executed on the thread performing the rebuild, which will typically not be the main thread.
Therefore, any data from non-thread-safe data structures need to be retrieved during the event handler itself rather
than the renderer. A typical usage would look like

`@SubscribeEvent
public static void addChunkGeometry(AddSectionGeometryEvent ev) {
if (shouldAddGeometryTo(ev.getLevel(), ev.getSectionOrigin())) {
final var renderingData = getDataOnMainThread(ev.getLevel(), ev.getSectionOrigin());
ev.addRenderer(context -> renderThreadsafe(renderingData, context));
`
}
}

Note that the renderer is only added if something will actually be rendered in this example. This structure should be
replicated whenever the event is used, to allow for optimizations related to entirely empty sections.


This event is not ICancellableEvent cancellable


This event is fired on the NeoForge#EVENT_BUS main Forge event bus, only on the
LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `additionalRenderers` | `List<AdditionalSectionRenderer>` |  |
| `sectionOrigin` | `BlockPos` |  |
| `level` | `Level` |  |
| `poseStack` | `public PoseStack` |  |
| `region` | `BlockAndTintGetter` |  |

## Accessors

- `public List<AdditionalSectionRenderer> getAdditionalRenderers()` 
- `public BlockPos getSectionOrigin()` 
- `public Level getLevel()` 
- `public VertexConsumer getOrCreateChunkBuffer(RenderType type)` 
- `public QuadLighter getQuadLighter(boolean smooth)` 
- `public PoseStack getPoseStack()` 
- `public BlockAndTintGetter getRegion()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddSectionGeometryHandler {
    @SubscribeEvent
    public static void onAddSectionGeometry(AddSectionGeometryEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### AdditionalSectionRenderer

### SectionRenderingContext
