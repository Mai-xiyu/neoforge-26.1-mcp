# ClientChatEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when the client is about to send a chat message to the server.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the chat message will not be sent to the server.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | `String` |  |
| `originalMessage` | `String` |  |

## Accessors

- `public String getMessage()` 
- `public void setMessage(String message)` 
- `public String getOriginalMessage()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientChatHandler {
    @SubscribeEvent
    public static void onClientChat(ClientChatEvent event) {
        // Handle event
    }
}
```
