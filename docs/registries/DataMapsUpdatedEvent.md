# DataMapsUpdatedEvent

**Package:** `net.neoforged.neoforge.registries.datamaps`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired on the `net.neoforged.neoforge.common.NeoForge#EVENT_BUS game event bus` when the data maps of
a registry have either been UpdateCause#CLIENT_SYNC synced to the client or UpdateCause#SERVER_RELOAD reloaded on the server.



This event can be used to build caches (like weighed lists) or for post-processing the data map values. 
Remember however that the data map values should not end up referencing their owner, as they're not copied when attached to tags.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `registries` | `RegistryAccess` |  |
| `registry` | `Registry<?>` |  |
| `registryKey` | `ResourceKey<? extends Registry<?>>` |  |
| `cause` | `UpdateCause` |  |

## Accessors

- `public RegistryAccess getRegistries()` 
- `public Registry<?> getRegistry()` 
- `public ResourceKey<? extends Registry<?>> getRegistryKey()` 
- `public UpdateCause getCause()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class DataMapsUpdatedHandler {
    @SubscribeEvent
    public static void onDataMapsUpdated(DataMapsUpdatedEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### UpdateCause
