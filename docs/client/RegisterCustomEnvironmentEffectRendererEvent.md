# RegisterCustomEnvironmentEffectRendererEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows users to register custom environmental effect renderers, such as `CustomCloudsRenderer`,
`CustomSkyboxRenderer` or `CustomWeatherEffectRenderer`.


This event is not ICancellableEvent cancellable.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterCustomEnvironmentEffectRendererHandler {
    @SubscribeEvent
    public static void onRegisterCustomEnvironmentEffectRenderer(RegisterCustomEnvironmentEffectRendererEvent event) {
        // Handle event
    }
}
```
