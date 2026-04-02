# ToastAddEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when the client queues a `Toast` message to be shown onscreen.
Toasts are small popups that appear on the top right of the screen, for certain actions such as unlocking Advancements and Recipes.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
Cancelling the event stops the toast from being queued, which means it never renders.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `toast` | `public Toast` |  |

## Accessors

- `public Toast getToast()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ToastAddHandler {
    @SubscribeEvent
    public static void onToastAdd(ToastAddEvent event) {
        // Handle event
    }
}
```
