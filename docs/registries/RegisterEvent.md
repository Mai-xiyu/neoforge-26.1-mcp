# RegisterEvent

**Package:** `net.neoforged.neoforge.registries`
**Bus:** 🔧 MOD Event Bus
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for each registry when it is ready to have modded objects registered.
This event is fired for all builtin registries from vanilla (see `BuiltInRegistries`) and mods.


This event is fired on the mod-specific event bus, on both net.neoforged.fml.LogicalSide logical sides.
@see #register(ResourceKey, ResourceLocation, Supplier)
@see #register(ResourceKey, Consumer)

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `registryKey` | `ResourceKey<? extends Registry<?>>` |  |
| `registry` | `Registry<?>` |  |

## Accessors

- `public ResourceKey<? extends Registry<?>> getRegistryKey()` 
- `public Registry<?> getRegistry()` 
- `public <T> Registry<T> getRegistry(ResourceKey<? extends Registry<T>> key)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod", bus = EventBusSubscriber.Bus.MOD)
public class RegisterHandler {
    @SubscribeEvent
    public static void onRegister(RegisterEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### RegisterHelper
