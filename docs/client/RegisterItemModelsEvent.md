# RegisterItemModelsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when item models are registered.



This event is fired during the model registration process for items.
It is used to register custom item model codecs which can be used to create custom item models.



This event is fired on the mod event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterItemModelsHandler {
    @SubscribeEvent
    public static void onRegisterItemModels(RegisterItemModelsEvent event) {
        // Handle event
    }
}
```
