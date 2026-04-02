# RegisterTextureAtlasesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for registering TextureAtlas texture atlases to the `AtlasManager`.



This event fires during startup when the `AtlasManager` is constructed.



This event is not ICancellableEvent cancellable.



This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterTextureAtlasesHandler {
    @SubscribeEvent
    public static void onRegisterTextureAtlases(RegisterTextureAtlasesEvent event) {
        // Handle event
    }
}
```
