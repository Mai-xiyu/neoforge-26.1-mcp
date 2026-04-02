# PlayerNegotiationEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired on the server when a connection has started the Forge handshake,
Forge will wait for all enqueued work to be completed before proceeding further with the login process.

This event can be used to delay the player login until any necessary work such as preloading user data has completed.

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `connection` | `public Connection` |  |
| `profile` | `public GameProfile` |  |

## Accessors

- `public Connection getConnection()` 
- `public GameProfile getProfile()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerNegotiationHandler {
    @SubscribeEvent
    public static void onPlayerNegotiation(PlayerNegotiationEvent event) {
        // Handle event
    }
}
```
