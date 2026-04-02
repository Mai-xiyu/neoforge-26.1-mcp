# ServerChatEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

This event is fired whenever a `ServerboundChatPacket` is received from a client
who has submitted their chat message.



This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the message will not be sent to clients.



This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `ServerPlayer` |  |
| `username` | `String` |  |
| `rawText` | `String` |  |
| `message` | `Component` |  |

## Accessors

- `public ServerPlayer getPlayer()` 
- `public String getUsername()` 
- `public String getRawText()` 
- `public void setMessage(Component message)` 
- `public Component getMessage()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerChatHandler {
    @SubscribeEvent
    public static void onServerChat(ServerChatEvent event) {
        // Handle event
    }
}
```
