# RegisterRenderBuffersEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register custom BufferBuilder render buffers.
This allows to have dedicated BufferBuilder render buffer for each RenderType render type
that can filled and rendered in batch
This event is fired after the default Minecraft render buffers have been registered.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterRenderBuffersHandler {
    @SubscribeEvent
    public static void onRegisterRenderBuffers(RegisterRenderBuffersEvent event) {
        // Handle event
    }
}
```
