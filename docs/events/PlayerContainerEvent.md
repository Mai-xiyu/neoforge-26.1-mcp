# PlayerContainerEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `container` | `public AbstractContainerMenu` |  |

## Accessors

- `public AbstractContainerMenu getContainer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayerContainerHandler {
    @SubscribeEvent
    public static void onPlayerContainer(PlayerContainerEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Open

### Close
