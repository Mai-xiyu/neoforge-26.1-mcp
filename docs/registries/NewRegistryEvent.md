# NewRegistryEvent

**Package:** `net.neoforged.neoforge.registries`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when new registries can be constructed and registered.
This event is fired to register builtin registries, like the registries in `BuiltInRegistries`.
Builtin registries are registries which can only load entries registered in code.



For registering datapack registries that only load entries through JSON, see `DataPackRegistryEvent.NewRegistry`.



This event is fired on the mod-specific event bus, on both net.neoforged.fml.LogicalSide logical sides.
@see ModifyRegistriesEvent

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class NewRegistryHandler {
    @SubscribeEvent
    public static void onNewRegistry(NewRegistryEvent event) {
        // Handle event
    }
}
```
