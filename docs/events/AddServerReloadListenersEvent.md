# AddServerReloadListenersEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `SortedReloadListenerEvent`

## Description

The main ResourceManager is recreated on each reload, just after `ReloadableServerResources`'s creation.
The event is fired on each reload and lets modders add their own ReloadListeners, for server-side resources.
The event is fired on the `NeoForge#EVENT_BUS`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `serverResources` | `ReloadableServerResources` |  |
| `conditionContext` | `ICondition.IContext` |  |
| `registryAccess` | `RegistryAccess` |  |

## Accessors

- `public ReloadableServerResources getServerResources()` 
- `public ICondition.IContext getConditionContext()` 
- `public RegistryAccess getRegistryAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddServerReloadListenersHandler {
    @SubscribeEvent
    public static void onAddServerReloadListeners(AddServerReloadListenersEvent event) {
        // Handle event
    }
}
```
