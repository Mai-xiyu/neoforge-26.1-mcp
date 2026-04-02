# RegisterSpecialModelRendererEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when special model renderers are registered.



This event is fired during the model registration process for special item model renderers.
It is used to register custom special item model renderer codecs which can be used to create custom special item model renderers.



This event is fired on the mod event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterSpecialModelRendererHandler {
    @SubscribeEvent
    public static void onRegisterSpecialModelRenderer(RegisterSpecialModelRendererEvent event) {
        // Handle event
    }
}
```
