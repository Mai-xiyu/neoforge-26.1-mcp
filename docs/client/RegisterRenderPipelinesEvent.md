# RegisterRenderPipelinesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register custom RenderPipeline pipelines.
This event is fired after the default Minecraft pipelines have been registered.


This event is not ICancellableEvent cancellable.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterRenderPipelinesHandler {
    @SubscribeEvent
    public static void onRegisterRenderPipelines(RegisterRenderPipelinesEvent event) {
        // Handle event
    }
}
```
