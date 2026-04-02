# OnDatapackSyncEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fires when a player joins the server or when the reload command is ran,
before tags and crafting recipes are sent to the client. Send datapack data
to clients when this event fires.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `playerList` | `PlayerList` |  |
| `relevantPlayers` | `Stream<ServerPlayer>` |  |
| `player` | `ServerPlayer` |  |

## Accessors

- `public PlayerList getPlayerList()` 
- `public Stream<ServerPlayer> getRelevantPlayers()` 
- `public ServerPlayer getPlayer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class OnDatapackSyncHandler {
    @SubscribeEvent
    public static void onOnDatapackSync(OnDatapackSyncEvent event) {
        // Handle event
    }
}
```
