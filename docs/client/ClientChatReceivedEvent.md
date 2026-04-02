# ClientChatReceivedEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when a chat message is received on the client.
This can be used for filtering and detecting messages with specific words or phrases, and suppressing them.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the message is not displayed in the chat message window.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see ChatType

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | `Component` |  |
| `boundChatType` | `ChatType.Bound` |  |
| `sender` | `UUID` |  |
| `system` | `boolean` |  |
| `playerChatMessage` | `PlayerChatMessage` |  |
| `overlay` | `boolean` |  |

## Accessors

- `public Component getMessage()` 
- `public void setMessage(Component message)` 
- `public ChatType.Bound getBoundChatType()` 
- `public UUID getSender()` 
- `public boolean isSystem()` 
- `public static PlayerChatMessage getPlayerChatMessage()` 
- `public static boolean isOverlay()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientChatReceivedHandler {
    @SubscribeEvent
    public static void onClientChatReceived(ClientChatReceivedEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Player

### System
