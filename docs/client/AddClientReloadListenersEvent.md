# AddClientReloadListenersEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `SortedReloadListenerEvent`

## Description

This event allows mods to register client-side reload listeners to the resource manager.
This event is fired once during the construction of the `Minecraft` instance.



This event is only fired on the LogicalSide#CLIENT logical client.
@see `AddServerReloadListenersEvent` for registering server-side reload listeners.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddClientReloadListenersHandler {
    @SubscribeEvent
    public static void onAddClientReloadListeners(AddClientReloadListenersEvent event) {
        // Handle event
    }
}
```
