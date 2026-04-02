# RegisterMaterialAtlasesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for registering TextureAtlas texture atlases that will be used with `Material` or
other systems which retrieve the atlas via `Minecraft#getTextureAtlas(ResourceLocation)` or
`ModelManager#getAtlas(ResourceLocation)`.



If an atlas is registered via this event, then it must NOT be used through a `TextureAtlasHolder`.



This event fires during startup when the `ModelManager` is constructed.



This event is not ICancellableEvent cancellable.



This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterMaterialAtlasesHandler {
    @SubscribeEvent
    public static void onRegisterMaterialAtlases(RegisterMaterialAtlasesEvent event) {
        // Handle event
    }
}
```
