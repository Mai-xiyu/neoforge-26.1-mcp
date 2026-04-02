# RegisterSelectItemModelPropertyEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when item model property selectors are registered.



This event is fired during the model registration process for item model property selectors.
It is used to register custom selector types which can be used to create custom item model property selectors.



This event is fired on the mod event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterSelectItemModelPropertyHandler {
    @SubscribeEvent
    public static void onRegisterSelectItemModelProperty(RegisterSelectItemModelPropertyEvent event) {
        // Handle event
    }
}
```
