# RegisterClientCommandsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register client commands.


Some command arguments behave differently for the client commands dispatcher:

`ResourceLocationArgument#getAdvancement(com.mojang.brigadier.context.CommandContext, String)` only returns
advancements that are shown on the advancements screen.
`ObjectiveArgument#getObjective(com.mojang.brigadier.context.CommandContext, String)` only returns
objectives that are displayed to the player.



This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see RegisterCommandsEvent

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `dispatcher` | `CommandDispatcher<CommandSourceStack>` |  |
| `buildContext` | `CommandBuildContext` |  |

## Accessors

- `public CommandDispatcher<CommandSourceStack> getDispatcher()` 
- `public CommandBuildContext getBuildContext()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterClientCommandsHandler {
    @SubscribeEvent
    public static void onRegisterClientCommands(RegisterClientCommandsEvent event) {
        // Handle event
    }
}
```
