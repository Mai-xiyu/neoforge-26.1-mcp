# RegisterCommandsEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Commands are rebuilt whenever `ReloadableServerResources` is recreated.
You can use this event to register your commands whenever the `Commands` class in constructed.
The event is fired on the `NeoForge#EVENT_BUS`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `dispatcher` | `CommandDispatcher<CommandSourceStack>` |  |
| `commandSelection` | `Commands.CommandSelection` |  |
| `buildContext` | `CommandBuildContext` |  |

## Accessors

- `public CommandDispatcher<CommandSourceStack> getDispatcher()` 
- `public Commands.CommandSelection getCommandSelection()` 
- `public CommandBuildContext getBuildContext()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterCommandsHandler {
    @SubscribeEvent
    public static void onRegisterCommands(RegisterCommandsEvent event) {
        // Handle event
    }
}
```
