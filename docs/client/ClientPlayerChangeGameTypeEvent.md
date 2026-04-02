# ClientPlayerChangeGameTypeEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when the client player is notified of a change of `GameType` from the server.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `info` | `PlayerInfo` |  |
| `currentGameType` | `GameType` |  |
| `newGameType` | `GameType` |  |

## Accessors

- `public PlayerInfo getInfo()` 
- `public GameType getCurrentGameType()` 
- `public GameType getNewGameType()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientPlayerChangeGameTypeHandler {
    @SubscribeEvent
    public static void onClientPlayerChangeGameType(ClientPlayerChangeGameTypeEvent event) {
        // Handle event
    }
}
```
