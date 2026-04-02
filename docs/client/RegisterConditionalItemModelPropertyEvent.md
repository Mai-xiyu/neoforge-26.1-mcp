# RegisterConditionalItemModelPropertyEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when special model renderers are registered.



This event is fired during the model registration process for conditional item model properties.
It is used to register property codecs which can be used to create custom conditional item model properties.



This event is fired on the mod event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterConditionalItemModelPropertyHandler {
    @SubscribeEvent
    public static void onRegisterConditionalItemModelProperty(RegisterConditionalItemModelPropertyEvent event) {
        // Handle event
    }
}
```
