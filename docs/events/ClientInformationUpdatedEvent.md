# ClientInformationUpdatedEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

ClientInformationUpdatedEvent is fired when a player changes server-synced client options,
specifically those in `net.minecraft.server.level.ClientInformation`.



This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `entity` | `ServerPlayer` |  |
| `updatedInformation` | `ClientInformation` |  |
| `oldInformation` | `ClientInformation` |  |

## Accessors

- `public ServerPlayer getEntity()` 
- `public ClientInformation getUpdatedInformation()` 
- `public ClientInformation getOldInformation()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ClientInformationUpdatedHandler {
    @SubscribeEvent
    public static void onClientInformationUpdated(ClientInformationUpdatedEvent event) {
        // Handle event
    }
}
```
