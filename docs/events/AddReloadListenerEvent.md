# AddReloadListenerEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

The main ResourceManager is recreated on each reload, just after `ReloadableServerResources`'s creation.
The event is fired on each reload and lets modders add their own ReloadListeners, for server-side resources.
The event is fired on the `NeoForge#EVENT_BUS`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `listeners` | `public List<PreparableReloadListener>` |  |
| `serverResources` | `ReloadableServerResources` |  |
| `conditionContext` | `ICondition.IContext` |  |
| `registryAccess` | `RegistryAccess` |  |

## Accessors

- `public List<PreparableReloadListener> getListeners()` 
- `public ReloadableServerResources getServerResources()` 
- `public ICondition.IContext getConditionContext()` 
- `public RegistryAccess getRegistryAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddReloadListenerHandler {
    @SubscribeEvent
    public static void onAddReloadListener(AddReloadListenerEvent event) {
        // Handle event
    }
}
```
