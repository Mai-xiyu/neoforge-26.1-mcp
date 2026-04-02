# TagsUpdatedEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when tags are updated on either server or client. This event can be used to refresh data that depends on tags.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `registryAccess` | `RegistryAccess` |  |
| `updateCause` | `UpdateCause` |  |

## Accessors

- `public RegistryAccess getRegistryAccess()` 
- `public UpdateCause getUpdateCause()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class TagsUpdatedHandler {
    @SubscribeEvent
    public static void onTagsUpdated(TagsUpdatedEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### UpdateCause
