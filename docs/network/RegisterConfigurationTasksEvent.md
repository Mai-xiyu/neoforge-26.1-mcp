# RegisterConfigurationTasksEvent

**Package:** `net.neoforged.neoforge.network.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when the server configuration packet listener collects all the configuration tasks
that should be run on the server to configure the client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `configurationTasks` | `.Internal
    public Queue<ConfigurationTask>` |  |
| `listener` | `ServerConfigurationPacketListener` |  |

## Accessors

- `.Internal
    public Queue<ConfigurationTask> getConfigurationTasks()` 
- `public ServerConfigurationPacketListener getListener()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterConfigurationTasksHandler {
    @SubscribeEvent
    public static void onRegisterConfigurationTasks(RegisterConfigurationTasksEvent event) {
        // Handle event
    }
}
```
