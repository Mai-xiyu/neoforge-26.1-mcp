# RegisterClientReloadListenersEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register their reload listeners on the client-side resource manager.
This event is fired once during the construction of the `Minecraft` instance.


For registering reload listeners on the server-side resource manager, see `AddReloadListenerEvent`.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterClientReloadListenersHandler {
    @SubscribeEvent
    public static void onRegisterClientReloadListeners(RegisterClientReloadListenersEvent event) {
        // Handle event
    }
}
```
