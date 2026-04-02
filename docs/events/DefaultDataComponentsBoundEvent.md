# DefaultDataComponentsBoundEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is emitted after data components have been bound to holders in a registry.


This can occur on the server when datapacks are reloaded or when the client receives this data upon joining a world.


This event signals when `Holder#areComponentsBound()` becomes true.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `updateCause` | `UpdateCause` |  |

## Accessors

- `public UpdateCause getUpdateCause()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class DefaultDataComponentsBoundHandler {
    @SubscribeEvent
    public static void onDefaultDataComponentsBound(DefaultDataComponentsBoundEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### UpdateCause
