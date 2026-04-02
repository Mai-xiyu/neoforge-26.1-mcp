# RegisterClientPayloadHandlersEvent

**Package:** `net.neoforged.neoforge.client.network.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired on the mod event bus when the `ClientNetworkRegistry` is being set up.



This event is used to assign payload handlers to clientbound payload types.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterClientPayloadHandlersHandler {
    @SubscribeEvent
    public static void onRegisterClientPayloadHandlers(RegisterClientPayloadHandlersEvent event) {
        // Handle event
    }
}
```
