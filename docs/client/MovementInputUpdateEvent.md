# MovementInputUpdateEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description



Fired after the player's movement inputs are updated.


This event is not ICancellableEvent cancellable, and does not Event.HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `input` | `Input` |  |

## Accessors

- `public Input getInput()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class MovementInputUpdateHandler {
    @SubscribeEvent
    public static void onMovementInputUpdate(MovementInputUpdateEvent event) {
        // Handle event
    }
}
```
