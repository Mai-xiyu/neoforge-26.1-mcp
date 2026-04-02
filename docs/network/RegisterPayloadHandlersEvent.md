# RegisterPayloadHandlersEvent

**Package:** `net.neoforged.neoforge.network.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired when the `NetworkRegistry` is being set up.



This event is used to collect all the payload types and their handlers that should be used on the network.



There are a few base rules for custom payloads:

Payloads should not write their ids within their `StreamCodec`, as this will be done automatically.
Payloads must be registered before they can be sent over the network.
Payloads may only be sent over the `ConnectionProtocol` they were registered for.
By default, `PayloadRegistrar` will wrap handlers so they execute on the main thread instead of the network thread.
Payloads are always serialized, including for `Connection#isMemoryConnection() memory connections` (singleplayer and LAN hosts).


## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterPayloadHandlersHandler {
    @SubscribeEvent
    public static void onRegisterPayloadHandlers(RegisterPayloadHandlersEvent event) {
        // Handle event
    }
}
```
