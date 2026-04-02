# IdMappingEvent

**Package:** `net.neoforged.neoforge.registries`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Called whenever the ID mapping might have changed. If you register for this event, you
will be called back whenever the client or server loads an ID set. This includes both
when the ID maps are loaded from disk, as well as when the ID maps revert to the initial
state.



Note: you cannot change the IDs that have been allocated, but you might want to use
this event to update caches or other in-mod artifacts that might be impacted by an ID
change.



Fired on the `NeoForge#EVENT_BUS forge bus`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `registry` | `ResourceLocation` |  |
| `key` | `ResourceLocation` |  |
| `oldId` | `int` |  |
| `newId` | `int` |  |
| `registries` | `public ImmutableSet<ResourceLocation>` |  |
| `frozen` | `public boolean` |  |

## Accessors

- `public ImmutableSet<ResourceLocation> getRegistries()` 
- `public ImmutableList<ModRemapping> getRemaps(ResourceLocation registry)` 
- `public boolean isFrozen()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class IdMappingHandler {
    @SubscribeEvent
    public static void onIdMapping(IdMappingEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### ModRemapping

### IdRemapping
