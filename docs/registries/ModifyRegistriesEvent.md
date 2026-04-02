# ModifyRegistriesEvent

**Package:** `net.neoforged.neoforge.registries`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired during startup after builtin registries are constructed.
For vanilla registries, this event is fired after vanilla entries are registered but before modded entries.
For modded registries, this event is fired before any entry is registered.


This event can be used to register IRegistryExtension#addCallback(RegistryCallback) callbacks to the registry.


This event cannot be used to modify datapack registries.


This event is not ICancellableEvent cancellable.


This event is fired on the mod-specific event bus, on both LogicalSide logical sides.
@see NewRegistryEvent

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `registries` | `Iterable<? extends Registry<?>>` |  |

## Accessors

- `public Iterable<? extends Registry<?>> getRegistries()` 
- `public <T> Registry<T> getRegistry(ResourceKey<? extends Registry<T>> key)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ModifyRegistriesHandler {
    @SubscribeEvent
    public static void onModifyRegistries(ModifyRegistriesEvent event) {
        // Handle event
    }
}
```
