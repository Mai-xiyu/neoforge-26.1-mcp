# RegisterRangeSelectItemModelPropertyEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when special model renderers are registered.



This event is fired during the model registration process for range select item model properties.
It is used to register property codecs which can be used to create custom range select item model properties.



This event is fired on the mod event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterRangeSelectItemModelPropertyHandler {
    @SubscribeEvent
    public static void onRegisterRangeSelectItemModelProperty(RegisterRangeSelectItemModelPropertyEvent event) {
        // Handle event
    }
}
```
